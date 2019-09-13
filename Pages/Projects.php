<!DOCTYPE html>
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
  <!--test-->
  <style>
    body{
        overflow-x: hidden;
    }
    .panel{
        display: flex;
    }
    .panel::after{
        opacity: 1;
    }
  </style>

  <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Libre+Franklin&display=swap" rel="stylesheet">
</head>

<body id="bdy" onscroll="triggers();" onresize="ratioadj();">
    <!-- loading design was inspired by Petr Tichy from his blog post on https://ihatetomatoes.net/create-css3-spinning-preloader/ -->
    <div id="load-wrapper">
    <div id="loader"></div>
    <div class="loadpanel" id="load-left" style="top: 0; left: 0;"></div>
    <div class="loadpanel" id="load-right" style="bottom: 0;right: 0;"></div>
    </div>

    <div id="wrapper"></div>
    <div class="overscroll" id="end"></div>

    <script src="../Scripting/Progress.js"></script>
    <script src="../Scripting/Projects.js"></script>
    <script>
        var projPK = [-1,-1];
        var PKnum = 0;

        <?php
            $mysqli = new mysqli("localhost:3306", "SiteRender", "test123", "Portfolio");

            if($mysqli->connect_error) {
                exit('Could not connect');
            }

            $incr = 0;
            $list = "SELECT PK FROM Projects WHERE Visibility='1' ORDER BY Date DESC";
            $result = $mysqli->query($list);

            while($test = mysqli_fetch_assoc($result)){
                echo "\tprojPK[",$incr,"] = ",$test['PK'],";\n";
                $incr++;
            }
            echo "\tprojPK[",$incr,"] = -9\n";
        ?>

        function renderSlide(){
            if(projPK[PKnum] != -9){
            showNextSlide(projPK[PKnum]);
            PKnum++;
            }
            else {
                //code animation for done loading
            }
        }
        renderSlide();
    </script>
    <script type='text/javascript'>ratioadj();closeLoad();</script>
</body>
</html>
