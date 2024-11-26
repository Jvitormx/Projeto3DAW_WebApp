<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $dados = json_decode(file_get_contents("php://input"), true);

    $data = $dados['data_rota'];
    $id_rota = $dados['id_rota'];
    $id_onibus = $dados['id_onibus'];
    $horario = $dados['horario'];
 

    $hostname = "localhost";
    $username = "root";
    $password = "";
    $dbname = "webOnibus";

    $conn = new mysqli($hostname, $username, $password, $dbname);

    $comandoSQL = "SELECT dia, nome_rota FROM ((rota_onibus INNER JOIN rota_web on rota_onibus.id_rota = rota_web.id_rota) INNER JOIN dia_saida on rota_onibus.data_saida = dia_saida.data) WHERE dia_saida.data='" . $data . "'" . "AND rota_onibus.id_rota ='" . $id_rota . "'" . "AND rota_onibus.id_onibus ='" . $id_onibus . "'" . "AND rota_onibus.saida_hora ='" . $horario . "';";

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