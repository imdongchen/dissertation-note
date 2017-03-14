d3.csv('./logs_clean_sorted.csv', function(error, data) {
  if (error) {
    console.error(error)
    return
  }
  data = adapt(data)

  var width = 1280, height = 960

  var bar = d3Bar()
    .width(width)
    .height(height)

  d3.select('#root')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('class', 'barContainer')
    .datum(data)
    .call(bar)
})
