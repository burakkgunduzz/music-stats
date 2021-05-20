import styles from "../styles/ArtistStats.module.css";

const ArtistStats = ({ artistStats }) => {
  return (
    <div>
      <p>
        <span className={styles.span}>listeners: </span> {artistStats.listeners}
      </p>
      <p>
        <span className={styles.span}>playcount: </span> {artistStats.playcount}
      </p>
    </div>
  );
};

export default ArtistStats;
