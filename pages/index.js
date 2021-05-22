import { useState, useEffect } from "react";
import Head from "next/head";
import Form from "../components/Form";
import { useTopTracks } from "../hooks/useTopTracks";
import { useTopArtists } from "../hooks/useTopArtists";
import TracksChart from "../components/TracksChart";
import ArtistsChart from "../components/ArtistsChart";
import HomePageImage from "../components/HomePageImage";
import styles from "../styles/Home.module.css";
import { Notify } from "notiflix";

export default function Home() {
  const [formData, setFormData] = useState({ country: "", number: "" });
  const [displayImage, setDisplayImage] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const [topTracks, setTopTracks] = useState({});
  const [topArtists, setTopArtists] = useState({});

  const { getTopTracks } = useTopTracks(setTopTracks);
  const { getTopArtists } = useTopArtists(setTopArtists);

  useEffect(() => {
    if (topArtists.topartists && topTracks.tracks && submitted) {
      setDisplayImage(false);
    }
    if (submitted && !topArtists.topartists && !topTracks.tracks) {
      Notify.warning(
        "Please enter a country name, as defined by the ISO 3166-1 country names standard",
        { position: "left-bottom" }
      );
    }
  }, [topArtists]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.number > 50)
      return Notify.warning("No more than 50!", { position: "left-bottom" });
    //here we display image again to escape from unmounted component error
    setDisplayImage(true);
    getTopTracks(formData.country, formData.number);
    getTopArtists(formData.country, formData.number);
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Music Stats</title>
        <meta
          name="description"
          content="Find your best tracks and artists according to a country!"
        />
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Head>
      <main className={styles.container}>
        <Form
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
        {displayImage && <HomePageImage />}
        <div className={styles.charts}>
          {displayImage || <TracksChart topTracks={topTracks} />}
          {displayImage || <ArtistsChart topArtists={topArtists} />}
        </div>
      </main>
    </>
  );
}
