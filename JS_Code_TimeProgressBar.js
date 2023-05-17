// Year Progress
var currentDate = new Date();
var startOfYear = new Date(currentDate.getFullYear(), 0, 1);
var endOfYear = new Date(currentDate.getFullYear() + 1, 0, 1);
var yearProgress = (currentDate - startOfYear) / (endOfYear - startOfYear) * 100;
document.getElementById("year-progress").style.width = yearProgress + "%";
document.getElementById("year-progress-text").innerHTML = "YEAR: " + yearProgress.toFixed(0) + "%";

// Month Progress
var startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
var endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
var monthProgress = (currentDate - startOfMonth) / (endOfMonth - startOfMonth) * 100;
document.getElementById("month-progress").style.width = monthProgress + "%";
document.getElementById("month-progress-text").innerHTML = "MONTH: " + monthProgress.toFixed(0) + "%";

// Week Progress
var currentDate = new Date();
var startOfWeek = new Date();
startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
startOfWeek.setHours(0, 0, 0, 0);
var endOfWeek = new Date(startOfWeek);
endOfWeek.setDate(startOfWeek.getDate() + 7);
var weekProgress = (currentDate - startOfWeek) / (endOfWeek - startOfWeek) * 100;
document.getElementById("week-progress").style.width = weekProgress + "%";
document.getElementById("week-progress-text").innerHTML = "WEEK: " + weekProgress.toFixed(0) + "%";

// Day Progress
var startOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
var endOfDay = new Date(startOfDay);
endOfDay.setDate(startOfDay.getDate() + 1);
var dayProgress = (currentDate - startOfDay) / (endOfDay - startOfDay) * 100;
document.getElementById("day-progress").style.width = dayProgress + "%";
document.getElementById("day-progress-text").innerHTML = "DAY: " + dayProgress.toFixed(0) + "%";



