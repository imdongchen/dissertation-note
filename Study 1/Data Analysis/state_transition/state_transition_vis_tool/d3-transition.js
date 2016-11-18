// Chart showing transition between evidence collection, schematization,
// hypothesis generation, and overall coordination
//
function d3Transition() {
  var margin = {top: 10, right: 10, bottom: 10, left: 10}
  var width = 960,
      height = 500

  // hardcode node center
  // var CENTER = [[100, 65], [20, 150], [80, 180], [150, 150], [170, 120]]
  var CENTER = [[50, 50], [150, 50], [50, 150], [150, 150]]

  function exports(selection) {
    // add link arrow
    d3.select('svg')
      .append('svg:defs')
      .append('svg:marker')
      .attr('id', 'end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 6)
      .attr('markerWidth', 5)
      .attr('markerHeight', 3)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('class', 'linkarrow')
      .style('fill', 'black')

    selection.each(function(dd) {
      var container,
          nodeScale, linkScale

      init.apply(this)
      update.apply(this)

      function init() {
        container = d3.select(this).append('g').attr('class', 'd3Transition')
        container.append('g').attr('class', 'nodes')
        container.append('g').attr('class', 'links')
        container.append('g').attr('class', 'label')
      }

      function update() {
        updateLayout()
        updateScale()
        updateNode()
        updateLink()
        updateLabel()
      }

      function updateLayout() {
        container.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        container.select('.label').attr('transform', 'translate(' + width / 2 + ',30)')
      }

      function updateScale() {
        var maxNode = 0
        d3.values(dd.nodes).forEach(function(d) {
          if (maxNode < d.value) maxNode = d.value
        })
        nodeScale = d3.scale.linear()
          .domain([0, maxNode])
          .range([5, 30]) // max radius

        var maxLink = 0
        d3.values(dd.links).forEach(function(d) {
          if (maxLink < d.value) maxLink = d.value
        })
        linkScale = d3.scale.linear()
          .domain([0, maxLink])
          .range([1, 6]) // max radius
      }

      function updateNode() {
        // sort node
        var sortBy = ['network', 'map', 'timeline', 'spreadsheet']
        var node = container.select('.nodes').selectAll('.node')
          .data(d3.values(dd.nodes).sort(function(a, b) {
            return sortBy.indexOf(a.toolType) - sortBy.indexOf(b.toolType)
          }))

        node.exit().remove()

        var nodeEnter = node.enter().append('g').attr('class', 'node')
        nodeEnter.append('circle')
        nodeEnter.append('text')

        node.attr('transform', function(d, i) {
          d.x = CENTER[i][0]
          d.y = CENTER[i][1]
          return 'translate(' + d.x + ', ' + d.y + ')'
        })
        node.select('circle')
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', function(d) {
            return d.r = nodeScale(d.value)
          })
          .style('fill', 'none')
          .style('stroke', 'black')

        node.select('text')
          .attr('x', 0)
          .attr('y', 0)
          .attr('dy', '.35em')
          .attr('text-anchor', 'middle')
          .text(function(d) {
            return d.toolType[0]
          })
      }

      function updateLink() {
        var link = container.select('.links').selectAll('.link')
          .data(d3.values(dd.links))

        link.exit().remove()

        link.enter().append('path').attr('class', 'link')

        link
          .attr('d', function(d, i) {
            var offset = 5
            var sx = 0, tx = 0, sy = 0, ty = 0

            if (d.source.x < d.target.x) {
              sx = d.source.x + d.source.r
              tx = d.target.x - d.target.r
              sy -= offset
              ty -= offset
              if (d.source.y < d.target.y) {
                sy += d.source.y + d.source.r
                ty += d.target.y - d.target.r
                sx += offset
                tx += offset
              } else if (d.source.y > d.target.y) {
                sy += d.source.y - d.source.r
                ty += d.target.y + d.target.r
                sx -= offset
                tx -= offset
              } else {
                sy += d.source.y
                ty += d.target.y
              }
            } else if (d.source.x > d.target.x) {
              sx += d.source.x - d.source.r
              tx += d.target.x + d.target.r
              sy += offset
              ty += offset
              if (d.source.y < d.target.y) {
                sy += d.source.y + d.source.r
                ty += d.target.y - d.target.r
                sx += offset
                tx += offset
              } else if (d.source.y > d.target.y) {
                sy += d.source.y - d.source.r
                ty += d.target.y + d.target.r
                sx -= offset
                tx -= offset
              } else {
                sy += d.source.y
                ty += d.target.y
              }
            } else {
              sx = d.source.x
              tx = d.target.x
              if (d.source.y < d.target.y) {
                sy = d.source.y + d.source.r
                ty = d.target.y - d.target.r
                sx -= offset
                tx -= offset
              } else if (d.source.y > d.target.y) {
                sy = d.source.y - d.source.r
                ty = d.target.y + d.target.r
                sx += offset
                tx += offset
              }
            }

            return 'M'
              + sx + ',' + sy
              + 'L'
              + tx + ',' + ty
          })
          .style('stroke-width', function(d, i) {
            return linkScale(d.value)
          })
          .style('stroke', 'black')
          .style('marker-end', function(d) { return 'url(#end-arrow)'; })


        // TODO: link arrow
      }

      function updateLabel() {
        var label = container.select('.label').selectAll('text')
          .data([dd.group])

        label.exit().remove()

        label.enter().append('text')

        label.attr('x', 0)
          .attr('y', 0)
          .attr('text-anchor', 'middle')
          .text(function(d) { return d })
      }
    })
  }

  exports.width = function(_) {
    if (!arguments.length) return width
    width = _
    return exports
  }

  exports.height = function(_) {
    if (!arguments.length) return height
    height = _
    return exports
  }

  exports.nodeScale = function(_) {
    if (!arguments.length) return nodeScale
    nodeScale = _
    return exports
  }

  exports.linkScale = function(_) {
    if (!arguments.length) return linkScale
    linkScale = _
    return exports
  }

  return exports}
