window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "30px";
    document.querySelector(".separator-top").style.top = "20px";
  } else {
    document.getElementById("navbar").style.top = "-555px";
    document.querySelector(".separator-top").style.top = "-100px";
  }
}