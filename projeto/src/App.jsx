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
    
    let tipo_metodo = 'POST';
    
    const url_retornoCliente = 'http://localhost/Projeto3DAW_WebApp/backEnd/retornoCliente.php';

    const BuscaCliente = async() => {
      let dados = await FetchRequest(url_retornoCliente, tipo_metodo, cliente_login);
      const info = await dados.json();
      console.log(info[0].estado);
      setInfo(info);
      console.log(info);
    };
  
    BuscaCliente();
  }, []);

  const cod_estado = info[0]?.estado;

  return (
    <>
       <Navbar/>
       <div className="m-24 space-y-20 > *">
       <MeioPagina/>
       {cod_estado !== undefined ? (
        <Feed cliente_cod={cod_estado} />
      ) : (
        <p> </p>
      )}
       </div>
       <Footer/>
    </>
  )
}

export default App
