<!doctype html>

<html lang="en" id="tml">
<head>
  <meta charset="utf-8">
  <title>Chris Scully</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="The Main Landing for Christopher Scully's portfolio, for updates, developments or any new information regarding potential projects">
  <meta name="author" content="Christopher Scully">

  <link rel="stylesheet" href="StyleSheets/IndexStyle.css">
  <link rel="stylesheet" href="StyleSheets/Slides.css">
  <link rel="stylesheet" href="StyleSheets/Loader.css">
  <link rel="stylesheet" href="StyleSheets/Animations.css">
  <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Libre+Franklin&display=swap" rel="stylesheet">
</head>

<body onscroll="triggers()" onresize="ratioadj()" id="bdy">
    <!-- loading design was inspired by Petr Tichy from his blog post on https://ihatetomatoes.net/create-css3-spinning-preloader/ -->
    <div id="load-wrapper">
    <div id="loader"></div>
    <div class="loadpanel" id="load-left" style="top: 0; left: 0;"></div>
    <div class="loadpanel" id="load-right" style="bottom: 0;right: 0;"></div>
    </div>
    <div class="panel" id="topp" name="Title">
        <div class="titleblock" id="btitle">
            <h1 id="title-fade-out">Chris<wbr>topher
            <h1 style="overflow: hidden" id="title-fade-out">Scully</h1>
            <h4 id="title-fade-out">Developer, <wbr>Designer, <wbr>Tutor <br>& Researcher</h4>
        </div>
    </div>
    <div class="panel" name="About">
        <div class="aboutcontainer">
            <div class="about">
            <h2 id="header-fade-out">About</h2>
            <div class="wrapper" id="quote">
                <h3 id="header-fade-out">"Currently I'm a student within the University of Missouri: Columbia, with a passion for learning, teaching, developing and helping." \n-C Scully
                </h3>
            </div>
            </div>
        </div>
    </div>
    <div class="panel" name="My Works">
        <div class="aboutcontainer">
            <div class="about" id="slideshow">
                <h2 class="tritle" name="tritle">My Works</h2>
                <div class="wrapper" name="trihold" onmouseover="slides(0);" onmouseout="slides(1);">
                <a class="trilink" href="/pages/CourseWork.php">
                <div class="card" name="trifold" onmouseover="changeslide(1);">
                    <img src="../Images/Mizzou-columns-JayBuffington.jpg" alt="Mizzou Columns">
                    <div class="caption"><h5>Academic Involvement</h5></div>
                    <div class="hvr" style="background-image: url('../Images/182316-education/svg/library.svg');">
                    </div>
                </div>
                </a>
                <a class="trilink" href="../Images/resume.pdf">
                <div class="card" name="trifold" onmouseover="changeslide(2);">
                    <img src="../Images/resume-stock.png" alt="resume image">
                    <div class="caption"><h5>My Resume</h5></div>
                    <div class="hvr" style="background-image: url('../Images/182316-education/svg/exam.svg');">
                    </div>
                </div>
                </a>
                <a class="trilink" href="/pages/projects.php">
                <div class="card" name="trifold" onmouseover="changeslide(3);">
                    <img src="../Images/my works.jpg" alt="photo of code">
                    <div class="caption"><h5>Projects</h5></div>
                    <div class="hvr" style="background-image: url('../Images/182316-education/svg/code.svg');">
                    </div>
                </div>
                </a>
                </div>
                <div class="progress" id="slideprogress"><div id="bar"></div></div>
            </div>
        </div>
    </div>
    <div class="panel" style="display: flex;"name="This Site">
        <input type="radio" class="list" name="list" id="L5" value="L5">
            <div class="bearText" id="horzdis">
            <label class="horzptions" for="L1" onclick="scrolllock()"><h4 class="captionTitle" id="optionone">Site's Purpose</h4></label>
            <label class="horzoptions" for="L2" onclick="scrolllock()"><h4 class="captionTitle" id="optiontwo">Crediting</h4></label>
            <label class="horzoptions" for="L3" onclick="scrolllock()"><h4 class="captionTitle" id="optionthree">Licensing</h4></label>
            <label class="horzoptions" for="L4" onclick="scrolllock()"><h4 class="captionTitle" id="optionfour">Why Vanilla?</h4></label>
            </div>

            <label class="horzptions" for="L5">
            <input type="radio" class="list" name="list" id="L1" value="L1">
            <div class="infopanel" onclick="scrollunlock()">

                <p>While I've worked with HTML and CSS since 8th grade, and picked up further when I was a Sophomore in Highschool, I realized there wasn't many sites that I felt accurately exhibited my design style. This Site's intent is to develop and maintain the technical experience I've accumulated while exhibiting my personal design style for future employers or anyone with an interest.</p>
            </div>
            </label>
            <label class="horzptions" for="L5">
            <input type="radio" class="list" name="list" id="L2" value="L2">
            <div class="infopanel" onclick="scrollunlock()">

                <p>Besides the images and Icons that are acredited within the Licensing section of my site, the only resource of major note would be the loading screen, which I gained guidence through from Petr Tichy from his <a href="https://ihatetomatoes.net/create-css3-spinning-preloader/" rel="noreferrer">blog post</a> covering a page loader animation. His design was both ingenious and clean, and I utalized his method of keyframes along with using :before and :after to rotate 3 loading bars on a singular div. Beyond that everying including the slideshow was designed and developed by me.</p>
            </div>
            </label>
            <label class="horzptions" for="L5">
            <input type="radio" class="list" name="list" id="L3" value="L3">
            <div class="infopanel" onclick="scrollunlock()">

                <p>The initial two slide icons are from <a href="https://www.flaticon.com/authors/zlatko-najdenovski" title="Zlatko Najdenovski" rel="noreferrer">Zlatko Najdenovski</a> from <a href="https://www.flaticon.com/"             title="Flaticon" rel="noreferrer">www.flaticon.com</a> and is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noreferrer">CC 3.0 BY</a>
                <br><br>
                The final slide icon was made by <a href="https://www.freepik.com/?__hstc=57440181.0b0a4dce73416542b9916801a6b44a76.1562369188125.1562369188125.1562369188125.1&__hssc=57440181.5.1562369188126&__hsfp=690007401" title="Freepik" rel="noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" rel="noreferrer">www.flaticon.com</a> and is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noreferrer">CC 3.0 BY</a>
                <br><br>
                Background Pattern is from  <a href="https://pngtree.com/freebackground/geometric-white-background_838934.html" rel="noreferrer">pngtree.com</a>
                </p>
            </div>
            </label>
            <label class="horzptions" for="L5">
            <input type="radio" class="list" name="list" id="L4" value="L4">
            <div class="infopanel" onclick="scrollunlock()">

                <p>While utilities similar to Bootstrap and JQuery can help in developing powerful websites, I place a high priority on the development and understanding of the underlying utilities offered. While I'm not adverse to using tools like JQuery, I wanted to take advantage to further expand my understanding of what powers it. Furthermore, there are other projects where I've utalized these tools to exhibit of comprehension of them, yet I aspire to avoid a dependancy on these tools.</p>
            </div>
            </label>
    </div>
    <div class="panel" name="footer">
        <div class="aboutcontainer">
            <div class="about">
                <h2>Additional</h2>
                <div class="addtnl"><p>For all of the source code of the site, I'll have it posted on my GitHub. If you want to experiment with a slide based webpage, I'm open to any usage of my design and layout. Yet as a developer I'd want it to be sourced back to me.</p>
                    <a href="https://github.com/Interaze/me-vs-atom-pt2"><img class="sublogo" src="../Images/github.svg"></a>
                </div>
            </div>

        </div>
    </div>
  <script src="Scripting/Index.js"></script>
  <script src="Scripting/Animations.js"></script>
  <script src="Scripting/Progress.js"></script>
  <script type='text/javascript'>ratioadj();setmoveop();triggers();closeLoad();</script>
</body>
</html>
