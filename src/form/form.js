/* eslint-disable func-names */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-const */
/* eslint-disable no-console */

// вариант с массивом (кривоватый:))
const userData = function () {console.log(Array.from(document.getElementsByTagName(`input`), e => e.value))};
const btnSubmit = document.querySelector('.submit');
btnSubmit.addEventListener("click", userData)


// вариант с объектом
const form = document.forms[0]
form.addEventListener('submit', (e) => sendData(e))

function sendData(e) {
    e.preventDefault()
    const userDataObject = {
        title: form.elements.title.value,
        firstName: form.elements.firstName.value,
        middleName: form.elements.middleName.value,
        lastName: form.elements.lastName.value,
        country: form.elements.country.value,
        phone: form.elements.phone.value,
        email: form.elements.email.value,
        registration: form.elements.registration.checked,
    }
    console.log(userDataObject)
}