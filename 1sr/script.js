function callme(){
    let name=document.getElementById('names').value;
    let pass=document.getElementById('password').value;
    let mob=document.getElementById('mob').value;
    let mail=document.getElementById('mail').value;
    if(name==""){
        alert("no username");
     }
    if((name.length)<6)
    {
        alert("name should be more than 6 letters");
    }
    if(pass==""){
        alert("nopassword");
     }
     if((pass.length)<6)
     {
         alert("pass should be more than 6 letters");
     }
     if(mob==""){
        alert("no mobileno.");
    }
    if(mob.length<10||mob.length>10){
        alert("mobileno. invalid");
    }
    if(isNaN(mob)){
        alert("mobileno. invalid");
    } 
    if(mail==""){
        alert("no mail");
    }
    if(mail.indexOf('@')<=1){
        alert("invalid mail due to @");
    }

    if(female.checked==false && male.checked==false){
        alert("not checked");
    }
    if(dropdown.value==""){
        alert("branch not sel");
    }
    if(hindi.checked==false || telugu.checked==false || tamil.checked==false || english.checked==false){
        alert("not lang sel");
    }
}