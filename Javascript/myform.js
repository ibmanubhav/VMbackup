function doSomething(){
    console.log(event);
}
let action2 = function(){
    console.log('action2');
}
if(document.getElementById('Domestic').checked == true) {   
    document.write("Domestic radio button is selected");   
} else {  
    document.write("International radio button is not selected");   
}