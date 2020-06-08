function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// for every item in the collection
// check if the previous item is greater than the current item
// if greater, the current item is not in place: swap it with the previous item
// repeat this process until the item is in the proper place
// only then move on to the next item in the collection