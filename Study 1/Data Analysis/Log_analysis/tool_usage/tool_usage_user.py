'''
calculate network and document usage time
input: cleaned log file
output: network and document time usage in three phases respectively, each group as a file
'''
import csv
import datetime
import operator

# store the result
# group_id:
#    user_id:
#       tool: seconds
groups = {}

with open('../logs_clean.csv', 'rU') as f:
	r = csv.reader(f, delimiter=',')
	# sort file by group id, user id, and time
	sr = sorted(r, key=operator.itemgetter(0, 1, 2))
	last_row = None
	for row in sr:
		gid = row[0]
		uid = row[1]
		t = datetime.datetime.strptime(row[2], '%m/%d/%Y %H:%M:%S')
		tool = row[5]

		if gid not in groups:
			groups[gid] = {}

		users = groups[gid]
		if last_row:
			if uid != last_row[1]:
				# user changed,
				users[uid] = {}
				users[uid][tool] = 0
			else:
				# if the user of this row is the same as last row
				# calculate tool usage
				last_t = datetime.datetime.strptime(last_row[2], '%m/%d/%Y %H:%M:%S')
				tdelta = t - last_t
				if last_row[5] not in users[uid]:
					users[uid][last_row[5]] = 0
				if tdelta.seconds < 600: # if the interval is greater than 10m, discard it
					users[uid][last_row[5]] += tdelta.seconds

		else:
			users[uid] = {}
			users[uid][tool] = 0
		last_row = row

tools = ['document', 'network', 'table', 'timeline', 'map', 'notepad', 'message', 'history']

# store time usage of each tool by user
tools_usage = {}
# initialize
for g in groups:
	for u in groups[g]:
		tools_usage[u] = {}
		for t in tools:
			tools_usage[u][t] = 0

# write groups to file
with open('tool_usage_user.csv', 'wb') as f:
	w = csv.writer(f, delimiter=',')
	for g in groups:
		for u in groups[g]:
			for t in tools_usage[u]:
				try:
					tools_usage[u][t] += groups[g][u][t]
				except:
					# if the user does not use this tools
					# groups[g][u] will not have this key
					# thus causing an error
					# we do not need to do anything with the error
					pass

	for u in tools_usage:
		row = [u]
		for t in tools_usage[u]:
			row.append(tools_usage[u][t])
		# print row
		w.writerow(row)

	# write column name
	row = ['user']
	for g in tools_usage:
		for t in tools_usage[g]:
			row.append(t)
		break
	w.writerow(row)
