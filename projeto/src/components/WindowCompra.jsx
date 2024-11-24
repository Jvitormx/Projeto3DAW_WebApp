import { useEffect, useState } from "react";
import FetchRequest from "./FetchRequest";
import { Outlet, useNavigate } from "react-router-dom";
import FormComprar from "./FormComprar";
import Nivel from "./Nivel";

function SelecionarDia({ onSendDataForm, busca_saida }) {

  const sendData = (data) => {
    onSendDataForm(data); 
  };

  const dias = busca_saida.map((saida) => (
    <a
      onClick={() => sendData(saida.data)}
      className="inline-block border-opacity-10 rounded-xl border px-3 py-1 text-sm font-medium text-green-700 bg-green-200"
    >
      {saida.dia} | {saida.data}
    </a>
  ));

  return <>{dias}</>;
}

function WindowCompra({ receberId, onSendDataRaiz }) {

  const [isVisible, setIsVisible] = useState(false);

  const [data, setData] = useState(null);

  const [dataCompra, setDataCompra] = useState(null);

  const callBackForm = (data) => {
    setData(data);
  };

  const callBackCompra = (data) => {
    setDataCompra(data);
  };

  const sendData = (data) => {

    onSendDataRaiz(data); 
  };

  useEffect(() => {
    if (dataCompra) {
      sendData(dataCompra);
    }
  }, [dataCompra]);
  
  useEffect(() => {
    if (data) {
      setIsVisible(true);
    }
  }, [data]);
  

  const [info, setInfo] = useState([{}]);

  useEffect(() => {
    const id_saida = {
      id_saida: receberId,
    };

    const tipo_metodo = "POST";

    const url_retornoDiaSaida =
      "http://localhost/Projeto3DAW_WebApp/backEnd/retornoDiaSaida.php";

    const BuscaDiaSaida = async () => {
      let dados = await FetchRequest(
        url_retornoDiaSaida,
        tipo_metodo,
        id_saida
      );
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
            <Nivel estado={"Selecionar dia"} />
            {info !== undefined ? (
              <SelecionarDia onSendDataForm={callBackForm} busca_saida={info} />
            ) : (
              <p> </p>
            )}
          </ol> 
        </nav>
        {isVisible && <FormComprar onSendDataCompra={callBackCompra} dados_compra={data}/>}
      </section>
    </>
  );
}

export default WindowCompra;
