window.onload = function () {
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        // set to_name value
        this.to_name.value = "David";
        // these IDs from the previous steps
        emailjs.sendForm("service_hqsq29o", "template_v2dnlmi", this).then(
          function () {
            console.log("SUCCESS!");
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      });
  };