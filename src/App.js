import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import PlayerProfile from './components/PlayerProfile';
import axios from 'axios';

const App = () => {

  const [player, setPlayer] = useState({});
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchPlayerData();
  }, []); // Fetch player data on component mount

  const fetchPlayerData = async () => {
    try {
      const response = await axios.get(`https://www.balldontlie.io/api/v1/players?search=${searchValue}`);
      const player = response.data.data[0];
      setPlayer(player);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <BrowserRouter>
      <Navbar />
      <PlayerProfile player={player} />

    </BrowserRouter>
  );
}

export default App;


  