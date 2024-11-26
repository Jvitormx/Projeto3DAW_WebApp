<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $dados = json_decode(file_get_contents("php://input"), true);

    $comp = $dados['companhia'];
    $capacidade = $dados['capacidade'];
    $motorista = $dados['motorista'];
    $placa = $dados['placa'];
    $tipo = $dados['tipo'];

    $intCapacidade = (int)$capacidade;
    $intMotorista = (int)$motorista;
 

    $hostname = "localhost";
    $username = "root";
    $password = "";
    $dbname = "webOnibus";

    $conn = new mysqli($hostname, $username, $password, $dbname);

    $comandoSQL = "INSERT INTO onibus (capacidade, placa_onibus, companhia, tipo_onibus_nome, motorista) VALUES (" . "'" . $intCapacidade . "'" . "," . "'" . $placa . "'" . "," . "'" . $comp . "'" . "," . "'" . $tipo . "'" . "," . "'" . $intMotorista . "'" . ");";

    if ($conn->query($comandoSQL)) {
        $response = ['status' => 'ok'];
    } else {
        $response = ['status' => 'erro'];
    }
}

echo json_encode($response);