 // Task 1:Function to determine the temperature message
        function checkTemperature (temp) {
            if (temp > 30) {
                console.log("It's hot!");
            } else if (temp >= 20 && temp <= 30) {
                console.log("It's warm!");
            } else {
                console.log("It's cold!");
            }
        }

        // Prompt user for temperature and check it
        let temperature = parseFloat(prompt("Enter the temperature in °C:"));
        checkTemperature(temperature);

