var todaysDate = dayjs().format('MMM D, YYYY');
$('#currentDay').text(todaysDate);

var todaysTime = dayjs().format('h:mm:ss');
$('#currentTime').text(todaysTime);

function saveData() {
    var input = document.getElementById("#hour");
    localStorage.setItem("server", input.val());
}
var storedValue = localStorage.getItem("server");