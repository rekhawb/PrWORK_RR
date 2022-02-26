


document.getElementById("button1").addEventListener("click", grow);
document.getElementById("button2").addEventListener("click",blue);
document.getElementById("button3").addEventListener("click",fade);
document.getElementById("button4").addEventListener("click",reset);

function grow(){

document.getElementById("box").style.width = "200px";
document.getElementById("box").innerText = "";

}


function blue(){
document.getElementById("box").style.backgroundColor = "blue" ;
document.getElementById("box").innerText = "BLUE";


}

function fade(){

document.getElementById("box").style.backgroundColor = "white";
document.getElementById("box").innerText = "";
}

function reset(){
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").innerText = "";
    
}