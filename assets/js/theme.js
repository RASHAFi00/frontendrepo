const darkTheme = ["#313131", "#ffffff", "rgb(37, 37, 37)", "#FF9B3D", "#16dfbd"];
const lightTheme = ["#ffffff", "rgb(37, 37, 37)", "#ffffff", "#e94957", "16dfbd"];

const root = document.documentElement;
console.log(getComputedStyle(root).getPropertyValue("--dark-body-bg"));

const switchers = Array.from(document.getElementById("light-switch").children);
switchers[0].setAttribute("mode", "dark");
switchers[1].setAttribute("mode", "light");


var currentTheme = "dark";

switchers.forEach(switcher => {
    switcher.addEventListener('click', () => {
        switchers.forEach(elem => elem.classList.remove("selected"));
        switcher.classList.add("selected");
        changeTheme(switcher.getAttribute("mode"));
    });

});






function changeTheme(curr) {
    if (currentTheme === curr) {
        console.log("theme already matches");
        return;
    }

    if (curr === "dark") {

        document.documentElement.style.setProperty("--body-bg", darkTheme[0]);
        document.documentElement.style.setProperty("--theme-inverted-color", darkTheme[1]);
        document.documentElement.style.setProperty("--theme-current-color", darkTheme[2]);
        document.documentElement.style.setProperty("--selection-color", darkTheme[3]);


        currentTheme = "dark";
    }
    if (curr === "light") {

        document.documentElement.style.setProperty("--body-bg", lightTheme[0]);
        document.documentElement.style.setProperty("--theme-inverted-color", lightTheme[1]);
        document.documentElement.style.setProperty("--theme-current-color", lightTheme[2]);
        document.documentElement.style.setProperty("--selection-color", lightTheme[3]);

        currentTheme = "light";
    }


};