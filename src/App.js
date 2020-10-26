import React from 'react';
import './App.css';
import {Header} from './Components/Portfolio/Header';
import {Sectionone} from './Components/Portfolio/Sectionone';
import {Services} from './Components/Portfolio/Services'
import {Reviews} from './Components/Portfolio/Reviews';
import {Footerweb} from './Components/Portfolio/Footerweb'
function App() {
  return (
    <div className="App">
      <Header/>
      <Sectionone/>
      <Services />
      <Reviews/>
      <Footerweb/>
    </div>
  );
}

export default App;
