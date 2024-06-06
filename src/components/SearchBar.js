import React from 'react';
import TextField from '@mui/material/TextField'; // I am using <TextField type=outlined /> and wrapping it in SearchBar Component.

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    //This is the Material UI Component with it's properties.
    <TextField
      label="Search"
      variant="outlined"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}  // As we type in textfield it reports that search field has been changed so we don't have to click on button to make result appear.
      fullWidth
      margin="normal"
    />
  );
};

export default SearchBar;
