
    function runCalculator() {
        let a = Number(document.getElementById("first").value);
        let b = Number(document.getElementById("second").value);
        let op = document.getElementById("op").value;
        let answer;

        if (!op) {
            document.getElementById("output").innerText = "Please select an operator";
            return;
        }

        switch (op) {
            case "+":
                answer = a + b;
                break;

            case "-":
                answer = a - b;
                break;

            case "*":
                answer = a * b;
                break;

            case "/":
                answer = b !== 0 ? a / b : "Cannot divide by zero";
                break;

            default:
                answer = "Invalid operation";
        }

        // Truthy / Falsy check
        if (answer || answer === 0) {
            document.getElementById("output").innerText = "Result: " + answer;
        } else {
            document.getElementById("output").innerText = "No valid result";
        }
    }

    function clearAll() {
        document.getElementById("first").value = "";
        document.getElementById("second").value = "";
        document.getElementById("op").value = "";
        document.getElementById("output").innerText = "Cleared!";
    }