import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import UserTable from '../components/UserTable';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [users, setUsers] = useState([]);   // To store the list of users fetched from the API
  const [searchTerm, setSearchTerm] = useState('');   // To store the current search term entered by the user
  const [filteredUsers, setFilteredUsers] = useState([]);   // To store the list of users filtered based on the search term

  // Fetching users from the API when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, []);


  // Filtering users based on the user's name not username
  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, users]);

  return (
    <Container style={{ backgroundColor: '#ffff', padding: '20px', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.35)' }}>
      <Typography variant="h4" component="h1" style={{ marginBottom: '20px', color: '#1A2130' }}>
        User List
      </Typography>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div style={{ marginTop: '20px' }}>
        <UserTable users={filteredUsers} />
      </div>
    </Container>
  );
};

export default Home;
