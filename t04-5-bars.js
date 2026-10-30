// t04-5-bars.js

const createBarChart = (data) => {
    // --- Step 1: SVG internal and displayed sizes ---
    const viewW = 500; // logical width available for the chart
    const viewH = 1600; // logical height available for all bars

    const displayW = 640; // visible width of the SVG
    const displayH = 420; // visible height of the SVG

    const svg = d3.select(".responsive-svg-container")
        .append("svg")
        .attr("viewBox", `0 0 ${viewW} ${viewH}`)
        .attr("width", displayW)
        .attr("height", displayH)
        .style("border", "1px solid black");

    // --- Step 2: Linear X Scale (for widths) ---
    const xMax = d3.max(data, d => d.count);
    
    const xScale = d3.scaleLinear()
        .domain([0, xMax]) // input: data values from 0 to highest count
        .range([0, viewW]); // output: pixel positions from 0 to SVG logical width

    // --- Step 3: Band Y Scale (for positioning and spacing) ---
    const yScale = d3.scaleBand()
        .domain(data.map(d => d.brand)) // extract brand names as categories
        .range([0, viewH]) // distribute from top to bottom
        .paddingInner(0.2) // space between neighbouring bars
        .paddingOuter(0.1); // space before first and after last bar

    // --- Step 4: Draw Bars ---
    svg.selectAll("rect")
        .data(data)
        .join("rect")
        .attr("class", d => `bar bar-${d.count}`)
        .attr("x", 0) // start every bar from the left edge
        .attr("y", d => yScale(d.brand)) // vertical position according to brand
        .attr("width", d => xScale(d.count)) // scaled bar width
        .attr("height", yScale.bandwidth()) // height calculated by band scale
        .attr("fill", "steelblue"); // colour of the bars
};