import Capa from "../../assets/Tela Login/imagem tela de login.png";
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from "./Loggin.module.scss";

function Loggin() {
  return (
    <main>
      <section className={styles.containerLogin}></section>

      <section className={styles.containerForm}>
        <img src={Logo} alt="Logo da wilson sons" />

        <h1>Boas vindas ao Novo Portal SISPAR</h1>

        <p>Sistema de Emissão de Boletos e Parcelamento</p>

        <form action="">
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          />
          <a href=""> Esqueci minha senha </a>

          <div className={styles.buttonGroup}>
            <button> Entrar</button>
            <button>Criar conta</button>
          </div>

        </form>


      </section>
    </main>
  );
}
export default Loggin;
