function checkVowel(){
    const getData=document.getElementById("data").value;
    let count=0;
    let vowels = "";

    if(!getData){
        document.getElementById("output").innerHTML ="";
        document.getElementById("error").innerHTML=`**Please fill the details**`
        data.style.border = "2px solid red";
    }
    else{
        for(let i=0;i<getData.length;i++){
            // let letter=getData[i];
            let letter=getData[i].toLowerCase();
            
            if(letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u'){
                count++;
                vowels += letter + " ";
            }
        }
        // document.getElementById("output").innerHTML=` = ${count}`

        if (count > 0) {
            data.style.border = "";
            document.getElementById('error').innerHTML="";
            document.getElementById("output").innerHTML = `Original string: <strong>${getData}</strong><br>vowels:  <strong>${vowels}</strong><br>Total vowels: <strong>${count}</strong>`;
        } else {
            data.style.border = "";
            document.getElementById("error").innerHTML ="";
            document.getElementById("output").innerHTML =`<em>No vowels found.</em>`;
        }
    }

    document.getElementById("data").value="";
}