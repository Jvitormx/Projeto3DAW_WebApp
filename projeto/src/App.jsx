import './App.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from "emailjs-com";

import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MeioPagina from './components/MeioPagina';
import FetchRequest from './components/FetchRequest';

import NavBarCompra from './components/NavBarCompra';
import WindowCompra from './components/WindowCompra';
import Pagamento from './components/Pagamento';

function Titulo({receberNome}) {
  return (
    <h2 className="py-3 px-16 font-bold text-gray-900 md:text-5xl">
      Ônibus disponíveis | {receberNome}
    </h2>
  )
}

function App() {

    /*Tela inicial / Feed */ 

  const [isVisibleHomePage, setIsVisibleHomePage] = useState(true);

  const [dadosRota, setDadosRota] = useState(null);

  console.log(dadosRota);

  useEffect(() => {
    if (dadosRota) {
      setIsVisibleHomePage(false);
      console.log(dadosRota)
    }
  }, [dadosRota]);

  const callBackRaizHomePage = (data) => {
    setDadosRota(data);
  };

  const [info, setInfo] = useState([{}]);
  
  useEffect(() => {
    
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

  /*Tela Formulario / Pagamento*/ 

  const [isVisible, setIsVisible] = useState(true);

  const [dadosCompra, setDadosCompra] = useState(null);

  console.log(dadosCompra);

  useEffect(() => {
    if (dadosCompra) {
      dadosCompra.nome_viajem=dadosRota.id_nome_rota;
      setIsVisible(false);
    }
  }, [dadosCompra]);

  const callBackRaiz = (data) => {
    setDadosCompra(data);
  };
  
  useEffect(() => {

    const cliente_login = {
      "id_pessoa":4,
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

    const navigate = useNavigate();

  const navegarAdm = () => {
    navigate('projeto/src/Adm');
  };

  const cliente_login = {
    "id_pessoa":4,
    "email":"joao.23104708360056@faeterj-rio.edu.br",
    "nome":"cliente1"
  };

  return (
    <>
       {isVisibleHomePage && <Navbar/>}
       {!isVisibleHomePage && <button onClick={navegarAdm}>adm {"->"}</button>}
       {isVisibleHomePage && <div className="m-24 space-y-20 > *">
       {isVisibleHomePage && <MeioPagina/>}
       {isVisibleHomePage && cod_estado !== undefined ? (
        <Feed onSendDataRaiz={callBackRaizHomePage} cliente_cod={cod_estado} />
      ) : (
        <p> </p>
      )}
       </div>}
       {isVisibleHomePage && <Footer/>}

       {!isVisibleHomePage && <NavBarCompra/>}
       <div className="mx-60 my-20 space-y-5 > *">
       {!isVisibleHomePage && isVisible && <Titulo receberNome={dadosRota.id_nome_rota}/>}
       {!isVisibleHomePage && isVisible && <WindowCompra receberId={dadosRota.id_rota} onSendDataRaiz={callBackRaiz}/>}
       {!isVisible && <Pagamento dadosCliente={cliente_login} recebeDadosCompra={dadosCompra}/>}
       </div>
    </>
  )
}

export default App
