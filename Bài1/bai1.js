function dongho(){
    var date = new Date();
    var gio = date.getHours();
    var phut = date.getMinutes();
    var giay = date.getSeconds();

    if (gio <10)
    
        gio = "0"+ gio; 
    
    if (phut <10)
    
        phut = "0"+ phut; 
    
    if (giay <10)
    
        giay = "0"+ giay; 
    
    document.getElementById("clock").innerHTML = gio + ":" + phut + ":" + giay;
    setTimeout("dongho()", 1000);
}dongho();

