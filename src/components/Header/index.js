import { Link } from "react-router-dom";
import "./index.css";

function Header() {
    return(
        <div className="header">
            <Link to="/">
                <h1>Web<span>Filmes</span></h1>
            </Link>

            <div className="search">
                <input type="text" placeholder="Pesquise sobre um filme..." />
            </div> {/* search */}

            <Link to="/salvos">
                <button>Filmes Salvos</button>
            </Link>
        </div>
    );
};

export default Header;