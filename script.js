var textoResultado = document.getElementById('textoResultado');
var btnCopiar = document.getElementById('btnCopiar');
var resultadoContainer = document.getElementById('resultado-container');
var imagemResultado = document.getElementById('imagemResultado');
var tituloResultado = document.getElementById('tituloResultado');
var paragrafoResultado = document.getElementById('paragrafoResultado');

function processar(operacao) {
  var texto = document.getElementById('texto').value;

  // Oculta imagem, título e parágrafo
  imagemResultado.style.display = 'none';
  tituloResultado.style.display = 'none';
  paragrafoResultado.style.display = 'none';

  if (operacao === 'criptografar') {
    textoResultado.innerText = criptografar(texto);
  } else if (operacao === 'descriptografar') {
    textoResultado.innerText = descriptografar(texto);
  }

  // Exibe ou oculta elementos com base no conteúdo do resultado
  if (textoResultado.innerText.trim() !== '') {
    btnCopiar.style.display = 'inline-block';
  } else {
    btnCopiar.style.display = 'none';
    // Mostra imagem, título e parágrafo
    imagemResultado.style.display = 'block';
    tituloResultado.style.display = 'block';
    paragrafoResultado.style.display = 'block';
  }
}


function criptografar() {
  var texto = document.getElementById('texto').value;

  if (validarEntrada(texto)) {
    // Define o resultado
    textoResultado.innerText = texto.replace(/e/g, 'enter')
                                   .replace(/i/g, 'imes')
                                   .replace(/a/g, 'ai')
                                   .replace(/o/g, 'ober')
                                   .replace(/u/g, 'ufat');

    // Oculta imagem, título e parágrafo
    imagemResultado.style.display = 'none';
    tituloResultado.style.display = 'none';
    paragrafoResultado.style.display = 'none';

    // Atualiza a visibilidade do botão de copiar
    btnCopiar.style.display = textoResultado.innerText ? 'inline-block' : 'none';
  } else {
    textoResultado.innerText = '';  // Limpa o resultado se a entrada for inválida
    alert('Por favor, insira apenas letras minúsculas e sem caracteres especiais.');
  }
}

function descriptografar() {
  var texto = document.getElementById('texto').value;

  if (validarEntrada(texto)) {
    textoResultado.innerText = texto.replace(/enter/g, 'e')
                                   .replace(/imes/g, 'i')
                                   .replace(/ai/g, 'a')
                                   .replace(/ober/g, 'o')
                                   .replace(/ufat/g, 'u');

    // Oculta imagem, título e parágrafo
    imagemResultado.style.display = 'none';
    tituloResultado.style.display = 'none';
    paragrafoResultado.style.display = 'none';

    // Atualiza a visibilidade do botão de copiar
    btnCopiar.style.display = textoResultado.innerText ? 'inline-block' : 'none';
  } else {
    alert('Por favor, insira apenas letras minúsculas e sem caracteres especiais.');
  }
}
// Função para validar a entrada
function validarEntrada(texto) {
  var regex = /^[a-z\s]+$/;
  return regex.test(texto);
}

// Função para copiar o resultado
function copiarResultado() {
  var textoCopiar = textoResultado.innerText;

  if (textoCopiar.trim() !== '') {
    navigator.clipboard.writeText(textoCopiar);
    alert('Resultado copiado para a área de transferência!');
  } else {
    // Avisar ao usuário que não há texto para copiar
    alert('Nenhum texto para copiar.');
  }
}

// Inicializar ClipboardJS para copiar resultado
var clipboard = new ClipboardJS('#btnCopiar', {
  text: function(trigger) {
    return document.getElementById('textoResultado').innerText;
  }
});

// Evento de sucesso na cópia
clipboard.on('success', function(e) {
  alert('Resultado copiado para a área de transferência!');
  e.clearSelection();
});

// Evento de erro na cópia
clipboard.on('error', function(e) {
  alert('Erro ao copiar. Use Ctrl+C ou o recurso de cópia do seu navegador.');
});