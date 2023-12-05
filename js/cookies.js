dragElement(document.getElementById("cookies"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, initialx=elmnt.offsetLeft, initialy=elmnt.offsetTop;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        elmnt.style.top = (initialy) + "px";
        elmnt.style.left = (initialx) + "px";
    }
}

document.getElementById('cookiesClose').addEventListener("click", function (){
    document.getElementById('cookies').hidden = true;
});

document.getElementById('cookiesNo').addEventListener("click", function (){
    alert("Aller tu n'es pas cool");
    document.getElementById('cookiesNo').hidden = true;
    document.getElementById('cookiesClose').textContent = "J'ai pas le choix";
});