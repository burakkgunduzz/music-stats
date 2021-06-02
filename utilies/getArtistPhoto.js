export const getArtistPhoto = async (artistName) => {
  const data = fetch(
    encodeURI(
      `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artistName}`
    )
  ).then((res) => res.json());
  return data;
};
