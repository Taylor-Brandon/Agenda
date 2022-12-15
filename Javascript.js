var todaysDate = dayjs().format('dddd, MMMM D, YYYY');
$('#currentDay').text(todaysDate);

function saveText(event) {
    var input = event.target.parentNode.id;
    var text = event.target.parentNode.querySelector('textarea').value;
    localStorage.setItem(input, text);
}
addEventListener('DOMContentLoaded', (event) => {
    for(var i = 1; i < 25; i++) {
        var text = "hour-" + i;
        var value = localStorage.getItem(text);
        if(value) {
            document.getElementById(text).querySelector('textarea').value = value;
        }
    }
    updateTime();
    setInterval(updateTime,1000);

});
function updateTime() {
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        var time = hour + ":" + minute + ":" + second;
document.getElementById("currentTime").innerHTML = time;
        for(var i = 1; i < 25; i++) {
            var text = "hour-" + i;
            var container = document.getElementById(text);
            if(!container) {
                continue;
            }
            if(i < hour) {
                container.classList.add("past");
                container.classList.remove("present");
                container.classList.remove("future");
            } else if (i == hour) {
                container.classList.add("present");
                container.classList.remove("past");
                container.classList.remove("future");
            } else {
                container.classList.add("future");
                container.classList.remove("present");
                container.classList.remove("past");
            }
        
        }
    }
