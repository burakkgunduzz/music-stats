const Tags = ({ tags }) => {
  return (
    <section>
      <h3>tags</h3>
      {tags.map((tag) => {
        return (
          <div key={tag.name}>
            <a target="_blank" href={tag.url}>
              {tag.name}
            </a>
          </div>
        );
      })}
    </section>
  );
};

export default Tags;
