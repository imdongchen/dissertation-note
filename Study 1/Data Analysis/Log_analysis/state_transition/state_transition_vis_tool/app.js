d3.csv('./logs_clean_sorted.csv', function(error, data) {
  if (error) {
    console.error(error)
    return
  }
  data = adapt(data)

  var width = 200, height = 200

  var transition = d3Transition()
    .width(width)
    .height(height)

  var svgW = 1580, svgH = 1060

  d3.select('#root')
    .attr('width', svgW)
    .attr('height', svgH)
    .selectAll('.transitionContainer')
    .data(d3.values(data))
    .enter()
    .append('g')
    .attr('class', 'transitionContainer')
    .attr('transform', function(d, i) {
      var x = i % 7 * width
      var y = Math.floor(i / 7) * height
      return 'translate(' + x + ', ' + y + ')'
    })
    .call(transition)
})
