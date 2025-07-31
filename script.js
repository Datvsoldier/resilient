document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const section = document.getElementById(targetId);
            const contentToCopy = section.querySelector('.copy-content').innerText;

            navigator.clipboard.writeText(contentToCopy).then(() => {
                button.innerText = '¡Copiado!';
                setTimeout(() => {
                    button.innerText = 'Copiar';
                }, 2000);
            }).catch(err => {
                console.error('Error al copiar: ', err);
            });
        });
    });
});
