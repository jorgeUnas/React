import React from 'react';

function Picture() {
  return <img className="octupus" src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" width="500px" heigth="500px"/>;
}

function Profile() {
  return (
    <>
      <Picture />
      <h1>Name: Octavia</h1>
      <h2>Species: Octopus</h2>
       <h2>Class: Cephalopoda</h2>
    </>
  )
}

export default Profile;