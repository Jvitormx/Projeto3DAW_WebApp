import { useEffect, useState } from 'react';
import FetchRequest from './FetchRequest';

function ListaMotorista({ motoristas }) {
    if (!Array.isArray(motoristas) || motoristas.length === 0) {
        return <option value="">Nenhum motorista disponível</option>;
    }

    return (
        <>
            {motoristas.map((motorista) => (
                <option key={motorista.id_motorista} value={motorista.id_motorista}>
                    {motorista.nome_motorista}
                </option>
            ))}
        </>
    );
}

function FormAlterarOnibus({dados}) {


    const [infoMotorista, setInfoMotorista] = useState([]);

    useEffect(() => {
        
        const tipo_metodo = 'POST';
        
        const url_retornoMotorista = 'http://localhost/Projeto3DAW_WebApp/backEnd/retornoMotorista.php';
    
        const BuscaMotorista = async() => {
          let dados = await FetchRequest(url_retornoMotorista, tipo_metodo, null);
          const infoMotorista = await dados.json();
          setInfoMotorista(infoMotorista);
        };
      
        BuscaMotorista();
      }, []);

    const [info, setInfo] = useState([{}]);

    useEffect(() => {
        if (info) {
        console.log(info);
        }
      });

    const [formData, setFormData] = useState({
        capacidade: dados.capacidade,
        placa: dados.placa,
        tipo: dados.tipo,
        companhia: dados.companhia,
        motorista: dados.motorista
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

        alert("alteração realizada")

        let tipo_metodo = 'POST';
        
        const url_alterarOnibus = 'http://localhost/Projeto3DAW_WebApp/backEnd/alterarOnibus.php';

        let dados = await FetchRequest(url_alterarOnibus, tipo_metodo, formData);
        const info = await dados.json();
        setInfo(info);
    
    }
  
      return (
        <>
        <form onSubmit={handleSubmit} className="pt-4 space-y-4">
        <div>
            <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Companhia </label>
            <input
            name="companhia"
            value={formData.companhia}
            onChange={handleChange}
            type="text"
            id="UserEmail"
            placeholder="john@rhcp.com"
            className="mt-1 w-full px-2 py-2 rounded-md border-gray-200 border-1 p-2 pe-12 text-md"
            />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
            <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Placa </label>
            <input
            name="placa"
            value={formData.placa}
            onChange={handleChange}
            type="text"
            id="UserEmail"
            placeholder="john@rhcp.com"
            className=" px-2 py-2 mt-1 w-full rounded-md border-gray-200 border-1 p-2 pe-12 text-md"
            />
        </div>

        <div>
            <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Tipo </label>
            <select
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            className=" px-2 py-2 mt-1 w-full rounded-md border-gray-200 border-1 p-2 pe-12 text-md"
            >
             <option value="Leito">Leito</option>
             <option value="Semi-leito">Semi-leito</option>
             <option value="Executivo">Executivo</option>
            </select>
        </div>
        </div>

        <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
        <div>
            <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Capacidade </label>
            <select
            name="capacidade"
            value={formData.capacidade}
            onChange={handleChange}
            className=" px-2 py-2 mt-1 w-full rounded-md border-gray-200 border-1 p-2 pe-12 text-md"
            >
             <option value="23">23</option>
             <option value="28">28</option>
             <option value="32">32</option>
            </select>
        </div>

        <div>
            <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Motorista </label>
            <select
            name="motorista"
            value={formData.motorista}
            onChange={handleChange}
            className="px-2 py-2 mt-1 w-full rounded-md border-gray-200 border-1 p-2 pe-12 text-md"
            >
            <ListaMotorista motoristas={infoMotorista} />
            </select>
        </div>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="inline-block w-full rounded-lg bg-black px-2 py-2 font-medium text-white sm:w-auto"
          >
            Alterar ônibus
          </button>
        </div>
      </form>
      </>
      )
  }  

  export default FormAlterarOnibus