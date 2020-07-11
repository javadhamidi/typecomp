<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Composer's autoload file loads all necessary files
require '../vendor/autoload.php';
require 'dbh.inc.php';

//require "../vendor/phpmailer/phpmailer/src/Exception.php";
//require "../vendor/phpmailer/phpmailer/src/PHPMailer.php";
//require "../vendor/phpmailer/phpmailer/src/SMTP.php";

if (isset($_POST['login-submit'])) {

	$email = $_POST['email'];
	$email_components = explode('@', $email);
	$email_domain = array_pop($email_components);
	
	if (empty($email)) {
		header("Location: ../login.php?error=emptyfields");
		exit();
	} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		header("Location: ../login.php?error=invalidFormat");
		exit();
	} elseif ($email_domain !== $config['allowedDomain']) {
		header($config['allowedDomain']);
		exit();
	} else {

		$selector = bin2hex(random_bytes(8));
		$token = random_bytes(32);

		$url = "http://" . $_SERVER['HTTP_HOST'] . "/login.php?selector=" . $selector . "&validator=" . bin2hex($token);

		$expires = date("U") + 1800;
		
		$userEmail = $_POST['email'];

		$sql = "DELETE FROM tokens WHERE userEmail=?";
		$stmt = mysqli_stmt_init($conn);
		if (!mysqli_stmt_prepare($stmt, $sql)) {
			echo "There was an error!";
			exit();
		} else {
			mysqli_stmt_bind_param($stmt, "s", $userEmail);
			mysqli_stmt_execute($stmt);
		} 
		
		$sql = "INSERT INTO tokens (userEmail, loginSelector, loginToken, tokenExpires) VALUES (?, ?, ?, ?);";
		$stmt = mysqli_stmt_init($conn);
		if (!mysqli_stmt_prepare($stmt, $sql)) {
			echo "There was an error!";
			exit();
		} else {
			$hashedToken = password_hash($token, PASSWORD_DEFAULT);
			mysqli_stmt_bind_param($stmt, "ssss", $userEmail, $selector, $hashedToken, $expires);
			mysqli_stmt_execute($stmt);
		} 

		mysqli_stmt_close($stmt);
		//mysqli_close();


		

		$mail = new PHPMailer;

		$mail->isSMTP();  // Set mailer to use SMTP
		$mail->Host = 'smtp.mailgun.org';  // Specify mailgun SMTP servers
		$mail->SMTPAuth = true; // Enable SMTP authentication

		$mail->Username = $config['mailerUsername']; // SMTP username
		$mail->Password = $config['mailerPassword']; // SMTP password

		$mail->Port = 587;
		$mail->SMTPSecure = 'tls';   // Enable encryption, 'ssl'


		// contact info
		$mail->setFrom($config['mailerUsername'], 'TypeComp');
		$mail->addAddress($userEmail); // Recipient's email address and optionally a name to identify them
		
		// The following is self explanatory
		$mail->isHTML(false);
		$mail->Subject = 'Your TypeComp Login!';
		$mail->Body	= $url;
		
		if(!$mail->send()) {  
			echo "Message hasn't been sent.";
			echo "Mailer Error: " . $mail->ErrorInfo;
		} else {
			echo "Message has been sent";
		}

		//header("Location: ../login.php?error=success");
		echo($url);
		exit();
	}

} else {
	header("Location: ../login.php");
	exit();
}
