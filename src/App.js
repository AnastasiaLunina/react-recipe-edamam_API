import React from 'react';

import Particle from '../src/components/Particle/Particle';
import InputSearch from '../src/components/InputSearch/InputSearch';

import './App.css';
import github from './img/github.png';
import linkedin from './img/linkedin.png';

function App() {

    return (
      <div className="App">
        <div className='bottom-wrapper'>
          <p className="newsletter-sign-made">Made with ❤️ using Edamam API</p>
          <div className='contact-container'>
            {/* eslint-disable react/jsx-no-target-blank*/}
            <a href="https://github.com/AnastasiaLunina" target='_blank'><img src={github} alt="github" className="newsletter-sign-github" width='30px' height='30px'></img></a>
            <a href="https://www.linkedin.com/in/anastasia-lunina/" target='_blank'><img src={linkedin} alt="linkedin" className="newsletter-sign-linkedin" width='30px' height='30px'></img></a>
          </div>
        </div>
        <Particle />
        <InputSearch />
      </div>
    );
  }

export default App;
