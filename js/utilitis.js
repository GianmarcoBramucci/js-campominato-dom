//! funzione che genera un numero random tra due numeri

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
  } 

//! funzione che genera n div con id progrssivc 
// *@nomeId : {string} il nome che daremo al id
// *@i : il {int} contatore del ciclo for dove lanceremo questa funzione (se la lanciate fuori da esso vi fara un solo elemento)   						 
// *@classe : {string} le classi che andremo a dare al css
// *@html : {string} cosa andremo a scrivere nell html
//? ritorno : {object} ci ritorna l'elemento div 

function getProgressiveDivId(nomeId,i,classe,html) {
	let idValue=`${nomeId}${i}`;
	let div= document.createElement('div');
	div.setAttribute('id', idValue);
	div.className = classe;
	div.innerHTML = html;
	return (div);
  } 
//! funzione che genera n elementi uguali con classi,html e un atributo impostati (possibilita' di avere il valore atributo progressivo )  
// *@element : {int} quanti elementi vogliamo
// *@element : {string} quale elemento htlm vorremo stampare
// *@atribute : {string} l'attributo che andremo a settare
// *@atributeValue : {string} il valore del attributo
// *@classi : {string} le classi che andremo a dare al css
// *@html : {string} cosa andremo a scrivere nell html
// *@check : {Booleano} se e' VERO il valore del atributo avra anche un numero progressivo se FALSO sara solo il valre atributo
//? ritorno : {object} ci da un array con tutti i nostri elementi

  function getProgrssiveElement(numberElement,element,atribute,atributeValue,classi,html,check){
	let elementList= [];
	let value;
	let i = 0;
	if(check){
		value = `${atributeValue}-${i+1}`;
	}
	else{
		value = atributeValue;
	}

	for( i = 0; i < numberElement; i++){
		elementList.push(document.createElement(element));
		elementList[i].setAttribute(atribute,value);
		elementList[i].innerHTML = html;
		elementList[i].className = classi;
	}
	return elementList;
}
//! funzione che genera n array di n lunghezza con numeri casuali

  function getArraysSameLenghtRandomElement (lenght,numberArray,arrayName){
	let risultato =[];
	let max = 10;
	let min = 1;
	for(let i = 0; i<numberArray;i++){
		risultato.push(`${arrayName}-${i}`);
		for(let j=0; j<lenght;j++){
			risultato.push(getRndInteger(min, max));
		}
	}
	return risultato;
}  
//! funzione che controlla se una stringa e' palindroma

function checkPalindrome(word1){
	let flag = false;
	for(let i = 0;i<word1.length; i++){
		for(let j = (word1.length-1); j>=0; j--){
			if(word1[i] === word1[j]){
				flag = true;
			}
			else{
				flag = false;
			}
		}
	}
	return flag;
}

//! funzione che generera una lista di numeri randomici che non si ripetono tra loro

function genereteUniqueRandomNUmber(min,max,blacklist,count,numIte){
	let flag = false;
	let num;
	if(count == numIte){
		return blacklist;
	}
	else{
		while(!flag){
			num = getRndInteger(min, max);
			if(!(blacklist.includes(num))){
				count++;
				blacklist.push(num);
				flag = true;
			}
		}
	}
	return genereteUniqueRandomNUmber(min,max,blacklist,count,numIte);
}