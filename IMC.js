var peso = 95;
var altura = 1.90;
var imc = (peso / (altura ^ 2));

console.log("Seu imc é: " + imc);

if (imc < 18,5){
    console.log ("Abaixo do peso");
}
else if (imc > 18,5 && imc <= 25){
    console.log("Peso normal")
}
else if (imc > 25 && imc <= 30){
    console.log("Acima do peso")
}
else {
    console.log("Obeso")
}