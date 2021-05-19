import MainArtistDetails from "../components/MainArtistDetails";
import { useArtistDetail } from "../hooks/useArtistDetail";
import styles from "../styles/ArtistDetails.module.css";

const ArtistDetails = ({ details }) => {
  console.log(details);
  return (
    <main>
      <MainArtistDetails
        artistPhoto={details.artist?.image[4]["#text"]}
        artistBio={details.artist.bio}
        artistName={details.artist.name}
      />
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
