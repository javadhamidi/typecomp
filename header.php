<?php
    session_start();
    $url_split = explode('/', $_SERVER['REQUEST_URI']);
    $url_end = end($url_split);
    
    if (!isset($_SESSION['email']) && strpos($url_end, 'login.php') === true) {
        header("Location: ./login.php");
        exit();
    } elseif (isset($_SESSION['email']) && strpos($url_end, 'index.php') === true) {
        header("Location: ./index.php");
        exit();
    }
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Typing Competition</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> 
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <link href="styles/style.css" rel="stylesheet">
  </head>
  <body onload="addWords()">