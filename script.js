
document.addEventListener("keydown", (event) => {
    let key = event.key;
    let keyValue = event.which;
    let keyCode = event.keyCode;
    document.getElementById("key").innerHTML = "The key pressed was: " + key;
    document.getElementById("value").innerHTML ="The value is " + keyValue;
    document.getElementById("keyCode").innerHTML = "The keycode is " + keyCode;
}, false);
