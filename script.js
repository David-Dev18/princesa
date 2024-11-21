// Função para simular a exibição das mensagens e exibir o botão
let messages = [
    "oi amor, fiz um site pra você",
    "aqui vai ser o nosso cantinho especial!",
    "espero que goste muito! fiz com carinho."
];

let currentMessage = 0;
let messageContainer = document.querySelector('.chat-box');
let button = document.getElementById('redirect-button');
let noButton = document.getElementById('no-redirect-button');

// Função que exibe as mensagens uma por uma com efeito de fade
function showMessage() {
    if (currentMessage < messages.length) {
        let messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = messages[currentMessage];
        messageContainer.appendChild(messageElement);

        // Espera 3 segundos (tempo da mensagem aparecer) para desaparecer a mensagem
        setTimeout(function() {
            messageElement.style.animation = "fadeOutMessage 2s ease-out forwards"; // Faz a mensagem desaparecer
            setTimeout(function() {
                messageContainer.removeChild(messageElement); // Remove a mensagem após ela desaparecer
            }, 2000); // Espera o tempo da animação de desaparecimento
        }, 3000); // Cada mensagem vai durar 3 segundos

        currentMessage++;
        setTimeout(showMessage, 3000); // Exibe a próxima mensagem a cada 3 segundos
    } else {
        // Exibe os botões depois de todas as mensagens
        button.style.display = 'block';
        noButton.style.display = 'block';
    }
}

  // Função de redirecionamento com atraso de 5 segundos
  function redirectToSite() {
    // Introduz um atraso de 5 segundos antes de redirecionar
    setTimeout(function() {
        window.location.href = "fotos.html"; // Substitua pela URL do seu site ou página
    }, 2000); // 5000 milissegundos = 5 segundos de atraso
}

// Função para esconder os botões e mostrar a imagem da pistola com texto
function hideAndShowPistola() {
    // Esconde os botões
    noButton.style.display = 'none';

    // Exibe a pistola com a mensagem
    let pistolaContainer = document.getElementById('pistola-container');
    pistolaContainer.style.display = 'block';

}

// Inicia a exibição das mensagens assim que a página carrega
window.onload = function() {
    setTimeout(showMessage, 1000); // Começa após 1 segundo
}
