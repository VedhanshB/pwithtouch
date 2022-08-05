var mouseEvent = "empty";
var lastposx
var lastposy
var lastpostx
var lastposty
var width = screen.width

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "red";
    width_of_line = 2;
    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {

        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(lastposx, lastposy);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        lastposx = current_position_of_mouse_x;
        lastposy = current_position_of_mouse_y;

    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

new_width = screen.width - 70;
new_height = screen.height - 300;

if (new_width > 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("tstart", my_touchstart);
function my_touchstart(e)
{
    console.log("my_touchstart");
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "touchstart";
    lastpostx = e.touches[0].clientX - canvas.offsetLeft;
    lastposty = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("tmove", my_touchmove);
function my_touchmove(e)
{
    console.log("my_touchmove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(lastpostx, lastposty);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
    lastpostx = current_position_of_touch_x;
    lastposty = current_position_of_touch_y;
}