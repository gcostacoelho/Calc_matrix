var primeiroValor = parseFloat(prompt('Insira o Primeiro valor: '))
var operacao = prompt ('Insira a operação desejada:\nX = Multiplicação\n/ = Divisão\n+ = Adição\n- = Subtração')
var segundoValor = parseFloat(prompt('Insira o segundo valor: '))
//parseFloat para tranformar as strings em numbers Float ou Int

if (operacao == 'X') {
	var result = primeiroValor * segundoValor;
	document.write('<h2>' + primeiroValor + ' X ' + segundoValor + ' = ' + result + '</h2>');
}

else if (operacao == '/') {
	var result = primeiroValor / segundoValor;
	document.write('<h2>' + primeiroValor + ' / ' + segundoValor + ' = ' + result + '</h2>');
}

else if (operacao == '+') {
	var result = primeiroValor + segundoValor;
	document.write('<h2>' + primeiroValor + ' + ' + segundoValor + ' = ' + result + '</h2>');
}

else if (operacao == '-') {
	var result = primeiroValor - segundoValor;
	document.write('<h2>' + primeiroValor + ' - ' + segundoValor + ' = ' + result + '</h2>');
} else {
	document.write ('<h2>Simbolo inválido</h2>')
}