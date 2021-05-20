import ArtistStats from "./ArtistStats";
import styles from "../styles/ArtistBio.module.css";

const ArtistBio = ({ artistBio, artistName, artistStats }) => {
  let bioContent = "";
  if (typeof window !== "undefined") {
    if (window.innerWidth < 300) {
      bioContent = artistBio.content.slice(0, 100);
    }
    if (window.innerWidth > 300 && window.innerWidth < 500) {
      bioContent = artistBio.content.slice(0, 200);
    } else {
      bioContent = artistBio.content.slice(0, 300);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{artistName}</h1>
      <p className={styles.biography}>
        {bioContent}...{" "}
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
