import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    getRandomBeer();
  }, []);

  const getRandomBeer = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      console.log(response.data);
      setRandomBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!randomBeer) {
    return <p>... Loading</p>;
  }

  return (
    <div>
      <h1 className="title">{randomBeer.name}</h1>
      <div className="wrapper">
        <div>
          <img width={100} src={randomBeer.image_url} alt={randomBeer.name} />
        </div>
        <div className="random-container">
          <p>{randomBeer.tagline}</p>
          <p>First Brewed: {randomBeer.first_brewed}</p>
          <p>Attenuation Level: {randomBeer.attenuation_level}</p>
          <p>{randomBeer.description}</p>
          <p>Contributed by: {randomBeer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomBeerPage;
