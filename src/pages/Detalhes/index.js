import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Api from "../../services/Api";

import "./index.css";

// ===================================================================
function Detalhes() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadDetailsMovie = async () => {
            const response = await Api.get(`movie/${id}`, {
                params: {
                    api_key: "589bfd98d3915f46941989a45cb2773c",
                    language: "pt-BR"
                }
            });

            const dataMovie = await response.data;

            setMovie(dataMovie);
            setLoading(false);
        };

        loadDetailsMovie();
    }, []);
// ===================================================================
    if(loading) {
        return(
            <div className="loading">
                <span class="loader"></span>
            </div>
        )
    } // loading
    return(
        <div className="page-details">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="Imagem do filme" />

            <h3>Sinopse:</h3>
            <span>{movie.overview}</span>

            <p><span>Avaliação:</span> {movie.vote_average} / 10</p>

            <div className="btn-action">
                <button>Salvar</button>
                <Link to="/">
                    <button>Voltar</button>
                </Link>
            </div> {/* btn-action */}
        </div>
    );
};

export default Detalhes;