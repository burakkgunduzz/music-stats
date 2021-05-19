const SimilarArtist = ({ artist, photoUrl }) => {
  let url = "";
  photoUrl.map((address) => {
    if (address) {
      url = address;
    }
  });
  return (
    <div>
      {url && (
        <a target="_blank" href={artist.url}>
          <img src={url} alt={artist.name} /> <br />
          {artist.name}
        </a>
      )}
    </div>
  );
};

export default SimilarArtist;
