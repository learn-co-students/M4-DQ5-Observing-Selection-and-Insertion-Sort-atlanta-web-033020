function selectionSort2(arr) {
  let unsortedIndex = 0;
  while (unsortedIndex < arr.length) {
    let smallestIndex = unsortedIndex;
    for (let i = unsortedIndex; i < arr.length; i++) {
      if (arr[i] < arr[smallestIndex]) {
        smallestIndex = i;
      }
    }
    swap(arr, smallestIndex, unsortedIndex)
    unsortedIndex++;
  }
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j;
      }
    }
    swap(arr, smallestIndex, i);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}