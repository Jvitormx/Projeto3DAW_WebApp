import { useLocation } from 'react-router-dom';

function TabelaRow() {

    return (
      <>
      <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Leito</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">03 de 28</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">Completa</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">R$90,00</td>
          <td className="whitespace-nowrap px-4 py-2">
      
              <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.7613 2.20594C27.8388 3.05073 28.5813 4.41528 28.8849 5.84418C28.9217 5.85582 28.9575 5.87016 28.9921 5.88708L32.3664 7.44798C32.555 7.53459 32.7149 7.67336 32.8272 7.84791C32.9394 8.02246 32.9994 8.2255 33 8.43303V28.8386C32.9988 29.0081 32.9583 29.175 32.8818 29.3263C32.8052 29.4775 32.6947 29.6089 32.5588 29.7103C32.4229 29.8116 32.2654 29.8801 32.0986 29.9104C31.9318 29.9406 31.7603 29.9318 31.5975 29.8847L22.2437 27.2447L11.1227 30.3104C10.922 30.3655 10.7099 30.3632 10.5105 30.3038L0.7821 27.408C0.557239 27.342 0.359683 27.2052 0.218782 27.0179C0.0778816 26.8306 0.00115444 26.6029 0 26.3685L0 5.59668C0 4.87069 0.7062 4.34929 1.41075 4.55388L10.819 7.29454L15.6007 5.83099C15.6666 5.81156 15.7339 5.79776 15.802 5.78973C15.9868 4.70733 16.5033 3.66783 17.3696 2.65473C18.3975 1.45023 20.2009 0.744035 21.9582 0.659885C23.7814 0.572435 25.174 0.961835 26.7597 2.20429L26.7613 2.20594ZM2.19945 7.05364V25.5584L10.235 27.9492V9.39168L2.19945 7.05364ZM15.7443 8.06673L12.4344 9.07819V27.6885L20.7916 25.3884V19.9517C20.7916 19.3511 21.285 18.8643 21.8922 18.8643C22.4994 18.8643 22.9911 19.3511 22.9911 19.9533V25.1954L30.8005 27.3981V9.12438L28.9526 8.26639C28.9212 8.44789 28.8816 8.62609 28.8321 8.79934C28.4733 10.0645 27.8714 11.2476 27.06 12.2825L22.9729 17.3859C22.8653 17.5201 22.7279 17.6273 22.5716 17.6991C22.4152 17.7708 22.2443 17.8051 22.0724 17.7992C21.9005 17.7932 21.7324 17.7473 21.5814 17.6649C21.4303 17.5826 21.3006 17.4662 21.2025 17.3249L17.3827 11.7924C16.7524 10.9113 16.3102 10.1259 16.0611 9.42303C15.9047 8.98432 15.7984 8.52933 15.7443 8.06673ZM22.0638 2.83458C20.8659 2.89233 19.635 3.37414 19.0492 4.05889C18.3447 4.88388 17.9982 5.65609 17.9289 6.43818C17.8464 7.38033 17.9025 8.04529 18.1368 8.70364C18.31 9.19038 18.6549 9.80748 19.1878 10.5516L22.176 14.8779L25.3275 10.9427C25.9633 10.1301 26.4346 9.20149 26.7151 8.20863C27.1111 6.82263 26.5138 4.78653 25.3951 3.91203C24.2484 3.01278 23.3822 2.77023 22.0655 2.83458H22.0638ZM22.2915 3.98463C24.1131 3.98463 25.5915 5.44489 25.5915 7.24669C25.5891 7.67759 25.5019 8.1038 25.3347 8.50097C25.1676 8.89814 24.9238 9.25849 24.6173 9.56142C24.3109 9.86435 23.9478 10.1039 23.5487 10.2665C23.1496 10.429 22.7224 10.5113 22.2915 10.5087C20.4699 10.5087 18.9915 9.04849 18.9915 7.24669C18.9915 5.44489 20.4699 3.98463 22.2915 3.98463ZM22.2915 6.15934C22.1478 6.15847 22.0054 6.1859 21.8724 6.24008C21.7393 6.29425 21.6182 6.3741 21.516 6.47507C21.4138 6.57604 21.3325 6.69615 21.2767 6.82855C21.221 6.96094 21.1918 7.10302 21.191 7.24669C21.191 7.84729 21.6843 8.33404 22.2915 8.33404C22.4352 8.33469 22.5775 8.30704 22.7105 8.25266C22.8435 8.19829 22.9644 8.11825 23.0665 8.01713C23.1685 7.91601 23.2497 7.79577 23.3052 7.6633C23.3608 7.53082 23.3898 7.3887 23.3904 7.24504C23.3882 6.95547 23.2713 6.67859 23.0653 6.47507C22.8593 6.27156 22.5811 6.15802 22.2915 6.15934Z" fill="#F59E0B"/>
              </svg>
  
          </td>
          <td className="whitespace-nowrap px-4 py-2">
          <ButtonSelecionarRota/>
          </td>
        </tr>
      </>
    )
  }
  
  function ButtonSelecionarRota() {
    return (
       <a
       href="#"
       className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          Selecionar
        </a>
    )
  }

  function TabelaCompra() {
    return (

<div className="overflow-x-auto">
  <table className="min-w-full divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tipo</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Horário</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Assentos Restantes</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Rota</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Preço</th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      <TabelaRow/>
      <TabelaRow/>
      <TabelaRow/>
    </tbody>
  </table>
</div>
    )
}

function FormComprar() {

    const location = useLocation();
    const {infoData} = location.state || {};
    
    return (
        <div className="p-8 md:p-12 lg:px-16 lg:py-5">
            <div className="ltr:sm:text-left rtl:sm:text-right">
                <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
                    <div className="p-4 sm:p-6">
                        <TabelaCompra/>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default FormComprar
