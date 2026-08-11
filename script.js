document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Envio do formulário direto para o WhatsApp da empresa
    const quoteForm = document.getElementById('quoteForm');

    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Número do WhatsApp de destino (substitua pelo número correto com DDD)
        const phoneNumber = "5548984720082";

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const route = document.getElementById('route').value;
        const message = document.getElementById('message').value;

        // Montagem da mensagem formatada
        const text = `*Solicitação de Cotação - Site*%0A%0A` +
                     `*Nome/Empresa:* ${encodeURIComponent(name)}%0A` +
                     `*E-mail:* ${encodeURIComponent(email)}%0A` +
                     `*Rota:* ${encodeURIComponent(route)}%0A` +
                     `*Detalhes da Carga:* ${encodeURIComponent(message)}`;

        // Redireciona para a API do WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
        window.open(whatsappUrl, '_blank');
    });
});