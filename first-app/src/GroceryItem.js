import React from 'react';
import Button from './Button';

function GroceryItem(){
  function handlerClick(){
    alert('Your item was added!');
  };
  return (
    <div id="items">
    <Button name="Banana" onClick={handlerClick} />
    <Button name="Bread" onClick={handlerClick} />
    <Button name="Ipad" onClick={handlerClick} />
    <Button name="Iphone" onClick={handlerClick} />
    </div>
  );
};

export default GroceryItem;