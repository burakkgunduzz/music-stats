const ArtistPhoto = ({ artistPhoto, artistName }) => {
  return <div>{artistPhoto && <img src={artistPhoto} alt={artistName} />}</div>;
};

export default ArtistPhoto;
