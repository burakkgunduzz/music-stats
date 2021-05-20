import styles from "../styles/ArtistPhoto.module.css";

const ArtistPhoto = ({ artistPhoto, artistName }) => {
  return (
    <div>
      {artistPhoto && (
        <img className={styles.image} src={artistPhoto} alt={artistName} />
      )}
    </div>
  );
};

export default ArtistPhoto;
