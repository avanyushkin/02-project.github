const item = document.querySelector(".item");
//console.log(item);
item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

function dragstart(event) {
    /*console.log('drag start', event.target);*/
    event.target.classList.add("hold");
    setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragend(event) {
    /*console.log('drag end');*/
    event.target.classList.remove("hold"); /* без точки */
    event.target.classList.remove("hide");
}
/*-----------------*/
const placeHolders = document.querySelectorAll(".placeholder");
for (const it of placeHolders) {
    /*console.log(it);*/
    it.addEventListener("dragover", dragover); /*наш элемент находится над ячейкой*/
    it.addEventListener("dragenter", dragenter);/*элемент зашел на ячейку*/
    it.addEventListener("dragleave", dragleave);/*элемент покинул ячейку*/
    it.addEventListener("drop", drop); /*отпустили элемент*/
}

function dragover(event) {
    /*console.log("drag over");*/
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add("hovered");
    /*console.log("drag enter");*/
}

function dragleave(event) {
    event.target.classList.remove("hovered");
    /*console.log("drag leave");*/
}

function drop(event) {
    /*console.log("drop");*/
    event.target.append(item);
    event.target.classList.remove("hovered");
}