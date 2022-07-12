export function Average(list){
    let Sum = 0;
    let listLength = list.length;
    list.forEach(element =>{
       Sum += element;
      });
   let Total = Sum / listLength;
   return {Sum, listLength, Total}
//     // return Math.round(Sum / list.length);
}
// console.log(Average([1,2,3,4,5]));

export function Mediana(list){
   // Se organiza la lista de menor a mayor
    let organized = list.sort((a, b) => {
        return a - b;
    })
   /* Si el length de la lista es par me quedara dos datos en el centro, por lo que tomo el primer dato del centro
    con el length de la lista dividido entre dos y restadole uno, y luego tomo en segundo con el length de la lista 
    dividido entre dos y luego esos dos datos los divido entre dos.*/
     if((organized.length % 2) == 0){
      //   return (organized[organized.length / 2 - 1] + organized[organized.length / 2]) / 2;
      let firstIndice = organized.length / 2 - 1;
      let secondIndice = organized.length / 2;
      let sumIndex = organized[firstIndice] + organized[secondIndice];
        let mediana = (organized[organized.length / 2 - 1] + organized[organized.length / 2]) / 2;
        return {organized, mediana, firstIndice, secondIndice, sumIndex};
     }
     else{
        let indice = Math.round((organized.length / 2) - 1);
        let mediana = organized[Math.round((organized.length / 2) - 1)];
        return {organized, mediana, indice};
     }
}
// console.log(Mediana([1, 1, 1, 2, 2, 5, 5, 23, 23, 23, 23, 23, 34, 52, 88]));

export function Moda(list){
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
   let moda = [];
   indices.forEach(indices =>{
      moda.push(arrSet[indices])
  });

  let indexModa = [];

  for(let x = 0; x < moda.length; x++){
   var idy = list.indexOf(moda[x]);
   while (idy != -1) {
      indexModa.push(idy);
       idy = list.indexOf(moda[x], idy + 1);
     }
}

   return {arrSet, repetidos, mayor, indices, moda, indexModa}
}
// console.log(Moda([1,1,1,2,3,4,3,5,3]));