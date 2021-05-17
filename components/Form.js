const Form = ({ formData, setFormData, handleSubmit }) => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="country-input">Country Name: </label>
        <input
          name="country"
          onChange={handleInputChange}
          id="country-input"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="number-input">Top Number: </label>
        <input
          name="number"
          onChange={handleInputChange}
          id="number-input"
          type="number"
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
