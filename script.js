const bmiForm = document.getElementById("bmiForm");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const bmiValue = document.getElementById("bmiValue");
const category = document.getElementById("category");
const statusBadge = document.getElementById("statusBadge");

bmiForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const height = Number.parseFloat(heightInput.value);
    const weight = Number.parseFloat(weightInput.value);

    // Validate each field and show Bootstrap validation feedback.
    const validHeight = Number.isFinite(height) && height > 0;
    const validWeight = Number.isFinite(weight) && weight > 0;

    heightInput.classList.toggle("is-invalid", !validHeight);
    weightInput.classList.toggle("is-invalid", !validWeight);

    if (!validHeight || !validWeight) {
        bmiValue.textContent = "--";
        category.textContent = "Please enter a valid height and weight.";
        statusBadge.textContent = "Check inputs";
        statusBadge.className = "badge status-badge";
        return;
    }

    // Convert centimeters to meters, then calculate BMI.
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    bmiValue.textContent = bmi.toFixed(1);

    let label;
    let statusClass;
    let message;

    // Standard adult BMI categories.
    if (bmi < 18.5) {
        label = "Underweight";
        statusClass = "underweight";
        message = "Your BMI is below the standard adult healthy-weight range.";
    } else if (bmi < 25) {
        label = "Healthy Weight";
        statusClass = "healthy";
        message = "Your BMI is within the standard adult healthy-weight range.";
    } else if (bmi < 30) {
        label = "Overweight";
        statusClass = "overweight";
        message = "Your BMI is within the adult overweight range.";
    } else {
        label = "Obesity";
        statusClass = "obesity";
        message = "Your BMI is within the adult obesity range.";
    }

    category.textContent = message;
    statusBadge.textContent = label;
    statusBadge.className = `badge status-badge ${statusClass}`;
});

// Clear validation styling as the user corrects the inputs.
heightInput.addEventListener("input", () => {
    heightInput.classList.remove("is-invalid");
});

weightInput.addEventListener("input", () => {
    weightInput.classList.remove("is-invalid");
});
