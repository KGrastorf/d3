//establish initial data
var data = [500, 59, 356, 194, 127, 258, 99, 37, 409];

//enter and append data
d3.select(".bars")
  .selectAll('div')
  .data(data)//data variable from up top
  .enter()
  .append('div')//will append as many divs as indices in array
  .style("height", function(d, i){  //d = data, i = index value
    return ((1/data.length) * 100) - 1 + "vh";
  })
  .style("margin-bottom", "1vh")
  .style("width", function(d, i){
    return (d / d3.max(data)) * 100 + "vw";
  })
  .style("background-color", function(d, i){
    return d3.hsl(Math.random()*360,
  Math.random(), Math.random());
});
//if new data, establish data
var newData = function(){
  d3.select(".bars")
  .selectAll('div')
  .data(data)
  .style("width", function(d, i){
    return 0;
  })

data = [56, 112, 48, 348, 327, 258, 249, 37,109];

//transition data
d3.select('.bars')
.selectAll('div')
.data(data)
.transition()
.duration(3000)
.style("width", function(d, i){
  return (d / d3.max(data)) * 100 + "vw";
});
};
