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
  const [selectedTeam, setSelectedTeam] = useState(null); 

  useEffect(() => {
    fetchPlayerData();
  }, []); // Fetch player data on component mount

  useEffect(() => {
    if (selectedTeam) { // si hay un equipo seleccionado (si no es null) entonces se ejecuta el fetch
      fetchPlayerData(); 
    }
  }, [selectedTeam]); // 

  const fetchPlayerData = async () => { // función para obtener los datos del jugador de la API 
    try { 
      if(searchValue==="")
      return
      const response = await axios.get(`https://www.balldontlie.io/api/v1/players?search=${searchValue}`);
      const player = response.data.data[0];
      setPlayerData(player);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => { // función para buscar el jugador 
    setSelectedTeam(null);
    fetchPlayerData();
  };

  const handleInputChange = (event) => { // función para cambiar el valor del input 
    setSearchValue(event.target.value);
  };

  const handleTeamClick = (team) => { // función para cambiar el equipo seleccionado
    setSelectedTeam(team);
    setSearchValue('');
  };

  if (playerData === null) { // si no hay datos del jugador, mostrar el input de búsqueda y el carrusel de equipos
    return ( 
      <div className="search">
        <h2>Encuentra tu jugador FAV</h2>
        <input type="text" value={searchValue} onChange={handleInputChange} /> 
        <button onClick={handleSearch}>Search</button>
        <h2 className="equiposnba">Equipos de la NBA</h2>
      <div className="carousel">
        <NbaCarousel onTeamClick={handleTeamClick} />
      </div>
        
      </div>
    );
  }

  const { first_name, last_name, team, position } = playerData;

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
          <p className="position">Position: {position}</p>
        </div>
        <PlayerStatsChart playerId={playerData.id} />
      </div>
      <h2 className="equiposnba">Equipos de la NBA</h2>
      <div className="carousel">
        <NbaCarousel onTeamClick={handleTeamClick} />
      </div>
    </div>
  );
};

export default PlayerProfile;
