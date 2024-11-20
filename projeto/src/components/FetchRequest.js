


async function FetchRequest(url, tipo, dados) {
  if(dados == null)
  {
    const response = await fetch(url)
    
  return response;
  }else{
    const response = await fetch(url, {
        method: tipo,
        headers: {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"},
        body: JSON.stringify(dados)
    })

    return response;
  }
  }

export default FetchRequest;