let numQuadrati = 0;
let counteinerQuadrati;
let quadratiClass='box-quadrato color-5';
let quadrati;
let classiControllo = '';
let divRisultato = document.getElementById('risultato');
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
    let numList = [];
    let count = 0;
    let min = 0;
    let numBomb = 16;
    let score = 0;
    let flagStop = false;
    let bombList = genereteUniqueRandomNUmber(min,numQuadrati,numList,count,numBomb);
    console.log(bombList);
    divRisultato.innerHTML='';
    for(let i = 0; i<numQuadrati; i++){
        quadrati.append(listaCelle[i]);
        listaCelle[i].innerHTML= i + 1;
        listaCelle[i].addEventListener('click', function(){
            if(!flagStop){
                if(bombList.includes(i)){
                    listaCelle[i].classList.add('color1');
                    flagStop = true;
                }
                else{
                    if(!(listaCelle[i].classList.contains('color2')))
                    {
                        listaCelle[i].classList.add('color2');
                        score++;
                    }
                }
                divRisultato.innerHTML= `IL TUO PUNTEGGIO:${score}`;
            }
            else{
                divRisultato.innerHTML= `hai perso IL TUO PUNTEGGIO:${score}`;
                for(let h=0; h<bombList.length;h++){
                    let numTemp =bombList[h]; 
                    listaCelle[numTemp].classList.add('color1')
                }
            }
        });
    }
    if(score == 84 ){
        divRisultato.innerHTML= 'hai vinto';
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

