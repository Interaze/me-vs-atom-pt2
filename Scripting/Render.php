<?php

    $mysqli = new mysqli("localhost:3306", "SiteRender", "test123", "Portfolio");

    if($mysqli->connect_error) {
        exit('Could not connect');
    }

    function loadSlide($nextslide,$pk){
        echo '<div class="panel" id="Slide'.$nextslide.'"></div>';
            echo '<span class="holds">';
                echo '<div class="frame">';
                    echo '<img class="projectimg" scr"../Images/Project1.png">';
                echo '</div>';
            echo '</span>';
            echo '<span class="holds">';
            echo '<div class="textbox">';
                echo '<p>';
                    echo '<strong><b><u>Project 1, 2019:</u></b></strong> convallis nec tellus sit amet, dapibus imperdiet orci. Cras ut lacus ut ipsum dapibus vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ac elit ex. Nullam non enim scelerisque, lacinia nibh nec, varius diam. Integer ullamcorper mauris ut aliquam molestie. Ut id ante nec orci blandit interdum non in turpis. Proin iaculis non lorem ac consequat. Nullam ut vehicula ipsum, quis eleifend felis. Aliquam in pellentesque nunc. In sit amet magna ac magna sagittis bibendum. Ut tincidunt dignissim felis in tempor. Aliquam vel imperdiet ligula. Vivamus tincidunt magna vel enim laoreet, vel luctus diam viverra. Ut mollis, lectus vitae dignissim congue, eros lectus euismod purus, et placerat eros erat condimentum lectus.';
                echo '</p>';
            echo '</div>';
            echo '</span>';
        echo '</div>';
    }


    /*
    <div class="panel" id="Slide0" onclick="showNextSlide();" name="Title">
        <span class="holds">
            <div class="frame">
                <img class="projectimg" src="../Images/Project1.png">
            </div>
        </span>
        <span class="holds">
        <div class="textbox">
            <p>
                <strong><b><u>Project 1, 2019:</u></b></strong> convallis nec tellus sit amet, dapibus imperdiet orci. Cras ut lacus ut ipsum dapibus vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ac elit ex. Nullam non enim scelerisque, lacinia nibh nec, varius diam. Integer ullamcorper mauris ut aliquam molestie. Ut id ante nec orci blandit interdum non in turpis. Proin iaculis non lorem ac consequat. Nullam ut vehicula ipsum, quis eleifend felis. Aliquam in pellentesque nunc. In sit amet magna ac magna sagittis bibendum. Ut tincidunt dignissim felis in tempor. Aliquam vel imperdiet ligula. Vivamus tincidunt magna vel enim laoreet, vel luctus diam viverra. Ut mollis, lectus vitae dignissim congue, eros lectus euismod purus, et placerat eros erat condimentum lectus.
            </p>
        </div>
        </span>
    </div>
    */
    loadSlide($_GET["q"],$_GET["j"]);
?>
