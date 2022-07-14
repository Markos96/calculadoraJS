function valor(x){
    document.getElementById("display").value += x;
}

function borrarDisplay(params){
    document.getElementById("display").value = params;

}

function calcular(){
    var resultado = eval(document.getElementById("display").value); 
    document.getElementById("display").value = resultado;
}
