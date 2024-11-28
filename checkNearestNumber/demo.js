function nearest(num1,num2){
     const result1=100-num1;
     const result2=100-num2;

     

    //  if(result1<0)result1=-result1;
    //  if(result2<0)result2=-result2;

     if(result1<result2){
        return `${result1} is nearest`
     }
     else if(result1<result2){
        return `${result1} is nearest`
     }
     else{
        return `${result1} ${result2} both are nearest`
     }
}
const num1=Number(prompt("Enter the first numher"));
const num2=Number(prompt("Enter the second numnber"));


console.log(nearest(90,95));
