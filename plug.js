var count = 0;
document.getElementById("Butt").onclick = function() {
    count++;
    if(count % 2 == 0) {
        document.getElemetnById("demo").innerHTML = "";
    } else {
        var img = document.createElement("img");
        img.src = "myphoto.jpg";
        document.getElementById("demo").appendChild(img);
    }

}