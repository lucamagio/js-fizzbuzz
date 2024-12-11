let frase = prompt('inserisci una frase: ');  
let risultato = '';

for (let i = 0; i < frase.length; i++) { 
  let char = frase[i]; 
  if ('aeiouAEIOU'.includes(char)) { 
    risultato += '0'; 
  } else if('0123456789'.includes(char)) {
    risultato += char;  
  } else{
    risultato += '1'
  }
}

console.log(risultato);