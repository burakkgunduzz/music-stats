export const getTopDetails = async (country, number, method) => {
  const fetchData = await fetch(
    "http://ws.audioscrobbler.com/2.0/?" +
      new URLSearchParams({
        method,
        country,
        api_key: process.env.NEXT_PUBLIC_LAST_FM_API_KEY,
        format: "json",
        limit: number,
      })
  );
  const data = await fetchData.json();
  return data;
};
