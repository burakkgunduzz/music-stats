import styles from "../styles/ArtistStats.module.css";
import Play from "../public/images/play.svg";
import Speaker from "../public/images/speaker.svg";

const ArtistStats = ({ artistStats }) => {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>
        <Speaker />
        <span className={styles.span}>listeners: </span> {artistStats.listeners}
      </p>
      <p className={styles.paragraph}>
        <Play />
        <span className={styles.span}>playcount: </span> {artistStats.playcount}
      </p>
    </div>
  );
};

export default ArtistStats;
