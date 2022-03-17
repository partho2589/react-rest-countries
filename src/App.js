import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadContries> </LoadContries>
    </div>
  );
}

function LoadContries (){
  const [countries, setcountries] = useState([]);

  useEffect( () => {

    fetch("https://restcountries.com/v3.1/all")
    .then (res=> res.json())
    .then (data => setcountries(data))

  },[])

  return(
    <div>
      <h1> Visition Every country of the world!!!!</h1>
      <h3> Available countries: {countries.length}</h3>
    </div>
  )
}

export default App;
