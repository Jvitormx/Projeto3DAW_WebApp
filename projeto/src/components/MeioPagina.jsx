import { useEffect, useState } from 'react';
import FetchRequest from './FetchRequest';

function ListaEstados({estados}) {
  const opcoes = estados.map(estado =>
    <option value={estado.COD}>{estado.NOME}</option>
  )

  return <>{opcoes}</>
}

function FormDestino() {

  const [info, setInfo] = useState([{}]);
  
  useEffect(() => {
    
    const url_retornoEstados = 'http://localhost/Projeto3DAW_WebApp/backEnd/retornoEstados.php';

    const BuscaEstados = async() => {
      let dados = await FetchRequest(url_retornoEstados, null, null);
      const info = await dados.json();
      setInfo(info);
    };
  
    BuscaEstados();
  }, []);

    return (
        <form action="#" className="mb-0 space-y-4">

      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
        <select className="bg-transparent w-full rounded-md border-gray-200 border-1 p-2 pe-12 text-md">
          <option value="">Escolha seu destino</option>
          <ListaEstados estados={info}/>
        </select>

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-7"
              viewBox="0 -1 18 24"
              stroke="currentColor"
            >
              <path
                path d="M9 0C11.3869 0 13.6761 0.993372 15.364 2.76159C17.0518 4.5298 18 6.92801 18 9.42865C18 13.934 15.0975 18.081 9.402 21.8776C9.28181 21.9575 9.14237 22 9 22C8.85763 22 8.71819 21.9575 8.598 21.8776C2.9025 18.081 0 13.934 0 9.42865C0 6.92801 0.948211 4.5298 2.63604 2.76159C4.32387 0.993372 6.61305 0 9 0ZM9 6.28576C8.20435 6.28576 7.44129 6.61689 6.87868 7.20629C6.31607 7.7957 6 8.5951 6 9.42865C6 10.2622 6.31607 11.0616 6.87868 11.651C7.44129 12.2404 8.20435 12.5715 9 12.5715C9.79565 12.5715 10.5587 12.2404 11.1213 11.651C11.6839 11.0616 12 10.2622 12 9.42865C12 8.5951 11.6839 7.7957 11.1213 7.20629C10.5587 6.61689 9.79565 6.28576 9 6.28576Z" fill="#F59E0B"
                />
            </svg>
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <input
            type="date"
            className="rounded-md border-gray-200 border-1 p-2 pe-12 text-md" 
            placeholder="Digite seu destino"
          />
        <button
        type="submit"
        className="block rounded-lg bg-orange-400 px-5 py-3 text-sm font-medium text-white"
      >
        Passagens disṕoníveis
      </button>
    </div>
    
      </form>
    )
}  

function FormularioDestino() {
    return (
    <article className="mt-4 w-auto overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
        <p className="mt-2 pl-7 text-left text-lg font-medium">Encontre sua melhor opção de viagem </p>
    <span className="flex mt-2">
        <span className="h-px flex-1 bg-gray-200"></span>
    </span>
  <div className="p-4 sm:p-6">
    <a href="#">
      <div>
        <FormDestino/>
      </div>
    </a>

    <span className="h-px flex-1 bg-black"></span>

  </div>
  </article>
    )
}

function Recado() {
    return (
    
    <section className="overflow-hidden bg-white-50">
  <div className="p-8 md:p-12 lg:px-16 lg:py-5">
    <div className="mx-auto max-w-xl ltr:sm:text-left rtl:sm:text-right">
      <h2 className="font-bold text-gray-900 md:text-5xl">
      Os melhores preços para as melhores rotas!
      </h2>

      <p className="hidden font-normal text-xl text-gray-500 md:mt-4 md:block">
        Escolhemos as melhores rotas com base em sua localização.
      </p>

      <FormularioDestino/>
      
    </div>
  </div>
</section>
    )
}

function Imagem() {
    return (
        <img
    alt=""
    src="https://pbs.twimg.com/media/GRs4Fo6WMAAJSrV.jpg:large"
    className="top-0 right-0 absolute -z-10 w-2/4 object-cover 2xl:h-5/6 2xl:h-4/5 sm:self-end sm:rounded-bl-[30px] md:rounded-bl-[60px]"
  />
    )
}

function MeioPagina() {
    return (
        <section className="sm:grid sm:grid-cols-2 sm:items-center">
            <Recado/>
            <div className="">
            <Imagem/>
            </div>
        </section>
    )
}

export default MeioPagina;