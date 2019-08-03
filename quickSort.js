const entrada = [38, 9, 37, 15, 80, 68, 47, 100, 94, 6];

// função utilizada para trocar os elementos do array
function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

// função para calcular o pivô
function partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)], // escolhe o element do meio como pivô
    i = left, //determina i para os elementos menores que o pivô - i começa do inicio do array
    j = right; //determina j para os elementos maiores que o pivô - j começa do final array

  while (i <= j) {
    // enquanto os elementos a esquerda forem maiores que o pivô, incrementa i
    while (items[i] < pivot) {
      i++;
    }
    // enquanto os elementos a direita forem maior que o pivô, decrementa j
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      console.log(`Antes de realizar o swap:\n${items}\n`);
      console.log(
        `Elementos trocados de lugar - i:${i} valor: ${
          items[i]
        } - j: ${j} valor: ${items[j]}\n`
      );
      swap(items, i, j); //troca 2 elementos de lugar
      console.log(`Depois de realizar o swap:\n${items}\n`);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  let index;
  if (items.length > 1) {
    // verifica se o tamanho do array é maior que um
    index = partition(items, left, right); //indice da partição retornada
    console.log(
      `Indice da partição retornada: ${index}, esquerda: ${left}, direita ${right}`
    );
    if (left < index - 1) {
      // console.log(
      //   `Chama quick sort para esquerda (esquerda) ${left} < ${index} - 1 (indice -1)`
      // );
      console.log(
        `Quick sort na esquerda para o array: ${items.slice(left, index - 1)}\n`
      );
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      // console.log(
      //   `Chama quick sort para direita (indice) ${index} < ${right} (direita)`
      // );
      console.log(
        `Quick sort na direita para o array: ${items.slice(index, right)}\n`
      );

      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}
console.log(">>>>>>>>>> INICIO <<<<<<<<<<<");
console.log(`Array inicial:\n${entrada}\n`);
console.time("Tempo");
console.log(JSON.stringify(quickSort(entrada, 0, entrada.length - 1)));
console.timeEnd("Tempo");
