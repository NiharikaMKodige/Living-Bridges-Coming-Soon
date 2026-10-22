const form = document.getElementById("notify-form");
const message = document.getElementById("form-message");

// Demo behavior only. Connect a form service before collecting real subscriptions.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  message.textContent = "Thanks! The notification form is not connected yet.";
  form.reset();
});
