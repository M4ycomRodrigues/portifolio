function openNav(){
    var x = document.getElementById("navigation");

    if(x.className == "navigation"){
        x.className += "menuJs";
        document.getElementById("threeline-icon").innerHTML = "&Cross";
    }else{
        x.className = "navigation";
    }
}