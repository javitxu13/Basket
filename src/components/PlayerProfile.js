import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerStatsChart from './PlayerStatsChart';
import { renderPlayerImage } from './playerUtils';
import '../css/style.css';
import TeamLogos from './TeamLogos';
import NbaCarousel from './NbaCarousel';



const PlayerProfile = () => {
  const [playerData, setPlayerData] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchPlayerData();
  }, []); // Fetch player data on component mount

  const fetchPlayerData = async () => {
    try {
      const response = await axios.get(`https://www.balldontlie.io/api/v1/players?search=${searchValue}`);
      const player = response.data.data[0];
      setPlayerData(player);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    fetchPlayerData();
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  if (playerData === null) {
    return (
      <div className="search">
        <h2>Player Profile</h2>
        <input type="text" value={searchValue} onChange={handleInputChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  }
  
  const { first_name, last_name, team, position} = playerData;

  // Concatenate the first name and last name to form the player's full name
  const fullName = `${first_name} ${last_name}`;

  // Find the logo URL for the team
  const teamLogo = TeamLogos.find((logo) => logo.team === team.full_name);

  return (
    <div className="containerJugador">
      <h2>Encuentra tu jugador FAV</h2>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      <div className="profile">
        <div className="player-image">
          {renderPlayerImage(fullName)}
          <h3 className="full-name">{fullName}</h3>
          <div className="team">
          {teamLogo && <img src={teamLogo.logo} alt={teamLogo.team} className="team-logo" />}
          </div>
          <p className="position">Position:  {position}</p>
        </div>
          <PlayerStatsChart playerId={playerData.id} />          
      </div>
      <h2 className='equiposnba'>Equipos de la NBA</h2>
      <div className="carousel">
      <NbaCarousel />
      </div>
    </div>
  );
};

export default PlayerProfile;
