import styles from "../styles/Form.module.css";

const Form = ({ formData, setFormData, handleSubmit }) => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>MUSIC STATS</h1>
      <div className={styles.inputWrapper}>
        <label htmlFor="country-input">Country Name </label>
        <input
          name="country"
          onChange={handleInputChange}
          id="country-input"
          type="text"
          placeholder="Poland, Italy etc."
        />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="number-input">Top Number </label>
        <input
          name="number"
          onChange={handleInputChange}
          id="number-input"
          type="number"
          placeholder="enter number"
        />
      </div>
      <div className={styles.inputWrapper}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
