function trataErros(erro) {
  if (erro.code === "ENOENT") {
    return "Arquivo nao encontrado";
  } else {
    return "Erro na Aplicação";
  }
}

module.exports = trataErros;
function trataErros(erro) {
  if (erro.code === "ENOENT") {
    return "Arquivo não encontrado";
  } else if (erro instanceof TypeError) {
    return "Erro de tipo: " + erro.message;
  } else if (erro instanceof ReferenceError) {
    return "Erro de referência: " + erro.message;
  } else {
    return "Erro desconhecido: " + erro.message;
  }
}
