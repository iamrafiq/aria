$(document).ready(function(){
    $(".js--growth-step").click(function(event){
       $(this).children(".step-details").slideToggle(500);
         return false;
    });
    $(".js--growth-step .step-details").click(function(event) {
        event.stopPropagation();
   });
});

function openTab(tabName, btnName) {
    if(document.getElementById(tabName).classList.contains("tab-open")){
        return;
    }
    
    let y = document.getElementsByClassName("btn-tab");
    for (let j = 0; j < y.length; j++) {
     y[j].classList.remove("nav-tab-selected");
     y[j].classList.add("nav-tab-unselected");

    }
    console.log(btnName);
    document.getElementById(btnName).classList.add("nav-tab-selected");
    document.getElementById(btnName).classList.remove("nav-tab-unselected");

    //$(this).classList.add("nav-tab-selected");

    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
     x[i].classList.remove("tab-open");
     x[i].classList.remove("fadeIn");
     x[i].classList.add("tab-close");

    }
    document.getElementById(tabName).classList.add("tab-open");
    document.getElementById(tabName).classList.add("fadeIn");
    document.getElementById(tabName).classList.remove("tab-close");
  }