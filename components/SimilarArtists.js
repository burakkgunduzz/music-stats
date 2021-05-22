import SimilarArtist from "./SimilarArtist";
import { useEffect, useState } from "react";
import styles from "../styles/SimilarArtists.module.css";

const SimilarArtists = ({ similarArtists }) => {
  const [similarArtistsData, setSimilarArtistsData] = useState([]);
  const [similarArtistsPhotos, setSimilarArtistsPhotos] = useState([]);

  useEffect(() => {
    const similarArtistNames = similarArtists.map((artist) => artist.name);
    fetch(
      encodeURI(
        `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${similarArtistNames[0]}`
      )
    )
      .then((res) => res.json())
      .then((data) => setSimilarArtistsData((prevVal) => [...prevVal, data]));

    fetch(
      encodeURI(
        `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${similarArtistNames[1]}`
      )
    )
      .then((res) => res.json())
      .then((data) => setSimilarArtistsData((prevVal) => [...prevVal, data]));

    fetch(
      encodeURI(
        `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${similarArtistNames[2]}`
      )
    )
      .then((res) => res.json())
      .then((data) => setSimilarArtistsData((prevVal) => [...prevVal, data]));

    fetch(
      encodeURI(
        `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${similarArtistNames[3]}`
      )
    )
      .then((res) => res.json())
      .then((data) => setSimilarArtistsData((prevVal) => [...prevVal, data]));

    fetch(
      encodeURI(
        `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${similarArtistNames[4]}`
      )
    )
      .then((res) => res.json())
      .then((data) => setSimilarArtistsData((prevVal) => [...prevVal, data]));
  }, []);

  useEffect(() => {
    const simArtistsNameAndUrl = similarArtistsData?.map((artist) => {
      try {
        return {
          photoUrl: artist.artists[0].strArtistThumb,
          artistName: artist.artists[0].strArtist,
        };
      } catch {
        return {
          photoUrl: " ",
          artistName: " ",
        };
      }
    });
    setSimilarArtistsPhotos(simArtistsNameAndUrl);
  }, [similarArtistsData]);

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>
        like this genre? check out similar artists...
      </h3>
      <div className={styles.similarArtistsContainer}>
        {similarArtists.map((artist) => {
          return (
            <SimilarArtist
              key={artist.name}
              artist={artist}
              photoUrl={similarArtistsPhotos?.map(
                (item) => item.artistName === artist.name && item.photoUrl
              )}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SimilarArtists;
