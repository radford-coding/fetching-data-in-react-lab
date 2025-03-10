const StarshipList = (props) => {
    return (
        <ul>
            {props.ships.map((ship, index) => (
                <li key={index}>
                    <h3>{ship.name}</h3>
                    <p>Class: {ship.starship_class}</p>
                    <p>Manufacturer: {ship.manufacturer}</p>
                    <p>Model: {ship.model}</p>
                </li>
            ))}
        </ul>
    );
};

export default StarshipList