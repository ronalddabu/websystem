function about(){
    window.alert("This is programmed by: Ronald Dabu");
}
function clear_inputs(){
    inputs=document.getElementsByClassName('inputs')
    for(input of inputs){
    	input.value=' ' ///this emptys the inputs
    }
}
var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var res = document.getElementById("result");

document.getElementById("add").addEventListener
("click", function(){
    res.value = parseInt(n1.value)+parseInt(n2.value)
})
document.getElementById("sub").addEventListener
("click", function(){
    res.value = parseInt(n1.value)-parseInt(n2.value)
})
document.getElementById("pro").addEventListener
("click", function(){
    res.value = parseInt(n1.value)*parseInt(n2.value)
})
document.getElementById("quo").addEventListener
("click", function(){
    res.value = parseInt(n1.value)/parseInt(n2.value)
})
