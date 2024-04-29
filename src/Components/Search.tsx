import React from "react";

function Search({
  submit,
  onSubmit,
  formData,
  setFormData,
  handleInputChange,
}: any) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(!submit);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="city"
        type="text"
        placeholder="Enter City"
        value={formData.city}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
