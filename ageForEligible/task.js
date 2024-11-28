const arr=[];
function myFunction(){
    const result=document.getElementById("userInput").value;

    if(!result){
        document.getElementById("output").innerHTML=""
        document.getElementById("error").innerHTML=`*Please fill the details*`
        document.getElementById("notfound").innerHTML="";
        userInput.style.border = "2px solid red";
        //document.getElementById("eligible").style.display = "none";
        setTimeout(() => {
            document.getElementById("error").innerHTML = ""; 
            userInput.style.border = "";  
        }, 5000); 
    }
    else{
        document.getElementById("error").innerHTML="";
        document.getElementById("notfound").innerHTML="";
        document.getElementById("output").innerHTML=`Data inserted`
        //document.getElementById("eligible").style.display = "block"
        arr.push(result);
        userInput.style.border = "";
    }
    document.getElementById("userInput").value="";
}

function eligible(){
    const eligibleAge = arr.filter(age => age > 18 && age <= 60);
    if(eligibleAge.length===0){
         document.getElementById("output").innerHTML = "";
         document.getElementById("error").innerHTML="";
         document.getElementById("notfound").innerHTML = `No data found.🤔`
         //document.getElementById("eligible").style.display = "none";
    }else{
        document.getElementById("error").innerHTML="";
        document.getElementById("notfound").innerHTML ="";
        document.getElementById("output").innerHTML = `<em>Eligible for driving: </em> <strong> ${eligibleAge.join(', ')}</strong>`;
        
        // document.getElementById("eligible").style.display = "block";
    }
}
function notEligible(){
    const notEligibleAge = arr.filter(age => age <= 18);
    if(notEligibleAge.length===0){
        document.getElementById("output").innerHTML = "";
        document.getElementById("error").innerHTML="";
        document.getElementById("notfound").innerHTML = `No data found.🤔`
        userInput.style.border = "";
        // document.getElementById("eligible").style.display = "none";
    }else{

        document.getElementById("error").innerHTML="";
        document.getElementById("notfound").innerHTML ="";
        document.getElementById("output").innerHTML = `<em>Not eligible for driving:</em> <strong>${notEligibleAge.join(', ')}<strong>`;
        userInput.style.border = "";
        // document.getElementById("eligible").style.display = "block";
    }
}

// reset everything
function reset(){
    document.getElementById("userInput").value="";
    document.getElementById("output").innerHTML ="";
    document.getElementById("error").innerHTML="";
    document.getElementById("notfound").innerHTML ="";
    userInput.style.border = "";
}