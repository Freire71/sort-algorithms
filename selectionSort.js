const entrada = [38, 9, 37, 15, 80, 68, 47, 100, 94, 6];

console.time("Tempo");
const selectionSort = array => {
  console.log(`Array inicial:\n${array} \n`);

  for (let i = 0; i < array.length; i++) {
    let menorElemento = array[i]; // considera o primeiro elemento como o menor e guarda o indice do mesmo
    let indiceMenorElemento = i;

    for (let j = i + 1; j < array.length; j++) {
      // procura pelo menor elemento no array
      if (menorElemento > array[j]) {
        // guarda a posicao e o valor do menor elemento
        menorElemento = array[j];
        indiceMenorElemento = j;
      }
    }
    const auxiliar = array[i]; // faz as trocas de valores entre o menor elemento e o indice i
    array[i] = menorElemento;
    array[indiceMenorElemento] = auxiliar;
    console.log(
      `Menor elemento: ${menorElemento} inserido na posição ${i +
        1} - Array ao final do passo ${i + 1}:\n${array} \n`
    );
  }
};

selectionSort(entrada);
console.timeEnd("Tempo");
