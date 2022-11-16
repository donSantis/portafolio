window.onscroll = function() {scrollFunction(),scrollFunction2()};

function scrollFunction() {
  if (document.body.scrollTop > 660 || document.documentElement.scrollTop > 660) {
    document.getElementById("navbar-down").style.top = "20px";
    document.getElementById("navbar-down").style.display = "block";
   /* document.querySelector(".separator-top").style.top = "20px"; */
  } else {
    document.getElementById("navbar-down").style.top = "-555px";
    document.getElementById("navbar-down").style.display = "none";
   /* document.querySelector(".separator-top").style.top = "-100px";*/
  }
}

function scrollFunction2() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 1400) {
    document.getElementById("about-container").className = 'general-box my-4 mx-3 about-container position-absolute text-center col-5';
    document.getElementById("perfil-container").className = 'general-box my-4 mx-3 perfil-container position-absolute text-center col-3';
    document.getElementById("skill-container").className = 'general-box mx-3 skill-container col-8 ';
   /* document.querySelector(".separator-top").style.top = "20px"; */
  } else {
    document.getElementById("about-container").className = 'about-container-negative';
    document.getElementById("skill-container").className = 'skill-container-negative';
    document.getElementById("perfil-container").className = 'pefil-container-negative';
   /* document.querySelector(".separator-top").style.top = "-100px";*/
  }
}