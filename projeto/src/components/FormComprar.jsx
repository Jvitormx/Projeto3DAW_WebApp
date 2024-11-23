import { useEffect, useState } from "react";
import FetchRequest from "./FetchRequest";
import { useLocation } from "react-router-dom";
import FormEscolherAcento from "./FormEscolherAcento";

function FormComprar() {
  const location = useLocation();
  const infoData = location.state; 

  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (infoData) {
      const data_envio = {
        data_envio: infoData, 
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
  }, [infoData]); 

  return (
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
                          <button className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
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
                        No data available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <FormEscolherAcento/>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default FormComprar;
