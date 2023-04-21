
      const API_KEY = "6d8f27544a958b0362a7e9815d88dbda";
      const CITY = "Bray, IE";
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`;

      fetch(API_URL)
        .then(response => response.json())
        .then(data => {
          const temp = data.main.temp;
          const description = data.weather[0].description;
          const icon = data.weather[0].icon;

          document.getElementById("temp").textContent = `Temperature: ${temp} °F`;
          document.getElementById("description").textContent = `Description: ${description}`;
          document.getElementById("icon").setAttribute("src", `https://openweathermap.org/img/w/${icon}.png`);
        })
        .catch(error => console.error(error));


    (function() {
      'use strict';
      window.addEventListener('load', function() {
        var forms = document.getElementsByClassName("needs-validation");
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();
 