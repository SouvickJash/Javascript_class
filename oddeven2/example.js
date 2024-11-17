// let userInput = document.getElementById("myNumber");
// let result = document.getElementById("result");

// function EvenOdd() {
//     if(userInput.value === ""){
//         alert("Please fill the Details");
 
//     }else if(userInput.value % 2 === 0){
//         result.innerHTML=`${userInput.value} The Number is Even`
//     }
//     else{
//         result.innerHTML=`${userInput.value} The Number is Odd`
//     }
//     document.getElementById("myNumber").value="";
// }

function EvenOdd(){
    const userInput=document.getElementById("myNumber").value;
    const result = document.getElementById("data");

    if(userInput===""){
        document.getElementById("data").innerHTML="";
        document.getElementById("error").innerHTML=`Plase fill the details.! 👆🏻`
    }else if(userInput%2==0){
        document.getElementById("error").innerHTML="";
        result.innerHTML=`${userInput} The number is Even`
        
    }else{  
        document.getElementById("error").innerHTML="";
        result.innerHTML=`${userInput} The number is Odd`
    }
    document.getElementById("myNumber").value="";
}


