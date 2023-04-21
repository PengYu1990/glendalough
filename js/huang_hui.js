//Event listener for numeric input, if the number entered exceeds 50, alert
document.getElementById('validationCustom03').addEventListener('input', function (event) {
    var number = event.target.value;
    number = parseInt(number);
    if (number > 50) {
        alert('Sorry, no more than 50 participants per event.');
        event.target.value = '';
    }
});

//for the selected activity duration in the form, if the 3rd one is selected, then alert the park does not offer overnight camping
document.getElementById('validationCustom04').addEventListener('change', function (event) {
    var selectedOption = event.target.value;
    if (selectedOption === '2') {
        alert('Please be aware that camping is not allowed in this park during the night. We suggest choosing accommodations within the park for your stay.');
    }
});


//for the second input of the email address, if the value of the second input is not equal to the first one, it will alert that the two inputs are different.
var validationCustom06 = document.getElementById('validationCustom06');
var validationCustom07 = document.getElementById('validationCustom07');

validationCustom07.addEventListener('blur', function (event) {
    var email01 = validationCustom06.value;
    var email02 = validationCustom07.value;

    if (email01 !== email02) {
        alert('Sorry, the second email address is not the same as the first');
        validationCustom07.value = '';
        validationCustom06.focus();
    }
});

//event listening for mobile phone numbers in the form, if the number in this input box exceeds 13, it will alert to ask for a re-fill
document.getElementById('validationCustom05').addEventListener('blur', function (event) {

    var number = event.target.value;
    var validationCustom05 = document.getElementById('validationCutom05')
    number = parseInt(number);
    if (number !== 13) {
        alert('Sorry, please check the phone digits.');
        event.target.value = '';
        validationCustom05.focus();
    }
});


(() => {
    'use strict'

    // Fetch all the elements from the form to apply custom Bootstrap validation styles to check the require field's validity    
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {

            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
