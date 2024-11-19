

async function FetchRequest(url, tipo, dados) {
    const response = await fetch(url, {
        method: tipo,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dados)
    })

    return response;
  }

export default FetchRequest;