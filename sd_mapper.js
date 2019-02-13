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
    /*==================================================*\
    The above line of JavaScript creates a variable with the name of: "currentDay". The newly created variable stores the following data: new Date()
    \*==================================================*/
    var dateStr = currentDay.toLocaleDateString();
    /*==================================================*\
    The above line of JavaScript creates a variable with the name of: "dateStr". The newly created variable stores the following data: currentDay.toLocaleDateString()
    \*==================================================*/
    var timeStr = currentDay.toLocaleTimeString();
    /*==================================================*\
    The above line of JavaScript creates a variable with the name of: "timeStr". The newly created variable stores the following data: currentDay.toLocaleTimeString()
    \*==================================================*/
    document.getElementById('timeStamp').innerHTML = dateStr + ', ' + timeStr;
    var thisTime = new Date();
    /*==================================================*\
    The above line of JavaScript creates a variable with the name of: "thisTime". The newly created variable stores the following data: new Date()
    \*==================================================*/
    var timeStr = thisTime.toLocaleString();
    /*==================================================*\
    The above line of JavaScript creates a variable with the name of: "timeStr". The newly created variable stores the following data: thisTime.toLocaleString()
    \*==================================================*/
    document.getElementById("timeStamp").innerHTML = timeStr;
    var thisHour = thisTime.getHours();
    /*==================================================*\
    The above line of JavaScript creates a variable with the name of: "thisHour". The newly created variable stores the following data: thisTime.getHours()
    \*==================================================*/
    var thisMonth = thisTime.getMonth();
    /*==================================================*\
    The above line of JavaScript creates a variable with the name of: "thisMonth". The newly created variable stores the following data: thisTime.getMonth()
    \*==================================================*/
    var mapNum = (2 * thisMonth + thisHour) % 24;
    /*==================================================*\
    The above line of JavaScript creates a variable with the name of: "mapNum". The newly created variable stores the following data: (2 * thisMonth + thisHour) % 24
    \*==================================================*/
    var imgStr = "<img src='sd_sky" + mapNum + ".png' />";
    /*==================================================*\
    The above line of JavaScript creates a variable with the name of: "imgStr". The newly created variable stores the following data: "<img src='sd_sky" + mapNum + ".png' />"
    \*==================================================*/
    document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);
}