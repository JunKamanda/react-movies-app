import axios from "axios";
import { useEffect, useState } from "react";

const Card = () => {
  //State
  const [movies, setMovies] = useState([]);
  const genreMap = {
    28: "Action",
    12: "Aventure",
    16: "Animation",
    35: "Comédie",
    80: "Crime",
    99: "Documentaire",
    18: "Drame",
    10751: "Famille",
    14: "Fantastique",
    36: "Histoire",
    27: "Horreur",
    10402: "Musique",
    9648: "Mystère",
    10749: "Romance",
    878: "Science-Fiction",
    10770: "Téléfilm",
    53: "Thriller",
    10752: "Guerre",
    37: "Western",
  };

  //Comportement
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR`
      )
      .then((res) => {
        setMovies(res.data.results || []);
        console.log(res.data.results);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération :", error);
      });
  }, []);

  //Render
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.original_title}
            />
            <h3>{movie.title}</h3>
            <p className="release_date">{movie.release_date}</p>
            <p className="star">{movie.vote_average}/10 ✨</p>
            <div className="genre">
              {movie.genre_ids.map((id) => (
                <span key={id}>{genreMap[id]} </span>
              ))}
            </div>
            <h3>{movie.overview}</h3>
            <button>Ajouter aux coups de coeur</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
