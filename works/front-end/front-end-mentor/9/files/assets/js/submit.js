var form = document.forms[0];
const errorMsg = document.querySelector(".email-validation-message");
const submitForm = document.querySelector("#submitform");
const emailField = document.querySelector("#emailfield");
const success = document.querySelector(".success-message");
const mainForm = document.querySelector(".newsletter-main");
const userEmail = document.querySelector("#user-email-display");

var submitCheck = -1;
var validityCheck = -1;
var goodEmailChecker = false;

function clearFormStyle () {
    errorMsg.classList.remove("email-error");
    emailField.classList.remove("error");
    emailField.classList.remove("good");
};
function goodEmail () {
    errorMsg.classList.remove("email-error");
    emailField.classList.remove("error");
    emailField.classList.add("good");
};
function badEmail () {
    errorMsg.classList.add("email-error");
    emailField.classList.add("error");
};
emailField.oninvalid = function (event) {
    event.preventDefault();
    if(validityCheck == -1){
        badEmail();
    }
    validityCheck*= -1;
};
// ////////////////////////// blur checker
emailField.addEventListener( 'blur' , () => {
    if(emailField.validity.valid && (emailField.value.indexOf('.') != -1 ) && (emailField.value.indexOf('@') < emailField.value.indexOf('.')) ){
        goodEmail();
        goodEmailChecker = true;
    }
    else if(emailField.value == ""){
        clearFormStyle();
    }
    else{
        badEmail();
        emailField.classList.remove("good");
        goodEmailChecker = false;
    }
});
// //////////////////////////  focus cleaner
emailField.addEventListener('focus' , clearFormStyle);
form.onsubmit = function (event) {
    event.preventDefault();
    if(submitCheck == -1){
        if(goodEmailChecker){
            clearFormStyle();
            userEmail.textContent = emailField.value;
            userEmail.style.fontWeight = "bold";

            mainForm.style.animationName = "fade";
            mainForm.style.animationDuration = ".5s";
            mainForm.style.animationFillMode = "forwards";

            setTimeout(() => {
                success.style.display = "flex";
                success.style.animationName = "appear";
                success.style.animationDuration = ".5s";
                success.style.animationFillMode = "forwards";
            }, 525);
            goodEmailChecker = false;

            // mainForm.style.opacity = "0";
            // mainForm.style.display = "none";
            // success.style.display = "flex";

        }
    }
    submitCheck*= -1;
};
submitForm.addEventListener('click' , () => {
    form.requestSubmit();
});



