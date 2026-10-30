// t04-5-bars.js
const createBarChart = (data) => {
    // Create SVG canvas inside responsive container
    const svg = d3.select(".responsive-svg-container")
        .append("svg")
        .attr("viewBox", "0 0 1200 400") // temporary; will adjust in next exercises
        .style("border", "1px solid black"); // dev-only boundary border

    // Bind data, append rects, add dynamic class, set width and height
    svg
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("class", d => {
            console.log(d); // inspect each row in console
            return `bar bar-${d.count}`;
        })
        .attr("width", d => d.count) // bind numeric column directly to width
        .attr("height", 16); // constant bar height
};