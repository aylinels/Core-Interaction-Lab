// repeater vars
var counter = 0;
var minuteCounter = 0;
var hourCounter = 0;

// get HTML elements
var seconds = document.getElementById('seconds');
var minutes = document.getElementById("minutes");
var hours = document.getElementById("hours");
var day = document.getElementById("weekday");
var monthDay = document.getElementById("monthday")
var milliseconds = document.getElementById("milliseconds")

// weekdays items
var weekDays = [ "Sun", "Mon", "Tues", "Wednes", "Thurs", "Satur"]

function weekDay(dayIndex, dayElement){
	
dayElement.innerHTML = weekDays[dayIndex] + "day"
}


// TIMER
function timeUnit(output, secondsOrMinutes){
// we want it to take the current count
// and then add a 0 to the count
//  and replace the current seconds value
	if(output < 10){
		secondsOrMinutes.innerHTML = "0" + output;
	}else{
		secondsOrMinutes.innerHTML = output;
	}
}


var myRepeater = function(){
	console.log(counter)
	timeUnit(counter, seconds)
	counter = counter +1;

	if(counter === 60){
		counter= 0;
		minuteCounter = minuteCounter + 1;
		timeUnit (minuteCounter, minutes);
	}

	if(minuteCounter === 60){
		minuteCounter= 0;
		hourCounter = hourCounter + 1;
		timeUnit (hourCounter, hours);
	}

}

setInterval(myRepeater, 1000)


// CLOCK
function Clock(){
  
  var currentDate = new Date;

  timeUnit(currentDate.getHours(), hours)
  timeUnit(currentDate.getMinutes(), minutes)
  timeUnit(currentDate.getSeconds(), seconds)
  timeUnit(currentDate.getMilliseconds(), milliseconds)

  weekDay(currentDate.getDay(), day)

  monthDay.innerHTML = currentDate.getDate()

}


setInterval(Clock, 1);


