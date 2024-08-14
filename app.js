function calculate() {
    try {
        var display = document.forms[0].elements['display'];
        display.value = eval(display.value); // Caution: eval can be dangerous if not used carefully
    } catch (e) {
        alert('Invalid expression');
    }
}