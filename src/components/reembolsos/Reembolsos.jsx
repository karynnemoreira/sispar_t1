import styles from "./Reembolsos.module.scss"
import Home from "../../assets/Header/botão - Home.png"
import Seta from "../../assets/Dashboard/Vector.png"
import Analises from "../../assets/Dashboard/Análises.png"
import NumeroAnalises from "../../assets/Dashboard/N-Análises.png"
import NumeroAprovados from "../../assets/Dashboard/N-Aprovados.png"
import NumeroRejeitados from "../../assets/Dashboard/N-Rejeitados.png"
import NumeroSolicitados from "../../assets/Dashboard/N-Solicitados.png"
import Sistema from "../../assets/Dashboard/Sistema-atualizado.png"
import SolicitarHistorico from "../../assets/Dashboard/Solicitar - Histórico.png"
import SolicitarReembolso from "../../assets/Dashboard/Solicitar - Reembolso.png"

function Reembolsos(){
    return(
        <>
        <header>
            <img src={Home} alt="Vetor de uma casinha" />
            <img src={Seta} alt="Vetor de uma setinha" />
            <p>Reembolsos</p>
        </header>
        </>
    )
}

export default Reembolsos