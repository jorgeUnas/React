import logo from './logo.svg';
import './App.css';

import React from "react";
import GroceryCart from "./GroceryCart";
import EditProfile from './EditProfile';
import Counter from './Counter';

export default function App() {
  return (
      <>
      <GroceryCart />
      <EditProfile />
      <Counter />
      </>
      );
}

