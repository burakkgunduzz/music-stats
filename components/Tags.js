import styles from "../styles/Tags.module.css";

const Tags = ({ tags }) => {
  return (
    <section className={styles.container}>
      <div>
        <h3 className={styles.title}>tags</h3>
      </div>
      <div className={styles.tagContainer}>
        {tags.map((tag) => {
          return (
            <div className={styles.tag} key={tag.name}>
              <a target="_blank" href={tag.url}>
                {tag.name}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tags;
