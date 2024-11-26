import { useEffect, useState } from "react";
import FetchRequest from "./FetchRequest";
import Nivel from "./Nivel";

function SelecionarTicket({onSendDataTicket, dados_rota}) {

  const sendData = () => {

    const dados_pagamento = {
      id_onibus: dados_rota.cod_onibus,
      id_rota: dados_rota.id,
      data_rota: dados_rota.data,
      tipo_onibus: dados_rota.onibus,
      horario: dados_rota.saida,
      valor: dados_rota.preco,
      quantidade: document.querySelector('input[type="number"]').value || 1
    };

    onSendDataTicket(dados_pagamento); 
  };

  const placeHolder1 = "Quantos acentos? max: ";
  const placeHolder2 = dados_rota.info_capacidade;
  const placeHolder3 = placeHolder1 + placeHolder2;

  return (
    <nav className="px-16 py-2" aria-label="Breadcrumb">
          <ol className="space-x-3 > * font-normal text-base flex items-center gap-1 text-sm text-gray-600">
            <Nivel estado={"Selecionar acentos"}/>
            <p>{dados_rota.onibus} | {dados_rota.saida}</p>
            <form className="space-x-3 > * font-normal text-base flex items-center gap-1">
            <input placeholder={placeHolder3} type="number" className="bg-transparent w-full rounded-md border-gray-200 border-1 p-2 pe-12 text-sm"/>
            <button
            onClick={() => sendData()}
            type="submit"
            className="rounded bg-orange-400 px-4 py-2 text-sm font-medium text-white"
            >
        Pagamento
      </button>
            </form>
          </ol>
    </nav>
  )
}

function FormComprar({dados_compra, onSendDataCompra}) {

  const [data, setData] = useState(null);

  const callBackTicket = (data) => {
    setData(data);
  };

  const sendData = (data) => {
    onSendDataCompra(data); 
  };
  
  useEffect(() => {
    if (data) {
      sendData(data);
    }
  }, [data]);

  const [isVisible, setIsVisible] = useState(false);
  const [componentData, setComponentData] = useState({});

  const selecionarBotao = (data) => {
    setComponentData(data); 
    setIsVisible(true);     
  };

  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (dados_compra) {
      const data_envio = {
        data_envio: dados_compra.data_viajem, 
        id_envio: dados_compra.id_viajem
      };

      const tipo_metodo = "POST";
      const url_retornoRotaOnibus =
        "http://localhost/Projeto3DAW_WebApp/backEnd/retornoRotaOnibus.php";

      const BuscaDiaSaida = async () => {
        try {
          const response = await FetchRequest(
            url_retornoRotaOnibus,
            tipo_metodo,
            data_envio
          );
          const jsonData = await response.json();
          setInfo(jsonData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      BuscaDiaSaida();
    }
  }, [dados_compra]); 

  return (
    <>
    <div className="p-8 md:p-12 lg:px-16 lg:py-5">
      <div className="ltr:sm:text-left rtl:sm:text-right">
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
          <div className="p-4 sm:p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Tipo
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Horário
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Assentos Restantes
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Rota
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Preço
                    </th>
                    <th className="px-4 py-2"></th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {info.length > 0 ? (
                    info.map((dadoRota) => ( 
                      <tr key={dadoRota.id_rota_onibus}>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {dadoRota.tipo_onibus_nome}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {dadoRota.saida_hora}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          0 de {dadoRota.capacidade}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {dadoRota.tipo_rota}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          R${dadoRota.preco}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2">
                          
                          <button onClick={() => selecionarBotao({ cod_onibus: dadoRota.id_onibus, data: dadoRota.data_saida, id: dadoRota.id_rota, preco: dadoRota.preco, info_capacidade: dadoRota.capacidade_atual, onibus:dadoRota.tipo_onibus_nome, saida:dadoRota.saida_hora})} className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                            Selecionar
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="6"
                        className="text-center text-gray-500 py-4"
                      >
                        erro.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </article>
      </div>
    </div>

    {isVisible && <SelecionarTicket onSendDataTicket={callBackTicket} dados_rota={componentData}/>}
    </>
  );
}

export default FormComprar;
