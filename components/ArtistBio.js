import ArtistStats from "./ArtistStats";
import styles from "../styles/ArtistBio.module.css";

const ArtistBio = ({ artistBio, artistName, artistStats }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{artistName}</h1>
      <p className={styles.biography}>
        {artistBio.content.slice(0, 500)}...{" "}
        <a
          className={styles.anchorTag}
          target="_blank"
          href={artistBio.links.link.href}
        >
          read more
        </a>
      </p>
      <ArtistStats artistStats={artistStats} />
    </div>
  );
};

export default ArtistBio;
