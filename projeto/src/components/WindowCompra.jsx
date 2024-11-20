import { useEffect, useState } from 'react';
import FetchRequest from './FetchRequest';
import { Outlet, useNavigate } from 'react-router-dom';

function Nivel({estado}) {
  return (
    <>
    <li>
    <h1>{estado}</h1>
  </li>

  <li className="rtl:rotate-180">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </li>
    </>
  )
}

function SelecionarDia({busca_saida}) {

  const navigate = useNavigate();

  const navegarTabela = (infoData) => {
    console.log("aloo2" + infoData);
    navigate('Projeto3DAW_WebApp/projeto/src/components/FormComprar', {state: {infoData}});
  };

  const dias = busca_saida.map(saida => 

    <a
    onClick={() => navegarTabela(saida.data)}
    className="inline-block border-opacity-10 rounded-xl border px-3 py-1 text-sm font-medium text-green-700 bg-green-200"
    >
      {saida.dia} | {saida.data}
  </a>
    

  )

  return <>{dias}</>
}

function WindowCompra({receberId}) {

  console.log("teste: "+receberId);

  const [info, setInfo] = useState([{}]);
  
  useEffect(() => {

    const id_saida = {
      "id_saida":receberId
    };
    
    const tipo_metodo = 'POST';
    
    const url_retornoDiaSaida = 'http://localhost/Projeto3DAW_WebApp/backEnd/retornoDiaSaida.php';

    const BuscaDiaSaida = async() => {
      let dados = await FetchRequest(url_retornoDiaSaida, tipo_metodo, id_saida);
      const info = await dados.json();
      setInfo(info);
    };
  
    BuscaDiaSaida();
  }, []);

    return (
    <>
    <section className="overflow-hidden bg-white-50">
      <nav className="px-16" aria-label="Breadcrumb">
        <ol className="space-x-3 > * font-normal text-base flex items-center gap-1 text-sm text-gray-600">
          <Nivel estado={"Selecionar dia"}/>
    {info !== undefined ? (
        <SelecionarDia busca_saida={info}/>
      ) : (
        <p> </p>
      )}
       </ol>
     </nav>
      <Outlet/>
    </section>
    </>
    )
}

export default WindowCompra