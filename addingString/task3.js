function myFunction() {
  const data = document.getElementById("userInput").value;

  document.getElementById("error").innerHTML = "";

  if (!data) {
    document.getElementById("show").innerHTML = "";
    document.getElementById("error").innerHTML = "*Please fill the details*";
  } else if (data.startsWith("hii")) {
    document.getElementById("show").innerHTML = `${data}`;
  } else {
    document.getElementById("show").innerHTML = `<strong>hii</strong> ${data}`;
  }

  document.getElementById("userInput").value = "";
}
