// Basic javascript  Introduction ***************************

// console.log("hello world");
// window.alert("hello");
// document.querySelector(".heading").textContent = `h1 from javaScript` ;
// document.querySelector(".paragraph").textContent = `p1 from javaScript`;




// variables in javaScript*********************************

// let age = 25;
// let namee = "kapil";
// const graduate = true;
// console.log(`My name is ${namee}\ni am ${age} years old`);  //string litral**** 
// let para1 = document.querySelector(".paragraph1");
// let para2 = document.querySelector(".paragraph2");
// let para3 = document.querySelector(".paragraph3");

// para1.textContent = `my age is  : ${age}`;
// para2.textContent = `my name is :${namee}`;
// para3.textContent = `is graduate:  ${age}`;


// airthmatic operator*******************************************


// user input//**************************************************** */

// 1 st method****************
// const number = window.prompt("enter a number");
// console.log(number / 2);

// second method ***********
// const btn = document.querySelector(".btn");
// const input = document.querySelector(".input");
// const h1 = document.querySelector("h1");
// let value;

// btn.addEventListener('click', () => {
//     value = input.value;
//     const result = value / 2;
//     h1.textContent = `reslut is ${result}`;
// });


// Number guessing game ***********************


// let i = 1;
// while (i < 5) {
//     const randomNumber = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
// console.log(randomNumber);
//     const guess = Number(window.prompt("Guess a number in range 5 *10"));
    
//     if (guess !== randomNumber) {
//         window.alert("Guess again");
//     }
//     i++;
// }


// let numbers = [1, 4, 6, 8];

// let doubleNumber = numbers.map(double);
 
// function double(ele, index,arr) {
    
//    return (ele * 2);
    
// }
// console.log(numbers,doubleNumber);

// function Product(name, model, year) {
//    this.name = name;
//    this.model = model;
//    this.year = year;
//    this.display = function () {
//       console.log(this.name);
//    }
// }
// const pr1 = new Product("maruti-suzuki", 'swift', 2019);
// pr1.display();

// class product{
//    constructor(name, model, year) {
//       this.name = name;
//       this.model = model;
//       this.year = year;

//    }
//    display() {
//       console.log(this.model);
//    }
// }

// const pr1 = new product("maruti", 'swift', 2019);
// pr1.display();

// function setCounter() {
//    let count = 0;
//    function counter() {
//       count = count + 1;
//       return (count);
//    }
//    return { counter };
// }

// const counter1 = setCounter();
// console.log(counter1.counter());
// console.log(counter1.counter());

// console.log(counter1.counter());

const textArea = document.querySelector(".text-box");
const button = document.querySelectorAll(".col-1-of-4");
let width = button[0].clientWidth;
button.forEach(function (ele) {
   ele.setAttribute("style",`height:${width}px`);
});
window.addEventListener("resize", function () {
    width = button[0].clientWidth;
    button.forEach((ele) => {
        ele.setAttribute("style", `height:${width}px`);
       
    });
   
});


let value = "";
let count = 0;
button.forEach((ele) => {
    ele.addEventListener('click', function () {
        const currentValue = this.textContent;
        if (!Number(currentValue)) {
            if (currentValue === '0' || currentValue=='=' || currentValue=='c') {
                count = 0;
            } else {

                count = count + 1;
            }
            
        } else {
            count = 0;
        }
        
        
        if (count < 2) {
    
            if (currentValue === "=") {
                value = calculator();
            }
            else if (currentValue === 'c') {
                value = ""
            } else {
                value = value + currentValue;
            }
            
            textArea.value = value;
        
        }

    });
      
    });

const calculator = function(){
    let textAreaValue = textArea.value;
    let textVlaueList = [...textAreaValue];
    let newTextValueList1 = [];
    let newEle = "";
    textVlaueList.forEach((ele, i, arr) => {
        if (Number(ele) || ele === "0" || ele===".") {
            
          
            newEle = newEle + ele;
            if (Number(arr[i + 1]) || arr[i+1] ==="0" || arr[i+1]===".") {
                
            } else {
                newTextValueList1.push(newEle);
                newEle = "";
            }
        }
        else {
            newTextValueList1.push(ele);
        }
    });
    console.log(newTextValueList1);
    
   let newTextValueList =  newTextValueList1.map((ele, index, aar) => {
       if (Number(ele)) {
           return Number(ele);
       }
       
       else {
           return ele;
       }
   });
    let result = 0;
    newTextValueList.forEach((ele,index,arr) => {
        if (ele === "+") {
            result = arr[index - 1] + arr[index + 1]
            arr[index+1] = result;
        }
        else if (ele === "*") {
            result = arr[index - 1] * arr[index + 1];
            arr[index+1] = result;
        }
        else if (ele === "-") {
            result = arr[index - 1] - arr[index + 1];
            arr[index+1] = result;
        }
        else if (ele === "/") {
            result = arr[index - 1] / arr[index + 1];
            arr[index+1] = result;
        }
    });
    
    return newTextValueList[newTextValueList.length - 1];
}
