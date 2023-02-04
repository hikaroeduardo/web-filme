import { useState, useEffect } from "react";
import Api from "../../services/Api";
import { Link } from "react-router-dom";

import "./index.css";

// ======================================================================================
function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMovies = async () => {
            const response = await Api.get("movie/now_playing", {
                params: {
                    api_key: "589bfd98d3915f46941989a45cb2773c",
                    language: "pt-BR",
                    page: 1
                }
            });

            const movies = await response.data.results;

            setMovies(movies);

            setLoading(false);
        };

        loadMovies();
    }, []);

// ======================================================================================
    if(loading) {
        return(
            <div className="loading">
                <span class="loader"></span>
            </div>
        )
    } // loading

    return(
        <div className="home-page">
            <h1>filmes <span>em cartaz</span></h1>

            <div className="list-movies">

                <ul>
                    {movies.map((movie) => {
                        return(
                            <li key={movie.id}>
                                <div className="movie">
                                    <h3>{movie.title}</h3>
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Imagem do filme" />
                                    <Link className="btn-details" to={`detalhes/${movie.id}`}>
                                        <button>+ Detalhes</button>
                                    </Link>
                                </div> {/* movie */}
                            </li>
                        )
                    })}
                </ul>

            </div> {/* list-movies */}
        </div> // home-page
    );
};

export default Home;