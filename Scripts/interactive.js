// Consts
const BtnMenu = document.querySelectorAll('.BtnMenu');
const NumeradorResult = document.querySelector('.NumeradorResult');
const DenominadorResult = document.querySelector('.DenominadorResult');
const RESOLVER = document.getElementById('Resolver')


// Imports
import * as math from "./math.js";

// Funcion de la interacion del menu
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


function MostrarFraccionSimplificada(){
    // Aqui se toman los valores del los inputs Numerador y Denominador
    const Numerador = document.getElementById('Numerador').value;
    const Denominador = document.getElementById('Denominador').value;
    // Alerts divs
    const DivAlert = document.querySelector('.DivAlert');
    const Alert = document.querySelector('.Alert');
    const Detalles = document.querySelector('.DetallesOperacion');

    // Condicionalles que validan que haiga un valor en los imputs numerador y Denominador
    if(Numerador == 0 && Denominador == 0){
        DivAlert.style.display = 'flex';

        Alert.innerHTML = '';
        Alert.innerHTML = '<i class="fas fa-exclamation-triangle"></i>SE REQUIERE UN NUMERADOR Y UN DENOMINADOR.';
    }
    else if(Numerador == 0){
        DivAlert.style.display = 'flex';

        Alert.innerHTML = '';
        Alert.innerHTML = '<i class="fas fa-exclamation-triangle"></i>SE REQUIERE UN NUMERADOR.';
    }
    else if(Denominador == 0){
        DivAlert.style.display = 'flex';

        Alert.innerHTML = '';
        Alert.innerHTML = '<i class="fas fa-exclamation-triangle"></i>SE REQUIERE UN DENOMINADOR.';
    }
    else{
        DivAlert.style.display = 'none';
        Alert.innerHTML = '';

        // Aqui se llama la fucion simplificar de math.js
        const {Nnumerador,Ndenominador,listNumeradores,listDenominadores,nPrimosUsados} = math.simplificar(Numerador, Denominador);
        const DetallesFraccion = document.querySelector('.Fracciones');
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


// Eventos
RESOLVER.addEventListener('click', ()=>{
    MostrarFraccionSimplificada();
})