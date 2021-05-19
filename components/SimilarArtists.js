import SimilarArtist from "./SimilarArtist";

const SimilarArtists = ({ similarArtists, similarArtistsData }) => {
  const similarArtistsPhotos = similarArtistsData.map((artist) => {
    return {
      photoUrl: artist.artists[0].strArtistThumb,
      artistName: artist.artists[0].strArtist,
    };
  });
  return (
    <section>
      <h3>like this genre? check out similar artists...</h3>
      {similarArtists.map((artist) => {
        return (
          <SimilarArtist
            key={artist.name}
            artist={artist}
            photoUrl={similarArtistsPhotos.map(
              (item) => item.artistName === artist.name && item.photoUrl
            )}
          />
        );
      })}
    </section>
  );
};

export default SimilarArtists;
