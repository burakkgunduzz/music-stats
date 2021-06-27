import ArtistBio from "./ArtistBio";
import ArtistPhoto from "./ArtistPhoto";
import styles from "../styles/MainArtistDetails.module.css";

const MainArtistDetails = ({ artistBio, artistName, artistStats }) => {
  return (
    <article className={styles.container}>
      <ArtistPhoto artistName={artistName} />
      <ArtistBio
        artistBio={artistBio}
        artistName={artistName}
        artistStats={artistStats}
      />
    </article>
  );
};

export default MainArtistDetails;
