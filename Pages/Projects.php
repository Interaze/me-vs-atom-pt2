<html lang="en" id="tml">
<head>
  <meta charset="utf-8">
  <title>My Works</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="The Main Landing for Christopher Scully's portfolio, for updates, developments or any new information regarding potential projects">
  <meta name="author" content="Christopher Scully">

  <link rel="stylesheet" href="../StyleSheets/Loader.css">
  <link rel="stylesheet" href="../StyleSheets/Slides.css">
  <link rel="stylesheet" href="../StyleSheets/Animations.css">
  <link rel="stylesheet" href="../StyleSheets/Projects.css">
  <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Libre+Franklin&display=swap" rel="stylesheet">

  <style>
    .panel{
        display: flex;
    }
    .panel::after{
        opacity: 1;
    }
  </style>

  <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Libre+Franklin&display=swap" rel="stylesheet">
</head>

<body id="bdy" onresize="ratioadj();">
    <!-- loading design was inspired by Petr Tichy from his blog post on https://ihatetomatoes.net/create-css3-spinning-preloader/ -->
    <div id="load-wrapper">
    <div id="loader"></div>
    <div class="loadpanel" id="load-left" style="top: 0; left: 0;"></div>
    <div class="loadpanel" id="load-right" style="bottom: 0;right: 0;"></div>
    </div>
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
<<<<<<< HEAD
    </div>
    <div class="panel" id="Slide0" onclick="showNextSlide();" name="Title">
        <span class="holds">
        <div class="textbox">
            <p>
                <strong><b><u>Project 1, 2019:</u></b></strong> convallis nec tellus sit amet, dapibus imperdiet orci. Cras ut lacus ut ipsum dapibus vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ac elit ex. Nullam non enim scelerisque, lacinia nibh nec, varius diam. Integer ullamcorper mauris ut aliquam molestie. Ut id ante nec orci blandit interdum non in turpis. Proin iaculis non lorem ac consequat. Nullam ut vehicula ipsum, quis eleifend felis. Aliquam in pellentesque nunc. In sit amet magna ac magna sagittis bibendum. Ut tincidunt dignissim felis in tempor. Aliquam vel imperdiet ligula. Vivamus tincidunt magna vel enim laoreet, vel luctus diam viverra. Ut mollis, lectus vitae dignissim congue, eros lectus euismod purus, et placerat eros erat condimentum lectus.
            </p>
        </div>
        </span>
        <span class="holds">
            <div class="frame">
                <img class="projectimg" src="../Images/Project1.png">
            </div>
        </span>
=======
>>>>>>> 94405d98307c33c6218dd9bee8f82387e7cd8006
    </div>
    <script src="../Scripting/Progress.js"></script>
    <script src="../Scripting/Projects.js"></script>
    <script type='text/javascript'>ratioadj();renderSlide();closeLoad();</script>
</body>
</html>
