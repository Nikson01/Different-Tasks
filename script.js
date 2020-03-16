let xs = [9, 4, 6, 7, 1];

function s(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function arrayEquals(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++)
    if (a[i] != b[i]) {
      return false;
    }
  return console.log(true);
}

arrayEquals(s(xs), [1, 4, 6, 7, 9]);
