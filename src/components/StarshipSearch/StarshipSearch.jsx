import { useState } from "react";

const StarshipSearch = (props) => {

    const [ship, setShip] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.fetchData();
        setShip('');
    };

    return (
        <>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="shipSearch">Search by ship: </label>
                <input
                type="text"
                name="shipSearch"
                id="shipSearch"
                value={ship}
                onChange={(e) => setShip(e.target.value)}
                />
                <button type="submit">Search!</button>
            </form>
        </>
    );
};

export default StarshipSearch