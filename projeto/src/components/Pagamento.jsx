import { useEffect, useState } from "react";
import FetchRequest from "./FetchRequest";
import emailjs from "emailjs-com";

import { useLocation } from "react-router-dom";

function FormWindowPagamento({titulo, recebeDadosCliente, dadosPagamento}) {
    return (
        <article className="mt-4 w-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
        <p className="mt-2 pl-7 text-left text-lg font-medium">{titulo}</p>
    <span className="flex mt-2">
        <span className="h-px flex-1 bg-gray-200"></span>
    </span>
  <div className="p-4 sm:p-6">
    <a href="#">
      <div>
        <FormPagamento dadosCliente={recebeDadosCliente} recebeDadosCompra={dadosPagamento}/>
      </div>
    </a>

    <span className="h-px flex-1 bg-black"></span>

  </div>
  </article>
    )
}

function FormWindowResumoCompra({titulo, dadosPagamentoCompra}) {

  console.log(dadosPagamentoCompra);

  const [info, setInfo] = useState(null);
  
  useEffect(() => {

    const cod_rota = {
      "data_rota":dadosPagamentoCompra.data_rota,
      "id_rota":dadosPagamentoCompra.id_rota,
      "id_onibus":dadosPagamentoCompra.id_onibus,
      "horario":dadosPagamentoCompra.horario
    };
    
    const tipo_metodo = 'POST';
    
    const url_retornoRota = 'http://localhost/Projeto3DAW_WebApp/backEnd/retornoInfPagamento.php';

    const BuscaRota = async() => {
      let dados = await FetchRequest(url_retornoRota, tipo_metodo, cod_rota);
      const info = await dados.json();
      setInfo(info);
    };
  
    BuscaRota();
  }, []);

  console.log(info);

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
      <p className="text-sm font-medium text-gray-700">  {info && info[0] ? info[0].nome_rota : "carregando..."}  </p>
      <p className="text-sm font-medium text-gray-700"> | Viagem de ida</p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
      <p className="text-sm font-medium text-gray-700">  {dadosPagamentoCompra.tipo_onibus}  </p>
      <p className="text-sm font-medium text-gray-700"> | {info && info[0] ? info[0].dia : "carregando..."}, {dadosPagamentoCompra.data_rota}, {dadosPagamentoCompra.horario}</p>
      </div>
      </div>
    </a>

    <span className="h-px flex-1 bg-black"></span>

  </div>
  </article>
    )
}

function FormWindowResumoViajem({titulo, dadosPagamentoViajem}) {

  let taxa_servico = 24.90;

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
      <p className="text-xs font-medium text-gray-700"> Assentos - {dadosPagamentoViajem.quantidade} </p>
      <p className="text-xs font-medium text-gray-700"> | R${(dadosPagamentoViajem.quantidade * dadosPagamentoViajem.valor)}</p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <p className="text-xs font-medium text-gray-700"> Taxa de serviço </p>
        <p className="mt-2 text-xs font-medium text-gray-700"> | R$24.90</p>
      </div>
      <div className="mt-2 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <p className="text-xs font-medium text-gray-700"> Total </p>
        <p className="mt-2 text-xs font-medium text-gray-700"> | R${taxa_servico + (dadosPagamentoViajem.quantidade * dadosPagamentoViajem.valor)}</p>
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

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9); // Base 36 string
}

function FormPagamento({dadosCliente, recebeDadosCompra}) {

    const [info, setInfo] = useState([{}]);

    const enviarEmail = () => {

    const id_passagem = generateId();

      alert("email enviado.");

      const templateParams = {
        to_name: dadosCliente.nome,
        from_name: "Viação Calango", 
        quantidade: recebeDadosCompra.quantidade,
        tipo: recebeDadosCompra.tipo_onibus,
        passagem: id_passagem,
        horario: recebeDadosCompra.horario,
        viajem: recebeDadosCompra.nome_viajem,
        valor: recebeDadosCompra.valor,
        total: recebeDadosCompra.quantidade * recebeDadosCompra.valor,
        taxa_servico: 24.90,
        total_final: 24.90 + (recebeDadosCompra.quantidade * recebeDadosCompra.valor),
        email_cliente: "joao.23104708360056@faeterj-rio.edu.br"
      };
  
      emailjs
        .send("service_05a04hf", "template_2lywoq8", templateParams, "GHoJwaTNXBVyEhsdX")
        .then(
          (result) => {
            console.log("E-mail enviado com sucesso:", result.text);
          },
          (error) => {
            console.log("Erro ao enviar o e-mail:", error.text);
          }
        );
    };

    console.log(dadosCliente);
    console.log(recebeDadosCompra);
    
    useEffect(() => {
      
      const url_retornoEstados = 'http://localhost/Projeto3DAW_WebApp/backEnd/retornoEstados.php';
  
      const BuscaEstados = async() => {
        let dados = await FetchRequest(url_retornoEstados, null, null);
        const info = await dados.json();
        setInfo(info);
      };
    
      BuscaEstados();
    }, []);

    const listaViajantes = [];

    for(let i=0; i<recebeDadosCompra.quantidade; i++) {
      listaViajantes.push(<span key={i}><Viajantes/></span>)
    }
  
      return (
        <>
          <form className="mb-0 pb-4 space-y-4">

  
          <div className="relative">
            <h1 className="pb-2">{"--Viajante(s)"}</h1>
            <div className="w-96 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8"> 
              {listaViajantes}
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
           
          </div>
        

      
        </form>
         <div>
         <button
         onClick={enviarEmail}
         className="pt-3 rounded bg-orange-400 px-4 py-2 text-sm font-medium text-white"
         >
     Pagamento
   </button>
   </div>
   </>
      )
  }  


function Pagamento({recebeDadosCompra, dadosCliente}) {
    return (
        <div className="lg:w-auto grid lg:grid-cols-3 lg:gap-8">
            <FormWindowPagamento recebeDadosCliente={dadosCliente} dadosPagamento={recebeDadosCompra} titulo="Pagamento"/>
            <div className="block">
            <FormWindowResumoViajem dadosPagamentoViajem={recebeDadosCompra} titulo="Resumo da viagem"/>
            <FormWindowResumoCompra dadosPagamentoCompra={recebeDadosCompra} titulo="Resumo da compra"/>
            </div>
        </div>
    )
}

export default Pagamento