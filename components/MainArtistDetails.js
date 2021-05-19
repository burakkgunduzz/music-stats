import ArtistBio from "./ArtistBio";
import ArtistPhoto from "./ArtistPhoto";

const MainArtistDetails = ({ artistPhoto, artistBio, artistName }) => {
  return (
    <article>
      <ArtistPhoto artistPhoto={artistPhoto} />
      <ArtistBio artistBio={artistBio} artistName={artistName} />
    </article>
  );
};

export default MainArtistDetails;
