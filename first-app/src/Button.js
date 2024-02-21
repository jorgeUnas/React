import React from 'react';

function Button(props){
  return(
    <button name={props.name} onClick={props.onClick}>{props.name}</button>
  )
};

export default Button;