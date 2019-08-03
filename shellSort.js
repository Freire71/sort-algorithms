const entrada = [38, 9, 37, 15, 80, 68, 47, 100, 94, 6];
const gaps = [5, 3, 1];
const shellSort = (array, gaps) => {
  gaps.forEach(gap => {
    console.log(`Valor do gap: ${gap}`);
    for (let i = gap; i < array.length; i++) {
      let auxiliar = array[i];
      let j;
      // enquanto j for maior igual ao gap e o elemento mais a esquerda for maior que o elemento mais a direita
      for (j = i; j >= gap && array[j - gap] > auxiliar; j -= gap) {
        if (array[j - gap]) {
          // verificação para saber se o elemento teve um par no array para comparação
          console.log(
            `Troca de valores entre os elementos: ${array[j]} e ${
              array[j - gap]
            }`
          );
        } else {
          console.log(`O elemento ${array[j]} não teve um par para comparação`);
        }
        array[j] = array[j - gap]; // move o elemento maior para direita
      }
      array[j] = auxiliar;
    }
    console.log(`Array ao final do gap de ${gap}: ${array}\n`);
  });
  console.log(JSON.stringify(array));
};
console.log(`Array inicial: ${entrada} - Array de gaps: ${gaps}\n`);
console.time("Tempo");

shellSort(entrada, gaps);
console.timeEnd("Tempo");
