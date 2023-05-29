import React from 'react';
import '../css/NbaCarousel.css';

const NbaCarousel = () => {
  const teams = [
    { image: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/atl.png' },
    { image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/800px-Boston_Celtics.svg.png' },
    { image: 'https://www.mavs.com/wp-content/uploads/2019/09/Logo_Release.png' },
    { image: 'https://assets.stickpng.com/images/58419c7ba6515b1e0ad75a62.png' },
    { image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/800px-New_York_Knicks_logo.svg.png' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/2560px-Los_Angeles_Lakers_logo.svg.png' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Los_angeles_clippers_logo_1984-2010.jpg/1024px-Los_angeles_clippers_logo_1984-2010.jpg' },
    { image: 'https://1000marcas.net/wp-content/uploads/2020/01/Logo-Chicago-Bulls.png' },
    { image: 'https://content.sportslogos.net/logos/6/223/full/detroit_pistons_logo_primary_20029975.png' },
    { image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Indiana_Pacers.svg/1200px-Indiana_Pacers.svg.png' },
    { image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/1200px-Milwaukee_Bucks_logo.svg.png' },
    { image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Charlotte_Hornets_%282014%29.svg/1200px-Charlotte_Hornets_%282014%29.svg.png' },
    { image: 'https://1000marcas.net/wp-content/uploads/2020/03/emblem-Miami-Heat.jpg' },
    { image: 'https://1000marcas.net/wp-content/uploads/2020/03/Logo-Orlando-Magic.png' },
    { image: 'https://logodownload.org/wp-content/uploads/2021/07/washington-wizards-logo-1.png' },
    { image: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/gs.png' },
    { image: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/min.png' },
    { image: 'https://1000marcas.net/wp-content/uploads/2020/03/Logo-Portland-Trail-Blazers.png' },
    { image: 'https://assets.stickpng.com/images/58419bb6a6515b1e0ad75a55.png' },
    { image: 'https://assets.stickpng.com/images/58419b70a6515b1e0ad75a50.png' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/San_Antonio_Spurs_Wordmark_Logo_2017-current.png' },
    { image: 'https://logodownload.org/wp-content/uploads/2021/07/phoenix-suns-logo.png' },
    { image: 'https://1000marcas.net/wp-content/uploads/2020/03/Logo-Sacramento-Kings.png' },
    { image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/640px-Philadelphia_76ers_logo.svg.png' },
    { image: 'https://1000logos.net/wp-content/uploads/2018/06/Vancouver-Grizzlies-Logo-2001.png' },
    { image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/New_Orleans_Pelicans_logo.svg/1200px-New_Orleans_Pelicans_logo.svg.png' },
    { image: 'https://i.etsystatic.com/36979639/r/il/9fc087/4065117088/il_fullxfull.4065117088_bup0.jpg' },
    { image: 'https://assets.stickpng.com/images/58419c8da6515b1e0ad75a63.png' },
    { image: 'https://cdnb.20m.es/sites/30/2019/06/hhh58419bf3a6515b1e0ad75a59.png' },
    { image: 'https://logodownload.org/wp-content/uploads/2021/07/oklahoma-city-thunder-logo.png' },
  ];

  return (
    <div className="carousel-container">
      <div className="carousel">
        {teams.map((team, index) => (
          <div key={index} className="team">
            <img src={team.image} alt={`Equipo ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};




export default NbaCarousel;
