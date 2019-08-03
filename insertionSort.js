const entrada = [38, 9, 37, 15, 80, 68, 47, 100, 94, 6];

const insertionSort = array => {
  console.log(JSON.stringify(array) + "\n");
  for (let i = 1; i < array.length; i++) {
    const novoElemento = array[i];
    let j = i;

    // procura no array até o elemento no array seja menor que o novo elemento
    while (j > 0 && array[j - 1] > novoElemento) {
      array[j] = array[j - 1]; // move os itens do array pra frente
      j--;
    }
    array[j] = novoElemento; // depois de mover os elementos do array pra frente, realiza a inserção do novo elemento
    console.log(
      `Elemento recebido para inserção: ${novoElemento} inserido na posição ${j +
        1} - Array depois do passo ${i}:\n${array}\n`
    );
  }
};
console.time("Tempo");
insertionSort(entrada);
console.timeEnd("Tempo");
