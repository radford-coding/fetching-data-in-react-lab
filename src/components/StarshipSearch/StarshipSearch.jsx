import { useState } from "react";

const StarshipSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [prevSearchTerm, setPrevSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.searchShips(searchTerm);
        setPrevSearchTerm(searchTerm);
        setSearchTerm('');
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search!</button>
            </form>
        </>
    );
};

export default StarshipSearch