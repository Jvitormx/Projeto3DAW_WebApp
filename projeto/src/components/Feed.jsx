import { useEffect, useState } from 'react';
import FetchRequest from './FetchRequest';

function ListaThumb({rotas, onSendDataRota}) {

  const sendData = (data) => {


    onSendDataRota(data); 
  };

  const thumbs = rotas.map(rota =>
    
    <article key={rota.id_rota} className="md:shadow overflow-hidden rounded-lg transition-shadow hover:shadow-xl">
    <img
    alt=""
    src={rota.imagem_promocional}
    className="h-64 w-full object-cover transition duration-500 sm:h-72"
    />

  <div className="bg-white p-3 sm:p-6">

    <a href="#">
     <h3 onClick={() => sendData({id_rota:rota.id_rota, id_nome_rota:rota.nome_rota})} className="mt-1.5 text-lg font-medium text-gray-900">{rota.nome_rota}</h3>
    </a>

    <p className="mt-1.5 line-clamp-3 text-gray-700">Duração da viajem - <time>{rota.tempo}</time></p>
  </div>
  </article>
)

return <>{thumbs}</>
}

function Feed({cliente_cod, onSendDataRaiz}) {

  const [data, setData] = useState(null);

  const callBackRota = (data) => {
    setData(data);
  };

  const sendData = (data) => {
    onSendDataRaiz(data); 
  };
  
  useEffect(() => {
    if (data) {
      sendData(data);
    }
  }, [data])

  const [info, setInfo] = useState([{}]);
  
  useEffect(() => {

    const cliente_estado = {
      "cod_rota":cliente_cod
    };
    
    const tipo_metodo = 'POST';
    
    const url_retornoRota = 'http://localhost/Projeto3DAW_WebApp/backEnd/retornoRotas.php';

    const BuscaRota = async() => {
      let dados = await FetchRequest(url_retornoRota, tipo_metodo, cliente_estado);
      const info = await dados.json();
      setInfo(info);
    };
  
    BuscaRota();
  }, []);

  return (
    <div className="pl-32 pt-32">
    <span className="flex pb-8 items-center">
        <span className="pr-6 text-2xl font-bold">Principais rotas com base em sua localização</span>
      </span>
    <section className="grid grid-cols-1 gap-4 lg:gap-8 md:inline-flex flex flex-nowrap">
    {info !== undefined ? (
        <ListaThumb rotas={info} onSendDataRota={callBackRota}/>
      ) : (
        <p> </p>
      )}
    </section>
    </div>
  )
}

export default Feed;