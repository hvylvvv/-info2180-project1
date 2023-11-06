window.addEventListener("load", (event) => {
    const emailForm = document.querySelector("form");
    const msg = document.querySelector(".message");
  
    emailForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const emailAddress = document.getElementById("email").value;
  
      // Check that email address is valid
      if (emailAddress !== "") {
        msg.textContent =
          "Thank you! Your email address " +
          emailAddress +
          " has been added to our mailing list!";
  
        emailInput.value = "";
      } else {
        msg.textContent = "Please enter a valid email address.";
      }
    });
  });
  