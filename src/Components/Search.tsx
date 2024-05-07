import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

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
      <Button type="submit" startIcon={<SearchIcon />}></Button>
    </form>
  );
}

export default Search;
