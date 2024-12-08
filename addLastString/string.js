function display() {
  const store = document.getElementById("data").value;

  if (!store) {
    document.getElementById("error").innerHTML = `*Please fill the details.*`;
    data.style.border = "2px solid red";
    document.getElementById("output").innerHTML = "";
  } else {
    const words = store.split(" ");
    words[words.length -1] = "<strong>Idiot</strong>";
    output.innerHTML = words.join(" ");
    // document.getElementById("output").innerHTML=`${words.join(" ")}`
    document.getElementById("error").innerHTML = "";
    data.style.border = "";
  }
  document.getElementById("data").value = "";
}





// find last word
// let str="my name is souvick jash"
// str=str.slice(-1)
// str=str.length;
// console.log(str)

// delete last word
// let str="my name is souvick jash"
// str=str.split(' ').reverse().slice(1).reverse().join(' ');
// console.log(str)
