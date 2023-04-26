import React from 'react';

import './FiltreSession.css';

const FiltreSession = (props) => {
  const menuDeroulantHandler = (event) => {
    props.onChangementFiltre(event.target.value);
  };

  return (
    <div className='session-filter'>
      <div className='session-filter__control'>
        <label>Filtrer par sessions</label>
        <select value={props.selected} onChange={menuDeroulantHandler}>
          <option value='H23'>Hiver 2023</option>
          <option value='A22'>Automne 2022</option>
          <option value='H22'>Hiver 2022</option>
          <option value='A21'>Automne 2021</option>
          <option value='H21'>Hiver 2021</option>
        </select>
      </div>
    </div>
  );
};

export default FiltreSession;