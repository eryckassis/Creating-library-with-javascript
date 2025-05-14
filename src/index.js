const fs = require("fs");

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, "utf8", (erro, texto) => {
  quebraEmParagrafos(texto);
  // verificaPalavraDuplicadas(texto);
});

function quebraEmParagrafos(texto) {
  const paragrafos = texto.toLowerCase().split("\n");
  const contagem = paragrafos.map((paragrafo) => {
    return verificaPalavraDuplicadas(paragrafo);
  });
  console.log(contagem);
}

function verificaPalavraDuplicadas(texto) {
  const listaPalavras = texto.split(" ");
  const resultado = {};
  // objeto[propiedade] = valor;
  listaPalavras.forEach((palavra) => {
    resultado[palavra] = (resultado[palavra] || 0) + 1;
  });
  return resultado;
}
