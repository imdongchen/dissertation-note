// adapt data to the format vis accepts
// assume data is sorted by group, user, and time
var PHASE1 = new Date('2015/10/28'),
    PHASE2 = new Date('2015/10/30')

function adapt(data) {
  var res = {}

  var lastRow = null
  var currentAction = null
  data.forEach(function(row) {
    gid = row.group
    uid = row.user
    row.time = new Date(row.time)
    t = row.time
    tool = row.tool

    if (!(gid in res))
      res[gid] = [{}, {}, {}] // three phases

    var group = res[gid]
    if (t < PHASE1) group = group[0]
    else if (t < PHASE2) group = group[1]
    else group = group[2]

    var actionType = getActionType(tool)


    group[uid] = group[uid] || []

    if (lastRow) {
      // if it is not the first row
      if (uid === lastRow.user) {
        var delta = (t - lastRow.time)/1000
        // only count the event if the interval is less than 10m
        if (delta < 600) {
          currentAction.duration += delta
          currentAction.end = t
        }
      }
      if (uid !== lastRow.user) {
        // if user changes
        currentAction = {
          user: uid,
          group: gid,
          start: t,
          duration: 0,
          end: t,
          tool: tool,
          actionType: actionType
        }
        group[uid].push(currentAction)
      } else {
        // if it is the same user
        if (tool === lastRow.tool || (tool.indexOf('table') > -1 && lastRow.tool.indexOf('table') > -1)) {
          // and if he uses the same tool
          // do nothing
        } else {
          // if he changes a tool
          currentAction = {
            user: uid,
            group: gid,
            start: t,
            duration: 0,
            end: t,
            tool: tool,
            actionType: actionType
          }
          group[uid].push(currentAction)
        }
      }
    } else {
      // if it is the first row
      currentAction = {
        user: uid,
        group: gid,
        start: t,
        duration: 0,
        end: t,
        tool: tool,
        actionType: actionType
      }
      group[uid].push(currentAction)
    }
    lastRow = row
  })

  return res
}

function getActionType(tool) {
  var actionType = 'other'

  if (tool === 'document') {
    actionType = 'collection'
  }
  else if (tool === 'network' || tool === 'timeline'
      || tool === 'map' || tool.indexOf('table') > -1) {
    actionType = 'schematization'
  }
  else if (tool === 'notepad') {
    actionType = 'hypothesis'
  } else if (tool === 'message' || tool === 'history') {
    actionType = 'coordination'
  }
  return actionType
}
