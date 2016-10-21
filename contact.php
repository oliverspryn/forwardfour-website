<?php


if(isset($_REQUEST["isvalid"])){
	
	$youremail = "oliver.spryn@forwardfour.com"; // Enter your email here!!
	$usersname = $_POST["usersname"];
	$usersemail = $_POST["usersemail"];
	$mailsubject = "Contact From Your Website";
	$usersmessage = $_POST["userscomment"];
	$message =
	
	"$usersname has contacted you from your site.
	
	Their Message is as follows:
	
	$usersmessage
	
	...............................................
	
	Contact details:
	Email Address: $usersemail"; 
	
	$headers = 'From:' . $usersemail . "\r\n";
	mail($youremail, $mailsubject, $message, $headers);
	
	echo "success";
	
} else {
	
	echo "failed";
	
}