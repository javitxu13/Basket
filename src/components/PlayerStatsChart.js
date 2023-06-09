import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

const PlayerStatsChart = ({ playerId }) => {
  const [playerStats, setPlayerStats] = useState(null);

  useEffect(() => {
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

  if (!playerStats) {
    return ;
  }

  const { pts, ast, reb, blk, stl } = playerStats;

  const chartData = [
    {
      x: ['Points', 'Assists' , 'Rebounds', 'Blocks', 'Steals'],
      y: [pts, ast , reb, blk, stl],
      type: 'bar',
      marker: {
        color: 'orange',
      },
    },
  ];

  const layout = {
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
