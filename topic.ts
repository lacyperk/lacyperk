document.getElementById("enter").addEventListener("onclick", myFunction);

function myFunction(){
    var name = document.getElementById("fname");
    var fname = name.nodeValue;
    alert(fname);
    
}