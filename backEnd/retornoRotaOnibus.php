<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $dados = json_decode(file_get_contents("php://input"), true);
    $data = $dados['data_envio'];
    $id = $dados['id_envio'];

    $hostname = "localhost";
    $username = "root";
    $password = "";
    $dbname = "webOnibus";

    $conn = new mysqli($hostname, $username, $password, $dbname);

    $comandoSQL = "SELECT * FROM rota_onibus INNER JOIN onibus ON rota_onibus.id_onibus = onibus.id_onibus WHERE rota_onibus.data_saida ='" . $data . "' AND rota_onibus.id_rota='" . $id . "';";

    $resultado = $conn->query($comandoSQL);
    $dados_retorno[] = array();
    $i = 0;

    while($linha = $resultado->fetch_assoc()) {
        $dados_retorno[$i] = $linha;
        $i++;
    }

    $retorno = json_encode($dados_retorno);

    echo $retorno;
}