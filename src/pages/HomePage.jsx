import { Link } from "react-router-dom";
import beers from '../assets/beers.png';
import newbeer from '../assets/new-beer.png';
import randombeer from '../assets/random-beer.png';

function HomePage() {
    return (
        <div>
            <Link to="/beers">All Beers
            <div>
                <img src={beers} alt="beers" />
                <p>Get all beers!</p>
            </div>
            </Link>
                <Link to="/random-beer">Random Beer
            <div>
                <img src={randombeer} alt="random-beer" />
                <p>Find a random beer!</p>
            </div>
            </Link>
            <Link to="/new-beer">New Beer
            <div>
                <img src={newbeer} alt="new-beer" />
                <p>Create a new beer!</p>
            </div>
            </Link>          
        </div>
    )
}

export default HomePage;
