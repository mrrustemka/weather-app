import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Input, InputAdornment } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function Search(data: {
  submit: boolean;
  onSubmit: Function;
  formData: string;
  handleInputChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}) {
  const submit: boolean = data.submit;
  const onSubmit: Function = data.onSubmit;
  const formData: string = data.formData;
  const handleInputChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined = data.handleInputChange;

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
        value={formData}
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
