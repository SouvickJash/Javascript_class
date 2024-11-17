function myFunction() {
  const data = document.getElementById("userInput").value; // Remove leading/trailing spaces

  document.getElementById("error").innerHTML = "";

  if (!data) {
    document.getElementById("error").innerHTML = "Please fill the details.";
  } else if (data.startsWith("hii")) {
    document.getElementById("show").innerHTML = `${data}`;
  } else {
    document.getElementById("show").innerHTML = `hii ${data}`;
  }

  document.getElementById("userInput").value = "";
}
