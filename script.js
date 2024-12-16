function generatePercentage() {
    const inputText = document.getElementById("inputField").value;
    const resultDiv = document.getElementById("result");

    if (inputText.trim() === "") {
        resultDiv.innerText = "Please enter some text.";
        return;
    }

    // Count the words in the input text
    const wordCount = inputText.trim().split(/\s+/).length;
    const delay = wordCount * 1; // 1 millisecond per word

    // Show a loading animation
    resultDiv.innerHTML = '<span class="loading">Analyzing...</span>';

    // Simulate a delay based on the word count
    setTimeout(() => {
        const percentage = (Math.random() * 10).toFixed(0); // Generate a random number between 0-10
        resultDiv.innerHTML = `${percentage}% AI - Made by a human`;
    }, delay);
}