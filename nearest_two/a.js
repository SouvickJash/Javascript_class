const num1=Number(prompt("Enter the first numher: "));
const num2=Number(prompt("Enter the second numnber: "));

function nearest(num1,num2){
   
    
     
   //  if(result1<0)result1=-result1;
   //  if(result2<0)result2=-result2;

    result1="";
    result2="";

    
    if(100>num1){
        let result1=100-num1; 
    }
    else{
        let result1=num1-100; 
    }


    if(100>num2){
        let result2=100-num2;
    }
    else{
        let result2=num2-100; 
    }



    if(result1>result2){
       return `${num2} is nearest`
    
    }
    else if(result1<result2){
       return `${num1} is nearest`
    }
    else{
       return `${num1} ${num2} both are nearest`
    }
}
console.log(nearest(num1,num2));
