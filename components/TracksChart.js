import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from "highcharts/modules/exporting";
if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const TracksChart = ({ topTracks }) => {
  const options = {
    chart: {
      backgroundColor: "var(--shadowColorLeft)",
    },
    title: {
      style: {
        color: "white",
      },
      text: `Top ${topTracks.tracks["@attr"].perPage} Tracks in ${topTracks.tracks["@attr"].country}`,
    },
    xAxis: {
      categories: topTracks.tracks.track.map((track) => track.name),
      labels: {
        style: {
          color: "white",
        },
      },
    },
    yAxis: {
      labels: {
        style: {
          color: "white",
        },
      },
      title: {
        text: "Listened",
        style: {
          color: "white",
        },
      },
    },
    series: [
      {
        name: "Listeners",
        type: "column",
        colorByPoint: true,
        data: topTracks.tracks.track.map((listened) =>
          parseInt(listened.listeners)
        ),
        showInLegend: false,
      },
    ],
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
        },
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default TracksChart;
