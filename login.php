<?php
    require "header.php";

    $login_form =   '<form action="includes/magic_login.inc.php" method="POST">
                    <input class="login-input" type="text" name="email" placeholder="your.name@gihs.sa.edu.au" required>
                    <p style="font-size: 8pt">We\'ll send a magic-link to your inbox to login with!</p>
                    <button type="submit" id="enter-button" name="login-submit">Enter</button>
                    </form>';
    $alert_box =    '<div class="alert">...</div>';
    $info_box =    '<div class="alert alert-info">...</div>';
    
    if (isset($_GET['error'])) { 
        if ($_GET['error'] === 'logout') {
            echo str_replace("...", "You've logged out successfully!", $info_box);
        }
        if ($_GET['error'] === 'emptyfields') {
            echo str_replace("...", "Sorry, you have to write your email address in the field below to proceed.", $alert_box);
        }
        if ($_GET['error'] === 'invalidFormat') {
            echo str_replace("...", "🤔 It doesn't look like you gave us a valid email addresss. Try again!", $alert_box);
        }
        if ($_GET['error'] === 'invalidDomain') {
            echo str_replace("...", "Sorry, you can only login with a valid school email address.", $alert_box);
        }
    }
?>

    <div class="centered">

        <div id="login-prompt">
            <?php

            if (isset($_GET['error'])) { 
                if ($_GET['error'] === 'success') {
                    echo '<p style="font-size: 8pt">Nice, if this is a valid email you should be getting magic sign in link soon!</p>';
                }
                else { echo $login_form; }

            } elseif (isset($_GET['validator'])) { 

                $selector = $_GET['selector'];
                $validator = $_GET['validator'];

                $currentDate = date("U");

                require './includes/dbh.inc.php';

                $sql = "SELECT * FROM tokens WHERE loginSelector=? AND tokenExpires >= ?";
                $stmt = mysqli_stmt_init($conn);

                if (!mysqli_stmt_prepare($stmt, $sql)) {
                    echo "There was an error!";
                    exit();
                } else {
                    mysqli_stmt_bind_param($stmt, "ss", $selector, $currentDate);
                    mysqli_stmt_execute($stmt);


                    $result = mysqli_stmt_get_result($stmt);
                    if (!$row = mysqli_fetch_assoc($result)) {
                        echo "Sorry, you need to re-submit your login request.";
                        exit();
                    } else {

                        $tokenBin = hex2bin($validator);
                        $tokenCheck = password_verify($tokenBin, $row["loginToken"]);

                        if ($tokenCheck === false) {
                            echo "Sorry, you need to re-submit your login request.";
                            exit();
                        } elseif ($tokenCheck === true) {
                            $email = $row["userEmail"];

                            $_SESSION['email'] = $email;

                            header("Location: ./index.php");
                            exit();
                        }
                    }
                }
                
            } else { echo $login_form; } 
            ?>
        </div>

    </div>

<?php
    require "footer.php";
?>  