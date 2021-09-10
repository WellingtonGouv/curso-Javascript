/*var n1s = '15';
var n1 = 15;

if (n1s == n1){
    document.write("São iguais</br>")
}

else{
    document.write("Não são iguais</br>")
}

if (n1s === n1){
    document.write("São idênticos</br>")
}
else{
    document.write("Não são idênticos</br>")
}*/

//Casting de tipos

var n1 = prompt("Digite a primeira nota:");
var n2 = prompt("Digite a segunda nota:");

n1 = parseFloat(n1);
n2 = parseFloat(n2);

if((n1+n2)/2 >= 5){
    document.write("Aprovado");
}
else{
    document.write("Reprovado");
}