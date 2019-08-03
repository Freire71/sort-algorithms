// Código retirado de: http://rosettacode.org/wiki/Sorting_algorithms/Heapsort#JavaScript

const entrada = [38, 9, 37, 15, 80, 68, 47, 100, 94, 6];

// função utilizada para trocar 2 elemenetos de lugar
function swap(data, i, j) {
  var tmp = data[i]; // variavel auxiliar
  data[i] = data[j];
  data[j] = tmp;
}

// função principal do algoritmo de ordenação
function heap_sort(arr) {
  let contagem = 1; // minha variavel para contagem das repetições
  console.log(`Array inicial:\n${entrada} \n`);
  put_array_in_heap_order(arr); // chama a função que vai deixar o array no formato max heap
  var end = arr.length - 1;
  console.log(
    `Array depois da montagem da estrutura de max heap:\n${entrada}\n`
  );
  while (end > 0) {
    swap(arr, 0, end);
    shift_element_down_heap(arr, 0, end);
    end -= 1;
    console.log(`Array ao final do passo ${contagem}:\n${entrada}\n`);
    contagem += 1;
  }
}

// função para inicializar a estrutura de heap
function put_array_in_heap_order(arr) {
  var i;
  i = arr.length / 2 - 1; // calcula o valor de i
  i = Math.floor(i); // arrendonda o valor para baixo
  while (i >= 0) {
    shift_element_down_heap(arr, i, arr.length);
    i -= 1;
  }
}

// funcão para fazer as comparações entre nodo pai e seus filhos
function shift_element_down_heap(heap, i, max) {
  var i_big, c1, c2;

  // verifica se i está menor que o tamanho do array
  while (i < max) {
    i_big = i; // chama i de maior valor de i
    c1 = 2 * i + 1; // calcula o primeiro filho de i
    c2 = c1 + 1; // calcula o segundo filho de i
    if (c1 < max && heap[c1] > heap[i_big]) i_big = c1; // se o filho 1 for maior que o pai, substitui o valor de i_big
    if (c2 < max && heap[c2] > heap[i_big]) i_big = c2; // se o filho 2 for maior que o pai, substitui o valor de i_big
    if (i_big == i) return; // o filho é maior que os pais
    swap(heap, i, i_big); // se um dos filhos não for maior que o pai,
    i = i_big; // reatribui o valor de i
  }
}
console.time("Tempo");
heap_sort(entrada);
console.log(JSON.stringify(entrada));
console.timeEnd("Tempo");
