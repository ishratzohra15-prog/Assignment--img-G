
const buttons = document.querySelectorAll(".filter-buttons button");
const items = document.querySelectorAll(".gallery-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

let category = "all";
let currentIndex = 0;

function updateGallery() {
    const filteredItems = Array.from(items).filter(item => {
        return category === "all" ||
            item.dataset.category === category;
    });

    items.forEach(item => {
        item.style.display = "none";
    });

    if (filteredItems.length > 0) {
        filteredItems[currentIndex].style.display = "block";
    }

    pageInfo.textContent =
        `${currentIndex + 1} / ${filteredItems.length}`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled =
        currentIndex === filteredItems.length - 1;
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        category = button.dataset.filter;
        currentIndex = 0;

        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        updateGallery();
    });
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateGallery();
    }
});

nextBtn.addEventListener("click", () => {
    const filteredItems = Array.from(items).filter(item => {
        return category === "all" ||
            item.dataset.category === category;
    });

    if (currentIndex < filteredItems.length - 1) {
        currentIndex++;
        updateGallery();
    }
});

updateGallery();

