import styles from "./Reembolsos.module.scss";
import Home from "../../assets/Dashboard/Vector (1).png";
import Seta from "../../assets/Dashboard/Vector.png";
import Analises from "../../assets/Dashboard/Análises.png";
import NumeroAnalises from "../../assets/Dashboard/N-Análises.png";
import NumeroAprovados from "../../assets/Dashboard/N-Aprovados.png";
import NumeroRejeitados from "../../assets/Dashboard/N-Rejeitados.png";
import NumeroSolicitados from "../../assets/Dashboard/N-Solicitados.png";
import Sistema from "../../assets/Dashboard/Sistema-atualizado.png";
import SolicitarHistorico from "../../assets/Dashboard/Solicitar - Histórico.png";
import SolicitarReembolso from "../../assets/Dashboard/Solicitar - Reembolso.png";

function Reembolsos() {
  return (
    <>
      <header>
        <img src={Home} alt="Vetor de uma casinha" />
        <img src={Seta} alt="Vetor de uma setinha" />
        <p>Reembolsos</p>
      </header>

      <main className={styles.mainReembolsos}>
        <section className={styles.centralizar}>
          <h1>Sistema de Reembolsos</h1>
          <p>
            Solicite novos pedidos de reembolso, visualize solicitações em
            análise e todo o histórico.
          </p>

          <section className={styles.containerCards}>
            <article>
              <img
                src={SolicitarReembolso}
                alt="ícone para solicitação de reembolso"
              />
              <h3> Solicitar Reembolso</h3>
            </article>

            <article>
              <img src={Analises} alt="ícone para análises" />
              <h3> Verificar análises</h3>
            </article>

            <article>
              <img src={SolicitarHistorico} alt="ícone de histórico" />
              <h3>Histórico</h3>
            </article>
          </section>

          <section className={styles.containerStatus}>
            <div>
               
                      <img className={styles.img1} src={NumeroSolicitados} alt="" />  
                
              <h4>182</h4>
              <p>Solicitados</p>
            </div>

            <div>
              <img className={styles.img2} src={NumeroAnalises} alt="" />
              <h4>74</h4>
              <p>Em análise</p>
            </div>

            <div>
              <img className={styles.img3} src={NumeroAprovados} alt="" />
              <h4>195</h4>
              <p>Aprovados</p>
            </div>

            <div>
              <img className={styles.img4} src={NumeroRejeitados} alt="" />
              <h4>41</h4>
              <p>Rejeitados</p>
            </div>
          </section>

<section className={styles.containerSistema}>
<img src={Sistema} alt="" />
<p>Sistema atualizado.</p>
</section>


        </section>
      </main>
    </>
  );
}

export default Reembolsos;
