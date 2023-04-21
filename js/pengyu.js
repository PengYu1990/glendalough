/**
 * Validate the form data when submit
 * @Author: Peng Yu
 * 4/12/2023
 */
$(function() {
  var forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})

/**
 * Validate the first name when blur
 */
$("#firstName").blur(function(){
  const firstname = $("#firstName").val();
  if(!firstname || firstname === "") {
    $("#firstName").addClass('is-invalid');
  } else {
    $("#firstName").removeClass('is-invalid');
    $("#firstName").addClass('valid');
  }
});

/**
 * Validate the last name when blur
 */
$("#lastName").blur(function(){
  const lastname = $("#lastName").val();
  if(!lastname || lastname === "") {
    $("#lastName").addClass('is-invalid');
  } else {
    $("#lastName").removeClass('is-invalid');
    $("#lastName").addClass('valid');
  }
});


/**
 * Validate email when blur
 */
$("#email").blur(function(){
  const email = $("#email").val();
  const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!email || email === "" || !emailReg.test(email)) {
    $("#email").addClass('is-invalid');
  } else {
    $("#email").removeClass('is-invalid');
    $("#email").addClass('valid');
  }
});


/**
 * Validate phone when blur
 */
$("#phone").blur(function(){
  const phone = $("#phone").val();
  const phoneReg = /^\d+$/;
  if(!phone || phone === "" || phone.length<9 || phone.length>12 || !phoneReg.test(phone)) {
    $("#phone").addClass('is-invalid');
  } else {
    $("#phone").removeClass('is-invalid');
    $("#phone").addClass('valid');
  }
});

/**
 * Validate address when blur
 */
$("#address").blur(function(){
  const address = $("#address").val();
  if(!address || address === "") {
    $("#address").addClass('is-invalid');
  } else {
    $("#address").removeClass('is-invalid');
    $("#address").addClass('valid');
  }
});


/**
 * Validate city when blur
 */
$("#city").blur(function(){
  const city = $("#city").val();
  if(!city || city === "") {
    $("#city").addClass('is-invalid');
  } else {
    $("#city").removeClass('is-invalid');
    $("#city").addClass('valid');
  }
});


/**
 * Validate city when blur
 */
$("#eircode").blur(function(){
  const eircode = $("#eircode").val();
  if(!eircode || eircode === "") {
    $("#eircode").addClass('is-invalid');
  } else {
    $("#eircode").removeClass('is-invalid');
    $("#eircode").addClass('valid');
  }
});