const canvas = document.getElementById("jsCanvas");
let painting = false

function stopPainting() {
    painting = false;;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMousedown(event){
    painting = true;
}

function onMouseUp(event){
    stopPainting();
}



if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMousedown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave",stopPainting);
}