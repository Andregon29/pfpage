import React from 'react';
import './App.css';
import java from './java.png';
import england from './england.png';
import webdevlogo from './webdevlogo.png';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Cover from './Cover.png';
import bg from './bg.jpg';

function App() {

  const scrollToAbout = () => {
    window.scrollTo({
      top: 20,
      behavior: 'smooth'
    });
  };

  const scrollToWork = () => {
    window.scrollTo({
      top: 150,
      behavior: 'smooth'
    });
  };
  const scrollToContacts = () => {
    window.scrollTo({
      top: 300,
      behavior: 'smooth'
    });
  };


  return (
    <div>
    
    <Parallax pages={3}>
    <ParallaxLayer 
    speed={0.1}
    factor={1.1}
    style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover'
    }}>

    <div className='navigationContainer'>
      <ul className='navigation'>
        <li><button className='navButton' onClick={scrollToAbout}>About</button></li>
        <li><button className='navButton' onClick={scrollToWork}>My Work</button></li>
        <li><button className='navButton' onClick={scrollToContacts}>Contacts</button></li>
      </ul>
    </div>

    <div className='welcome-h'>
    <h1 id='welcomeheader'>
    Welcome to my portfolio page, I'm Giorgi
    </h1> 

    </div>
    
    

    </ParallaxLayer>   
    
    <ParallaxLayer 
    className='secondPage'
    offset={0.9}
    factor={1.7}
    speed={0.5}
    style={{
      backgroundColor: '#2d062e',
      backgroundSize: 'cover'
    }}>
      <h1 className='about'>
       About Me
      </h1>
      <p>
        I am a Computer Science student based in Tbilisi, and I study at Kutaisi International University
      </p>
      
      <h1 id='myskills-div'>My Skills</h1>

      <div id='javaDiv'>
      <img src={java} alt='' id='javalogo'></img>
      <p id='skills-p'>I have a decent experience in OOP, particularly in Java and have a good understanding of functions, inheritance and classes.</p>
      </div>   
      
      
      <div id='englishDiv'>
      <img src={england} alt='' id='englandlogo'></img>
      <p id='skills-p'>I have a good knowledge English and can speak fluently. Currently at C1 level.</p>
      </div>     
      
      
       <div id='webdevdiv'>
      <img src={webdevlogo} alt='' id='webdevlogo'></img>
      <p id='skills-p'>I have a base level understanding of Vanilla JS and React and want to become proficient in this field. </p>
      </div>


    </ParallaxLayer>

    <ParallaxLayer className='thirdPage'
    offset={1.9}
    factor={1.5}
    speed={0.4}
    style={{
      backgroundColor: "#110f22",
      backgroundSize: 'cover',
      color: 'white'

    }}
    >

      <h1 id='myWork-h'>My Work</h1>

      <div className='pagePreview'>
        <img src={Cover} id='pageImg'></img>
        <ul className='pagePreviewList'>
          <li>
            Implemented a Log-In/Register page with smooth transitions using Vanilla Javascript
          </li>
          <ul>
            <li>Learned about:</li>
              <li>Content alignment</li>
              <li>Background filters</li>
              <li>Transitions</li>
              <li>Many types of inputs</li>

          </ul>

        </ul>
      </div>

      <div id='contactDiv'>
        <h1>Interested in working with me?</h1>
      </div>


        <div id='contacts'>
          <a href="mailto:maisuradze200329@gmail.com"> Contact Me </a>
        </div>

    </ParallaxLayer>

    </Parallax>
    </div>
  );
}

export default App;
