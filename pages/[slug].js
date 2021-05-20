import MainArtistDetails from "../components/MainArtistDetails";
import SimilarArtists from "../components/SimilarArtists";
import Tags from "../components/Tags";
import { useArtistDetail } from "../hooks/useArtistDetail";
import styles from "../styles/ArtistDetails.module.css";

const ArtistDetails = ({ details, artistPhoto, similarArtistsData }) => {
  let artistPhotoUrl = "";
  try {
    artistPhotoUrl = artistPhoto.artists[0].strArtistThumb;
  } catch (e) {
    console.log(e);
  }

  return (
    <main className={styles.main}>
      <MainArtistDetails
        artistPhoto={artistPhotoUrl}
        artistBio={details.artist.bio}
        artistName={details.artist.name}
        artistStats={details.artist.stats}
      />
      <Tags tags={details.artist.tags.tag} />
      <SimilarArtists
        similarArtists={details.artist.similar.artist}
        similarArtistsData={similarArtistsData}
      />
    </main>
  );
};

export default ArtistDetails;

export async function getServerSideProps({ query: { slug } }) {
  const { getArtistInfo } = useArtistDetail();
  const data = await getArtistInfo(slug);
  const details = await data.json();

  const artistName = details.artist.name;

  const forClickedArtistPhoto = await fetch(
    `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artistName}`
  );
  const artistPhoto = await forClickedArtistPhoto.json();

  const similarArtists = details.artist.similar.artist.map(
    (artist) => artist.name
  );

  const forSimilarArtist1 = await fetch(
    encodeURI(
      `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${similarArtists[0]}`
    )
  );
  const artistPhoto1 = await forSimilarArtist1.json();

  const forSimilarArtist2 = await fetch(
    encodeURI(
      `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${similarArtists[1]}`
    )
  );
  const artistPhoto2 = await forSimilarArtist2.json();

  const forSimilarArtist3 = await fetch(
    encodeURI(
      `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${similarArtists[2]}`
    )
  );
  const artistPhoto3 = await forSimilarArtist3.json();

  const forSimilarArtist4 = await fetch(
    encodeURI(
      `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${similarArtists[3]}`
    )
  );
  const artistPhoto4 = await forSimilarArtist4.json();

  const forSimilarArtist5 = await fetch(
    encodeURI(
      `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${similarArtists[4]}`
    )
  );
  const artistPhoto5 = await forSimilarArtist5.json();

  let similarArtistsData = [
    artistPhoto1,
    artistPhoto2,
    artistPhoto3,
    artistPhoto4,
    artistPhoto5,
  ];

  return {
    props: { details, artistPhoto, similarArtistsData },
  };
}
