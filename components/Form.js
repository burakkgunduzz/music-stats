import styles from "../styles/Form.module.css";
import Headphone from "../public/images/headphones.svg";

const Form = ({ formData, setFormData, handleSubmit }) => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.headphoneIcon}>
        <Headphone width={50} height={50} />
      </div>
      <h1>MUSIC STATS</h1>
      <div className={styles.inputWrapper}>
        <label htmlFor="country-input">Country Name </label>
        <input
          name="country"
          onChange={handleInputChange}
          id="country-input"
          type="text"
          placeholder="Poland, Italy etc."
          required
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
          required
        />
      </div>
      <div className={styles.inputWrapper}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
