import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Buttons from "../../components/Buttons";
import "./index.css";

// =======================================================================
function Salvos() {
    const [movieSave, setMovieSave] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const movies = localStorage.getItem("@webfilme");

        const movieList = JSON.parse(movies) || [];

        console.log(movieList)

        setMovieSave(movieList);
        setLoading(false);
    }, []);

    const deleteMovie = (id) => {
        let filterMovies = [];

        movieSave.map((item) => {
            if(item.id !== id) {
                filterMovies.push(item)
            };
        });

        setMovieSave(filterMovies);
        toast.success("Filme removido com sucesso!");

        localStorage.setItem("@webfilme", JSON.stringify(filterMovies));
    };
// =======================================================================
    if(loading) {
        return(
            <div className="loading">
                <span className="loader"></span>
            </div>
        )
    } // loading
    return(
        <div className="movies-save">
            <h1>Filmes salvos</h1>
            {movieSave.length === 0 && <p className="not-movie">Você não possui nenhum filme salvo!</p>}
            <ul className="list">
                {movieSave.map((item) => {
                    return(
                        <li key={item.id}>
                            <p>{item.title}</p>
                            <div className="action">
                                <Link to={`/detalhes/${item.id}`}>Ver detalhes</Link>
                                <Buttons className="btn-delete" onClick={() => deleteMovie(item.id)}>Excluir</Buttons>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div> // movies-save
    );
};

export default Salvos;