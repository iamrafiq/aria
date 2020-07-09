$(document).ready(function () {
  $(".js--growth-step").click(function (event) {
    $(this).parent().css({
      color: "green",
      border: "2px solid green",
    });
    console.log(parent);
    //console.log(event.target.parentElement.parentElement);

    $(this).children(".step-details").slideToggle(500);
    //openGrowthSteps($(".js--growth-step").children(".js--span-number"));
    return false;
  });
  $(".js--growth-step .step-details").click(function (event) {
    event.stopPropagation();
  });
});
function openGrowthSteps(child) {
  let y = document.getElementsByClassName("js--span-title");
  for (let j = 0; j < y.length; j++) {
    y[j].classList.remove("span-title-step-opened");
    y[j].classList.add("span-title-step-closed");
  }
  console.log(child);
  child.remove("span-title-step-closed");
  child.add("span-title-step-opened");
}
function openTab(tabName, btnName) {
  if (document.getElementById(tabName).classList.contains("tab-open")) {
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
