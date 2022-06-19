<?php
//llamando a los campos por sus names y los guardo en una variable.

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$mensaje = $_POST['message'];

//Datos para el correo
$destinatario='dceballos.dsc@gmail.com';
$subject='Contacto desde web';

$correo = "De: $firstnam $lastname \n";
$correo .= "Correo electrónico: $correo \n";
$correo .= "Mensaje: $mensaje";

//Envío de mensaje

mail($destinatario, $subject, $correo);
header('Location:sentMessage.html')

?>