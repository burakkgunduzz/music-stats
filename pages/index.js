import { useState } from "react";
import Head from "next/head";
import Form from "../components/Form";
import { useTopTracks } from "../hooks/useTopTracks";
import { useTopArtists } from "../hooks/useTopArtists";
import TracksChart from "../components/TracksChart";
import ArtistsChart from "../components/ArtistsChart";

export default function Home() {
  const [formData, setFormData] = useState({ country: "", number: "" });

  const [topTracks, setTopTracks] = useState({});
  const [topArtists, setTopArtists] = useState({});

  const { getTopTracks } = useTopTracks(setTopTracks);
  const { getTopArtists } = useTopArtists(setTopArtists);

  const handleSubmit = (e) => {
    e.preventDefault();
    getTopTracks(formData.country, formData.number);
    getTopArtists(formData.country, formData.number);
  };

  return (
    <div className="container">
      <Head>
        <title>Music Stats</title>
        <meta
          name="description"
          content="Find your best tracks and artists according to a country!"
        />
      </Head>
      <main>
        <h1>MUSIC STATS</h1>
        <Form
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
        {topTracks.tracks && <TracksChart topTracks={topTracks} />}
        {topArtists.topartists && <ArtistsChart topArtists={topArtists} />}
      </main>
    </div>
  );
}
