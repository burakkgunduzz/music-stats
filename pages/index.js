import { useState } from "react";
import Head from "next/head";
import Form from "../components/Form";
import { useTopTracks } from "../hooks/useTopTracks";
import { useTopArtists } from "../hooks/useTopArtists";
import { useArtistDetail } from "../hooks/useArtistDetail";

export default function Home() {
  const [formData, setFormData] = useState({ country: "", number: "" });

  const [topTracks, setTopTracks] = useState({});
  const [topArtists, setTopArtists] = useState({});
  const [artistDetail, setArtistDetail] = useState({});

  const { getTopTracks } = useTopTracks(setTopTracks);
  const { getTopArtists } = useTopArtists(setTopArtists);
  const { getArtistInfo } = useArtistDetail(setArtistDetail);

  const handleSubmit = (e) => {
    e.preventDefault();
    getTopTracks("Spain", "5");
    getArtistInfo("Queen");
    getTopArtists("Turkey", "10");
  };

  return (
    <div className="container">
      <Head>
        <title>Music Stats</title>
        <meta
          name="description"
          content="Find your best tracks and artists according to country!"
        />
      </Head>
      <main>
        <h1>MUSIC STATS</h1>
        <Form
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      </main>
    </div>
  );
}
