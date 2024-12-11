

const myObject = [
    {
        nm: "Swati Giri",
        loc: "kolkata",
        stream: "React",
        age: 35,
        hobby: ["singing", "coding", "gardening", "cooking"],
        myedu: function () {
            return (this.nm + " is pursuing for " + this.stream);
        },
        myTour: function (place) {
            return (`${place} is my fvrt toursism`);
        },
        baby: {
            bName: "Deyasinee Das",
            bAge: 5,
            bSchool: "DPS",
            bHobby: ["playing", "painting", "cycleing", {
                height: "3 ft",
                weight: 15,
                BMS: 20
            }]
        }
    },

    {
        nm: "Nikita Porel",
        loc: "saltlake",
        stream: "cse",
        age: 22,
        hobby: ["singing", "web", "dancing", "cooking"],
        myedu: function () {
            return (this.nm + " is pursuing for " + this.stream);
        },
        myTour: function (place) {
            return (`${place} is my fvrt toursism`);
        },
        baby: {
            bName: "Max",
            bAge: 3,
            bSchool: "saltlake high school",
            bHobby: ["playing", "painting", "drawing", {
                height: "5 ft",
                weight: 16,
                BMS: 19
            }]
        }
    },

    {
        nm: "Debraj Sen",
        loc: "madhyagram",
        stream: "node js",
        age: 24,
        hobby: ["singing", "coding", "gardening", "cooking"],
        myedu: function () {
            return (this.nm + " is pursuing for " + this.stream);
        },
        myTour: function (place) {
            return (`${place} is my fvrt toursism`);
        },
        baby: {
            bName: "john sen",
            bAge: 10,
            bSchool: "DPS",
            bHobby: ["playing", "painting", "cycleing", {
                height: "3 ft",
                weight: 15,
                BMS: 20
            }]
        }
    },

    {
        nm: "Manab Paul",
        loc: "barasat",
        stream: "html",
        age: 20,
        hobby: ["singing", "coding", "gardening"],
        myedu: function () {
            return (this.nm + " is pursuing for " + this.stream);
        },
        myTour: function (place) {
            return (`${place} is my fvrt toursism`);
        },
        baby: {
            bName: "manab2 das",
            bAge: 2,
            bSchool: "DPS",
            bHobby: ["playing", "painting", "cycleing",{
                height: "3 ft",
                weight: 9,
                BMS: 20
            }]
        }
    },

    {
        nm: "Souvick Jash",
        loc: "kolkata",
        stream: "React",
        age: 23,
        hobby: ["web development", "coding", "gardening", "cooking"],
        myedu: function () {
            return (this.nm + " is pursuing for " + this.stream);
        },
        myTour: function() {
          const place = document.getElementById('data').value;
          console.log(place)
          // if (place) {
          //     document.getElementById('tourResult').innerHTML = `${place} is my fvrt tourism`;
          // } else {
          //     document.getElementById('tourResult').innerHTML = "Please enter a tourist place!";
          // }
        },
    
        
        baby: {
            bName: "will",
            bAge: 9,
            bSchool: "Barasat high school",
            bHobby: ["playing", "web development", "coding", {
                height: "4 ft",
                weight: 25,
                BMS: 21
            }]
        }
    },

    {
        nm: "Subhankar Banerjee",
        loc: "howrah",
        stream: "css",
        age: 35,
        hobby: ["singing", "coding", "cooking"],
        myedu: function () {
            return (this.nm + " is pursuing for " + this.stream);
        },
        myTour: function (place) {
            return (`${place} is my fvrt toursism`);
        },
        baby: {
            bName: "Ram",
            bAge: 5,
            bSchool: "DPS",
            bHobby: ["playing", "painting", "cycleing", {
                height: "3 ft",
                weight: 15,
                BMS: 20
            }]
        }
    },

    {
        nm: "Shantanu Garain",
        loc: "Bolpur",
        stream: ".Net full stack",
        age: 25,
        hobby: ["coding", "fullstack", "playing"],
        myedu: function () {
            return (this.nm + " is pursuing for " + this.stream);
        },
        myTour: function (place) {
            return (`${place} is my fvrt toursism`);
        },
        baby: {
            bName: "john",
            bAge: 7,
            bSchool: "DPS",
            bHobby: ["playing", "painting", "cycleing", {
                height: "11 ft",
                weight: 15,
                BMS: 21
            }]
        }
    }

]
  
  
// console.log(myObject)

