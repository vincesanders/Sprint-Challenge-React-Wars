import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';
import Carousel from './components/Carousel';
import Logo from './components/Logo';
import Background from './components/Background';

const MainPage = styled.div`
  position: relative;
  z-index: 4;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterData, setCharacterData] = useState({});
  const [characterArray, setCharacterArray] = useState([]);
  // const [speciesArray, setSpeciesArray] = useState('Loading...');
  // const [films, setFilms] = useState([]);
  let arr = [];
  let arr2 = [];

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.co/api/people/').then(res => {
      setCharacterData(res.data);
      setCharacterArray(res.data.results);
    }).catch(err => {
      console.log(err);
    })
  }, []);

  // useEffect(() => {
  //   for (let character of characterArray) {
  //     getFilms(character.films);
  //     getSpeciesofCharacters(character.species);
  //   }
  // }, [characterArray]) //Fires when characterData is changed

  //   async function getFilms(films) {
  //     if (Array.isArray(films)) {
  //       for (let film of films) { //Get films through loop
  //         await axios.get(film).then(res => {
  //           arr.push(res.data.title);
  //         }).catch(err => {
  //           console.log(err);
  //         });
  //       }
  //       setFilms(arr);
  //     }
  //     //else do nothing
  //   }

  //   async function getSpeciesofCharacters(speciesURL) {
  //     await axios.get(speciesURL).then(res => {
  //       arr2.push(res.data.name);
  //     }).catch(err => {
  //       console.log(err);
  //     });
  //     setFilms(arr2);
  //   }

  return (

    <div className="App">
    <MainPage>
      <h1 className="Header">React Wars</h1>
      <Logo />
      <Carousel dataArray={characterArray} />
    </MainPage>
    <Background />
  </div>
  );
}

export default App;
