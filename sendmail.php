<?php
$to = "andrewfang@outlook.com";
$subject = "Test mail";
$message = "Hello! This is a simple email message.";
$from = "andrewfang@outlook.com";
$headers = "From:" . $from;
mail($to,$subject,$message,$headers);
echo "Mail Sent.";
?>