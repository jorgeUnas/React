import React, { useEffect, useState } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState('');


const handleChange = ({target}) => {
  setName(target.value);
}

  return (
    <>
      <h1>Time: {time}</h1>
      <input value={name} onChange={handleChange} />
    </>
  );
}