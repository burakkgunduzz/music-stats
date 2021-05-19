const ArtistStats = ({ artistStats }) => {
  return (
    <div>
      <p>listeners: {artistStats.listeners}</p>
      <p>playcount: {artistStats.playcount}</p>
    </div>
  );
};

export default ArtistStats;
