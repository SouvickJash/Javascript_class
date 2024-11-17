function display(){
    const show=document.getElementById("data").value;  //catch the data

    if(show===""){
        document.getElementById("result").innerHTML="";
        document.getElementById("error").innerHTML=`enter your name`
    }else{
        document.getElementById("error").innerHTML="";
        document.getElementById("result").innerHTML=`my name is ${show}`
    }
     document.getElementById("data").value="";
}