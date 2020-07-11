<?php
    require "header.php";

    echo "Logged in as " . $_SESSION['email'];
?>
    <form action="includes/logout.inc.php" method="POST">
      <button class="nav-button" type="submit" name="logout-submit">Logout</button>
    </form>

    <main>
      <section id="word-section">
        <div class="waiting">⌛</div>
      </section>
  
      <section id="type-section">
        <input id="typebox" name="typebox" type="text" tabindex="1" autofocus onkeydown="typingTest(event)"/>
        <div id="timer" class="type-btn"><span>1:00</span></div>
        <button id="restart" class="type-btn" tabindex="2" onclick="restartTest()">
          <span id="restart-symbol">↻</span>
        </button>
      </section>
    </main>

    <audio id="successAudio" src="res/success.mp3" preload="auto"></audio>
    <audio id="failAudio" src="res/fail.mp3" preload="auto"></audio>
    <audio id="endAudio" src="res/end.mp3" preload="auto"></audio>

    <script src="scripts/typing-test.js"></script>
  </body>

<?php
    require "footer.php";
?>  