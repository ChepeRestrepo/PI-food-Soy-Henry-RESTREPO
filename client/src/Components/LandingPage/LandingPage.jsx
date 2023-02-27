import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.scss";

export default function LandingPage() {
  return (
    <div className="landing__page-container">
      <h1 className="landing__title">Libro de Recetas</h1>
      <Link to="/home">
        <button class="button-36-landing landing__button" role="button">
          Home
        </button>
      </Link>
      <h2 className="landing__createby">JOSE RESTREPO RUEDA</h2>
    </div>
  );
}
