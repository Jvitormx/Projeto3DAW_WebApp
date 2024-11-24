import { useEffect, useState } from "react";
import FetchRequest from "./FetchRequest";
import { useLocation } from "react-router-dom";

function FormWindowPagamento({titulo}) {
    return (
        <article className="mt-4 w-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
        <p className="mt-2 pl-7 text-left text-lg font-medium">{titulo}</p>
    <span className="flex mt-2">
        <span className="h-px flex-1 bg-gray-200"></span>
    </span>
  <div className="p-4 sm:p-6">
    <a href="#">
      <div>
        <FormPagamento/>
      </div>
    </a>

    <span className="h-px flex-1 bg-black"></span>

  </div>
  </article>
    )
}

function FormWindowResumoCompra({titulo}) {
    return (
        <article className="mt-4 w-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
        <p className="mt-2 pl-7 text-left text-lg font-medium">{titulo}</p>
    <span className="flex mt-2">
        <span className="h-px flex-1 bg-gray-200"></span>
    </span>
  <div className="p-4 sm:p-6">
    <a href="#">
      <div className="block">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
      <p className="text-xs font-medium text-gray-700">  {"RJ -> SP"}  </p>
      <p className="text-xs font-medium text-gray-700"> | Viagem de ida</p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
      <p className="text-xs font-medium text-gray-700">  {"12h -> 17h"}  </p>
      <p className="text-xs font-medium text-gray-700"> | Terça, 10</p>
      </div>
      </div>
    </a>

    <span className="h-px flex-1 bg-black"></span>

  </div>
  </article>
    )
}

function FormWindowResumoViajem({titulo}) {
    return (
        <article className="mt-4 w-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
        <p className="mt-2 pl-7 text-left text-lg font-medium">{titulo}</p>
    <span className="flex mt-2">
        <span className="h-px flex-1 bg-gray-200"></span>
    </span>
  <div className="p-4 sm:p-6">
    <a href="#">
      <div>
      <div className="block">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
      <p className="text-xs font-medium text-gray-700"> Assentos - 03 </p>
      <p className="text-xs font-medium text-gray-700"> | R$180.00</p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <p className="text-xs font-medium text-gray-700"> Taxa de serviço </p>
        <p className="mt-2 text-xs font-medium text-gray-700"> | R$24.90</p>
      </div>
      <div className="mt-2 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <p className="text-xs font-medium text-gray-700"> Total </p>
        <p className="mt-2 text-xs font-medium text-gray-700"> | R$204.90</p>
      </div>
      </div>
      </div>
    </a>

    <span className="h-px flex-1 bg-black"></span>

  </div>
  </article>
    )
}

function CheckboxOpcao({titulo}) {
    return (
        <div>
    <label
      htmlFor="DeliveryStandard" 
      className="flex cursor-pointer justify-between gap-4 rounded-md border border-gray-200 bg-white p-2 text-md hover:border-gray-200 has-[:checked]:border-black has-[:checked]:ring-1 has-[:checked]:ring-black"
    >
      <div>
        <p className="text-gray-700">{titulo}</p>
      </div>

      <input
        type="radio"
        name="DeliveryOption"
        value="Credito"
        id="DeliveryStandard"
        className="size-5 border-gray-300 text-blue-500"
        checked
      />
    </label>
  </div>
    )
}

function Viajantes() {
    return (
        <>
        <div>
                <label htmlFor="UserEmail" className="text-xs font-medium text-gray-700"> Nome completo </label>
                <input type="text" className="w-full bg-transparent w-full rounded-md border-gray-200 border-1 p-2 pe-12 text-md"/>
                </div>
                <div>
                <label htmlFor="UserEmail" className="text-xs font-medium text-gray-700"> Documento </label>
                <input type="text" placeholder="CPF" className="w-full bg-transparent w-full rounded-md border-gray-200 border-1 p-2 pe-12 text-md"/>
                </div>
        </>
    )
}

function FormPagamento() {

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

  
          <div className="relative">
            <h1 className="pb-2">{"--Viajante(s)"}</h1>
            <div className="w-96 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8"> 
                <Viajantes/>
                <Viajantes/>
                <Viajantes/>
            </div>

            <h1 className="pt-5">{"--Dados da compra"}</h1>
            <div className="pt-3 w-96 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8"> 
                <CheckboxOpcao titulo="Crédito"/>
                <CheckboxOpcao titulo="Débito"/>
                <div>
                <label htmlFor="UserEmail" className="text-xs font-medium text-gray-700"> Número do cartão </label>
                <input type="text" className="w-full bg-transparent w-full rounded-md border-gray-200 border-1 p-2 pe-12 text-md"/>
                </div>
                <div>
                <label htmlFor="UserEmail" className="text-xs font-medium text-gray-700"> Validade do cartão </label>
                <input type="date" className="w-full bg-transparent w-full rounded-md border-gray-200 border-1 p-2 pe-12 text-md"/>
                </div>
                <div>
                <label htmlFor="UserEmail" className="text-xs font-medium text-gray-700"> CVV </label>
                <input type="text" className="w-6 bg-transparent w-full rounded-md border-gray-200 border-1 p-2 pe-12 text-md"/>
                </div>
                <div>
                <label htmlFor="UserEmail" className="text-xs font-medium text-gray-700"> Nome do titular </label>
                <input type="text" placeholder="" className="w-full bg-transparent w-full rounded-md border-gray-200 border-1 p-2 pe-12 text-md"/>
                </div>
            </div>
            <button
            type="submit"
            className="rounded bg-orange-400 px-4 py-2 text-sm font-medium text-white"
            >
        Pagamento
      </button>
          </div>
        

      
        </form>
      )
  }  


function Pagamento({dados}) {
    return (
        <div className="lg:w-auto grid lg:grid-cols-3 lg:gap-8">
            <FormWindowPagamento titulo="Pagamento"/>
            <div className="block">
            <FormWindowResumoViajem titulo="Resumo da viagem"/>
            <FormWindowResumoCompra titulo="Resumo da compra"/>
            </div>
        </div>
    )
}

export default Pagamento