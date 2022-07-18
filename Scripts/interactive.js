// Imports
import * as math from "./math.js";
import * as estadistic from "./estadistic.js";

// Funcion de la interacion del menu
const BtnMenu = document.querySelectorAll('.BtnMenu');
BtnMenu.forEach(BtnMenu => {
    BtnMenu.addEventListener('click', ()=>{
        
        BtnMenu.classList.toggle('Open');

        let height = 0;
        let Menu = BtnMenu.nextElementSibling;

        if(Menu.clientHeight == "0"){
            height = Menu.scrollHeight;
        }
        Menu.style.height = `${height}px`;
    });
})
// END

function MostrarFraccionSimplificada(event){
    // Aqui se toman los valores del los inputs Numerador y Denominador
    let Numerador = document.getElementById('Numerador').value;
    let Denominador = document.getElementById('Denominador').value;
    // Aqui se muestra el resultado de la simplificacion
    let NumeradorResult = document.querySelector('.NumeradorResult');
    let DenominadorResult = document.querySelector('.DenominadorResult');
    //Aqui se declara el div que muetra el proceso de simplificacion
    let DetallesFraccion = document.querySelector('.Fracciones');
    // Alerts divs
    const DivAlert = document.querySelector('.DivAlert');
    const Alert = document.querySelector('.Alert');
    const Detalles = document.querySelector('.DetallesOperacion');

    // Condicionalles que validan que haiga un valor en los imputs numerador y Denominador
    if(Numerador == 0 && Denominador == 0){
        DivAlert.style.display = 'flex';
        Detalles.style.display = 'none';
        NumeradorResult.innerHTML = '';
        DenominadorResult.innerHTML = '';
        DetallesFraccion.innerHTML = '';

        Alert.innerHTML = '';
        Alert.innerHTML = '<i class="fas fa-exclamation-triangle"></i>SE REQUIERE UN NUMERADOR Y UN DENOMINADOR.';
    }
    else if(Numerador == 0){
        DivAlert.style.display = 'flex';
        Detalles.style.display = 'none';
        NumeradorResult.innerHTML = '';
        DenominadorResult.innerHTML = '';
        DetallesFraccion.innerHTML = '';

        Alert.innerHTML = '';
        Alert.innerHTML = '<i class="fas fa-exclamation-triangle"></i>SE REQUIERE UN NUMERADOR.';
    }
    else if(Denominador == 0){
        DivAlert.style.display = 'flex';
        Detalles.style.display = 'none';
        NumeradorResult.innerHTML = '';
        DenominadorResult.innerHTML = '';
        DetallesFraccion.innerHTML = '';

        Alert.innerHTML = '';
        Alert.innerHTML = '<i class="fas fa-exclamation-triangle"></i>SE REQUIERE UN DENOMINADOR.';
    }
    else{
        DivAlert.style.display = 'none';
        Alert.innerHTML = '';

        // Aqui se llama la fucion simplificar de math.js
        const {Nnumerador,Ndenominador,listNumeradores,listDenominadores,nPrimosUsados} = math.simplificar(Numerador, Denominador);
        DetallesFraccion.innerHTML = "";
        
        // Condicional para saber si un numero es irreducible
        if(listNumeradores.length == 0){
            DetallesFraccion.innerHTML = "";
            DetallesFraccion.innerHTML = `<div class="DetallesFraccion"><div class="DetallesNumerador">` + Numerador + `</div>
            <div class="Line"></div>
            <div class="DetallesDenominador">` + Denominador + `</div>
            <span>` + 'Irreducible' + `</span></div>`;
        }else{
            DetallesFraccion.innerHTML = `<div class="DetallesFraccion"><div class="DetallesNumerador">` + Numerador + `</div>
            <div class="Line"></div>
            <div class="DetallesDenominador">` + Denominador + `</div>
            <span>` + nPrimosUsados[0] + `</span></div>`;
        }
        
        // Bucle para imprimir en pantalla la listas del proceso de reduccion
        for(let i = 0; i < listNumeradores.length; i++){
            nPrimosUsados.push('')
    
            DetallesFraccion.innerHTML += `<div class="DetallesFraccion"><div class="DetallesNumerador">` + listNumeradores[i] + `</div>
            <div class="Line"></div>
            <div class="DetallesDenominador">` + listDenominadores[i] + `</div>
            <span>` + nPrimosUsados[i + 1] + `</span></div>`;
    
        }
        NumeradorResult.innerHTML = Nnumerador;
        DenominadorResult.innerHTML = Ndenominador;
        Detalles.style.display = 'flex';

    }
}

function DetallesDiplayMedia(numberList, Sum, indice, organized){
            let DiplayDivSum = '';
            let DisplayMedianaDetalles = '';

            let DiplayPlus = '';
            let DiplayComma = '';
            let displayStyle;
            let last = numberList.pop();
    
            numberList.forEach(number =>{
                DiplayPlus += number + ' + ';
            });
            DiplayDivSum = DiplayPlus + last + ' = ' + Sum;

            if((numberList.length + 1) % 2 == 0){
                numberList.forEach(number =>{
                    DiplayComma += number + ', ';
                });
                DisplayMedianaDetalles = DiplayComma + last;
                displayStyle = 'flex';
            }
            else{
                let x = 0;
                organized.forEach(number =>{
                    
                    if(x == indice){
                        DiplayComma +='<span class="FontRed">' + organized[x] + '</span>'  + ', ';
                        x += 1;
                    }
                    else{
                        DiplayComma += number + ', ';
                        x += 1;
                    }
                });
                DisplayMedianaDetalles = DiplayComma + last;
                displayStyle = 'none';

                console.log(indice);
            }

            
            return {DiplayDivSum, DisplayMedianaDetalles, displayStyle, displayStyle};
}


