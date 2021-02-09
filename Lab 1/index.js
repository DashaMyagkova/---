const simpleCalc = document.querySelector('.simple-calc');
const engCalc = document.querySelector('.eng-calc');
const simple = document.querySelector('.simple');
const eng = document.querySelector('.eng');

function changing(elem){
    elem.classList.toggle('show');
}

engCalc.onClick = function (){
    eng.classList.toggle('.show');
}