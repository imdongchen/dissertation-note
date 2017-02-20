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
          scale,
          phaseWidth = []


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
        var maxPhase = 0,
            maxPhase1 = 0,
            maxPhase2 = 0,
            maxPhase3 = 0

        d3.values(dd).forEach(function(d) {
          // a group
          d.forEach(function(d, i) {
            // a phase
            d3.values(d).forEach(function(d) {
              var phaseDuration = 0
              d.forEach(function(d) {
                phaseDuration += d.duration || 0
              })
              if (i === 0) {
                if (maxPhase1 < phaseDuration)
                  maxPhase1 = phaseDuration
              }
              if (i === 1) {
                if (maxPhase2 < phaseDuration)
                  maxPhase2 = phaseDuration
              }
              if (i === 2) {
                if (maxPhase3 < phaseDuration)
                  maxPhase3 = phaseDuration
              }
            })
          })
        })
        maxPhase = d3.max([maxPhase1, maxPhase2, maxPhase3])
        scale = d3.scale.linear()
          .domain([0, maxPhase1 + maxPhase2 + maxPhase3])
          .range([0, (width - margin.left - margin.right - 30)])

        phaseWidth[0] = 0
        phaseWidth[1] = (width - margin.left - margin.right) / (maxPhase1 + maxPhase2 + maxPhase3) * maxPhase1
        phaseWidth[2] = (width - margin.left - margin.right) / (maxPhase1 + maxPhase2 + maxPhase3) * (maxPhase1 + maxPhase2)
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
            .call(_updateBarByGroupPhaseUser)
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
            .call(_updateBar)
        })
      }

      // draw bar in a group in a phase
      function _updateBar(sel) {
        sel.each(function(dd) {
          var bar = d3.select(this).selectAll('.bar')
            .data(dd)

          // exit
          bar.exit().remove()

          // enter
          bar.enter().append('rect').attr('class', 'bar')

          // update
          var sumX = 0
          bar
            .attr('x', function(d) {
              var x = sumX
              sumX += scale(d.duration)
              return x
            })
            .attr('y', 0)
            .attr('width', function(d) {
              return scale(d.duration)
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
