import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import Salvos from "./pages/Salvos";
import Detalhes from "./pages/Detalhes";

import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000} />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/salvos" element={<Salvos />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
