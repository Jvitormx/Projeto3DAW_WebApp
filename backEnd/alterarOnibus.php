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

    $comandoSQL = $comandoSQL = "UPDATE onibus SET capacidade = " . $intCapacidade . ", placa_onibus='" . $placa . "', companhia ='" . $comp . "', tipo_onibus_nome='" . $tipo . "', motorista =" . $intMotorista . " WHERE placa_onibus = '" . $placa . "';";  

    if ($conn->query($comandoSQL)) {
        $response = ['status' => 'ok'];
    } else {
        $response = ['status' => 'erro'];
    }
}

echo json_encode($response);