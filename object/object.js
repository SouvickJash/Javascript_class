const myobj=[
  {
    name: "souvick",
    age: 23,
    location: "kolkata",
    hobby: [
      "driving",
      "playing",
      "coding"
    ],
    course: {
      course_name: "mern",
      course_duration: 130,
      loc: "saltlake",
      elegible_for: [
        "frontend",
        "back-end",
        "fullstack",
        "webDesign"
      ]
    }
  },
  {
    name: "arup",
    age: 30,
    location: "howrah",
    hobby: [
      "playing football",
      "playing",
      "dancing"
    ],
    course: {
      course_name: "java",
      course_duration: 190,
      loc: "saltlake",
      elegible_for: [
        "mobile app",
        "backend",
        "fullstack",
        "webDesign"
      ]
    }
  },
  {
    name: "sumit",
    age: 18,
    location: "barasat",
    hobby: [
      "game",
      "playing",
      "programming"
    ],
    course: {
      course_name: "reactjs",
      course_duration: 180,
      loc: "saltlake",
      elegible_for: [
        "mobile app",
        "backend",
        "devops",
        "html developer"
      ]
    }
  },
  {
    name: "jeet",
    age: 21,
    location: "bongon",
    hobby: [
      "drive",
      "playing",
      "programming"
    ],
    course: {
      course_name: "nodejs",
      course_duration: 150,
      loc: "saltlake",
      elegible_for: [
        "machine learning",
        "ai",
        "devops",
        "django"
      ]
    }
  }
]


// console.log("myobj",myobj) 
// process 1
// const result=myobj.find((item)=>item.name==="Souvick")
function souvick(){
  const result=myobj.find((item)=>item.name==="souvick");
  if(result){
    // console.log(result);  
    document.getElementById('display').innerHTML=
    `
      This name is ${result.name}, i'm form ${result.location}. <br>
      i'm ${result.age} year's old. <br> 
      my hobby are ${result.hobby}. <br> 
      i'm persuing ${result.course.course_name} stack course form webvers web academy. <br>
      the duration of this course ${result.course.course_duration} hr. <br>
      the location of the academy is ${result.course.loc}. <br>
      i'm also eligible for ${result.course. elegible_for[1]} technology.
    `
  }
  else{
    // console.log("can't find");
    document.getElementById('display').innerHTML=`can't find Details`
  }
}



// arup details
function arup(){
  const result=myobj.find((item)=>item.name==="arup");
  if(result){
    // console.log(result);  
    document.getElementById('display').innerHTML=
    `
      This name is ${result.name}, i'm form ${result.location}. <br>
      i'm ${result.age} year's old. <br> 
      my hobby are ${result.hobby}. <br> 
      i'm persuing ${result.course.course_name} stack course form webvers web academy. <br>
      the duration of this course ${result.course.course_duration} hr. <br>
      the location of the academy is ${result.course.loc}. <br>
      i'm also eligible for ${result.course. elegible_for[1]} technology.
    `
  }
  else{
    document.getElementById('display').innerHTML=`can't find Details`
  }
}

// sumit details
function sumit(){
  const result=myobj.find((item)=>item.name==="sumit");
  if(result){
    // console.log(result);  
    document.getElementById('display').innerHTML=
    `
      This name is ${result.name}, i'm form ${result.location}. <br>
      i'm ${result.age} year's old. <br> 
      my hobby are ${result.hobby}. <br> 
      i'm persuing ${result.course.course_name} stack course form webvers web academy. <br>
      the duration of this course ${result.course.course_duration} hr. <br>
      the location of the academy is ${result.course.loc}. <br>
      i'm also eligible for ${result.course. elegible_for[0]} technology.
    `
  }
  else{
    document.getElementById('display').innerHTML=`can't find Details`
  }
}

//jeet details
function jeet(){
  const result=myobj.find((item)=>item.name==="jeet");
  if(result){
    console.log(result);  
    document.getElementById('display').innerHTML=
    `
      This name is ${result.name}, i'm form ${result.location}. <br>
      i'm ${result.age} year's old. <br> 
      my hobby are ${result.hobby}. <br> 
      i'm persuing ${result.course.course_name} stack course form webvers web academy. <br>
      the duration of this course ${result.course.course_duration} hr. <br>
      the location of the academy is ${result.course.loc}. <br>
      i'm also eligible for ${result.course. elegible_for[0]} technology.
    `
  }
  else{
    document.getElementById('display').innerHTML=`can't find Details`
  }
}


// function reset() {
//   document.getElementById('display').innerHTML="";
// }

// reset data
let noData= -1
function reset() {
 
  if (noData < 0) {
    document.getElementById('display').innerHTML = `No data found`;
  }
}



//process 2
// function souvick() {
//   for (let item in myobj) {
//     if (myobj[item].name === "Souvick") {
//       console.log(`This is ${myobj[item].name}`);
//       document.getElementById("display").innerHTML=`
//       This name is ${myobj[item].name} Jash. i'm form ${myobj[item].location}. <br>
//       i'm ${myobj[item].age} year's old. <br> 
//       my hobby are ${myobj[item].hobby}. <br> 
//       i'm persuing ${myobj[item].course.course_name} stack course form webvers web academy. <br>
//       the duration of this course ${myobj[item].course.course_duration} hr. <br>
//        the location of the academy is ${myobj[item].course.loc}. <br>
//        i'm also eligible for ${myobj[item].course. elegible_for[1]} technology.`
//       break; 
//     }
//   }
// }

// arup details
// function arup() {
//   for (let item in myobj) {
//     if (myobj[item].name === "arup") {
//       console.log(`This is ${myobj[item].name}`);
//       document.getElementById("display").innerHTML=`
//       This name is ${myobj[item].name} Jash. i'm form ${myobj[item].location}. <br>
//       i'm ${myobj[item].age} year's old. <br> 
//       my hobby are ${myobj[item].hobby}. <br> 
//       i'm persuing ${myobj[item].course.course_name} stack course form webvers web academy. <br>
//       the duration of this course ${myobj[item].course.course_duration} hr. <br>
//        the location of the academy is ${myobj[item].course.loc}. <br>
//        i'm also eligible for ${myobj[item].course. elegible_for[2]} technology.`
//       break; 
//     }
//   }
// }

















