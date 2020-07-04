$(document).ready(function(){
    $(".js--growth-step").click(function(event){
       $(this).children(".step-details").slideToggle(500);
         return false;
    });
    $(".js--growth-step .step-details").click(function(event) {
        event.stopPropagation();
   });
   $(".js--growth-step").click(function(event){
    $(this).children(".step-details").slideToggle(500);
      return false;
 });
});

function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
     // x[i].style.display = "none";
     x[i].classList.remove("tab-open");
     x[i].classList.remove("fadeIn");


     x[i].classList.add("tab-close");

    }
    console.log(tabName);
    document.getElementById(tabName).classList.add("tab-open");
    document.getElementById(tabName).classList.add("fadeIn");

    document.getElementById(tabName).classList.remove("tab-close");
  //  document.getElementById(tabName).style.display = "block";
  }