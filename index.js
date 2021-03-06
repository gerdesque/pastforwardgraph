var width = 1920,
  height = 1000;
var color = d3.scale.category20();

var force = d3.layout.force()
  .size([width, height])
  .linkDistance(100)
  .charge(-2000)
  .start();

var svg = d3.select("#main-content").append("svg")
.attr("width", width)
.attr("height", height)

d3.json("films.json", function (error, graph) {

  var nodes = {};
  var links = graph.arcs;

  // Compute the distinct nodes from the links.
  links.forEach(function (link) {
    link.source = nodes[link.source] || (nodes[link.source] = {
      name: link.source
    });
    link.target = nodes[link.target] || (nodes[link.target] = {
      name: link.target
    });

  });
  force
    .nodes(d3.values(nodes))
    .links(links)
    .on("tick", tick)
    .start();

  var drag = force.drag().on("dragstart", dragstart);

  svg.append("defs").selectAll("marker")
  .data(["end"])
  .enter().append("marker")
    .attr("id", "arrowhead")
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 15)
    .attr("refY", -1.5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
  .append("path")
    .attr("d", "M0,-5L10,0L0,5");

  var path = svg.append("g").selectAll("path")
    .data(force.links())
    .enter().append("path")
    .attr("class", function (d) {
      return "link " + d.type;
    })
    .style("stroke-width", 5)
    .attr("marker-end", "url(#arrowhead)");

  var circle = svg.append("g").selectAll("circle")
    .data(force.nodes())
    .enter().append("circle")
    .attr("r", 25)
    .call(force.drag);

  var text = svg.append("g").selectAll("text")
    .data(force.nodes())
    .enter().append("text")
    .attr("x", 25)
    .attr("y", ".31em")
    .text(function (d) {
      return d.name;
    });

  // Use elliptical arc path segments to doubly-encode directionality.
  function tick() {
    path.attr("d", linkArc);
    circle.attr("transform", transform);
    text.attr("transform", transform);
  }

  function linkArc(d) {
    var dx = d.target.x - d.source.x,
      dy = d.target.y - d.source.y,
      dr = Math.sqrt(dx * dx + dy * dy);
    return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
  }

  function transform(d) {
    return "translate(" + d.x + "," + d.y + ")";
  }

  function dragstart(d) {
    d3.select(this).classed("fixed", d.fixed = true);
  }

});
