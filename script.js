const images = document.querySelectorAll(".image");
let draggedElement = null;

// Drag Start Event
images.forEach(image => {
    image.addEventListener("dragstart", (e) => {
        draggedElement = e.target;
        e.target.classList.add("selected");
    });

    // Drag Over Event (Prevents Default to Allow Drop)
    image.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    // Drop Event (Swaps Background Images)
    image.addEventListener("drop", (e) => {
        e.preventDefault();

        if (draggedElement !== e.target) {
            // Get computed background images
            let draggedBg = window.getComputedStyle(draggedElement).backgroundImage;
            let targetBg = window.getComputedStyle(e.target).backgroundImage;

            // Swap background images
            draggedElement.style.backgroundImage = targetBg;
            e.target.style.backgroundImage = draggedBg;
        }
    });

    // Drag End Event (Remove highlight)
    image.addEventListener("dragend", () => {
        draggedElement.classList.remove("selected");
    });
});
