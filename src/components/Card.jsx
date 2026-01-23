import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Card = ({ search }) => {
  //STATE
  const [movies, setMovies] = useState([]);

  //COMPORTEMENT
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`,
      )
      .then((res) => {
        setMovies(res.data.results || []);
        console.log(res.data.results);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération :", error);
      });
  }, [search]);

  //Genre Map
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

  const dateFormater = (date) => {
    let [year, month, day] = date.split("-");
    return [year, month, day].join("/");
  };

  //RENDER
  return (
    <CardContainer>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.backdrop_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.original_title}
              />
            ) : (
              <img
                src="./src/assets/movieTitle.jpeg"
                alt={movie.original_title}
              />
            )}
            <h3>{movie.title}</h3>
            {movie.release_date ? (
              <p className="release_date">
                Sorti le : {dateFormater(movie.release_date)}
              </p>
            ) : null}
            <p className="star">Note : {movie.vote_average}/10 ✨</p>
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
    </CardContainer>
  );
};

export default Card;

// Styled Components

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;

    li {
      position: relative;
      flex: 0 1 260px; // largeur fixe
      height: auto;
      padding: 20px;
      background: linear-gradient(180deg, #ff0084, #080c28);
      box-shadow: inset 0px 0px 20px 0px #000000;
      transition: 0.3s all ease-in;

      border-radius: 20px;
      padding: 14px 14px 56px;

      overflow: hidden;

      img {
        width: 100%;
        height: clamp(140px, 18vw, 180px);
        margin: 20px auto;
        object-fit: cover;
        border-radius: 16px;
        box-shadow: 0px 0px 5px 0px #ff0084;
      }
      h3 {
        font-size: 1.2em;
        font-weight: 600;
        margin: 6px 0;
        transition: 0.35s ease-in;

        &:last-of-type {
          font-size: 13px;
          line-height: 1.4;
          opacity: 0.9;
          max-height: 5.2em;
          overflow: hidden;
          mask-image: linear-gradient(to bottom, black 70%, transparent);
          transition: 0.35s ease-in;

          &:hover {
            overflow-y: auto;
          }

          &::-webkit-scrollbar {
            width: 4px;
          }
          &::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.35);
            border-radius: 4px;
          }
          &::-webkit-scrollbar-track {
            background: transparent;
          }
        }
      }

      .release_date {
        font-size: 13px;
        opacity: 0.9;
      }

      .star {
        font-size: 14px;
        font-weight: 600;
        margin: 6px 0;
      }

      .genre {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin: 10px 0 14px;
      }

      .genre span {
        font-size: 11px;
        padding: 4px 10px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.12);
        backdrop-filter: blur(4px);
      }

      button {
        position: absolute;
        left: 50%;
        bottom: 14px;
        transform: translateX(-50%);

        padding: 10px 18px;
        border-radius: 14px;
        border: none;
        cursor: pointer;

        background: #ff0084;
        color: white;
        font-size: 12px;
        font-weight: 600;

        box-shadow:
          0 12px 30px #ff0084,
          0 4px 12px #b90060;

        transition:
          transform 0.3s ease,
          box-shadow 0.3s ease;

        &:hover {
          transform: translateX(-50%) translateY(-4px);
          box-shadow:
            0 18px 40px #ff008487,
            0 6px 16px #b9006072;
        }
      }
    }
  }
`;
