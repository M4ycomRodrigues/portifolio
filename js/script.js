function openNav(){
    var x = document.getElementById("navigation");

    if(x.className == "navigation"){
        x.className += "menuJs";
        document.getElementById("threeline-icon").innerHTML = "bbbbbbbb";
    }else{
        x.className = "navigation";
        document.getElementById("threeline-icon").innerHTML = "#9776;";
    }
}