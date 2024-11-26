import { useEffect, useState } from 'react';
import FetchRequest from './FetchRequest';

function FormExcluirOnibus() {

    const [formData, setFormData] = useState({
        placa: '',
      });

      const [info, setInfo] = useState([{}]);

      useEffect(() => {
        if (info) {
        console.log(info);
        }
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

        alert("exclusão realizada")

        let tipo_metodo = 'POST';
        
        const url_excluirOnibus = 'http://localhost/Projeto3DAW_WebApp/backEnd/excluirOnibus.php';

        let dados = await FetchRequest(url_excluirOnibus, tipo_metodo, formData);
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
            Excluir ônibus
          </button>
        </div>
      </form>
      </>
      )
  }  

  export default FormExcluirOnibus