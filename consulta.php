
<?php

// É NECESSARIO RODAR CRIAR A TABELA NO ARQUIVO tabela.sql

require('conexao.php'); 

$q = $_REQUEST["q"];

function get_endereco($cep){


    // formatar o cep removendo caracteres nao numericos
    $cep = preg_replace("/[^0-9]/", "", $cep);
    $url = "http://viacep.com.br/ws/$cep/xml/";
  
    $xml = simplexml_load_file($url);
    return $xml;
  }


  if (empty($q)){
    echo json_encode('VAZIO');
}

else{

  $validacao = "SELECT * FROM endereco WHERE cep = '$q'";

    $teste = $mysqli->query($validacao);
    $linha = mysqli_fetch_array($teste);

    if(empty($linha)){


  $endereco = get_endereco($q);

  $query = "INSERT INTO endereco (cep,logradouro,complemento,bairro,localidade,uf,ibge,gia,ddd,siafi) 
  VALUES ('$q',
  '$endereco->logradouro',
  '$endereco->complemento',
  '$endereco->bairro',
  '$endereco->localidade',
  '$endereco->uf',
  '$endereco->ibge',
  '$endereco->gia',
  '$endereco->ddd',
  '$endereco->siafi')";

  $mysqli->query($query);

   echo json_encode($endereco);
  // RETORNA O JSON COM A CONSULTA NOVA;
}else{
  echo json_encode("CONSULTAFEITA");
  // RETORNA O JSON DE CONSULTA JÁ REALIZADA;
}
}