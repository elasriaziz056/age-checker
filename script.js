
document.addEventListener("DOMContentLoaded", function () {

    const ageInput = document.getElementById("age");
    const checkButton = document.getElementById("checkButton");
    const result = document.getElementById("result");

    checkButton.addEventListener("click", function () {

        const age = Number(ageInput.value);

        // Clear previous result
        result.className = "result";

        // Empty input
        if (ageInput.value.trim() === "") {
            result.textContent = "Please enter your age.";
            result.classList.add("show", "error");
            return;
        }

        // Invalid age
        if (age < 0 || age > 120) {
            result.textContent = "Please enter a valid age.";
            result.classList.add("show", "error");
            return;
        }

        // Determine category
        if (age < 13) {

            result.textContent = "You are a minor.";
            result.classList.add("show", "minor");

        } else if (age < 18) {

            result.textContent = "You are a teen.";
            result.classList.add("show", "teen");

        } else {

            result.textContent = "You are an adult.";
            result.classList.add("show", "adult");
        }
    });

    // Allow Enter key
    ageInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            checkButton.click();
        }

    });

});

