function getRating() {
    const science = parseFloat(document.getElementById("science").value);
    const math = parseFloat(document.getElementById("math").value);
    const english = parseFloat(document.getElementById("english").value);

    if (isNaN(science) || isNaN(math) || isNaN(english)) {
        alert("Please enter all subject scores.");
        return;
    }

    const average = ((science + math + english) / 3).toFixed(2);
    let message = "Your average is " + average + " - ";

    if (average >= 90) {
        message += "Excellent";
    } else if (average >= 85) {
        message += "Above Satisfactory";
    } else if (average >= 80) {
        message += "Satisfactory";
    } else {
        message += "Needs Improvement";
    }

    alert(message);
}
