import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FormAdicionarOnibus from './components/FormAdicionarOnibus';
import FormConsultarOnibus from './components/FormConsultarOnibus';
import FormAlterarOnibus from './components/FormAlterarOnibus';
import FormExcluirOnibus from './components/FormExcluirOnibus';

  function WindowAlterar({titulo}) {

    const [isVisible, setIsVisible] = useState(false);

    const [dadosOnibus, setDadosOnibus] = useState(null);

    console.log(dadosOnibus);

    useEffect(() => {
        if (dadosOnibus) {
          setIsVisible(true);
        }
      }, [dadosOnibus]);

      const callBackOnibus = (data) => {
        setDadosOnibus(data);
      };

    return (
        <>

<section className="overflow-hidden bg-white-50">
  <div className="p-8 md:p-12 lg:px-16 lg:py-5">
    <div className="mx-auto max-w-xl sm:text-left">

      <article className="mt-4 w-full max-w-xl overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
        <p className="mt-2 px-7 text-left text-lg font-medium">{titulo}</p>
        <span className="flex mt-2">
          <span className="h-px flex-1 bg-gray-200"></span>
        </span>
        <div className="p-4 sm:p-6">
          <a href="#">
            <div>
            <FormConsultarOnibus onSendDataOnibus={callBackOnibus}/>
            </div>
          </a>

          <span className="h-px flex-1 bg-black"></span>
        </div>
      </article>

      {isVisible && <FormAlterarOnibus dados={dadosOnibus}/>}

    </div>
  </div>
</section>

  </>
    )
}

  function WindowAdicionar({ titulo }) {
  return (
    <section className="overflow-hidden bg-white-50">
      <div className="p-8 md:p-12 lg:px-16 lg:py-5">
        <div className="mx-auto max-w-xl sm:text-left">
          <article className="mt-4 w-full max-w-xl overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
            <p className="mt-2 px-7 text-left text-lg font-medium">{titulo}</p>
            <span className="flex mt-2">
              <span className="h-px flex-1 bg-gray-200"></span>
            </span>
            <div className="p-4 sm:p-6">
              <div>
              <FormAdicionarOnibus/>
              </div>
              <span className="h-px flex-1 bg-black"></span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function WindowExcluir({ titulo }) {
    return (
      <section className="overflow-hidden bg-white-50">
        <div className="p-8 md:p-12 lg:px-16 lg:py-5">
          <div className="mx-auto max-w-xl sm:text-left">
            <article className="mt-4 w-full max-w-xl overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
              <p className="mt-2 px-7 text-left text-lg font-medium">{titulo}</p>
              <span className="flex mt-2">
                <span className="h-px flex-1 bg-gray-200"></span>
              </span>
              <div className="p-4 sm:p-6">
                <div>
                <FormExcluirOnibus/>
                </div>
                <span className="h-px flex-1 bg-black"></span>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }

function Consultar({dados}) {

    return (
        <div className="pt-4 flow-root">
  <dl className="-my-3 divide-y divide-gray-100 text-sm">
    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Companhia</dt>
      <dd className="text-gray-700 sm:col-span-2">{dados.companhia}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Placa</dt>
      <dd className="text-gray-700 sm:col-span-2">{dados.placa}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Tipo</dt>
      <dd className="text-gray-700 sm:col-span-2">{dados.tipo}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Capacidade</dt>
      <dd className="text-gray-700 sm:col-span-2">{dados.capacidade}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Capacidade atual</dt>
      <dd className="text-gray-700 sm:col-span-2">{dados.capacidade_atual}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Motorista</dt>
      <dd className="text-gray-700 sm:col-span-2">{dados.motorista}</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Kilometragem</dt>
      <dd className="text-gray-700 sm:col-span-2">{dados.kilometragem}</dd>
    </div>
  </dl>
</div>
    )
}

function WindowConsultar({ titulo }) {

    const [isVisible, setIsVisible] = useState(false);

    const [dadosOnibus, setDadosOnibus] = useState(null);

    console.log(dadosOnibus);

    useEffect(() => {
        if (dadosOnibus) {
          setIsVisible(true);
        }
      }, [dadosOnibus]);

      const callBackOnibus = (data) => {
        setDadosOnibus(data);
      };
      
  return (
    <section className="overflow-hidden bg-white-50">
      <div className="p-8 md:p-12 lg:px-16 lg:py-5">
        <div className="mx-auto max-w-xl sm:text-left">
          <article className="mt-4 w-full max-w-xl overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
            <p className="mt-2 px-7 text-left text-lg font-medium">{titulo}</p>
            <span className="flex mt-2">
              <span className="h-px flex-1 bg-gray-200"></span>
            </span>
            <div className="p-4 sm:p-6">
              <div>
                <FormConsultarOnibus onSendDataOnibus={callBackOnibus}/>
              </div>
              <span className="h-px flex-1 bg-black"></span>
            </div>
          </article>
          {isVisible && <Consultar dados={dadosOnibus}/>}
        </div>
      </div>
    </section>
  );
}

function Adm() {
  const [visibleWindow, setVisibleWindow] = useState("");

  const handleVisibility = (windowName) => {
    setVisibleWindow(windowName);
  };

  return (
    <>
      <div className="flex float-left flex-col h-screen justify-between border-e bg-white">
        <div className="px-4 py-6">
          <span className="grid h-10 w-32 place-content-center">
          <svg className="h-12" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V8C32 21.2548 21.2548 32 8 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#F59E0B"/>
                <path d="M4 8C4 5.79086 5.79086 4 8 4H32C34.2091 4 36 5.79086 36 8V12C36 25.2548 25.2548 36 12 36H8C5.79086 36 4 34.2091 4 32V8Z" fill="#4BE4C9"/>
                <path d="M17 10.3927C17.2652 10.3927 17.5196 10.2787 17.7071 10.076C17.8946 9.87316 18 9.59812 18 9.31133C18 9.02454 17.8946 8.74949 17.7071 8.5467C17.5196 8.34391 17.2652 8.22998 17 8.22998C16.7348 8.22998 16.4804 8.34391 16.2929 8.5467C16.1054 8.74949 16 9.02454 16 9.31133C16 9.59812 16.1054 9.87316 16.2929 10.076C16.4804 10.2787 16.7348 10.3927 17 10.3927Z" fill="black"/>
                <path d="M16.6732 2.97683C15.3348 1.37326 12.8776 1.25777 11.6153 3.06577C11.4105 3.35781 11.1595 3.69365 10.8911 4.05605C10.3567 4.77022 9.74989 5.58394 9.27168 6.36714C8.5138 7.60964 7.84456 9.11099 7.87702 10.8407C7.88077 13.6509 8.98576 15.196 9.79608 15.9288C9.83479 17.7182 10.0258 19.2222 10.3542 20.5191H7.21153C7.16034 20.5191 7.08667 20.5005 7.08418 20.3638C7.08238 20.2125 7.08238 20.0611 7.08418 19.9098V19.8421C7.08418 19.7492 7.1054 19.6696 7.16783 19.6032L7.88951 18.7616C8.13922 18.4961 8.15171 17.9863 7.88951 17.7341C7.63979 17.4952 7.24399 17.4819 7.00676 17.7341L6.83196 17.8908C6.78202 17.9439 6.69462 17.9173 6.69462 17.8377V17.4925C6.69462 17.1076 6.37748 16.8062 5.99167 16.8062C5.65455 16.8062 5.37737 17.1341 5.37737 17.4925V17.7846C5.37737 17.8509 5.28997 17.8908 5.24003 17.8377L5.09394 17.7607C4.85671 17.4952 4.4322 17.5085 4.18248 17.7607C3.92028 18.0129 3.95274 18.5319 4.20246 18.7974L4.98282 19.6788C5.03392 19.7445 5.06136 19.8273 5.06023 19.9125V20.8616C5.06023 21.6806 5.6995 22.7174 6.96681 22.7174H11.1221C11.192 22.8674 11.2632 23.0134 11.3368 23.1554C12.2895 25.0006 13.5905 26.2351 14.9053 27.3714C15.3523 27.7564 15.7418 28.1201 16.0689 28.4772H14.1873C13.151 28.4772 12.2608 29.3347 12.2608 30.4379V32.0029C12.2608 32.0985 12.1621 32.1662 12.086 32.1662C11.9399 32.1662 11.8662 32.0972 11.7539 31.9724L10.9985 31.241C10.7425 30.9688 10.2443 30.9277 9.98836 31.1998C9.73241 31.4719 9.74489 31.9458 9.96339 32.1662L10.2318 32.4954C10.2705 32.5498 10.2318 32.6321 10.1694 32.6321L9.74489 32.7344C9.27668 32.822 9.15432 33.1286 9.17929 33.4445C9.20426 33.7605 9.46147 33.9888 9.74489 33.9888L10.3879 33.937C10.4528 33.937 10.4566 34.0339 10.4179 34.0883L10.1207 34.399C9.86476 34.6711 9.88973 35.1423 10.1457 35.4158C10.4029 35.6879 10.9298 35.5817 11.1221 35.4609C11.3144 35.3415 11.9049 34.6777 11.9049 34.6777C12.1297 34.4388 12.3744 34.4123 12.6803 34.3791L12.8226 34.3631C13.6092 34.2649 14.442 33.3875 14.442 32.3016V30.9609C14.442 30.8653 14.5182 30.7976 14.5956 30.7976H17.2626C17.2751 30.9064 17.2801 31.018 17.2801 31.1321C17.2801 36.284 20.831 41.7517 26.9365 41.7517C31.7211 41.7517 35.9975 37.9977 36 32.7131C36.0025 32.1489 35.8564 30.9423 35.6641 29.5724C35.192 26.3068 34.6605 23.0513 34.0697 19.8076C33.8237 18.4629 33.6002 17.3412 33.4691 16.8952C33.2606 16.1916 33.0196 15.4655 32.64 14.9213C32.4218 14.5988 32.1363 14.3344 31.806 14.1487C31.4642 13.9642 31.0855 13.8704 30.7023 13.8752C30.1317 13.8752 29.4911 14.0146 29.0242 14.5363C28.5597 15.054 28.5172 15.6752 28.5172 15.9792L28.5147 23.1608L28.5123 31.7958C28.5123 32.7224 28.285 33.1897 28.0927 33.4167C27.9079 33.6357 27.6308 33.7751 27.2337 33.7883C26.7131 33.8016 26.4995 33.6118 26.3535 33.3768C26.1537 33.0529 26.0201 32.5047 26.0201 31.7958C26.0201 29.2803 25.4645 27.3011 24.6304 25.667H25.4957C26.507 25.667 27.6482 24.9568 27.6482 23.3931V22.2342C27.6482 22.1944 27.6732 22.1413 27.6982 22.1147L27.9417 21.7722L28.2638 21.3528C28.4735 21.0408 28.4785 20.6638 28.2301 20.3983C27.9804 20.1328 27.6245 20.2019 27.4734 20.3001L27.1888 20.4647C27.1388 20.5045 27.0639 20.4647 27.0639 20.3983V20.0744C27.0639 19.7027 26.7568 19.4107 26.4072 19.4107C26.0575 19.4107 25.7454 19.7027 25.7454 20.0744V20.4302C25.7454 20.4966 25.6705 20.5364 25.6205 20.4966L25.2684 20.3001C25.0787 20.2112 24.7865 20.1647 24.538 20.4302C24.2883 20.6957 24.2721 21.0966 24.5131 21.3528L25.2684 22.3165C25.3059 22.3563 25.2984 22.7147 25.2984 22.7147V23.0174C25.2984 23.097 25.2397 23.1886 25.1523 23.1886H24.2097C23.8388 23.1886 23.4368 23.2099 23.0784 23.2922C22.2332 22.2368 21.3055 21.3368 20.4365 20.4939L20.0407 20.1089H21.8111C22.9736 20.1089 23.7976 19.2514 23.7976 18.1496V17.1846C23.7976 17.0996 23.8713 17.004 23.9225 16.9377L23.935 16.9204L24.6616 16.0323C24.9114 15.7668 24.799 15.2929 24.5742 15.0766C24.3495 14.8615 23.9475 14.8111 23.7102 15.0766L23.5554 15.1695C23.5055 15.2226 23.4181 15.1828 23.4181 15.1164L23.3719 14.7221C23.3719 14.4062 23.1009 14.1102 22.6914 14.1102C22.3106 14.1102 22.0958 14.4832 22.0958 14.7208V15.1164C22.0958 15.196 22.0084 15.2226 21.9585 15.1695L21.7699 15.0766C21.5327 14.8111 21.1082 14.8642 20.8585 15.1164C20.5963 15.3686 20.6088 15.8359 20.8585 16.1014L21.6076 16.8819C21.6701 16.9483 21.7237 17.0279 21.7237 17.1208V17.7049C21.7237 17.7952 21.7262 17.8589 21.6363 17.8589H18.6847C18.6023 17.4182 18.5486 16.8434 18.5286 16.0443C19.5425 15.3367 20.5576 13.8168 20.5576 10.8261C20.5576 7.45698 18.6947 5.31182 17.2339 3.63126C17.0378 3.40559 16.8493 3.18656 16.672 2.9755L16.6732 2.97683ZM13.6192 4.64942C13.8128 4.37065 14.3759 4.22463 14.8054 4.73836C15.0164 4.99057 15.2236 5.2335 15.4247 5.46846C16.9067 7.20477 18.0604 8.55479 18.0604 10.8261C18.0604 13.2022 17.2751 13.7518 17.124 13.8473C16.6695 14.1341 16.0103 14.7898 16.0252 15.7921C16.049 17.3492 16.1713 18.5319 16.5559 19.5408C16.9542 20.5868 17.5835 21.3129 18.3376 22.0497L18.6747 22.3802C21.2355 24.8718 23.5229 27.0993 23.5229 31.7958C23.5229 32.7702 23.6927 33.9065 24.2683 34.8357C24.8989 35.8525 25.9339 36.4804 27.3024 36.4419C28.2538 36.4141 29.2252 36.0477 29.9481 35.1941C30.6648 34.3485 31.0094 33.1764 31.0094 31.7958L31.0119 23.1621L31.0144 17.4514L31.0868 17.6903C31.1667 17.9611 31.3615 18.9076 31.6187 20.316C32.2022 23.5205 32.7275 26.7366 33.1944 29.9626C33.3992 31.4188 33.5053 32.3919 33.5028 32.6972V32.7091C33.5028 36.2893 30.5799 39.0968 26.9365 39.0968C22.5078 39.0968 19.7772 35.1543 19.7772 31.1321C19.7772 28.3843 17.9917 26.6148 16.4797 25.3099C15.2174 24.2214 14.2348 23.2523 13.5256 21.8784C12.8214 20.5138 12.3294 18.6288 12.2895 15.6394C12.2783 14.8867 11.8862 14.2987 11.4729 13.9575C11.197 13.7305 10.3742 12.9115 10.3742 10.8247V10.7982C10.3617 10.2407 10.4803 9.68179 10.7075 9.10435C10.6683 9.35723 10.7164 9.61665 10.8428 9.83488C10.9692 10.0531 11.1655 10.2154 11.3955 10.292C11.6256 10.3686 11.8739 10.3542 12.0948 10.2516C12.3157 10.149 12.4943 9.96501 12.5977 9.73351C12.7011 9.50201 12.7224 9.23858 12.6577 8.9917C12.593 8.74483 12.4465 8.53113 12.2453 8.38993C12.0442 8.24873 11.8018 8.18954 11.5628 8.22324C11.3238 8.25695 11.1044 8.38129 10.9448 8.57337C11.0671 8.32514 11.2082 8.07292 11.3668 7.81407C11.7913 7.11848 12.2445 6.51316 12.7203 5.87864C13.0124 5.4897 13.3121 5.0888 13.6192 4.64942Z" fill="black"/>
                </svg>
          </span>

          <ul className="mt-6 space-y-1">
            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Ônibus </span>
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <button
                      onClick={() => handleVisibility("adicionar")}
                      className="block w-full text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Adicionar
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleVisibility("consultar")}
                      className="block w-full text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Consultar
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleVisibility("alterar")}
                      className="block w-full text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Alterar
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleVisibility("excluir")}
                      className="block w-full text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Excluir
                    </button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
    <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">

      <div>
        <p className="text-xs">
          <strong className="block font-medium">ADM</strong>

          <span> adm@admin.com </span>
        </p>
      </div>
    </a>
  </div>
      </div>

      {visibleWindow === "adicionar" && (
        <WindowAdicionar titulo="Adicionar ônibus" />
      )}
      {visibleWindow === "consultar" && (
        <WindowConsultar titulo="Consultar ônibus" />
      )}
       {visibleWindow === "alterar" && (
        <WindowAlterar titulo="Alterar ônibus" />
      )}
      {visibleWindow === "excluir" && (
        <WindowExcluir titulo="Excluir ônibus" />
      )}
    </>
  );
}

export default Adm;