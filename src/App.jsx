import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from ""

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>LAB | React IronBeers</h1>
      <Routes>
        <Route to={`/`}>Home</Route>
        <Route to={`/beers`}>All Beers</Route>
        <Route to={`/random-beer`}>Random Beer</Route>
        <Route to={`/new-beer`}>New Beer</Route>
        <Route to={`/beers/:beerId`}>Beer Details</Route>
      </Routes>
    </div>
  );
}

export default App;
