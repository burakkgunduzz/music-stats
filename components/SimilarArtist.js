import styles from "../styles/SimilarArtist.module.css";

const SimilarArtist = ({ artist, photoUrl }) => {
  let url = "";
  photoUrl?.map((address) => {
    if (address) {
      url = address;
    }
  });
  return (
    <>
      {url && (
        <div className={styles.container}>
          <a className={styles.anchorTag} href={artist.name}>
            <img src={url} alt={artist.name} className={styles.image} />
            <span className={styles.artistName}>{artist.name}</span>
          </a>
        </div>
      )}
    </>
  );
};

export default SimilarArtist;
