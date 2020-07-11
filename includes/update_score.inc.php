<?php
session_start();


require 'dbh.inc.php';

$wpm = intval($_COOKIE["tp_wpm"]);
$cpm = intval($_COOKIE["tp_cpm"]);


if (is_int($wpm) && is_int($cpm)) {
    $result = mysqli_query("SELECT email FROM leaderboard WHERE email = '" . $_SESSION['email'] . "';");
    if($result->num_rows == 0) {
        $sql = "INSERT INTO leaderboard (email, scoreWPM, scoreCPM) 
                VALUES ('" . $_SESSION['email'] . "', '" . $wpm . "', '" . $cpm . "')";
    } else {
        if (true) { // check if current score is greater than previous score
            $sql = "UPDATE leaderboard SET scoreWPM=" . $wpm . " WHERE email='" . $_SESSION['email'] . "';";
            mysqli_query($conn, $sql);
        }
    }
}
mysqli_close($conn);

header("Location: ../index.php");
exit();