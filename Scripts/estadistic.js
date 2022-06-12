// let lista = '10, 10, 2, 2, 2, 1, 3, 4, 4, 4, 10, 2, 1, 1, 4, 1'.split(',');
// let array = [10,10];
// lista.forEach(element => {
//     array.push(Number(element));
// });
// console.log(lista);
// console.log(array);

function Average(list){
    let Sum = 0;
    list.forEach(element =>{
        Sum += element;
    });
    return Sum / list.length;
//     // return Math.round(Sum / list.length);
}
// console.log(Average([5,7,6,4,3,8,7]));

export function Mediana(list){
    let organized = list.sort((a, b) => {
        return a - b;
    })
    // Si el length de la lista es par
    // return organized[5 - 1];
     if((organized.length % 2) == 0){
        return (organized[organized.length / 2 - 1] + organized[organized.length / 2]) / 2;
     }
     else{
        return organized[Math.round((organized.length / 2) - 1)];
     }
}
// console.log(Mediana([8,11,12,15,14,7,11,9,11]));

function Moda(list){
   let numbers = Array.from(new Set(list));
   let repetidos = [];
   let filtro;


   for(let i = 0; i < numbers.length; i++){
      filtro = list.filter((valor) =>{
         return valor == numbers[i];
      })
      repetidos.push(filtro.length);
   }
//    let organized = repetidos;
//    let a;
//    a = organized.sort((a, b) => {
//       return a - b;
//   })
//   let mayor = organized[organized.length - 1];
   let mayor = 3;

   var indices = [];
   var idx = repetidos.indexOf(mayor);
   while (idx != -1) {
     indices.push(idx);
     idx = repetidos.indexOf(mayor, idx + 1);
   }

   return {numbers, repetidos, mayor, indices}
}
console.log(Moda([11,15,14,7,12,11,12,12,9,11]));