<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $dados = json_decode(file_get_contents("php://input"), true);

    $placa = $dados['placa'];
 

    $hostname = "localhost";
    $username = "root";
    $password = "";
    $dbname = "webOnibus";

    $conn = new mysqli($hostname, $username, $password, $dbname);

    $comandoSQL = "DELETE FROM onibus WHERE placa_onibus = '" . $placa . "';";

    if ($conn->query($comandoSQL)) {
        $response = ['status' => 'ok'];
    } else {
        $response = ['status' => 'erro'];
    }
}

echo json_encode($response);