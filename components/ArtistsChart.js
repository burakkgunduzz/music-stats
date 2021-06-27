import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useRouter } from "next/router";

const ArtistsChart = ({ topArtists }) => {
  const router = useRouter();

  const redirectToArtisPage = (artist) => {
    router.push(`./${artist}`);
  };

  const options = {
    chart: {
      backgroundColor: "var(--shadowColorLeft)",
    },
    title: {
      style: {
        color: "white",
      },
      text: `Top ${topArtists.topartists["@attr"].perPage} Artists in ${topArtists.topartists["@attr"].country}`,
    },
    xAxis: {
      categories: topArtists.topartists.artist.map((artist) => artist.name),
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
        data: topArtists.topartists.artist.map((listener) =>
          parseInt(listener.listeners)
        ),
        showInLegend: false,
      },
    ],
    plotOptions: {
      series: {
        cursor: "pointer",
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
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ArtistsChart;
