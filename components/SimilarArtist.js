const SimilarArtist = ({ artist }) => {
  return (
    <div>
      <a target="_blank" href={artist.url}>
        <img src={artist.image[1]["#text"]} alt={artist.name} /> <br />
        {artist.name}
      </a>
    </div>
  );
};

export default SimilarArtist;
