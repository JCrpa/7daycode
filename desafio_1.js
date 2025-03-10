// Este script compara variáveis numéricas e de string, e exibe o resultado da comparação em elementos HTML.
// A comparação é feita de duas formas: solta (==) e estrita (===).
function comparar(numero, string, IdIgual_a, IdIdentico_a) {
    // Comparação solta (==)
    if (numero == string) {
      document.getElementById(IdIgual_a).textContent = "As variáveis têm o mesmo valor, mas tipos diferentes.";
    } else {
      document.getElementById(IdIgual_a).textContent = "As variáveis não têm o mesmo valor.";
    }
    // Comparação estrita (===)
    if (numero === string) {
      document.getElementById(IdIdentico_a).textContent = "As variáveis têm o mesmo valor e tipo.";
    } else {
      document.getElementById(IdIdentico_a).textContent = "As variáveis não têm o mesmo tipo.";
    }
  }
  // Array de dados
  const dados = [
    { numero: 1, string: '1', IdIgual_a: "resultado1", IdIdentico_a: "resultado4" },
    { numero: 10, string: '10', IdIgual_a: "resultado2", IdIdentico_a: "resultado5" },
    { numero: 30, string: '30', IdIgual_a: "resultado3", IdIdentico_a: "resultado6" }
  ];
  // Para cada item do array de dados, chama a função comparar
  dados.forEach(item => {
    comparar(item.numero, item.string, item.IdIgual_a, item.IdIdentico_a);
  });