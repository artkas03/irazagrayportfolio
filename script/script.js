const navigationButtons = document.querySelectorAll("#scrollToBlockBtn");

const [galleryButtonPrev, galleryButtonNext] =
    document.querySelectorAll("#galleryMoveButton");

const containerOfGanres = document.querySelectorAll("#containerOfGanres");
const arrayOfGanres = document.querySelectorAll("#galleryGanre");
const arrayOfGanredButtons = document.querySelectorAll("#galleryGanreButton");

const orderButtons = document.querySelectorAll(".orderbutton");

const heightBlockPosition = [];

function getBlockPosotions() {
    document.querySelectorAll(".block").forEach((block, index) => {
        if (block.offsetTop !== 0) {
            heightBlockPosition[index] =
                block.offsetTop -
                document.querySelector("#siteNavigation").clientHeight;
        } else {
            heightBlockPosition[index] = 0;
        }
    });
}

orderButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button);
    });
});

navigationButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        window.scrollTo({
            top: heightBlockPosition[index],
            left: 0,
            behavior: "smooth",
        });
    });
});

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
        containerOfGanres[0].scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });
});

[galleryButtonPrev, galleryButtonNext].forEach((button) => {
    button.addEventListener("click", () => {
        arrayOfGanres.forEach((ganre, index) => {
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