// souvick details
  function souvick(){
    const result=myObject.find((item,index)=>item.nm==="Souvick Jash");
    // const example=myObject.filter((value,index)=>myObject.indexOf(value)===index);
    // console.log(example);
    

    console.log(result)
    if(result){
      // console.log(result);  
      const parentHobbies = result.hobby;
      const babyHobbies = result.baby.bHobby;
     
      // caps in first letter
      const caplitalWordInParent=parentHobbies.map(hobby=>{
        return hobby.charAt(0).toUpperCase()+hobby.slice(1)
      })
      // Find the common hobbies b
      const commonHobbies = parentHobbies.filter(hobby => babyHobbies.includes(hobby));

      document.getElementById('display').innerHTML=
      `
        This name is <strong>${result.nm}</strong>, i'm form <strong>${result.loc}</strong>. <br>
        my stream is <strong>${result.stream}</strong> <br>
        i'm <strong>${result.age}</strong> year's old<br>
        my hobby's are <strong>${caplitalWordInParent}</strong><br>
        Tourist place: <strong>${result.place}</strong><br>
        baby name <strong>${result.baby.bName}</strong>😅 he is <strong>${result.baby.bAge}</strong> years old <br>
        his school name is <strong>${result.baby.bSchool}</strong><br>
        his hobbie's are <strong>${result.baby.bHobby.slice(0,3)}</strong><br>
        his height <strong>${result.baby.bHobby[3].height}</strong> weight <strong>${result.baby.bHobby[3].weight}</strong><br>
        BMS also <strong>${result.baby.bHobby[3].BMS}</strong><br>
        ${commonHobbies.length > 0 ? `Common hobbies between parent and children: <strong>${commonHobbies.join(', ')}</strong>` : "No common hobbies found between parent and baby."}
        
      `
    }
    else{
      document.getElementById('display').innerHTML=`can't find Details`
    }
  }
  
// nikita details
  function nikita(){
    const result=myObject.find((item)=>item.nm==="Nikita Porel");
    console.log(result)
    if(result){
      // console.log(result);  
      document.getElementById('display').innerHTML=
      `
        This name is ${result.nm}, i'm form ${result.loc}. <br>
        my stream is ${result.stream} <br>
        my age is ${result.age}<br>
        my hobby's are ${result.hobby}<br>
        baby name ${result.baby.bName}😅 he is ${result.baby.bAge} years old <br>
        his school name is ${result.baby.bSchool}<br>
        his hobbie's are ${result.baby.bHobby.slice(0,3)}<br>
        height ${result.baby.bHobby[3].height}<br>
        weight ${result.baby.bHobby[3].weight}<br>
        weight ${result.baby.bHobby[3].BMS}
      `
    }
    else{
      document.getElementById('display').innerHTML=`can't find Details`
    }
  }
  
// swait details
function swait(){
    const result=myObject.find((item)=>item.nm==="Swati Giri");
    console.log(result)
    if(result){
      // console.log(result);  
      document.getElementById('display').innerHTML=
      `
        This name is ${result.nm}, i'm form ${result.loc}. <br>
        my stream is ${result.stream} <br>
        my age is ${result.age}<br>
        my hobby's are ${result.hobby}<br>
        baby name ${result.baby.bName}😅 he is ${result.baby.bAge} years old <br>
        his school name is ${result.baby.bSchool}<br>
        his hobbie's are ${result.baby.bHobby.slice(0,3)}<br>
        height ${result.baby.bHobby[3].height}<br>
        weight ${result.baby.bHobby[3].weight}<br>
        weight ${result.baby.bHobby[3].BMS}
      `
    }
    else{
      document.getElementById('display').innerHTML=`can't find Details`
    }
  }

