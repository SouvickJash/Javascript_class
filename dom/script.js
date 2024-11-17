function myFunction() {
    let name1 = document.getElementById("myname").value;
    let age1 = document.getElementById("myage").value;

    console.log(`My name is ${name1} and my age is ${age1}`);
    document.getElementById("myId").innerHTML= `My name is ${name1} and my age is ${age1}`

    //reset in javascript.......!!
    document.getElementById("myname").value = "";
    document.getElementById("myage").value = "";
}