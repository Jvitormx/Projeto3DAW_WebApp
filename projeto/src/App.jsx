import './App.css';
import { useEffect, useState } from 'react';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MeioPagina from './components/MeioPagina';
import FetchRequest from './components/FetchRequest';

function App() {

  const [info, setInfo] = useState([{}]);
  
  useEffect(() => {

    const cliente_login = {
      "id_pessoa":4
    };
    
    const tipo_metodo = 'POST';
    
    const url_retornoCliente = 'http://localhost/Projeto3DAW_WebApp/backEnd/retornoCliente.php';

    const Busca = async() => {
      const dados = await FetchRequest(url_retornoCliente, tipo_metodo, cliente_login);
      const info = await dados.json();
      console.log(info[0].name);
      setInfo(info);
    };
  
    Busca();
  }, []);

  return (
    <>
       <Navbar/>
       <h1>aaaa{info[0].nome}</h1>
       <div className="m-24 space-y-20 > *">
       <MeioPagina/>
       <Feed />
       </div>
       <Footer/>
    </>
  )
}

export default App