function MMM(event){
    let DisplayMedia = document.getElementById('DisplayMedia');
    let DisplayMediana = document.getElementById('DisplayMediana');
    let DisplayModa = document.getElementById('DisplayModa');
    let DetallesOpMMM = document.getElementById('DetallesOpMMM');

    let InputList = document.getElementById('InputList').value;
    let numberList = [];

    const DivAlert = document.querySelector('.DivAlert');
    const Alert = document.querySelector('.Alert');

    InputList = InputList.replaceAll(/[:;-\s]/g, ',');
    
    if(InputList.search(/[*+\¿?^${}()|[\]\\¡!_=<>&%@~`]/g) != -1){
        DivAlert.style.display = 'flex';
        Alert.innerHTML = '';
        Alert.innerHTML = '<i class="fas fa-exclamation-triangle"></i>SE REQUIERE UNA LISTA DE NUMEROS SIN CARACTERES RAROS.';
        DetallesOpMMM.style.display = 'none';
    }
    else if(InputList.search(/[A-Z]/ig) != -1){
        DivAlert.style.display = 'flex';
        Alert.innerHTML = '';
        Alert.innerHTML = '<i class="fas fa-exclamation-triangle"></i>SE REQUIERE UNA LISTA DE NUMEROS SIN LETRAS.';
        DetallesOpMMM.style.display = 'none';
    }
    else if(InputList.length == 0){
        DivAlert.style.display = 'flex';
        Alert.innerHTML = '';
        Alert.innerHTML = '<i class="fas fa-exclamation-triangle"></i>SE REQUIERE UNA LISTA DE NUMEROS.';
        DetallesOpMMM.style.display = 'none';
    }
    else{
        DivAlert.style.display = 'none';
        DetallesOpMMM.style.display = 'flex';
        Alert.innerHTML = '';

        InputList = InputList.split(",");
        InputList.forEach(InputList =>{
            numberList.push(parseInt(InputList))
        });
        numberList = numberList.filter(Boolean);
        console.log(numberList);


        const {Sum, listLength, Total} = estadistic.Average(numberList);
        DisplayMedia.innerHTML = Total;

        const {organized, mediana, firstIndice, secondIndice, sumIndex, indice} = estadistic.Mediana(numberList);
        DisplayMediana.innerHTML = mediana;
        console.log('Mediana: ' + mediana,'indice: ' + indice);

        const {arrSet, repetidos, mayor, indices, moda, indexModa} = estadistic.Moda(numberList);
        DisplayModa.innerHTML = moda;

        // Detalles Media
        let DivSum = document.querySelector('.DivSum');
        let NumeradorMedia = document.getElementById('NumeradorMedia');
        let DenominadorMedia = document.getElementById('DenominadorMedia');
        let ResultDivisionMedia = document.getElementById('ResultDivisionMedia');

        const {DiplayDivSum, DisplayMedianaDetalles, displayStyle} = DetallesDiplayMedia(numberList, Sum, indice, organized);

        DivSum.innerHTML = DiplayDivSum;
        NumeradorMedia.innerHTML = Sum;
        DenominadorMedia.innerHTML = listLength;
        ResultDivisionMedia.innerHTML = Total;

        let DisplayMedianaDetallesList = document.getElementById('DisplayMedianaDetalles');
        let NumeradorMediana = document.getElementById('NumeradorMediana');
        let SumMediana = document.getElementById('SumMediana');
        let SumResult = document.getElementById('SumResult');
        let ResultDivisionMediana = document.getElementById('ResultDivisionMediana');
        let DivSumMediana = document.getElementById('DivSumMediana');
        let DivisionOpMediana = document.getElementById('DivisionOpMediana');
        
        DisplayMedianaDetallesList.innerHTML = DisplayMedianaDetalles;
        SumMediana.innerHTML = organized[firstIndice] + ' + ' + organized[secondIndice];
        SumResult.innerHTML = sumIndex;
        NumeradorMediana.innerHTML = sumIndex;
        ResultDivisionMediana.innerHTML = mediana;

        DivSumMediana.style.display = displayStyle;
        DivisionOpMediana.style.display = displayStyle;
    }


    // console.log(InputList);
}

// Eventos Button para simplificar fraccion
const main = document.getElementById('Panel')
if(main.className == 'Panel-Simplificacion'){
    const RESOLVER = document.getElementById('Resolver');
    RESOLVER.addEventListener('click', MostrarFraccionSimplificada);
    document.addEventListener('keydown', (event) => {
        if (event.keyCode == 13){
            MostrarFraccionSimplificada();
        }
      });
}
else if(main.className == 'Panel-MMM'){
    const RESOLVER = document.getElementById('Resolver');
    RESOLVER.addEventListener('click', MMM);
    document.addEventListener('keydown', (event) => {
        if (event.keyCode == 13){
            MMM();
        }
      });
}


