import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loggin from "./components/loggin/Loggin.jsx";
import Reembolsos from "./components/reembolsos/Reembolsos.jsx";
import Solicitacao from "./components/solicitacao/Solicitacao.jsx";
import "./global.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loggin/>} />
        <Route path="/reembolsos" element={<Reembolsos/>} />
        <Route path="/solicitacao" element={<Solicitacao/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
