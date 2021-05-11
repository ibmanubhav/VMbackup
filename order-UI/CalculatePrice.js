function tax(){
    let price=document.getElementById("price").value;
    let tax=document.getElementById("tax").value;
    document.getElementById("A").innerHTML=price+(price*tax*0.01);
    return ;
}