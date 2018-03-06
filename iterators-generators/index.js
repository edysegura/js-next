function *combos(list) {
  const n = list.length;
  for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
          yield [list[i], list[j]];
      }
  }
}

const iterable = combos(['a', 'b', 'c', 'd']);
for (const value of iterable) {
  console.log(value);
}