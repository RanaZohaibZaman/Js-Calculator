function calculateZakat() {
    const wealth = parseFloat(document.getElementById('wealth').value);
    if (isNaN(wealth) || wealth < 0) {
        document.getElementById('result').innerText = "Please enter a valid amount.";
        return;
    }
    const zakat = wealth * 0.025;
    document.getElementById('result').innerText = "Your Zakat is: " + zakat.toFixed(2);
}
