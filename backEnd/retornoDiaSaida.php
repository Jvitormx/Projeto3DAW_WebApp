<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $dados = json_decode(file_get_contents("php://input"), true);
    $id = $dados['id_saida'];

    $hostname = "localhost";
    $username = "root";
    $password = "";
    $dbname = "webOnibus";

    $conn = new mysqli($hostname, $username, $password, $dbname);

    $comandoSQL = "SELECT * FROM dia_saida WHERE id_dia_rota_onibus='" . $id . "';";

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