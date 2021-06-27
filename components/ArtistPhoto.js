import { useState, useEffect } from "react";
import DefaultImage from "../public/images/emojisad.svg";
import styles from "../styles/ArtistPhoto.module.css";

const ArtistPhoto = ({ artistName }) => {
  const [artistPhotoData, setArtistPhotoData] = useState("");
  const [artistPhotoUrl, setArtistPhotoUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artistName}`)
      .then((res) => res.json())
      .then((data) => setArtistPhotoData(data));
  }, []);

  useEffect(() => {
    if (artistPhotoData) {
      try {
        setArtistPhotoUrl(artistPhotoData.artists[0].strArtistThumb);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    }
  }, [artistPhotoData]);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.ldsHourglass}></div>
      ) : artistPhotoUrl ? (
        <img className={styles.image} src={artistPhotoUrl} alt={artistName} />
      ) : (
        <div className={styles.image}>
          <DefaultImage role="img" aria-label="photo not found" />
        </div>
      )}
    </div>
  );
};

export default ArtistPhoto;
