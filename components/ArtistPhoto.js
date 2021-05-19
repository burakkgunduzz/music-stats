const ArtistPhoto = ({ artistPhoto, artistName }) => {
  return (
    <div>
      <img src={artistPhoto} alt={artistName} />
    </div>
  );
};

export default ArtistPhoto;
