function convert() {
  const celcious = document.getElementById("data").value;
  const fahrenheit = celcious * 1.8 + 32;

  if (celcious === "") {
    document.getElementById("error").innerHTML = `*Please put the value*`;
    document.getElementById("output").innerHTML=""; //submit after data the again submit not show data
  } else {
    document.getElementById("error").innerHTML="";   //remove the error after put the value
    document.getElementById("output").innerHTML = `${celcious}°C = <strong>${fahrenheit}°Fahrenheit:</strong> `;
  }
  document.getElementById("data").value = "";
}
