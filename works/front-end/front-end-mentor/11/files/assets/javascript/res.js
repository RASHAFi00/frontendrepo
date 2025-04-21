
const log = console.log;

const INPUTbill = document.querySelector("#billamount");
const INPUTcustom = document.querySelector("#customtip");
const INPUTperson = document.querySelector("#personcount");
const INPUTS = [INPUTbill, INPUTcustom, INPUTperson];
const INPUTfixed = Array.from(document.querySelectorAll(".input-grid .fixed-input button"));
const inputBoxes = Array.from(document.querySelectorAll(".input-box"));
const ERRORS = Array.from(document.querySelectorAll("span.error"));

var stateFixed = false;
var btnFixed = null;
var tip = null;
var perPersonFinal = null;
var totalFinal = null;



const OUTperPerson = document.querySelector("#perperson");
const OUTtotal = document.querySelector("#total");

const RESET = document.querySelector("#reset");



function resetALL() {
    INPUTbill.value = "";
    INPUTperson.value = "";
    INPUTcustom.value = "";

    inputBoxes.forEach(box => {
        box.classList.remove("error");
    });
    INPUTfixed.forEach(btn => {
        btn.classList.remove("active");
    });
    ERRORS.forEach(error => {
        error.classList.add("hidden");
    });
    OUTperPerson.innerHTML = "$0.00";
    OUTtotal.innerHTML = "$0.00";
};

function inputFocus(inField) {
    inputBoxes.forEach(inBox => {
        inBox.classList.remove("input-focus");
        inBox.classList.add("input-blur");
        if (inBox.id == `for-${inField.id}`) {
            inBox.classList.remove("input-blur");
            inBox.classList.add("input-focus");
        }
    });
};
function inputBlur() {
    inputBoxes.forEach(box => {
        box.classList.remove("input-focus");
        box.classList.add("input-blur");
    })
}

function buttonActivate(button) {
    INPUTfixed.forEach(btn => {
        btn.classList.remove("active");
    });
    button.classList.add("active");
    btnFixed = button;
    stateFixed = true;
    calculate();
}


function check() {

    inputBoxes.forEach(box => {
        box.classList.remove("error");
    });
    ERRORS.forEach(error => {
        error.classList.add("hidden");
    });

    INPUTS.forEach(input => {
        if (input.value !== "" && isNaN(Number(input.value))) {

            inputBoxes.forEach(box => {
                if (box.id == `for-${input.id}`) {
                    box.classList.add("error");
                }
            });
            ERRORS.forEach(error => {
                if (error.id == `${input.name}NAN`) {
                    error.classList.remove("hidden");
                }
            });
        }
        else if (input.value !== "" && parseFloat(input.value) == 0) {

            inputBoxes.forEach(box => {
                if (box.id == `for-${input.id}`) {
                    box.classList.add("error");
                }
            });
            ERRORS.forEach(error => {
                if (error.id == `${input.name}ZERO`) {
                    error.classList.remove("hidden");
                }
            });

        }

    });
}

function customInput() {
    INPUTfixed.forEach(btn => {
        btn.classList.remove("active");
        stateFixed = false;
    });
    calculate();
}

function calculate() {

    INPUTS.forEach(input => {
        if (isNaN(Number(input.value))) {
            OUTperPerson.innerHTML = "$0.00";
            OUTtotal.innerHTML = "$0.00";
            return;
        }
    });

    if (stateFixed) {
        tipConf = parseFloat(btnFixed.textContent) / 100;
    }
    else if (!stateFixed) {
        tipConf = parseFloat(INPUTcustom.value) / 100;
    }

    tip = (INPUTbill.value * tipConf) / INPUTperson.value;
    perPersonFinal = tip;
    totalFinal = ((INPUTbill.value / INPUTperson.value) + (INPUTbill.value * tipConf / INPUTperson.value));

    if (!isFinite(perPersonFinal) || !isFinite(totalFinal) || isNaN(perPersonFinal) || isNaN(totalFinal)) {
        OUTperPerson.innerHTML = "$0.00";
        OUTtotal.innerHTML = "$0.00";
    }
    else {
        OUTperPerson.innerHTML = "$" + perPersonFinal.toFixed(2);;
        OUTtotal.innerHTML = "$" + totalFinal.toFixed(2);

    }
}
