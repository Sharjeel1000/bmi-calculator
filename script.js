function calculateBMI() {

    // Get input values
    const height = parseFloat(
        document.getElementById("height").value
    );

    const weight = parseFloat(
        document.getElementById("weight").value
    );

    const bmiValue = document.getElementById("bmiValue");
    const category = document.getElementById("category");

    // Validate inputs
    if (
        !Number.isFinite(height) ||
        !Number.isFinite(weight) ||
        height <= 0 ||
        weight <= 0
    ) {
        bmiValue.textContent = "--";
        category.textContent = "Please enter valid height and weight.";
        return;
    }

    // Convert height from cm to meters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);

    // Display BMI
    bmiValue.textContent = bmi.toFixed(1);

    // Determine category for adults
    if (bmi < 18.5) {
        category.textContent = "Underweight";
    } else if (bmi < 25) {
        category.textContent = "Healthy Weight";
    } else if (bmi < 30) {
        category.textContent = "Overweight";
    } else {
        category.textContent = "Obesity";
    }
}