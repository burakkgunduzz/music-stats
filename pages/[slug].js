import { useArtistDetail } from "../hooks/useArtistDetail";

const ArtistDetails = ({ details }) => {
  return (
    <main>
      <h1>I am {details.artist.name} details page</h1>
    </main>
  );
};

export default ArtistDetails;

export async function getServerSideProps({ query: { slug } }) {
  const { getArtistInfo } = useArtistDetail();
  const data = await getArtistInfo(slug);
  const details = await data.json();

  return {
    props: { details },
  };
}
