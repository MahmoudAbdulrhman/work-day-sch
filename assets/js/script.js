//Today Date
var todayDate = document.querySelector("#currentDay");
var currentDate =moment();
todayDate.textContent = currentDate.format("dddd , MMMM Do");