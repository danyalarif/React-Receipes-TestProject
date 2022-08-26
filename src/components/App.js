import React from 'react';
import Login from './Login';
import Navbar from './Navbar';
import Home from './Home';
import Player from './Player';
import FileUpload from './FileUpload';
import '../css/app.css'; 

function App() {
  return (
    <>
      <Navbar />
      <FileUpload />
    </>
  )
}

export default App;
