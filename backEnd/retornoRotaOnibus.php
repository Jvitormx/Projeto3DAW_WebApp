<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $dados = json_decode(file_get_contents("php://input"), true);
    $cod = $dados['cod_rota'];

    $hostname = "localhost";
    $username = "root";
    $password = "";
    $dbname = "webOnibus";

    $conn = new mysqli($hostname, $username, $password, $dbname);

    $comandoSQL = "SELECT * FROM rota_onibus WHERE data_saida='" . $cod . "';";

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