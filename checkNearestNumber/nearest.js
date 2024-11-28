function findNearest(){
    const firstNumber=document.getElementById("data").value;
    const secondNumber=document.getElementById("data").value;
   
    // document.getElementById("result").innerHTML=`num1 ${firstNumber} num2: ${secondNumber}`

    if(!firstNumber || !secondNumber){
        document.getElementById("error").innerHTML = `*Please enter valid two numbers*`;
        // data.style.border = "2px solid red";
    }
    else{
        document.getElementById("showDetails").innerHTML = `${findNearest} ${secondNumber}`;
    }
    

}