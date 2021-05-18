import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from "highcharts/modules/exporting";
if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const TracksChart = ({ topTracks }) => {
  const options = {
    title: {
      text: `Top ${topTracks.tracks["@attr"].perPage} Tracks in ${topTracks.tracks["@attr"].country}`,
    },
    xAxis: {
      categories: topTracks.tracks.track.map((track) => track.name),
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

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TracksChart;
