<?php

if( $_POST ){
	require 'phpmailer/PHPMailerAutoload.php';

	$mail = new PHPMailer;

	$mail->isSMTP();

	$mail->Host = 'smtp.mail.ru';
	$mail->SMTPAuth = true;
	$mail->Username = 'manageorder'; // логин от вашей почты
	$mail->Password = '1987qwerty'; // пароль от почтового ящика
	$mail->SMTPSecure = 'ssl';
	$mail->Port = '465';

	$mail->CharSet = 'UTF-8';
	$mail->From = 'manageorder@mail.ru'; // адрес почты, с которой идет отправка
	$mail->FromName = 'Standupic'; // имя отправителя

	$mail->addCC($_POST['email']);

	$mail->isHTML(true);

	$mail->Subject = $_POST['subject'];
	$mail->Body = "Имя: {$_POST['name']}<br> Email: {$_POST['email']}<br> Сообщение: " . nl2br($_POST['body']);
	$mail->AltBody = "Имя: {$_POST['name']}\r\n Email: {$_POST['email']}\r\n Сообщение: {$_POST['body']}";

	// $mail->SMTPDebug = 1;

	if( $mail->send() ){
		$answer = '1';
	}else{
		$answer = '0';
		echo 'Письмо не может быть отправлено. ';
		echo 'Ошибка: ' . $mail->ErrorInfo;
	}
	die( $answer );
}
?>
