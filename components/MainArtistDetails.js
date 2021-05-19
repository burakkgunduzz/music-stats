import ArtistBio from "./ArtistBio";
import ArtistPhoto from "./ArtistPhoto";

const MainArtistDetails = ({
  artistPhoto,
  artistBio,
  artistName,
  artistStats,
}) => {
  return (
    <article>
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
