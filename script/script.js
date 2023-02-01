const [galleryButtonPrev, galleryButtonNext] =
    document.querySelectorAll("#galleryMoveButton");

const containerOfGanres = document.querySelectorAll("#containerOfGanres");
const arrayOfGanres = document.querySelectorAll("#galleryGanre");
const arrayOfGanredButtons = document.querySelectorAll("#galleryGanreButton");

arrayOfGanredButtons.forEach((button, index = 0) => {
    button.addEventListener("click", () => {
        arrayOfGanredButtons.forEach((element) => {
            if (element.classList.contains("activebutton"))
                element.classList.remove("activebutton");
        });
        button.classList.add("activebutton");

        arrayOfGanres.forEach((ganre) => {
            ganre.classList.remove("activeganre");
        });

        arrayOfGanres[index].classList.add("activeganre");
        containerOfGanres[index].scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });
});

[galleryButtonPrev, galleryButtonNext].forEach((button) => {
    button.addEventListener("click", () => {
        arrayOfGanres.forEach((ganre) => {
            if (ganre.classList.contains("activeganre")) {
                let distanceToMove =
                    ganre.children[1].offsetLeft - ganre.children[0].offsetLeft;
                console.log(ganre.children);
                if (button.classList.contains("portfolio__prev"))
                    containerOfGanres[0].scrollBy({
                        left: -distanceToMove,
                        top: 0,
                        behavior: "smooth",
                    });
                else
                    containerOfGanres[0].scrollBy({
                        left: distanceToMove,
                        top: 0,
                        behavior: "smooth",
                    });
            }
        });
    });
});
