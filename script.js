
// display the numbers in the input box
function displayNumber(num){
 document.getElementById("result").value+=num
}

// clear
function clearText(){
    document.getElementById('result').value=" "
}

// equal to operation

function operation(){
    result.value = eval(result.value)
}

// remove one number from the input box button-(X)

function lastChar(){
    result.value = result.value.slice(0,-1)
}