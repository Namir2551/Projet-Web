import React from 'react';

import './Backdrop.css';

function Backdrop (props){
  const content = (
    <div className="backdrop" onClick={props.onClick}></div>
  );
  return content;
};

export default Backdrop;
