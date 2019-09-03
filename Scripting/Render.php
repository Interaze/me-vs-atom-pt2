<?php

    function loadSlide(){
        $mysqli = new mysqli("localhost:3306", "SiteRender", "test123", "Portfolio");

        if($mysqli->connect_error) {
            exit('Could not connect');
        }

        $nextslide = $_GET["q"];
        $pk = $_GET["j"];

        $list = "SELECT * FROM Projects WHERE PK=".$pk." AND VISIBILITY=1";
        $result = $mysqli->query($list);

        if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        
        echo '<div class="panel" id="Slide'.$nextslide.'">';
            echo '<span class="holds">';
                echo '<div class="frame">';
                    echo '<img class="projectimg" scr"../Images/'.$row["Image"].'">';
                echo '</div>';
            echo '</span>';

            echo '<span class="holds">';
            echo '<div class="textbox">';
                echo '<p>';
                    echo '<strong><b><u>'.$row["Title"].', '.$row["Date"].':</u></b></strong> '.$row["Description"].'';
                echo '</p>';
            echo '</div>';
            echo '</span>';
        echo '</div>';
        }
    }

    loadSlide();
?>
