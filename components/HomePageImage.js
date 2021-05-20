import styles from "../styles/HomePageImage.module.css";

const HomePageImage = () => {
  return (
    <div>
      <img
        className={styles.image}
        src="./images/happy_music.svg"
        alt="bird figure listening music with headphones"
      />
    </div>
  );
};

export default HomePageImage;
