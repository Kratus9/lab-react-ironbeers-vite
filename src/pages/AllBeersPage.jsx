import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  const getAllBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  if (!beers) {
    return <p>... Loading</p>;
  }

  return (
    <div>
      <h1 className="title">
        <span className="title-span">Check all Beers</span>
      </h1>
      <div>
        <ul className="wrapper">
          {beers.map((beer) => (
            <li key={beer._id} className="card-container">
              <Link to={`/beers/${beer._id}`}>
                <img src={beer.image_url} alt={beer.name} height={250}/>
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>Created by: {beer.contributed_by}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AllBeersPage;
