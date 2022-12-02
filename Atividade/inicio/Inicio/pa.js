 function PA(){
    document.getElementById('res').innerHTML = "";
    var vi= parseInt(document.getElementById("vi").value);
    var vf= parseInt(document.getElementById("vf").value);
    var r= parseInt(document.getElementById("r").value);
    var res= document.getElementById("res").value;
    document.getElementById('res').innerHTML = "";
    for (let i = vi; i < vf; i = i+r){
        var t = document.createTextNode(i + "-")
            document.getElementById('res').appendChild(t)    
    }
    document.getElementById('res1').innerHTML = "";
    var vi= parseInt(document.getElementById("vi").value);
    var vf= parseInt(document.getElementById("vf").value);
    var r= parseInt(document.getElementById("r").value);
    var res1= document.getElementById("res").value;
    document.getElementById('res1').innerHTML = "";
    for (let i = vf; i > vi; i = i-r){
        var t = document.createTextNode(i + "-")
            document.getElementById('res1').appendChild(t)    
    }
}