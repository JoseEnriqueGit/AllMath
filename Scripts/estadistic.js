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
   // Se organiza la lista de menor a mayor
    let organized = list.sort((a, b) => {
        return a - b;
    })
   /* Si el length de la lista es par me quedara dos datos en el centro, por lo que tomo el primer dato del centro
    con el length de la lista dividido entre dos y restadole uno, y luego tomo en segundo con el length de la lista 
    dividido entre dos y luego esos dos datos los divido entre dos.*/
     if((organized.length % 2) == 0){
        return (organized[organized.length / 2 - 1] + organized[organized.length / 2]) / 2;
     }
     else{
        return organized[Math.round((organized.length / 2) - 1)];
     }
}
// console.log(Mediana([1,2,3,4,5]));

function Moda(list){
   // Convertimos la lista en un cojunto
   let arrSet = Array.from(new Set(list));
   // En repetidos guardo la cantidad de vece que se repite el numero de la lista Set.
   let repetidos = [];
   // En este for cuento la cantidad de veces que se repite un numero en la lista como parametro.
   for(let i = 0; i < arrSet.length; i++){
      let filter = list.filter((valor) =>{
         return valor == arrSet[i];
      })
      repetidos.push(filter.length);
   }
   // En mayor guardo el numero mas grande de la lista.
   let mayor = Math.max(...Array.from(new Set(repetidos)));

   // Aqui obtemos los indices de los numeros correspondiente a la moda
   let indices = [];
   let idx = repetidos.indexOf(mayor);
   while (idx != -1) {
     indices.push(idx);
     idx = repetidos.indexOf(mayor, idx + 1);
   }

   return {arrSet, repetidos, mayor, indices}
}
console.log(Moda([11,15,14,7,7,12,11,7,12,12,9,11]));