let output=document.getElementById("outputScreen");

function display(num){
    output.value += num ;
}
function calculate(){
    try{
        output.value = eval(output.value);
    }
    catch
    {
        output.value = "error"
    }
}
function clearOutput(){
    output.value = "";
}
function del(){
    output.value = output.value.slice(0,-1);
}

