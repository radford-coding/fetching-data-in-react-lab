const STARSHIPS_URL = 'https://swapi.info/api/starships';

const show = async () => {
    const data = await fetch(STARSHIPS_URL)
        .then(res => res.json())
        .catch(err => console.log(err));
    return data;
};

export { show }