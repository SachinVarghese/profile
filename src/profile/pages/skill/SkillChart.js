import * as d3 from "d3";
import { selection, select } from 'd3-selection';
import 'd3-transition';

const SkillChart = function(id, data) {
  var container = document.getElementById(id);
  let svg = d3.select("#" + id);
  let width = container.clientWidth;
  let height = container.clientHeight;
  let centerX = width * 0.5;
  let centerY = height * 0.5;
  let strength = 0.05;
  let scaleColor = d3.scaleOrdinal(["ghostwhite","white","aliceblue","antiquewhite"]);
  let pack = d3
    .pack()
    .size([width, height])
    .padding(1.5);

  const images = require.context(`./img`, true);
  let forceCollide = d3.forceCollide(d => d.r + 1);

  let simulation = d3
    .forceSimulation()
    .force("charge", d3.forceManyBody())
    .force("collide", forceCollide)
    .force("x", d3.forceX(centerX).strength(strength))
    .force("y", d3.forceY(centerY).strength(strength));
  if (
    "matchMedia" in window &&
    window.matchMedia("(max-device-width: 767px)").matches
  ) {
    data = data.filter(el => {
      return el.value >= 50;
    });
  }

  let root = d3.hierarchy({ children: data }).sum(d => d.value);
  let nodes = pack(root)
    .leaves()
    .map(node => {
      const data = node.data;
      return {
        x: centerX + (node.x - centerX) * 3,
        y: centerY + (node.y - centerY) * 3,
        radius: node.r,
        id: data.cat + "." + data.name.replace(/\s/g, "-"),
        cat: data.cat,
        name: data.name,
        value: data.value,
        icon: data.icon,
        url: data.url
      };
    });

  simulation.nodes(nodes).on("tick", function() {
    node
      .attr("transform", d => `translate(${d.x},${d.y})`)
      .select("circle")
      .attr("r", d => d.r);
  });
  let node = svg
    .selectAll(".node")
    .data(nodes)
    .enter()
    .append("g")
    .attr("class", "node")
    .call(
      d3
        .drag()
        .on("start", d => {
          if (!d3.event.active) simulation.alphaTarget(0.2).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on("drag", d => {
          d.fx = d3.event.x;
          d.fy = d3.event.y;
        })
        .on("end", d => {
          if (!d3.event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        })
    );

  node
    .append("circle")
    .attr("id", d => d.id)
    .attr("r", 0)
    .style("fill", d => scaleColor(d.cat))
    .transition()
    .duration(2000)
    .ease(d3.easeElasticOut)
    .tween("circleIn", d => {
      let i = d3.interpolateNumber(0, d.radius);
      return t => {
        d.r = i(t);
        simulation.force("collide", forceCollide);
      };
    });

  node
    .filter(d => !String(d.icon).includes("./"))
    .append("text")
    .attr("clip-path", d => `url(#clip-${d.id})`)
    .selectAll("tspan")
    .data(d => d.icon[0])
    .enter()
    .append("tspan")
    .attr("x", -5)
    .attr("y", (d, i, nodes) => 13 + (i - nodes.length / 2 - 0.5) * 10)
    .attr("fill", "gray")
    .text(name => name);

  node
    .filter(d => String(d.icon).includes("./"))
    .append("image")
    .attr("clip-path", d => `url(#clip-${d.id})`)
    .attr("xlink:href", d => images(`${d.icon}`).default)
    .attr("x", d => -d.radius * 0.7)
    .attr("y", d => -d.radius * 0.7)
    .attr("height", d => d.radius * 2 * 0.7)
    .attr("width", d => d.radius * 2 * 0.7);

  node.append("title").text(d => d.name);
  node.on("dblclick", currentNode => {
    d3.event.stopPropagation();
    window.open(currentNode.url, "_blank");
  });
};

export default SkillChart;
