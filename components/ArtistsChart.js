import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useRouter } from "next/router";

const ArtistsChart = ({ topArtists }) => {
  const router = useRouter();

  const redirectToArtisPage = (artist) => {
    router.push(`./${artist}`);
  };

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
              redirectToArtisPage(e.point.category);
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
