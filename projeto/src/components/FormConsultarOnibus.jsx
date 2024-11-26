import { useEffect, useState } from 'react';
import FetchRequest from './FetchRequest';

function FormConsultarOnibus({onSendDataOnibus}) {

    const sendData = (infoOnibus) => {

        const dados_onibus = {
          companhia: infoOnibus[0].companhia,
          capacidade: infoOnibus[0].capacidade,
          tipo: infoOnibus[0].tipo_onibus_nome,
          placa: infoOnibus[0].placa_onibus,
          kilometragem: infoOnibus[0].kilometragem,
          capacidade_atual: infoOnibus[0].capacidade_atual,
          motorista: infoOnibus[0].nome_motorista,
        };

        console.log(dados_onibus);
    
        onSendDataOnibus(dados_onibus); 
      };

    const [info, setInfo] = useState(null);

    useEffect(() => {
      if (info) {
        console.log(info);
          sendData(info);
      }
  }, [info]);

    const [formData, setFormData] = useState({
        placa: '',
      });

      useEffect(() => {
        if (formData) {
        console.log(formData);
        }
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value, 
        });
      };
      
    const handleSubmit = async (e) => {
        e.preventDefault(); 

        alert("consulta realizada")

        let tipo_metodo = 'POST';
        
        const url_consultarOnibus = 'http://localhost/Projeto3DAW_WebApp/backEnd/retornoOnibus.php';

        let dados = await FetchRequest(url_consultarOnibus, tipo_metodo, formData);
        const info = await dados.json();
        setInfo(info);
    
    }
  
      return (
        <>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Placa do ônibus </label>
            <input
            name="placa"
            value={formData.placa}
            onChange={handleChange}
            type="text"
            className="mt-1 w-full px-2 py-2 rounded-md border-gray-200 border-1 p-2 pe-12 text-md"
            />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="inline-block w-full rounded-lg bg-black px-2 py-2 font-medium text-white sm:w-auto"
          >
            Consultar ônibus
          </button>
        </div>
      </form>
      </>
      )
  }  

  export default FormConsultarOnibus