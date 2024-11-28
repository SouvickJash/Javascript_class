const arr=[];
function display(){
    const example=document.getElementById("data").value;
    
    if(example){
        document.getElementById("checkError").innerHTML=""; 
       
        document.getElementById("showDetails").innerHTML = `Thank you for register`
        arr.push(example)
        document.getElementById("data").value="";
        document.getElementById("showButton").style.display = "block";
    }
    else{
        document.getElementById("showDetails").innerHTML="";
        document.getElementById("checkError").innerHTML=`Please enter your name.!`
    }
}
// show details
function showData(){
    // document.getElementById("showDetails").innerHTML=arr.map(name => `Your name is: ${name}`).join("<br>")
    document.getElementById("checkError").innerHTML="";
    document.getElementById("showDetails").innerHTML=arr.map((name,index)=>{
        return `${index+1}. ${name} `;
    }).join("<br>");
}