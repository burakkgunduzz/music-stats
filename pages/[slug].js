import Head from "next/head"
import MainArtistDetails from "../components/MainArtistDetails";
import SimilarArtists from "../components/SimilarArtists";
import Tags from "../components/Tags";
import { getArtistInfo } from "../utilies//helpers/getArtistDetail";
import styles from "../styles/ArtistDetails.module.css";

const ArtistDetails = ({ details }) => {
  return (
    <>
    <Head>
    <title>Music Stats/{details.artist.name}</title>
        <meta
          name="description"
          content={details.artist.bio.content}
        />
    </Head>
    <main className={styles.main}>
      <MainArtistDetails
        artistBio={details.artist.bio}
        artistName={details.artist.name}
        artistStats={details.artist.stats}
      />
      <Tags tags={details.artist.tags.tag} />
      <SimilarArtists similarArtists={details.artist.similar.artist} />
    </main>
    </>
  );
};

export default ArtistDetails;

export async function getServerSideProps({ query: { slug } }) {
  const data = await getArtistInfo(slug);
  const details = await data.json();

  return {
    props: { details },
  };
}
