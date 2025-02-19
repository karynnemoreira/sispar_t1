import { useNavigate } from "react-router";
import Historico from "../../assets/Header/Botão - Histórico.png";
import Home from "../../assets/Header/botão - Home.png";
import Pesquisa from "../../assets/Header/Botão - Pesquisa.png";
import Reembolso from "../../assets/Header/Botão - Reembolso.png";
import Sair from "../../assets/Header/Botão - Sair.png";
import Perfil from "../../assets/Header/image.png";
import Fechar from "../../assets/Header/imagem-fechar-header.png";
import styles from "./NavBar.module.scss";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className={styles.navBarEstilo}>
      <button>
        <img src={Fechar} alt="Botão abrir e fechar" />
      </button>

      <section>
        <img src={Perfil} alt="Imagem de perfil" />

        <button
          onClick={() => {
            navigate("/reembolsos");
          }}
        >
          <img src={Home} alt="Página inicial" />
        </button>

        <button
          onClick={() => {
            navigate("/solicitacao");
          }}
        >
          <img src={Reembolso} alt="Solicitação de reembolso" />
        </button>

        <button
          onClick={() => {
            navigate("/reembolsos");
          }}
        >
          <img src={Pesquisa} alt="Botão de pesquisar" />
        </button>

        <button
          onClick={() => {
            navigate("/solicitacao");
          }}
        >
          <img src={Historico} alt="Botão de histórico" />
        </button>
      </section>

      <button
        className={styles.buttonSair}
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Sair} alt="Botão de sair" />
      </button>
    </nav>
  );
}

export default NavBar;
