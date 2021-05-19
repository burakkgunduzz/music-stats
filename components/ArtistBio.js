const ArtistBio = ({ artistBio, artistName }) => {
  return (
    <div>
      <h1>{artistName}</h1>
      <p>
        {artistBio.content.slice(0, 750)}...{" "}
        <a target="_blank" href={artistBio.links.link.href}>
          read more
        </a>
      </p>
    </div>
  );
};

export default ArtistBio;
