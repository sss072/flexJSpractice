let input2;
let input1;

let result = document.getElementById('result')
result.textContent = 'hello'
let new_result; 



function mul() {
    input2 = document.getElementById('input2').value
    input1 = document.getElementById('input1').value 
    
    result.textContent +=' ' + (parseInt(input1) * parseInt(input2))
    

    

    
};

document.getElementById('subtract').onclick = function sub () {
    input2 = document.getElementById('input2').value
    input1 = document.getElementById('input1').value

    result.textContent +=' ' + (parseInt(input1) - parseInt(input2))
   
};

booty = document.getElementById("add").addEventListener("click", eventFunc);

function eventFunc() {
    input2 = document.getElementById('input2').value
    input1 = document.getElementById('input1').value
    result.textContent +=' ' + (parseInt(input1) + parseInt(input2))
}