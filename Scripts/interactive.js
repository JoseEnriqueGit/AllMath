// Imports
import * as math from "./math.js";

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
        NumeradorResult.innerHTML = '';
        DenominadorResult.innerHTML = '';
        DetallesFraccion.innerHTML = '';

        Alert.innerHTML = '';
        Alert.innerHTML = '<i class="fas fa-exclamation-triangle"></i>SE REQUIERE UN NUMERADOR Y UN DENOMINADOR.';
    }
    else if(Numerador == 0){
        DivAlert.style.display = 'flex';
        NumeradorResult.innerHTML = '';
        DenominadorResult.innerHTML = '';
        DetallesFraccion.innerHTML = '';

        Alert.innerHTML = '';
        Alert.innerHTML = '<i class="fas fa-exclamation-triangle"></i>SE REQUIERE UN NUMERADOR.';
    }
    else if(Denominador == 0){
        DivAlert.style.display = 'flex';
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




// Eventos Button
const main = document.getElementById('Panel')
if(main.className == 'Panel-Simplificacion'){
    const RESOLVER = document.getElementById('Resolver')
    RESOLVER.addEventListener('click', MostrarFraccionSimplificada);
}