export const useArtistDetail = (setArtistDetail) => {
  const getArtistInfo = async (artist) => {
    const fetchData = await fetch(
      "http://ws.audioscrobbler.com/2.0/?" +
        new URLSearchParams({
          method: "artist.getinfo",
          artist,
          api_key: process.env.NEXT_PUBLIC_LAST_FM_API_KEY,
          format: "json",
          autocorrect: 1,
        })
    );
    const data = await fetchData.json();
    setArtistDetail(data);
  };
  return { getArtistInfo };
};
