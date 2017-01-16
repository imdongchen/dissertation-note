# stat of entity access
# the output is 
# entity_id , accessed , modified , consumed 
# meaning the number of members who have accessed, modified, or consumed
# the entity
# 'consume' means refer, filter, or create/update/delete/restore relationship that involves the entity

import csv
from dateutil import parser
import json
import operator

mypath = './entity_log_by_group' # entity log files
prefix = './entity_access_stat/entity_access_stat_' # output files
entity_file = '../entities.csv'


# get all entities
entities = {}
with open(entity_file, 'rU') as f:
	r = csv.reader(f, delimiter = ',')
	for row in r:
		entities[row[0]] = row

# get entity log files 
import glob
from os.path import join
entfiles = glob.glob(join(mypath, '*.csv'))

from sets import Set

for entfile in entfiles:
	g_id = entfile.split('.')[-2].split('_')[-1]

	# write into a new file 
	fname = prefix + g_id + '.csv'
	wf = open(fname, 'wb')
	w = csv.writer(wf, delimiter=',')
	w.writerow(['entity_id', 'accessed', 'modified', 'consumed', 'created_at', 'created_by', 'accessed_in(s)'])

	accessed = Set()
	modified = Set()
	consumed = Set()
	created_at = ''
	created_by = ''
	first_access = None
	second_access = None
	between_access = None

	with open(entfile, 'rU') as f:
		r = csv.reader(f, delimiter = '\t')
		# sort by entity id and time
		sortedlist = sorted(r, key=operator.itemgetter(0, 2))

		last_eid = ''

		for row in sortedlist:
			eid = row[0]
			uid = row[1]
			time = parser.parse(row[2])
			data = row[4]
			data_dict = {}
			print 'read entity: ', eid, ' at ', row[2]
			# data is key-value pairs, delimited by ';'
			for d in data.split(';'):
				i = d.split('=')
				if len(i) == 2:
					data_dict[i[0].strip()] = i[1].replace('"', '')

			if eid != last_eid: 
				# if entity changes, write a row
				if last_eid:
					try:
						created_at = entities[last_eid][9] # create time column
						created_by = entities[last_eid][8] # created_by column
					except:
						pass
					w.writerow([last_eid, len(accessed), len(modified), len(consumed), created_at, created_by, between_access])
				accessed.clear()
				modified.clear()
				consumed.clear()
				# when first read an entity, record the time
				first_access = time
				second_access = None
				between_access = None
				last_eid = eid

			oper = data_dict['operation']
			accessed.add(uid)
			if oper in ['created', 'updated', 'deleted', 'restored']:
				modified.add(uid)
			elif oper in ['filtered', 'referred'] or oper[:3] == 'rel':
				consumed.add(uid)
			# if second time read an entity, record the time
			if first_access and second_access == None and len(accessed) == 2:
				second_access = time
				between_access = (second_access - first_access).total_seconds()


		# write the last row
		try:
			created_at = entities[last_eid][9] # create time column
			created_by = entities[last_eid][8] # created_by column
		except:
			pass
		w.writerow([eid, len(accessed), len(modified), len(consumed), created_at, created_by, between_access])

	wf.close()
