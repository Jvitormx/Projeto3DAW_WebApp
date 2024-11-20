import './App.css';
import { useEffect, useState } from 'react';
import NavBarCompra from './components/NavBarCompra';
import FetchRequest from './components/FetchRequest';
import WindowCompra from './components/WindowCompra';
import { useLocation } from 'react-router-dom';

function Titulo() {
  return (
    <h2 className="py-3 px-16 font-bold text-gray-900 md:text-5xl">
      Ônibus disponíveis | RJ {'->'} SP
    </h2>
  )
}

function Compra() {

  const location = useLocation();
  const id_rota = location.state;

  console.log("testerota: "+id_rota);

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
       <Titulo/>
       <WindowCompra receberId={id_rota}/>
       </div>
    </>
  )
}

export default Compra
