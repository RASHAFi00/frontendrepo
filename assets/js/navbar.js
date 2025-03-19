



const navbar = document.getElementById("nav-links-container");
const contentLayers = Array.from(document.querySelector("#content-interface").children);


var navLinks = Array.from(navbar.children);

navLinks[0].setAttribute("target-layer", "home");
navLinks[1].setAttribute("target-layer", "works");
navLinks[2].setAttribute("target-layer", "contact");



navLinks.forEach(navlink => {
    navlink.addEventListener('click', () => {
        navLinks.forEach(nl => { nl.classList.remove("active") });
        navlink.classList.add("active");
        revealLayer(navlink.getAttribute("target-layer"));
    });
});



function revealLayer(desired) {

    contentLayers.forEach(layer => {
        layer.classList.remove("visible-layer");
    });
    setTimeout(() => {
        contentLayers.forEach(layer => {
            if (layer.id === desired) {
                layer.classList.add("visible-layer");
            }
        });
    }, 500);

};
