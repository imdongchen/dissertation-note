var PHASE1 = new Date('2015-10-27 11:10:00');
var PHASE2 = new Date('2015-10-29 11:10:00');
var PHASE3 = new Date('2015-10-30 00:00:00');
var PHASE3_END = new Date('2015-11-01 23:59:00');

function d3Bar() {
  var margin = {top: 5, right: 70, bottom: 50, left: 50}
  var barHeight = 5,
      trackHeight = 24,
      width,
      height

  var color = d3.scale.ordinal()
    .domain(['collection', 'schematization', 'hypothesis', 'coordination', 'other'])
    .range(['orange', 'red', 'purple', 'green', '#aaa'])

  // data structure
  // [ // groups
  //   [ // phases
  //     [ // events
  //       {
  //         "id": 1,
  //         "tool": "document"
  //       }
  //     ]
  //   ]
  // ]
  function bar(selection) {
    selection.each(function(dd) {
      var container,
          // FIXME: set width and height value
          scale1,
          scale2,
          scale3,
          phaseWidth = [];

      init.apply(this)
      update.apply(this)

      function init() {
        container = d3.select(this).append('g').attr('class', 'd3Bar')
        container.append('g').attr('class', 'chart') // the main chart
        container.append('g').attr('class', 'track') // each team is a track, including team id label
        container.append('g').attr('class', 'divider') // divider for phases, e.g. class1, class2, deadline
        container.append('g').attr('class', 'phase') // label for phases in the bottom
        container.append('g').attr('class', 'legend')
      }

      function update() {
        updateLayout()
        updateScale()
        updateChart()
        updateTrack()
        updateDivider()
        updatePhase()
        updateLegend()
      }

      function updateLayout() {
        container.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        container.select('.phase').attr('transform', 'translate(0,' + trackHeight * d3.keys(dd).length + ')')
      }

      function updateScale() {
        var phase1Duration = PHASE2 - PHASE1; // 75 min a class
        var phase2Duration = PHASE3 - PHASE2;
        var phase3Duration = PHASE3_END - PHASE3;
        var totalDuration = phase1Duration + phase2Duration + phase3Duration;
        var innerW = width - margin.left - margin.right - 30;
        phaseWidth[0] = innerW / totalDuration * phase1Duration;
        phaseWidth[1] = innerW / totalDuration * phase2Duration;
        phaseWidth[2] = innerW / totalDuration * phase3Duration;
        scale1 = d3.scale.linear()
          .domain([0, phase1Duration])
          .range([0, phaseWidth[0]])
        scale2 = d3.time.scale()
          .domain([0, phase2Duration])
          .range([0, phaseWidth[1]])
        scale3 = d3.time.scale()
          .domain([0, phase3Duration])
          .range([0, phaseWidth[2]])
      }

      function updateChart() {
        var barByGroup = container.select('.chart').selectAll('.barByGroup')
          .data(d3.values(dd))

        // exit
        barByGroup.exit().remove()

        // enter
        barByGroup.enter()
          .append('g')
          .attr('class', 'barByGroup')

        // update
        barByGroup
          .attr('transform', function(d, i) {
            return 'translate(0, ' + trackHeight * i + ')'
          })
          .call(_updateBarByGroupPhase)
      }

      function _updateBarByGroupPhase(sel) {
        sel.each(function(dd) {
          var barByGroupPhase = d3.select(this).selectAll('.barByGroupPhase')
            .data(dd)

          // exit
          barByGroupPhase.exit().remove()

          // enter
          barByGroupPhase.enter().append('g').attr('class', 'barByGroupPhase')

          // update
          barByGroupPhase
            .attr('transform', function(d, i) {
              // evenly divide three phases
              // TODO: chage phase width by number of actions?
              return 'translate(' + phaseWidth[i] + ',0)'
            })
            .call(_updateBarByGroupPhaseUser);
        })
      }

      function _updateBarByGroupPhaseUser(sel) {
        sel.each(function(dd) {
          var barByGroupPhaseUser = d3.select(this).selectAll('.barByGroupPhaseUser')
            .data(d3.values(dd))

          // exit
          barByGroupPhaseUser.exit().remove()

          // enter
          barByGroupPhaseUser.enter().append('g').attr('class', 'barByGroupPhaseUser')

          // update
          barByGroupPhaseUser.attr('transform', function(d, i) {
            return 'translate(0,' + i * barHeight + ')'
          })
            .call(_updateBar, phase)
        })
      }

      // draw bar in a group in a phase
      function _updateBar(sel, phase) {
        sel.each(function(dd) {
          var bar = d3.select(this).selectAll('.bar')
            .data(dd)

          // exit
          bar.exit().remove()

          // enter
          bar.enter().append('rect').attr('class', 'bar')

          // update
          bar
            .attr('x', function(d) {
              switch(phase) {
                case 0:
                  return scale1(d.start - PHASE1)
                case 1:
                  return scale2(d.start - PHASE2)
                case 2:
                  return scale3(d.start - PHASE3)
              }
            })
            .attr('y', 0)
            .attr('width', function(d) {
              switch(phase) {
                case 0:
                  return scale1(d.duration)
                case 1:
                  return scale2(d.duration)
                case 2:
                  return scale3(d.duration)
              }
            })
            .attr('height', barHeight)
            .style('fill', function(d) {
              return color(d.actionType)
            })

        })
      }

      function updateTrack() {
        var track = container.select('.track').selectAll('text')
          .data(d3.keys(dd))

        // exit
        track.exit().remove()

        // enter
        track.enter().append('text')

        // update
        track
          .attr('x', 0)
          .attr('y', function(d, i) {
            return i * trackHeight + barHeight
          })
          .attr('dx', -10)
          .attr('dy', '.35em')
          .attr('text-anchor', 'end')
          .text(function(d) {
            return d
          })
          .style('fill', 'black')
      }

      function updateDivider() {
        var divider = container.select('.divider').selectAll('path')
          .data(['phase1', 'phase2', 'phase3'])

        divider.exit().remove()

        divider.enter().append('path')

        divider.attr('d', function(d, i) {
          var x = phaseWidth[i]
          return 'M' + x + ',0L' + x + ',' + d3.keys(dd).length * trackHeight
        })
        .attr('dash-array', '5,5')
        .style('stroke', '#aaa')
        .style('stroke-width', 1)


      }

      function updatePhase() {
        var phase = container.select('.phase').selectAll('text')
          .data(phaseWidth)

        phase.exit().remove()

        phase.enter().append('text')
          .text(function(d, i) {
            switch (i) {
              case 0: return 'Class One'
              case 1: return 'Class Two'
              case 2: return 'Before deadline'
            }
          })
          .attr('y', 0)
          .attr('x', function(d) {
            return d
          })
          .attr('dy', 15)
          .style('fill', '#1d1d1d')

      }

      function updateLegend() {
        var legend = container.select('.legend').selectAll('.legendItem')
          .data(color.domain())

        legend.exit().remove()

        var legendEnter = legend.enter().append('g').attr('class', 'legendItem')
          .attr('transform', 'translate(' + (width - margin.left - margin.right) + ',0)')
        legendEnter.append('text')
        legendEnter.append('rect')

        legend.select('text')
          .attr('x', 50)
          .attr('y', function(d, i) {
            return i * 20
          })
          .attr('dy', '.75em')
          .attr('text-anchor', 'end')
          .text(function(d) {
            return d
          })

        legend.select('rect')
          .attr('x', 60)
          .attr('y', function(d, i) {
            return i * 20
          })
          .attr('width', '1em')
          .attr('height', '1em')
          .style('fill', function(d) {
            return color(d)
          })
      }
    })
  }

  bar.width = function(_) {
    if (!arguments.length) return width
    width = _
    return bar
  }

  bar.height = function(_) {
    if (!arguments.length) return height
    height = _
    return bar
  }

  return bar
}
