import React from 'react';
import ComputerIcon from '@mui/icons-material/Computer';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const Interests = () => {
  return (
    <div className="skills">
        <h2 className="h2">Centre d'intérêts</h2>
        <ul>
            <li>Informatique</li>
            <li>Basket-ball</li>
            <li>jeux videos</li>            
        </ul>
        <div className="interests">
          <ComputerIcon style={{ fontSize: 30 }} />
          <SportsBasketballIcon style={{ fontSize: 30 }} />
          <SportsEsportsIcon style={{ fontSize: 30 }} />
        </div>
    </div>
  )
}

export default Interests;