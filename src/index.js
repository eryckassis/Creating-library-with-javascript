const fs = require("fs");

const caminhoArquivo = process.argv;
if (caminhoArquivo.length < 3) {
  console.log("Por favor, forneça o caminho do arquivo como argumento.");
  process.exit(1);
}
// O caminho do arquivo é o terceiro argumento
const link = caminhoArquivo[2];

fs.readFile(link, "utf8", (erro, texto) => {
  quebraEmParagrafos(texto);
  // verificaPalavraDuplicadas(texto);
});

function quebraEmParagrafos(texto) {
  const paragrafo = texto.split("\n");
  const paragrafoSemVazio = paragrafo.filter((paragrafo) => {
    return paragrafo.trim() !== "";
  });
  const paragrafos = texto.toLowerCase().split("\n");
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return verificaPalavraDuplicadas(paragrafo);
  });

  console.log(contagem);
}

function limpaPalavras(palavra) {
  return palavra.replace(/[.,!?;:]/g, "");
}

function verificaPalavraDuplicadas(texto) {
  const regex = /[.,!?;:]/g;
  const regex2 = /\s+/g;
  const regex3 = /[0-9]/g;
  const regex4 = /[a-zA-Z]/g;
  const regex5 = /[áàãâä]/g;
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
