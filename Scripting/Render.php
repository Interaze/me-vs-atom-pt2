<?php
    /*test pass test123*/
    $mysqli = new mysqli("localhost:3306", "SiteRender", "test123", "Portfolio");
    if($mysqli->connect_error) {
        exit('Could not connect');
    }

    function loadSlide($nextslide){
        echo("sent");
    }

    loadSlide($_GET["q"]);
?>
