
function currentDate() {
    document.getElementById("currentDay").textContent = moment().format('dddd, MMMM Do YYYY');
}

function init() {
    setHours();
    currentDate();
    displaySavedTasks();
}

function setHours() {
    let hour = new Date().getHours();

    for (i = 8; i <= 16; i++) {
        let hourBlock = $(`#hour${i}`);
        if (i > hour) {
            hourBlock.addClass("future");

        } else if (i < hour) {
            hourBlock.addClass("past");

        } else {
            hourBlock.addClass("present");
        }
    }
}

document.getElementById('eight-btn').addEventListener('click', function() {
    localStorage.setItem("8:00", document.getElementById('8-text').value);
});

document.getElementById('nine-btn').addEventListener('click', function() {
    localStorage.setItem("9:00", document.getElementById('9-text').value);
});

document.getElementById('ten-btn').addEventListener('click', function() {
    localStorage.setItem("10:00", document.getElementById('10-text').value);
});

document.getElementById('eleven-btn').addEventListener('click', function() {
    localStorage.setItem("11:00", document.getElementById('11-text').value);
});

document.getElementById('twelve-btn').addEventListener('click', function() {
    localStorage.setItem("12:00", document.getElementById('12-text').value);
});

document.getElementById('thirteen-btn').addEventListener('click', function() {
    localStorage.setItem("1:00", document.getElementById('13-text').value);
});

document.getElementById('fourteen-btn').addEventListener('click', function() {
    localStorage.setItem("2:00", document.getElementById('14-text').value);
});

document.getElementById('fifteen-btn').addEventListener('click', function() {
    localStorage.setItem("3:00", document.getElementById('15-text').value);
});

document.getElementById('sixteen-btn').addEventListener('click', function() {
    localStorage.setItem("4:00", document.getElementById('16-text').value);
});

function displaySavedTasks() {
    $('#8-text').val(localStorage.getItem("8:00"));
    $('#9-text').val(localStorage.getItem("9:00"));
    $('#10-text').val(localStorage.getItem("10:00"));
    $('#11-text').val(localStorage.getItem("11:00"));
    $('#12-text').val(localStorage.getItem("12:00"));
    $('#13-text').val(localStorage.getItem("1:00"));
    $('#14-text').val(localStorage.getItem("2:00"));
    $('#15-text').val(localStorage.getItem("3:00"));
    $('#16-text').val(localStorage.getItem("4:00"));
}

init();