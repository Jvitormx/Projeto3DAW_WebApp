import './App.css';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MeioPagina from './components/MeioPagina';
import FetchRequest from './components/FetchRequest.js';

const cliente_login = {
  "id_pessoa":4
};

const tipo_metodo = 'POST';

const url_retornoCliente = 'http://localhost/Projeto3DAW_WebApp/backEnd/retornoCliente.php';

async function retornoCliente() {
  const dados = await FetchRequest(url_retornoCliente, tipo_metodo, cliente_login);
  console.log(dados);
}

retornoCliente();

/*const url = "opt/lampp/htdocs/Projeto3DAW_WebApp/backEnd/retornoCliente.php";

async function enviar_dados() {
  const dados_cliente = await FetchRequest(url, 'POST', cliente_login);

  console.log(dados_cliente);
}

enviar_dados();
*/

function App() {

  return (
    <>
       <Navbar/>
       <div className="m-24 space-y-20 > *">
       <MeioPagina/>
       <Feed/>
       </div>
       <Footer/>
    </>
  )
}

export default App
