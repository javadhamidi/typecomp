<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <title>Leaderboard</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> 
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <link href="styles/style.css" rel="stylesheet">
  </head>
  <body onLoad="buildTable('#leaderboard')">
    <button class="nav-button" onclick="window.location.reload(true)">Refresh</button>

    <div class="table-responsive">
        <table id="leaderboard" cellpadding="10px">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>

    <?php
        require './includes/dbh.inc.php';

        $sql = "SELECT `email`, `scoreWPM` FROM `leaderboard` ORDER BY convert(`scoreWPM`, UNSIGNED INTEGER) DESC;";
        $result = $conn->query($sql);
    
        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                echo '<tr>';
                    echo '<td>';
                        echo ucfirst((explode(".",$row['email'])[0]));
                    echo '</td>';
                    echo '<td>';
                        echo $row['scoreWPM'];
                    echo '</td>';
                echo '</tr>';
            }
        } else {
            echo "0 results";
        }
    ?>
                                    </tbody>
                                </table>
                            </div>
  </body>
</html>
