import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Input, InputAdornment, Box } from "@mui/material";
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
    <Box component="form" onSubmit={handleSubmit} sx={{ padding: "16px" }}>
      <Input
        name="city"
        type="text"
        placeholder="Enter City"
        value={formData}
        onChange={handleInputChange}
        sx={{
          "::after": {
            borderBottom: "2px solid #ffffff !important",
          },
          fontFamily: "RobotoMono, sans-serif" 
        }}
        startAdornment={
          <InputAdornment position="start">
            <LocationOnOutlinedIcon />
          </InputAdornment>
        }
      />
      <Button type="submit" startIcon={<SearchIcon sx={{ fill: "white" }} />} />
    </Box>
  );
}

export default Search;
