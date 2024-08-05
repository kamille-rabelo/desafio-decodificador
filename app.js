const letras = {
  'a': ['ai', 1], 
  'e': ['enter', 4], 
  'i': ['imes', 3], 
  'o': ['ober', 3], 
  'u': ['ufat', 3], 
}

function criptografar() {
  let sentenca = ''
  const input = document.querySelector('.input-texto').value

  for (let index = 0; index < input.length; index++) {
    let elemento = input[index];
    if (letras.hasOwnProperty(elemento)) {
      elemento = letras[elemento][0]
    }
    sentenca += elemento
  }

  preencher_texto_output(sentenca)
}

function preencher_texto_output(sentenca) {
  const inputTexto = document.querySelector('.input-texto').value;
  const semConteudo = document.querySelector('.sem-conteudo');
  const comConteudo = document.querySelector('.com-conteudo');
  const texto = document.querySelector('.output-texto');
  
  if (inputTexto != '') {
      texto.innerHTML = sentenca;
      semConteudo.style.display = 'none';
      comConteudo.style.display = 'flex';
  } else {
      semConteudo.style.display = 'flex';
      comConteudo.style.display = 'none';
  }
}

function descriptografar() {
  let sentenca = ''
  const input = document.querySelector('.input-texto').value
  
  for (let index = 0; index < input.length; index++) {
    let elemento = input[index];
    if (letras.hasOwnProperty(elemento)) {
      index += letras[elemento][1] 
    }
    sentenca += elemento
  }
  
  preencher_texto_output(sentenca)
}

async function escreverTextoDoPainel() {
  const texto = document.querySelector('.output-texto').value
  try {
    await navigator.clipboard.writeText(texto);
  } catch (error) {
    console.error(error.message);
  }
}