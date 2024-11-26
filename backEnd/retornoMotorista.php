<?php

$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "webOnibus";

$conn = new mysqli($hostname, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$comandoSQL = "SELECT * FROM motorista;";

$resultado = $conn->query($comandoSQL);

$dados_retorno = array();

while ($linha = $resultado->fetch_assoc()) {
    $dados_retorno[] = $linha;
}

$retorno = json_encode($dados_retorno);

echo $retorno;

?>