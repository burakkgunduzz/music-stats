export const useTopTracks = (setTopTracks) => {
  const getTopTracks = async (country, number) => {
    const fetchData = await fetch(
      "http://ws.audioscrobbler.com/2.0/?" +
        new URLSearchParams({
          method: "geo.gettoptracks",
          country,
          api_key: process.env.NEXT_PUBLIC_LAST_FM_API_KEY,
          format: "json",
          limit: number,
        })
    );
    const data = await fetchData.json();
    setTopTracks(data);
  };
  return { getTopTracks };
};
