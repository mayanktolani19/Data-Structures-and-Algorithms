var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

var array1 = [1, 30, 4, 21, 100000];
array1.sort(function(a,b){return a-b;});
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
