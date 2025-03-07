// import { useState } from 'react';
import './App.css'
import StarshipSearch from './components/StarshipSearch/StarshipSearch';
import * as starshipService from './services/starshipService.js';

const App = () => {

  // const [ships, setShips] = useState({});

  const fetchData = async () => {
    const data = await starshipService.show();
    console.log(data);
  };

  return (
    <main>
      <h1>Star Wars <a href="https://swapi.info/">API</a></h1>
      <StarshipSearch fetchData={fetchData}/>
    </main>
  );
}

export default App