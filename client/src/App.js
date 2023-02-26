import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/Home";
import CreateRecipe from "./Components/CreateRecipe/CreateRecipe.jsx";
import Card from "./Components/Card/Card";
import Details from "./Components/Details/Details";
import Error404 from "./Components/Error 404/Error404";

function App() {
  return (
    <div className="App">
      <h1>Henry Food</h1>
    </div>
  );
}

export default App;
