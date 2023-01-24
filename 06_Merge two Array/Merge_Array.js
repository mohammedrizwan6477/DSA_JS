let data1 = [1, 2, 3, 4, 5];
let data2 = [6, 7, 8, 9, 10];
let data3 = [];

for (i = 0; i < data1.length; i++) {
  data3[i] = data1[i];
}
// console.log(data3);
for (i = 0; i < data2.length; i++) {
  data3[data1.length + i] = data2[i];
}

console.log(data3);

// =====================================================================================================

let mergeData = [...data1, ...data2];
console.warn(mergeData);
