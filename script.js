const firstCard = document.querySelector(".card:first-of-type");
const lastCard = document.querySelector(".card:last-of-type");
const firstX = document.querySelector(".card:first-of-type i");
const lastX = document.querySelector(".card:last-of-type i");


firstX.addEventListener('click', function () {
    firstCard.style.scale = "0";
    setTimeout(() => {
        firstCard.style.scale = "1";
    }, "3000");
});

lastX.addEventListener('click', function () {
    lastCard.style.scale = "0";
    setTimeout(() => {
        lastCard.style.scale = "1";
    }, "3000");
});