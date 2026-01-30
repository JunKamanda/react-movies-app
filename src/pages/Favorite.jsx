import React from "react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const Favorite = () => {
  //STATE
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  //COMPORTEMENT
  useEffect(() => {
    const ids = localStorage.movies ? localStorage.movies.split(",") : [];

    Promise.all(
      ids.map((id) =>
        axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`,
        ),
      ),
    ).then((responses) => {
      setFavoriteMovies(responses.map((res) => res.data));
    });
  }, []);

  //RENDER
  return (
    <div>
      <Header />
      <h2>Coup de coeur❤️</h2>
      <div className="result">
        <Card moviesData={favoriteMovies} />
      </div>
    </div>
  );
};

export default Favorite;
