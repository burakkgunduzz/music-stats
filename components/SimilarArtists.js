import SimilarArtist from "./SimilarArtist";
import styles from "../styles/SimilarArtists.module.css";

const SimilarArtists = ({ similarArtists, similarArtistsData }) => {
  const similarArtistsPhotos = similarArtistsData.map((artist) => {
    return {
      photoUrl: artist.artists[0].strArtistThumb,
      artistName: artist.artists[0].strArtist,
    };
  });
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
              photoUrl={similarArtistsPhotos.map(
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
