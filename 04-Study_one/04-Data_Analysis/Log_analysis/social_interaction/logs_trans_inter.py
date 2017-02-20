import csv
import datetime
import json

wf = open('logs_trans_i.csv', 'wb')
w = csv.writer(wf, delimiter = '\t')

with open('logs.csv', 'rU') as f:
	r = csv.reader(f, dialect=csv.excel_tab, delimiter = ',')
	r.next()
	for row in r:
		id = row[0]
		g_id = row[3]
		t = datetime.datetime.strptime(row[5], '%m/%d/%Y-%H:%M:%S')
		t = t.strftime('%m/%d/%Y %H:%M:%S')
		u_id = row[6]
		oper = row[9]
		item = row[10]
		data = row[12]
		data = json.loads(data)

		# skip these operations
		if oper in ['read', 'defiltered', 'focused', 'logout']:
			continue

		# distinguish relationship operations and entity operations
		if item == 'relationship' or item == 'relationships':
			oper += '_r'
		# distinguish annotation operations and entity operations
		if item == 'annotation' or item == 'annotations':
			oper += '_a'

		# define an interaction if the item under operation is created by someone else
		inter = 0 # 0 if not an interaction, otherwise 1
		if 'meta' in data:
			meta = data['meta']
			if 'created_by' in data['meta']:
				cb = meta['created_by']
				if not isinstance(cb, dict):
					if int(cb) != int(u_id):
						inter = 1
				else:
					if 'id' in cb:
						id = cb['id']
						if int(id) != int(u_id):
							inter = 1

		# or an interaction could be if the item under operation is a
		# relationship whose source or target was created by someone else
		if item == 'relationship':
			if 'primary' in data:
				p = data['primary']
				if 'source' in p:
					e = p['source'][0]
					if 'created_by' in e:
						id = e['created_by']
						if id != u_id:
							inter = 1
				if 'target' in p:
					e = p['target'][0]
					if 'created_by' in e:
						id = e['created_by']
						if id != u_id:
							inter = 1

		if inter == 1:
			oper += '_i'


		w.writerow([g_id, oper, t, '', 'u_id="%s"; g_id="%s"; item="%s"; data="%s"; inter="%s"' % (u_id, g_id, item, data, inter)])

wf.close()

