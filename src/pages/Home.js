import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Users
      </Typography>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
    </Container>
  );
};

export default Home;
