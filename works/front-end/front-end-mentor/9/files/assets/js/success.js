const formMain = document.querySelector(".newsletter-main");
const dismiss = document.querySelector("#dismiss");

dismiss.addEventListener('click' , ()=> {
    
    success.style.animationName = "fade";
    success.style.animationDuration = ".5s";
    success.style.animationFillMode = "forwards";

    setTimeout(() => {
        mainForm.style.display = "flex";
        mainForm.style.animationName = "appear";
        mainForm.style.animationDuration = ".5s";
        mainForm.style.animationFillMode = "forwards";
    }, 525);

    form.reset();
});
