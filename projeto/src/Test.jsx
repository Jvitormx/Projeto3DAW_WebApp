import './App.css';
import { useEffect, useState } from 'react';
import NavBarCompra from './components/NavBarCompra';
import WindowCompra from './components/WindowCompra';
import FetchRequest from './components/FetchRequest';

function Test() {

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

  return (
    <>
       <NavBarCompra/>
       <div className="mx-60 my-20 space-y-5 > *">
        <h1>aaaaaaaaaaa</h1>
       <WindowCompra/>
       </div>
    </>
  )
}

export default Test
