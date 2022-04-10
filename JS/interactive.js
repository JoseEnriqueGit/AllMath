const BtnMenu = document.querySelectorAll('.BtnMenu');
// const Menu = document.querySelector('.DropContent-close');
const Arrow = document.querySelector('.Icon');

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

// let btn = 0;
// function OpenMenu(){
//     if (btn == 0){
//         Menu.classList.remove('DropContent-close');
//         Menu.classList.add('DropContent-open');
//         Arrow.classList.remove('Icon');
//         Arrow.classList.add('IconDown');
//         btn = 1;
//     }
//     else {
//         Menu.classList.remove('DropContent-open');
//         Menu.classList.add('DropContent-close');
//         Arrow.classList.remove('IconDown');
//         Arrow.classList.remove('Icon');
//         btn = 0;
//     }

// }