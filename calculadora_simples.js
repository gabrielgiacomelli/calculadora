function somar(){
 let valor1 = Number(document.getElementById("numero1").value); 
 let valor2 = Number(document.getElementById("numero2").value);
 //Number(faz com que aceite apenas numeros) document(html) getelementbyid(procura no html o id) .value (uma variavel que recebe o que o input receber de informação)
 let resultado = valor1 + valor2;

document.getElementById("resultado").innerText = "RESULTADO: " + resultado;
//innertext(“Troca o texto que está dentro desse elemento pelo que eu mandei”)
}

function subtrair(){
    let valor1 = Number(document.getElementById("numero1").value);
    let valor2 = Number(document.getElementById("numero2").value);
    let resultado = valor1 - valor2;

    document.getElementById("resultado").innerText = "RESULTADO: " + resultado;
}

function multiplicar(){
    let valor1 = Number(document.getElementById("numero1").value);
    let valor2 = Number(document.getElementById("numero2").value);
    let resultado = valor1 * valor2;

    document.getElementById("resultado").innerText = "RESULTADO: " + resultado;
}

function dividir(){
    let valor1 = Number(document.getElementById("numero1").value);
    let valor2 = Number(document.getElementById("numero2").value);
    let resultado;

    if (valor2 === 0){
        resultado = "Não pode dividir por zero!";
    } else {
        resultado = valor1 / valor2;
    }

    document.getElementById("resultado").innerText = "RESULTADO: " + resultado;
}