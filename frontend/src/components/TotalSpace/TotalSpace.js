import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function deg2rad(deg) {
    return (deg * Math.PI) / 180;
}  

export default function TotalSpace(props) {
  const config = {
    minValue: 0,
    maxValue: 10,
    maxAngle: 90,
    minAngle: -90,
    ringInset: 20,
    ringWidth: 50,
    guageSectionColors: ["#5388E4", "#FEA162", "#00B87C", "#BBD8FD"],
    cornerRadius: 8,
    tickData: ["0", "0.3", "0.66", "0.8"]
  };

  const guage = useRef(null);
  const r = 300;
  const range = config.maxAngle - config.minAngle;

  const arc = d3
    .arc()
    .innerRadius(r - config.ringWidth - config.ringInset)
    .outerRadius(r - config.ringInset)
    .startAngle(function (d, i) {
      var ratio = d;
      return deg2rad(config.minAngle + ratio * range);
    })
    .endAngle(function (d, i) {
      var ratio = config.tickData[i + 1] || 1;
      return deg2rad(config.minAngle + ratio * range);
    });

  const scale = d3
    .scaleLinear()
    .range([0, 1])
    .domain([config.minValue, config.maxValue]);

  scale.ticks(config.majorTicks);

  useEffect(() => {
    const svg = d3
      .select(guage.current)
      .html(null)
      .attr("class", "gauge")
      .attr("width", props.width)
      .attr("height", props.height)
      .attr("viewBox", "0, 0, 600, 300");

    const arcs = svg
      .append("g")
      .attr("class", "arc")
      .attr("transform", `translate(${r}, 300)`);

    const text2 = svg
      .append("g")
      .attr("transform", `translate(${r}, 270)`)
      .append("text")
      .attr("text-anchor", "middle")
      .attr("fill", "#4A4A4A")
      .attr("stroke", "#4A4A4A")
      .style("font-size", "28px");

    text2
      .append("tspan")
      .attr("y", "0")
      .text((d) => "20 GB");

    arcs
      .selectAll("path")
      .data(config.tickData)
      .enter()
      .append("path")
      .attr("fill", function (d, i) {
        return config.guageSectionColors[i];
      })
      .attr("d", arc);
  });

  return (
    <div id="total-space">
      <svg ref={guage}></svg>
      <p style={{ fontSize: "21px", color: "#C4C4C4" }}>Used Out of 40 GB</p>
    </div>
  );
}