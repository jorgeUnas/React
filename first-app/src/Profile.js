import React from 'react';
import NavBar from './NavBar';

function Picture() {
  return <img className="monkey" src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" width="500px" heigth="500px"/>;
}

function Profile() {
    return (
    <div>
      <NavBar />
      <h1>All About Me!</h1>
      <p>I like movies and blah blah blah blah blah</p>
      <div id='selfie'>
        <Picture />
      </div>
    </div>
  );
}

export default Profile;