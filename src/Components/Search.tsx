import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Input, InputAdornment, InputLabel } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";

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
      {/* <input
        name="city"
        type="text"
        placeholder="Enter City"
        value={formData.city}
        onChange={handleInputChange}
      /> */}
      {/* <InputLabel htmlFor="input-with-icon-adornment">
        With a start adornment
      </InputLabel> */}
      <Input
        // id="input-with-icon-adornment"
        name="city"
        type="text"
        placeholder="Enter City"
        value={formData.city}
        onChange={handleInputChange}
        startAdornment={
          <InputAdornment position="start">
            <LocationCityOutlinedIcon />
          </InputAdornment>
        }
      />
      <Button
        type="submit"
        startIcon={<SearchIcon sx={{ stroke: "white" }} />}
      ></Button>
    </form>
  );
}

export default Search;
