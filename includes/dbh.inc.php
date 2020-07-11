<?php

$config = include('config.php');

$conn = mysqli_connect( $config['servername'], 
                        $config['dBUsername'], 
                        $config['dBPassword'], 
                        $config['dBName'] );

if (!$conn) {
    die("Connection failed: ".mysqli_connect_error()); 
}