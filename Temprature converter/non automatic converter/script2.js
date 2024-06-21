function convertTemperature() {
    var degrees = document.getElementById("degrees").value;
    var type = document.getElementById("type").value;
    var result = document.getElementById("result");
  
    if (type === "fahrenheit") {
      var celsius = (degrees - 32) * (5 / 9);
      result.innerHTML = celsius.toFixed(2) + " °C";
    } else {
      var fahrenheit = (degrees * 9 / 5) + 32;
      result.innerHTML = fahrenheit.toFixed(2) + " °F";
    }
  }