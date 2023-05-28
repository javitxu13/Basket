import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import '../css/navbar.css'; // Path to CSS file

const Navbar = () => {
  const teams = [
    { name: 'Atlanta Hawks', image: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/atl.png' },
    { name: 'Boston Celtics', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/800px-Boston_Celtics.svg.png' },
    { name: 'Dallas Mavericks', image: 'https://www.mavs.com/wp-content/uploads/2019/09/Logo_Release.png' },
    { name: 'Brooklyn Nets', image: 'https://assets.stickpng.com/images/58419c7ba6515b1e0ad75a62.png' },
    { name: 'New York Knicks', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/800px-New_York_Knicks_logo.svg.png' },
    { name: 'Los Angeles Lakers', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/2560px-Los_Angeles_Lakers_logo.svg.png' },
    { name: 'Los Angeles Clippers', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Los_angeles_clippers_logo_1984-2010.jpg/1024px-Los_angeles_clippers_logo_1984-2010.jpg' },
    { name: 'Chicago Bulls', image: 'https://1000marcas.net/wp-content/uploads/2020/01/Logo-Chicago-Bulls.png' },
    { name: 'Detroit Pistons', image: 'https://content.sportslogos.net/logos/6/223/full/detroit_pistons_logo_primary_20029975.png' },
    { name: 'Indiana Pacers', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Indiana_Pacers.svg/1200px-Indiana_Pacers.svg.png' },
    { name: 'Milwaukee Bucks', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/1200px-Milwaukee_Bucks_logo.svg.png' },
    { name: 'Charlotte Hornets', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Charlotte_Hornets_%282014%29.svg/1200px-Charlotte_Hornets_%282014%29.svg.png' },
    { name: 'Miami Heat', image: 'https://1000marcas.net/wp-content/uploads/2020/03/emblem-Miami-Heat.jpg' },
    { name: 'Orlando Magic', image: 'https://1000marcas.net/wp-content/uploads/2020/03/Logo-Orlando-Magic.png' },
    { name: 'Washington Wizards', image: 'https://logodownload.org/wp-content/uploads/2021/07/washington-wizards-logo-1.png' },
    { name: 'Golden State Warriors', image: 'https://1000marcas.net/wp-content/uploads/2020/02/logo-Golden-State-Warriors.png' },
    { name: 'Houston Rockets', image: 'https://assets.stickpng.com/images/58419bc5a6515b1e0ad75a56.png' },
    { name: 'Portland Trail Blazers', image: 'https://1000marcas.net/wp-content/uploads/2020/03/Logo-Portland-Trail-Blazers.png' },
    { name: 'San Antonio Spurs', image: 'https://assets.stickpng.com/images/58419bb6a6515b1e0ad75a55.png' },
    { name: 'Sacramento Kings', image: 'https://assets.stickpng.com/images/58419b70a6515b1e0ad75a50.png' },
    { name: 'Toronto Raptors', image: 'https://i.etsystatic.com/36979639/r/il/9fc087/4065117088/il_fullxfull.4065117088_bup0.jpg' },
    { name: 'Cleveland Cavaliers', image: 'https://assets.stickpng.com/images/58419c8da6515b1e0ad75a63.png' },
    { name: 'Utah Jazz', image: 'https://cdnb.20m.es/sites/30/2019/06/hhh58419bf3a6515b1e0ad75a59.png' },
    { name: 'Oklahoma City Thunder', image: 'https://logodownload.org/wp-content/uploads/2021/07/oklahoma-city-thunder-logo.png' },
  ];

  const [searchValue, setSearchValue] = useState('');
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    setSelectedTeam(null); // Limpiar el equipo seleccionado al cambiar la búsqueda
  };

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
    setSearchValue(''); // Limpiar el campo de búsqueda al seleccionar un equipo
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
        </li>
        <li className="nav-item">
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search teams..."
            className="search-input"
          />
        </li>
        {selectedTeam && (
          <li className="nav-item">
            <NavDropdown title={selectedTeam.name} id="teamsDropdown">
              <NavDropdown.Item>
                <NavLink to={`/teams/${selectedTeam.name}`} className="dropdown-link">
                  {selectedTeam.name}
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </li>
        )}
      </ul>
      {searchValue !== '' && !selectedTeam && (
        <div className="teams-dropdown">
          {filteredTeams.map((team) => (
            <NavLink
              to={`/teams/${team.name}`}
              className="team-link"
              onClick={() => handleTeamClick(team)}
              key={team.name}
            >
              {team.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
