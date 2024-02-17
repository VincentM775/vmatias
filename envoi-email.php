<?php
if (isset($_POST['email'])) {

	// informations sur l'expéditeur
	$nom = $_POST['nom'];
	$email = $_POST['email'];
	$sujet = $_POST['objet'];
	$message = $_POST['message'];

	// adresse e-mail de destination
	$destinataire = "vincentmts77@gmail.com";

	// en-têtes du courriel
	$headers = "From: $nom <$email>\r\n";
	$headers .= "Reply-To: $email\r\n";
	$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

	// envoi du courriel
	mail($destinataire, $sujet, $message, $headers);

	// message de confirmation
	echo "Merci pour votre message!";
}
?>