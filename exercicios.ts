var entradaAnos: string | null = prompt('Digite a quantidade de anos luz para a conversão em metros')
if (entradaAnos !== null) {

var metros: number = 9.461e+15;
var anosLuz: number = parseFloat(entradaAnos);

var conversao : number= anosLuz * metros



console.log(conversao)
}
