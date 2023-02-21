const navigationButtons = document.querySelectorAll("#scrollToBlockBtn");

const [galleryButtonPrev, galleryButtonNext] =
    document.querySelectorAll("#galleryMoveButton");

const containerOfGanres = document.querySelectorAll("#containerOfGanres");
const arrayOfGanres = document.querySelectorAll("#galleryGanre");
const arrayOfGanredButtons = document.querySelectorAll("#galleryGanreButton");

const orderButtons = document.querySelectorAll(".orderbutton");

const sidemenuOpener = document.querySelector("#sidemenuOpen");
const sidemenuCloser = document.querySelector("#sidemenuClose");
const sidemenu = document.querySelector("#sidemenu");
const sidemenuButtons = sidemenu.querySelectorAll("#sidebarScrollBtn");

const priceToggle = document.querySelectorAll("#timetogglable");

priceToggle.forEach((card) => {
    card.querySelector(".price__timetoggle").addEventListener("click", () => {
        card.querySelectorAll("#time").forEach((text) => {
            if (text.classList.contains("activetime")) {
                text.classList.remove("activetime");
            } else {
                text.classList.add("activetime");
            }
        });

        card.querySelectorAll(".price__subtext").forEach((text) => {
            if (text.classList.contains("activetext")) {
                text.classList.remove("activetext");
            } else {
                text.classList.add("activetext");
            }
        });

        card.querySelectorAll("#price").forEach((price) => {
            if (price.classList.contains("activeprice")) {
                price.classList.remove("activeprice");
            } else {
                price.classList.add("activeprice");
            }
        });
    });
});

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

function openSidebar() {
    sidemenu.style.right = 0;
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("#sidemenuOpen").style.right = -14 + "px";
}

function closeSidebar() {
    sidemenu.style.right = 100 + "%";
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("#sidemenuOpen").style.right = 14 + "px";
}

sidemenuOpener.addEventListener("click", () => {
    openSidebar();
});

sidemenuCloser.addEventListener("click", () => {
    closeSidebar();
});

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

sidemenuButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        window.scrollTo({
            top: heightBlockPosition[index],
            left: 0,
            behavior: "smooth",
        });
        closeSidebar();
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
