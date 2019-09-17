<?php

    function loadSlide(){
        $mysqli = new mysqli("localhost:3306", "SiteRender", "test123", "Portfolio");

        if($mysqli->connect_error) {
            exit('Could not connect');
        }

        $nextslide = $_GET["q"];
        $pk = $_GET["j"];

        $list = "SELECT * FROM Academics WHERE PK=".$pk." AND VISIBILITY=1";
        $result = $mysqli->query($list);

        if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        echo '<div class="panel" id="Slide'.$nextslide.'">';
        if($nextslide % 2 == 0){
            echo '<span class="holds" id="image-fade-left">';
                echo '<div class="frame">';
                    echo '<img class="projectimg" src="..\/Images\/'.$row["Image"].'">';
                echo '</div>';
            echo '</span>';
            echo '<span class="holds">';
            echo '<div class="textbox" id="text-in">';
                echo '<p>';
                    echo '<strong><b><u>'.$row["Title"].', '.date("M d, Y", strtotime($row["Date"])).':</u></b></strong> '.$row["Description"].'';
                echo '</p>';
            echo '</div>';
            echo '</span>';

        }
        else{
            echo '<span class="holds" id="invis">';
                echo '<div class="frame">';
                    echo '<img class="projectimg" src="../Images/'.$row["Image"].'">';
                echo '</div>';
            echo '</span>';
            echo '<span class="holds" id="text-in">';
                echo '<div class="textbox">';
                    echo '<p>';
                        echo '<strong><b><u>'.$row["Title"].', '.date("M d, Y", strtotime($row["Date"])).':</u></b></strong> '.$row["Description"].'';
                    echo '</p>';
                echo '</div>';
            echo '</span>';
            echo '<span class="holds" id="image-fade-right">';
                echo '<div class="frame">';
                    echo '<img class="projectimg" src="../Images/'.$row["Image"].'">';
                echo '</div>';
            echo '</span>';
        }
        echo '</div>';
        }
    }

    loadSlide();
    mysqli_close($mysqli);
?>
