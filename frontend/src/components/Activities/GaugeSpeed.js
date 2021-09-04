import React from "react";
import ChartistGraph from "react-chartist";
import "./Gauge.css";

const GaugeSpeed = () => {
  const data = {
    series: [6, 6, 4, 4],
  };

  const options = {
    donut: true,
    donutWidth: 17,
    startAngle: 270,
    total: 40,
    showLabel: false,
    height: "13rem",
  };

  const type = "Pie";
  return (
    <div className="mt-20">
      <ChartistGraph data={data} options={options} type={type} />
      <p className="text-center text-lg font-semibold used-space -mt-36">20 GB</p>
      <div className="pt-16">
        <p className="text-center text-sm font-semibold total-space">
          Used Out of 40 GB
        </p>
      </div>
      <hr className="mx-8 mt-10" />
    </div>
  );
};

export default GaugeSpeed;
