import MainArtistDetails from "../components/MainArtistDetails";
import SimilarArtists from "../components/SimilarArtists";
import Tags from "../components/Tags";
import { useArtistDetail } from "../hooks/useArtistDetail";
import styles from "../styles/ArtistDetails.module.css";

const ArtistDetails = ({ details }) => {
  console.log(details);
  return (
    <main>
      <MainArtistDetails
        artistPhoto={details.artist.image[4]["#text"]}
        artistBio={details.artist.bio}
        artistName={details.artist.name}
        artistStats={details.artist.stats}
      />
      <Tags tags={details.artist.tags.tag} />
      <SimilarArtists similarArtists={details.artist.similar.artist} />
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
