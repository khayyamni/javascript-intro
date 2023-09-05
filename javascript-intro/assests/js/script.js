"use strict";
// console.log("salam")

// alert("P139")

// var, let, const

//const PHONE_NUMBER = "45454"

// var name = "Samir";

// let surname = "Qehramanov";

// const address = "Sumqayit"

// let phoneNumber = "56565";

// let isMarried = true;

// let age = 30;

// let address;

// let phone = null;

// console.log(typeof name);
// console.log(typeof isMarried);
// console.log(typeof age);
// console.log(typeof address);   
// console.log(typeof phone);

// let num1 = 10;

// let num2 = 2;

// let result  = num1 % num2;
// console.log(result);

// let count = 5;

// count++;
// console.log(count);


// let age = 100;

// let surname = null;
// console.log(age / surname);

// alert(null === undefined);


// let num1 = "100";

// let num2 = 100;

// if(num1 === num2){
//     console.log("true")
// }
// else{
//     console.log("false");
// }

// let  age = 20;
// let result = age >30 ? "Boyukdur":"Kicikdir";

// console.log(result);

// let surname = null;

// let result =surname ?? "XXX";

// console.log(result)

// let dayOfWeek = "Sunday";


// switch (dayOfWeek) {
//     case "Sunday":
//         console.log("This is Sunday")
//         break;
//     case "Sunday":
//         console.log("This is Sunday")
//         break;
//     case "Sunday":
//         console.log("This is Sunday")
//         break;

//     default:
//         console.log("Not found day")
//         break;
// }

// let user = {
//     name: "Surac",
//     surname: "Ismayilov",
//     age: 23
// }

// console.log(user.name + " " + user.surname);

// let result = `${user.name} + ${user.surname}`;

// console.log(result);

// let datas = ["Surac", "Ismayil", 55, 100, true];

// // console.log(datas);
// console.log(datas[0]);
// console.log(datas[datas.length-1]);

// for (let i = 0; i < datas.length; i++) {
    
//     // console.log(datas[i])
//     // if (datas[i]==55) {
//     //     console.log(datas[i]);
//     // }

//     // if (datas[i]==55) {
//     //     console.log(datas(i));
//     // }

    
// }


// array.forEach(element => {
//     console.log(element)
// });

// array.forEach((element,i) => {
//     console.log(element + "/" + i)
// });

// let  name = "test";

// // console.log(typeof(name));
// console.log(typeof(name) == "string");

// let datas = ["Surac", "Ismayil","66" , 55, 100, true];

// for (let i = 0; i < datas.length; i++) {
//     let result = datas[i]+30;
// }



// for (let i = 0; i < datas.length; i++) {
// if (!isNaN(datas[i]) && typeof(datas[i]) != "boolean" && typeof(datas[i]) != "string") {
//     let result = datas[i] + 30;
//     console.log(result);
// }
    
// }





// let name = "Surac";

// name+="Ismayilov"

// console.log(name);

// let stu1 = {
//     name:"Surac",
//     surname:"Ismayilov"
// }

// let stu2 = {
//     name:"Pervin",
//     surname:"Mirzeyev"
// }

// let stu3 = {
//     name:"Fidan",
//     surname:"Beshirova"
// }

// let stu4 = {
//     name:"Kubra",
//     surname:"Memmedova"
// }


// let students = [stu1, stu2, stu3, stu4];

// studenst.forEach(student => {
//     let fullName =`${student.name} ${student.surname}`
//     console.log(fullName);
// });



// document.querySelector(".test").innerHTML = "Salam"


// let stu1 = {
//     name:"Surac",
//     surname:"Ismayilov"
// }

// let stu2 = {
//     name:"Pervin",
//     surname:"Mirzeyev"
// }

// let stu3 = {
//     name:"Fidan",
//     surname:"Beshirova"
// }

// let stu4 = {
//     name:"Kubra",
//     surname:"Memmedova"
// }


// let students = [stu1, stu2, stu3, stu4];

// studenst.forEach(student => {
//     let fullName =`${student.name} ${student.surname}`
//     let h1 = document.createElement("h1")
//     h1.innerText = fullName;
//     document.querySelector(".test").append(h1);
// });




let stu1 = {
    name:"Surac",
    surname:"Ismayilov"
}

let stu2 = {
    name:"Pervin",
    surname:"Mirzeyev"
}

let stu3 = {
    name:"Fidan",
    surname:"Beshirova"
}

let stu4 = {
    name:"Kubra",
    surname:"Memmedova"
}


let students = [stu1, stu2, stu3, stu4];



document.querySelector(".btn").addEventListener("click", function(){
    students.forEach(student => {
        let fullName =`${student.name} ${student.surname}`
        let h1 = document.createElement("h1");
        h1.innerText = fullName;
        document.querySelector(".test").append(h1);
    });

    this.style.display = "none";
})