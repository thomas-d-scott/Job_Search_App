// Contact Us

const sendMessage = (firstName, lastName, email, hearAboutUs, message) => {
  displayMessage("Message Sent Successfully", "green");
  // This could link to backend to send the message PHP or Node.JS.
};

displayMessage = (message, colour) => {
  const messageBox = document.querySelector(".contact-form-message");
  messageBox.innerHTML += `<p>${message}</p>`;
  messageBox.style.background = `${colour}`;
  setTimeout(() => {
    messageBox.style.background = null;
    messageBox.innerHTML = null;
  }, 5000);
};

const contactUs = (e) => {
  e.preventDefault();

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let hearAboutUs = document.getElementById("hearAboutUs").value;
  let message = document.getElementById("message").value;

  if (!firstName || typeof firstName !== "string") {
    displayMessage("Please enter a first name", "red");
    return;
  }
  if (!lastName || typeof lastName !== "string") {
    displayMessage("Please enter a last name", "red");
    return;
  }
  if (!email) {
    displayMessage("Please enter a valid email", "red");
    return;
  }
  if (!hearAboutUs) {
    displayMessage("Please select where you heard about us", "red");
    return;
  }
  if (!message || typeof message !== "string") {
    displayMessage("Please enter a message", "red");
    return;
  }

  sendMessage(firstName, lastName, email, hearAboutUs, message);
};

document
  .getElementById("email-contact-form")
  .addEventListener("submit", contactUs);
