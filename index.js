// Your code here

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(leftNumbers, 10)

    dodger.style.left = `${right + 1}px`;
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }

    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
})
