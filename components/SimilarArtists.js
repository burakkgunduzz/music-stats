import SimilarArtist from "./SimilarArtist";
import { useEffect, useState } from "react";
import styles from "../styles/SimilarArtists.module.css";
import { getArtistPhoto } from "../utilies/getArtistPhoto";

const SimilarArtists = ({ similarArtists }) => {
  const [similarArtistsData, setSimilarArtistsData] = useState([]);
  const [similarArtistsPhotos, setSimilarArtistsPhotos] = useState([]);

  useEffect(() => {
    similarArtists.map((artist) =>
      getArtistPhoto(artist.name).then((data) =>
        setSimilarArtistsData((prevVal) => [...prevVal, data])
      )
    );
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
