let toogle = document.querySelector(".nav-link")
// angles functioning
let angle_one = document.getElementById("angle-one")
let angle_two = document.getElementById("angle-two")
let angle_three = document.getElementById("angle-three")
let angle_four = document.getElementById("angle-four")
let angle_five = document.getElementById("angle-five")
// questions function
let question_one = document.querySelector(".q1")
let question_two = document.querySelector(".q2")
let question_three = document.querySelector(".q3")
let question_four = document.querySelector(".q4")
let question_five = document.querySelector(".q5")
// register click
let clicks = document.querySelector(".acc")
// message popup
let popup = document.querySelector(".popup")

function opennav(){
    toogle.classList.add("open")
}
function closenav(){
    toogle.classList.remove("open")
}

// for open and close of angles
function angleopen1(){
    angle_one.classList.toggle("openangles")
    question_one.classList.toggle("open-q1")
}

function angleopen2(){
    angle_two.classList.toggle("openangles")
    question_two.classList.toggle("open-q2")
}

function angleopen3(){
    angle_three.classList.toggle("openangles")
    question_three.classList.toggle("open-q3")
}

function angleopen4(){
    angle_four.classList.toggle("openangles")
    question_four.classList.toggle("open-q4")
}

function angleopen5(){
    angle_five.classList.toggle("openangles")
    question_five.classList.toggle("open-q5")
}

function register(){
    clicks.classList.toggle("open-register")
}

// popup message
function openpopup(){
    popup.classList.add("openpopup")
}

function closepopup(){
    popup.classList.remove("openpopup")
}

// for search items


    const pass = document.getElementById("subject");
    const eye = document.getElementById("eye");
     function showpass(){
        if(pass.type === "password"){
            pass.type = "text";
            eye.src = "./images/pngwing.com.png";
        }else{
            pass.type = "password";
            eye.src = "./images/eye hide.png";
        }
     }

const search = ()=> {
    const searchbox = document.getElementById("search-items").value.toUpperCase();
    const storeitems = document.getElementById("products-list");
    const product = document.querySelectorAll(".product");
    const pname = document.getElementsByTagName("p");

    for (var i = 0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('p')[0];

        if (match){
            let textvalue = match.textContent ||  match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display ="";
                
            }else{
                product[i].style.display ="none";
                
            }
        }
    }
}