import ArtistBio from "./ArtistBio";
import ArtistPhoto from "./ArtistPhoto";
import styles from "../styles/MainArtistDetails.module.css";

const MainArtistDetails = ({
  artistPhoto,
  artistBio,
  artistName,
  artistStats,
}) => {
  return (
    <article className={styles.container}>
      <ArtistPhoto artistPhoto={artistPhoto} artistName={artistName} />
      <ArtistBio
        artistBio={artistBio}
        artistName={artistName}
        artistStats={artistStats}
      />
    </article>
  );
};

export default MainArtistDetails;
