/*if (2 == 2 && 2==3 || 45 == 9){
    document.write("Verdadeiro");
}

else{
    document.write("Falso");
}
*/

var n1 = prompt("Digite a primeira nota:");
var n2 = prompt("Digite a segunda nota:");
var faltas = prompt("Digite o número de faltas:");

n1 = parseFloat(n1);
n2 = parseFloat(n2);
faltas = parseInt(faltas);

media = (n1+n2)/2;

if(media >= 5 && faltas <=15){
    document.write("Aprovado");
}
else{
    document.write("Reprovado");
}

var resultado = (media >=5 && faltas <= 15) ? "Aprovado" : "Reprovado";

document.write(resultado);