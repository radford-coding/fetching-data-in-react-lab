import { useEffect, useState } from 'react';
import './App.css'
import StarshipSearch from './components/StarshipSearch/StarshipSearch';
import * as starshipService from './services/starshipService.js';
import StarshipList from './components/StarshipList/StarshipList.jsx';

const App = () => {

  const [ships, setShips] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);

  const searchShips = (searchString) => {
    const regex = new RegExp(searchString, 'i');
    console.log('regex: ', regex);
    const searchResults = ships.filter((ship) => {
      ship.name.match(regex);
    });
    console.log('search results: ', searchResults);
    setDisplayedStarships(searchResults);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await starshipService.show();
      setShips(data);
      setDisplayedStarships(data);
    };
    fetchData();    
  }, []);

  return (
    <main>
      <h1>Star Wars <a href="https://swapi.info/">API</a></h1>
      <StarshipSearch searchShips={searchShips}/>
      <section>
        <StarshipList ships={displayedStarships} />
      </section>
    </main>
  );
}

export default App