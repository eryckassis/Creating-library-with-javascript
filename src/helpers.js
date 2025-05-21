function filtraOcoreencias(paragrafos) {
  return Object.keys(paragrafo).filter((chave) => paragrafo[chave] > 1);
}

function montaSaidaArquivo(listaPalavras) {
  let textoFinal = "";
  listaPalavras.forEach((paragrafo, indice) => {
    const duplicadas = filtraOcoreencias(paragrafo).join(",");
    textoFinal += `Palavras duplicadas no paragrafo ${
      indice + 1
    }: ${duplicadas}\n`;
  });

  return textoFinal;
}

export { montaSaidaArquivo };
