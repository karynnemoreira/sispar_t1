import Capa from "../../assets/Tela Login/imagem tela de login.png";
import Logo from "../../assets/Tela Login/logo-ws.png";
function Loggin() {
  return (
    <main>
      <section>
        <p>section vazia para receber o background do navio</p>
      </section>

      <section>
        <img src={Logo} alt="Logo da wilson sons" />

        <h1>Boas vindas ao Novo Portal SISPAR</h1>

        <p>Sistema de Emissão de Boletos e Parcelamento</p>

        <form action="">
          <label> Email</label>
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          />
          <a href=""> Esqueci minha senha </a>
        </form>

        <div>
          <button> Entrar</button>
          <button>Criar conta</button>
        </div>
      </section>
    </main>
  );
}
export default Loggin;
