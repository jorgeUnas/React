import logo from './logo.svg';
import './App.css';

import React from 'react';
import {comments} from './commentData';
import Card from './Card';

import ColorPicker from './ColorPicker'; 

function App(){
  return (
    <>
    {
      comments.map(comment =>
        <Card commentObject={comment} />
      )
    }
    
    <ColorPicker />
    
    </>
  )
}

export default App;