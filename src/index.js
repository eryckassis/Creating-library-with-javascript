const fs = require("fs");

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, "utf8", (erro, texto) => {
  console.log("qual e o erro?");
  contaPalavras(texto);
  // verificaPalavraDuplicadas(texto);
});

function contaPalavras(texto) {
  const paragrafos = extraiParagrafos(texto);
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return verificaPalavraDuplicadas(paragrafo);
  });

  console.log(contagem);
}

function extraiParagrafos(texto) {
  return texto.toLowerCase().split("\n");
}

function limpaPalavras(palavra) {
  return palavra.replace(/[.,!?;:]/g, "");
}

function verificaPalavraDuplicadas(texto) {
  const listaPalavras = texto.split(" ");
  const resultado = {};
  // objeto[propiedade] = valor;
  listaPalavras.forEach((palavra) => {
    if (palavra.length >= 3) {
      const palavraLimpa = limpaPalavras(palavra);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    }
  });
  return resultado;
}
