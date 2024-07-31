// const shuffledLetters = [
//   'q', 'w', 'e', 's', 't', 'y', 'u', 'i', 'z', 'p', 
//   'a', 'r', 'd', 'f', 'v', 'h', 'm', 'k', 'c', 'o', 
//   'x', 'l', 'g', 'b', 'n', 'j'
// ];

// const alphabet = [
//   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
//   'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
//   'u', 'v', 'w', 'x', 'y', 'z'
// ];

const letters = {
  'q': 'a', 'w': 'b', 'e': 'c', 's': 'd', 't': 'e', 
  'y': 'f', 'u': 'g', 'i': 'h', 'z': 'i', 'p': 'j', 
  'a': 'k', 'r': 'l', 'd': 'm', 'f': 'n', 'v': 'o', 
  'h': 'p', 'm': 'q', 'k': 'r', 'c': 's', 'o': 't', 
  'x': 'u', 'l': 'v', 'g': 'w', 'b': 'x', 'n': 'y', 
  'j': 'z'
}

function isAlpha(char) {
  return /^[A-Z]$/i.test(char);
}

function criptografar() {
  let sentence = ''
  const input = document.querySelector('.input-texto').value
  for (let index = 0; index < input.length; index++) {
    let element = input[index];
    let position;
    if (isAlpha(element)) {
      if (element == element.toLowerCase()) {
        position = parseInt(element.charCodeAt() - 97)
        element = Object.keys(letters)[position]
      } else {
        position = parseInt(element.charCodeAt() - 65)
        element = Object.keys(letters)[position].toUpperCase()
      }
    }
    sentence += element
  }
  preencher_texto_output(sentence)
}

function preencher_texto_output(sentence) {
  const texto = document.querySelector('.output-texto')
  texto.innerHTML = sentence
  document.querySelector('.sem-conteudo').style.display = 'none';
  document.querySelector('.com-conteudo').style.display = 'flex';
}

function descriptografar() {
  let sentence = ''
  const input = document.querySelector('.input-texto').value
  for (let index = 0; index < input.length; index++) {
    let element = input[index];
    let position;
    if (isAlpha(element)) {
      if (element == element.toLowerCase()) {
        element = letters[element]
      } else {
        element = letters[element.toLowerCase()].toUpperCase()
      }
    }
    sentence += element
    console.log(sentence)
  }
  preencher_texto_output(sentence)
}

// for (let index = 0; index < input.length; index++) {
//   let element = input[index];
//   let position;
//   if (isAlpha(element)) {
//     if (element == element.toLowerCase()) {
//       position = parseInt(element.charCodeAt() + 97)
//     } else {
//       position = parseInt(element.charCodeAt() + 65)
//     }
//     element = position
//   }
//   sentence += element