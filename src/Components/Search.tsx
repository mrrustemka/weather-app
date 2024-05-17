import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Input, InputAdornment } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

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
    <form onSubmit={handleSubmit} className="search">
      <Input
        name="city"
        type="text"
        placeholder="Enter City"
        value={formData.city}
        onChange={handleInputChange}
        className="search-input"
        startAdornment={
          <InputAdornment position="start">
            <LocationOnOutlinedIcon />
          </InputAdornment>
        }
      />
      <Button
        type="submit"
        startIcon={<SearchIcon sx={{ fill: "white" }} />}
      ></Button>
    </form>
  );
}

export default Search;
