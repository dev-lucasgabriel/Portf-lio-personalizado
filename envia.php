<?php

$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$celular = addslashes($_POST['celular']);

$para = "gomesborgesbiel@gmail.com";
$assunto = "Contato";

$corpoemail = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Telefone: ".$celular;

$cabeca = "From gomesborgesbiel@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

if(mail($para,$assunto,$corpoemail,$cabeca)){
    echo("E-mail enviado com sucesso!");
}else{
    echo("Houve um erro ao enviar o e-mail!");
}


?>