import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ArtistsChart = ({ topArtists }) => {
  const options = {
    title: {
      text: `Top ${topArtists.topartists["@attr"].perPage} Artists in ${topArtists.topartists["@attr"].country}`,
    },
    xAxis: {
      categories: topArtists.topartists.artist.map((artist) => artist.name),
    },
    series: [
      {
        name: "Listeners",
        type: "column",
        colorByPoint: true,
        data: topArtists.topartists.artist.map((listener) =>
          parseInt(listener.listeners)
        ),
        showInLegend: false,
      },
    ],
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
        },
        point: {
          events: {
            click(e) {
              console.log(e.point.category);
            },
          },
        },
      },
    },
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ArtistsChart;
