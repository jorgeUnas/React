import logo from './logo.svg';
import './App.css';

import React from "react";
import GroceryCart from "./GroceryCart";
import EditProfile from './EditProfile';
import Counter from './Counter';
import Timer from './Timer';
import Forecast from './Forecast';

export default function App() {
  return (
      <>
      <GroceryCart />
      <EditProfile />
      <Counter />
      <Timer />
      <Forecast />
      </>
      );
}

