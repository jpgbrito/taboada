let cont, numero;

function taboada() {
  let resultado = '';

  numero = parseInt(prompt("Digite um número:"));
  resultado += "\nTABOADA DE DEZ X" + numero + "\n";

  for (cont = 1; cont<= 10; cont++){
  resultado += numero + " X " + cont + " = " + (cont * numero) + "\n";

  }

  alert(resultado)

}
taboada ();