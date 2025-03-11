document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Verhindert das Neuladen der Seite

        if (validateForm()) {
            let name = document.getElementById("name").value.trim();
            let message = document.getElementById("nachricht").value.trim();
            
            // Erfolgsmeldung und Nachricht anzeigen
            document.getElementById("successMessage").textContent = "Formular wurde erfolgreich gesendet!";
            document.getElementById("submittedMessage").innerHTML = `
                <h3>Ihre Nachricht:</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Nachricht:</strong> ${message}</p>
            `;

            // Formular zurücksetzen, aber die Nachricht behalten
            document.getElementById("contactForm").reset();
        }
    });
});

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("nachricht").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMessage = document.getElementById("successMessage");

    // Fehler-Meldungen zurücksetzen
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Bitte geben Sie Ihren Namen ein.";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
        isValid = false;
    }

    if (message === "") {
        messageError.textContent = "Bitte geben Sie eine Nachricht ein.";
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
