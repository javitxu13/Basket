import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

const PlayerStatsChart = ({ playerId }) => {
  const [playerStats, setPlayerStats] = useState(null); // Estado para guardar los datos del jugador

  useEffect(() => { // Obtener los datos del jugador de la API
    const fetchPlayerStats = async () => { 
      try {
        const response = await axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerId}`);
        const stats = response.data.data[0];
        setPlayerStats(stats);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayerStats(); 
  }, [playerId]);

  if (!playerStats) { // Si no hay datos del jugador, no mostrar nada
    return ;
  }

  const { pts, ast, reb, blk, stl } = playerStats; // Obtener los datos del jugador del estado

  const chartData = [ // Datos para el gráfico de barras 
    {
      x: ['Points', 'Assists' , 'Rebounds', 'Blocks', 'Steals'],
      y: [pts, ast , reb, blk, stl],
      type: 'bar',
      marker: {
        color: 'orange',
      },
    },
  ];

  const layout = { // Configuración del gráfico de barras 
    title: 'Player Stats',
    xaxis: {
      title: 'Categories',
    },
    yaxis: {
      title: 'Values',
    },
    width: 800,
    height: 500,
    margin: {
      l: 200,
      r: 50,
      b: 100,
      t: 100,
      pad: 9,
    },
    plot_bgcolor: 'black', // Cambiar el color de fondo del gráfico
  };
  
    
  return (
    <div>
      <Plot data={chartData} layout={layout} />
    </div>
  );
};

export default PlayerStatsChart;
