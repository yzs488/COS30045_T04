// Style the first h1 element
d3.select("h1")
    .style("color", "green");

// Append paragraph to content div
d3.select("div")
    .append("p")
    .text("Purchasing a low energy consumption TV will help with your energy bills!");

// Append an empty rect
d3.select("svg")
    .append("rect");

// Append a styled rect with attributes
d3.select("svg")
    .append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 100)
    .attr("height", 30)
    .style("fill", "green");