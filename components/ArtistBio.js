import ArtistStats from "./ArtistStats";

const ArtistBio = ({ artistBio, artistName, artistStats }) => {
  return (
    <div>
      <h1>{artistName}</h1>
      <p>
        {artistBio.content.slice(0, 750)}...{" "}
        <a target="_blank" href={artistBio.links.link.href}>
          read more
        </a>
      </p>
      <ArtistStats artistStats={artistStats} />
    </div>
  );
};

export default ArtistBio;
