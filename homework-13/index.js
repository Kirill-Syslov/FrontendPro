document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("messageForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    document.querySelectorAll(".error").forEach(function (error) {
      error.textContent = "";
    });

    const formData = new FormData(form);
    const name = formData.get("name");
    const message = formData.get("message");
    const phoneNumber = formData.get("tel");
    const email = formData.get("email");

    const phoneRegex = /^\+380\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if (!name) {
      document.getElementById("nameError").textContent = "Name is required";
      isValid = false;
    }

    if (message.length < 5) {
      document.getElementById("messageError").textContent =
        "Message must be at least 5 characters long";
      isValid = false;
    }

    if (!phoneRegex.test(phoneNumber)) {
      document.getElementById("phoneError").textContent =
        "Phone number must start with +380 and have 12 digits";
      isValid = false;
    }

    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent =
        "Invalid email format";
      isValid = false;
    }

    if (isValid) {
      console.log("Name:", name);
      console.log("Message:", message);
      console.log("Phone number:", phoneNumber);
      console.log("Email:", email);
    }
  });
});
