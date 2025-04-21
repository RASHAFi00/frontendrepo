



INPUTS.forEach(input => {
    input.addEventListener('focus' , (evt) => {inputFocus(evt.target)});
    input.addEventListener('blur' , inputBlur);
    input.addEventListener('input' , check);
    input.addEventListener('input' , calculate);
});

INPUTfixed.forEach(input => {
    input.addEventListener('click' , (evt) => {buttonActivate(evt.target)});
});

INPUTcustom.addEventListener('input' , customInput);
INPUTcustom.addEventListener('focus' , customInput);


RESET.addEventListener('click' , resetALL);