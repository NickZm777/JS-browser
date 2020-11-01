/* eslint-disable no-console */
const userData = function () {console.log(Array.from(document.getElementsByTagName(`input`), e => e.value))};


const btnSubmit = document.querySelector('.submit');

btnSubmit.addEventListener("click", userData);

