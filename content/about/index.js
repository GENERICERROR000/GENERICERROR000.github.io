// // ref: https://stackoverflow.com/a/9334106

// window.onload = addListeners;

// function addListeners() {
//     document
//         .querySelectorAll(".carla")[0]
//         .addEventListener("mousedown", mouseDown, false);
//     window.addEventListener("mouseup", mouseUp, false);
// }

// function mouseUp() {
//     window.removeEventListener("mousemove", divMove, true);
// }

// function mouseDown() {
//     window.addEventListener("mousemove", divMove, true);
// }

// // TODO:
// // * make this relative to mouse/page - whichever fixes it
// // * make size rigid
// // * look/steel how cargo does it
// // * prevent default
// function divMove(e) {
//     var div = document.querySelectorAll(".carla")[0];
//     div.style.position = "absolute";
//     div.style.top = e.clientY + "px";
//     div.style.left = e.clientX + "px";
// }
