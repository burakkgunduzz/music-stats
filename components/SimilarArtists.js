import SimilarArtist from "./SimilarArtist";

const SimilarArtists = ({ similarArtists }) => {
  return (
    <section>
      <h3>like this? check out similar artists...</h3>
      {similarArtists.map((artist) => {
        return <SimilarArtist key={artist.name} artist={artist} />;
      })}
    </section>
  );
};

export default SimilarArtists;
