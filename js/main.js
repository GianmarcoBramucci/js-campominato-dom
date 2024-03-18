let numQuadrati = 0;
let counteinerQuadrati;
let quadratiClass='box-quadrato color-5';
let quadrati;
let classiControllo = '';
let btnStart = document.getElementById('btn-submit73');
let btnReset = document.getElementById('btn-submit37');
let listaCelle = 0;
numQuadrati = 100;
counteinerQuadrati= document.getElementById('counteiner-quadrati');
quadrati = document.createElement('div');
quadrati.className = 'd-flex justify-content-between align-content-center flex-wrap' ;
btnReset.classList.add('d-none');

btnStart.addEventListener('click',function(){
    listaCelle = getProgrssiveElement(numQuadrati,'div','class','box-quadrato',quadratiClass,'dd',0);
    
    for(let i = 0; i<numQuadrati; i++){
        quadrati.append(listaCelle[i]);
        listaCelle[i].innerHTML= i + 1;
        listaCelle[i].addEventListener('click', function(){
            listaCelle[i].classList.toggle('color2')
        })
    }
    counteinerQuadrati.append(quadrati);
    btnReset.classList.remove('d-none');
    btnStart.classList.add('d-none');
})


btnReset.addEventListener('click',function(){
    let num = numQuadrati;
    let divRemove = document.querySelector(`div.${quadratiClass}`);
    
    for(i=0;i<num;i++){
        listaCelle[i].remove();   
    }
    btnStart.classList.remove('d-none');
    btnReset.classList.add('d-none');
});
