let contain = document.querySelector(".contain")
let h1 = document.querySelector("h1")
let h3 = document.querySelector("h3")

let inp1 = document.querySelector(".inp1")
let inp2 = document.querySelector(".inp2")
let inp3 = document.querySelector(".inp3")

let para1 = document.querySelector(".para1")
let para2 = document.querySelector(".para2")
let para3 = document.querySelector(".para3")

let btn = document.querySelector(".btn")
let hr1 = document.querySelector(".hr1")

let result1 = document.querySelector(".result1")
let result2 = document.querySelector(".result2")
let result3 = document.querySelector(".result3")



btn.addEventListener("click" , function(){
    
    if(inp1.value == "" || inp2.value == "" || inp3.value ==""){
        result1.innerHTML = "please enter your data"
        return;

    }

    let username = inp1.value;
    let height = Number(inp2.value); 
    let weight = Number(inp3.value); 

    let heightcm = height/100
    let bmi = weight/(heightcm*heightcm);

    let status;
    let color;
    if(bmi < 18.5){
         status = "Underweight";
         color = "yellow";

        }

    else if(bmi < 25){
        status = "Normal";
         color = "green";
        } 

    else if (bmi < 30) {
        status = "Overweight";
        color = "orange";
        }    

    else{
        status = "obese";
        color = "red";
    }    


    hr1.style.display="block" 
    hr1.style.color="red"

    result1.innerHTML =`WELCOME ${username}`
    result2.innerHTML = `YOUR BMI IS : ${bmi.toFixed(2)}`
    result3.innerHTML = `status : <span style = " color : ${color}; "> ${status} </span>`
    

})