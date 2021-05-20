import styles from "../styles/SimilarArtist.module.css";

const SimilarArtist = ({ artist, photoUrl }) => {
  let url = "";
  photoUrl.map((address) => {
    if (address) {
      url = address;
    }
  });
  return (
    <div className={styles.container}>
      {url && (
        <a className={styles.anchorTag} target="_blank" href={artist.url}>
          <img src={url} alt={artist.name} className={styles.image} />
          <span className={styles.artistName}>{artist.name}</span>
        </a>
      )}
    </div>
  );
};

export default SimilarArtist;
