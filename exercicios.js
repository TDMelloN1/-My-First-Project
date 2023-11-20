var entradaAnos = prompt('Digite a quantidade de anos luz para a conversão em metros');
if (entradaAnos !== null) {
    var metros = 9.461e+15;
    var anosLuz = parseFloat(entradaAnos);
    var conversao = anosLuz * metros;
    console.log(conversao);
}
