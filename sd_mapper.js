"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Aiden Martinez
   Date:   02.12.2019

*/
runClock();
setInterval('runClock()', 1000);

function runClock() {
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();
    document.getElementById('timeStamp').innerHTML = dateStr + ', ' + timeStr;
    var thisTime = new Date();
    var timeStr = thisTime.toLocaleString();
    document.getElementById("timeStamp").innerHTML = timeStr;
    var thisHour = thisTime.getHours();
    var thisMonth = thisTime.getMonth();
    var mapNum = (2 * thisMonth + thisHour) % 24;
    var imgStr = "<img src='sd_sky" + mapNum + ".png' />";
    document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);
}