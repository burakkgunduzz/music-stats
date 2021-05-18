import { useState } from "react";
import Head from "next/head";
import Form from "../components/Form";
import { useTopTracks } from "../hooks/useTopTracks";
import { useTopArtists } from "../hooks/useTopArtists";
import TracksChart from "../components/TracksChart";
import ArtistsChart from "../components/ArtistsChart";
import HomePageImage from "../components/HomePageImage";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [formData, setFormData] = useState({ country: "", number: "" });
  const [displayImage, setDisplayImage] = useState(true);
  const [topTracks, setTopTracks] = useState({});
  const [topArtists, setTopArtists] = useState({});

  const { getTopTracks } = useTopTracks(setTopTracks);
  const { getTopArtists } = useTopArtists(setTopArtists);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayImage(false);
    getTopTracks(formData.country, formData.number);
    getTopArtists(formData.country, formData.number);
  };

  return (
    <>
      <Head>
        <title>Music Stats</title>
        <meta
          name="description"
          content="Find your best tracks and artists according to a country!"
        />
      </Head>
      <main className={styles.container}>
        <Form
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
        {displayImage && <HomePageImage />}
        <div className={styles.charts}>
          {topTracks.tracks && <TracksChart topTracks={topTracks} />}
          {topArtists.topartists && <ArtistsChart topArtists={topArtists} />}
        </div>
      </main>
    </>
  );
}
