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


function Mostrar(){
    // Numeros de la fraccion
    const Numerador = document.getElementById('Numerador').value;
    const Denominador = document.getElementById('Denominador').value;
    // Alerts
    const DivAlert = document.querySelector('.DivAlert');
    const Alert = document.querySelector('.Alert');

    if(Numerador == 0 && Denominador == 0){
        DivAlert.style.display = 'flex';

        Alert.innerHTML = '';
        Alert.innerHTML = 'SE REQUIERE UN NUMERADOR Y UN DENOMINADOR.';
    }
    else if(Numerador == 0){
        DivAlert.style.display = 'flex';

        Alert.innerHTML = '';
        Alert.innerHTML = 'SE REQUIERE UN NUMERADOR.';
    }
    else if(Denominador == 0){
        DivAlert.style.display = 'flex';

        Alert.innerHTML = '';
        Alert.innerHTML = 'SE REQUIERE UN DENOMINADOR.';
    }
    else{
        DivAlert.style.display = 'none';
        Alert.innerHTML = '';

        const {Nnumerador,Ndenominador,listNumeradores,listDenominadores,nPrimosUsados} = math.simplificar(Numerador, Denominador);
        const DetallesFraccion = document.querySelector('.Fracciones');
    
        DetallesFraccion.innerHTML = "";
        if (listNumeradores.length == 0){
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
    
        for(let i = 0; i < listNumeradores.length; i++){
            nPrimosUsados.push('')
    
            DetallesFraccion.innerHTML += `<div class="DetallesFraccion"><div class="DetallesNumerador">` + listNumeradores[i] + `</div>
            <div class="Line"></div>
            <div class="DetallesDenominador">` + listDenominadores[i] + `</div>
            <span>` + nPrimosUsados[i + 1] + `</span></div>`;
    
        }
        NumeradorResult.innerHTML = Nnumerador;
        DenominadorResult.innerHTML = Ndenominador;
    }
}

RESOLVER.addEventListener('click', ()=>{
    Mostrar();
})



// console.log(math.simplificar(23, 7));