Crie uma função que verifique se o aluno tem nota suficiente para passar de ano com as seguintes regras:
Caso a nota esteja entre 0 e 3, a função deve devolver “Reprovado”;
Caso a nota esteja entre 3 e 5, a função deve devolver “Recuperação”;
Caso a nota esteja entre 5 e 7, a função deve devolver “Aula de Reforço”;
Caso a nota seja maior do que 7, a função deve retornar “Aprovado”
Faça um loop while para percorrer o vetor de alunos. Dentro deste loop faça a chamada para a função de notas, passando os argumentos necessários e depois verificando se o aluno passou ou não.



charset="utf-8"
var notaaluno =[4,5,6]
var nomealuno =["mariazinha","pedrinho","clarinha"]
function analise (nota) {
if (nota >0 && nota<=3) {
	return ("Reprovado")
}
else if (nota >3 && nota<=5) {
	return ("Recuperação")
}
else if (nota >5 && nota<=7) {
	return ("Reforço")
}
else if (nota >7) {
  return ("Aprovado")
}
}
for (var contagem =0; contagem<2; contagem++) {
	var x= analise(notaaluno[contagem])
  alert ("O Aluno: "+nomealuno[contagem]+" tem a sua situação: "+x)  
}
