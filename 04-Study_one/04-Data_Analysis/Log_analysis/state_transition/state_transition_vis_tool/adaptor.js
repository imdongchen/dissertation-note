// adapt data to the format vis accepts
// assume data is sorted by group, user, and time

function adapt(data) {
  var res = {}

  var lastRow = null
  var currentState = ''

  data.forEach(function(row) {
    gid = row.group
    uid = row.user
    row.time = new Date(row.time)
    t = row.time
    tool = row.tool

    var toolType = getTool(tool)

    if (!(gid in res))
      res[gid] = {group: gid, nodes: {}, links: {}} // nodes and links

    var group = res[gid]

    // if not first row:
    if (lastRow) {
      //   if same user:
      if (uid === lastRow.user) {
        // add time delta to current state
        var delta = (t - lastRow.time)/1000
        // only count the event if the interval is less than 10m
        if (delta < 600) {
          if (currentState in group.nodes) {
            group.nodes[currentState].value += delta
          } else {
            group.nodes[currentState] = {
              toolType: currentState,
              value: delta
            }
          }
        }

        // if not same state:
        if (toolType !== currentState) {
          // add link number to previous state-current state
          var link = currentState + '-' + toolType
          if (link in group.links) {
            group.links[link].value ++
          } else {
            if (!(toolType in group.nodes)) {
              group.nodes[toolType] = {
                toolType: toolType,
                value: 0
              }
            }
            group.links[link] = {
              source: group.nodes[currentState],
              target: group.nodes[toolType],
              value: 1
            }
          }
          // set current state
          currentState = toolType
        }
      } else { // if not same user:
        // set currentState
        currentState = toolType
      }
    } else { // if first row:
      // set current state
      currentState = toolType
    }

    lastRow = row
  })

  // delete state 'other'
  for (var g in res) {
    delete res[g].nodes['other']
    for (var link in res[g].links) {
      if (link.indexOf('other') > -1) {
        delete res[g].links[link]
      }
    }
  }
  return res
}

function getTool(tool) {
  if (tool.indexOf('table') > -1) return 'spreadsheet'

  if (['network', 'map', 'timeline'].indexOf(tool) > -1)
    return tool

  return 'other'
}
