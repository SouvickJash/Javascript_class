// function table(number){
//    for(let i=1;i<=10;i++){
//      let result=i*number;
//      console.log(`${number}*${i} = ${result}`);
//    }
// }
// table(2);


function table(){
    const example=document.getElementById("data").value;
    const getOutput=document.getElementById("output");

    if(example===""){
       document.getElementById("output").innerHTML="";   //important
       document.getElementById("error").innerHTML=`*Please enter the number* 👆🏻`
    }
    else{
        document.getElementById("error").innerHTML="";   //important 
        for(let i=1;i<=10;i++){
            getOutput.innerHTML+=`${example} * ${i} = ${example*i} <br>`

        }
    }
    document.getElementById("data").value="";
}