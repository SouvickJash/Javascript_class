function Data() {
  const myName = document.getElementById("name").value;
  const myEmail = document.getElementById("email").value;
  const myPassword = document.getElementById("password").value;
  const myCity = document.getElementById("city").value;

  const result = document.getElementById("showData");

  // show the error
  document.getElementById("n").innerHTML = "";
  document.getElementById("e").innerHTML = "";
  document.getElementById("p").innerHTML = "";
  document.getElementById("c").innerHTML = "";
 

  if (myName == "") {
    document.getElementById("n").innerHTML = `Enter your Name`;
  } else if (myEmail == "") {
    document.getElementById("e").innerHTML = `Enter your Email`;
  } else if (myPassword == "") {
    document.getElementById("p").innerHTML = `Enter your Password`;
  } else if (myCity == "") {
    document.getElementById("c").innerHTML = `Enter your City`;
  } else {
    result.innerHTML = `Name: ${myName}<br> Email: ${myEmail}<br>Password: ${myPassword}<br>City: ${myCity}`;
    
    // after submit empty input box
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("city").value = "";  
}
}
// reset in javascript from
function Reset(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("city").value = "";  
}