//debraj details
function debraj(){
    const result=myObject.find((item)=>item.nm==="Debraj Sen");
    console.log(result)
    if(result){
      // console.log(result);  
      document.getElementById('display').innerHTML=
      `
        This name is ${result.nm}, i'm form ${result.loc}. <br>
        my stream is ${result.stream} <br>
        my age is ${result.age}<br>
        my hobby's are ${result.hobby}<br>
        baby name ${result.baby.bName}😅 he is ${result.baby.bAge} years old <br>
        his school name is ${result.baby.bSchool}<br>
        his hobbie's are ${result.baby.bHobby.slice(0,3)}<br>
        height ${result.baby.bHobby[3].height}<br>
        weight ${result.baby.bHobby[3].weight}<br>
        weight ${result.baby.bHobby[3].BMS}
      `
    }
    else{
      document.getElementById('display').innerHTML=`can't find Details`
    }
  }

// manab details
function manab(){
    const result=myObject.find((item)=>item.nm==="Manab Paul");
    console.log(result)
    if(result){
      // console.log(result);  
      document.getElementById('display').innerHTML=
      `
        This name is ${result.nm}, i'm form ${result.loc}. <br>
        my stream is ${result.stream} <br>
        my age is ${result.age}<br>
        my hobby's are ${result.hobby}<br>
        baby name ${result.baby.bName}😅 he is ${result.baby.bAge} years old <br>
        his school name is ${result.baby.bSchool}<br>
        his hobbie's are ${result.baby.bHobby.slice(0,3)}<br>
        height ${result.baby.bHobby[3].height}<br>
        weight ${result.baby.bHobby[3].weight}<br>
        weight ${result.baby.bHobby[3].BMS}
      `
    }
    else{
      document.getElementById('display').innerHTML=`can't find Details`
    }
  }

// subhankar details
function subhankar(){
    const result=myObject.find((item)=>item.nm==="Subhankar Banerjee");
    console.log(result)
    if(result){
      // console.log(result);  
      document.getElementById('display').innerHTML=
      `
        This name is ${result.nm}, i'm form ${result.loc}. <br>
        my stream is ${result.stream} <br>
        my age is ${result.age}<br>
        my hobby's are ${result.hobby}<br>
        baby name ${result.baby.bName}😅 he is ${result.baby.bAge} years old <br>
        his school name is ${result.baby.bSchool}<br>
        his hobbie's are ${result.baby.bHobby.slice(0,3)}<br>
        height ${result.baby.bHobby[3].height}<br>
        weight ${result.baby.bHobby[3].weight}<br>
        weight ${result.baby.bHobby[3].BMS}
      `
    }
    else{
      document.getElementById('display').innerHTML=`can't find Details`
    }
  }

//   shantany details
function shantanu(){
    const result=myObject.find((item)=>item.nm==="Shantanu Garain");
    console.log(result)
    if(result){
      // console.log(result);  
      document.getElementById('display').innerHTML=
      `
        This name is ${result.nm}, i'm form ${result.loc}. <br>
        my stream is ${result.stream} <br>
        my age is ${result.age}<br>
        my hobby's are ${result.hobby}<br>
        baby name ${result.baby.bName}😅 he is ${result.baby.bAge} years old <br>
        his school name is ${result.baby.bSchool}<br>
        his hobbie's are ${result.baby.bHobby.slice(0,3)}<br>
        height ${result.baby.bHobby[3].height}<br>
        weight ${result.baby.bHobby[3].weight}<br>
        weight ${result.baby.bHobby[3].BMS}
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
  
  
  
  
  
  
  
  
  
  