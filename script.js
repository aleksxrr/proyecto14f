const images = [
    'images/portada.gif',
    'images/besito-1.gif',
    'images/gatos-con-botas.gif',
    'images/tierno-2.gif'
];

const texts = [
    "",
    "¡Gracias por aceptar! Nos vemos el viernes a las 20:00hrs.",
    "¿Estás segura? Bueno, piénsalo.",
    "Algo salió mal. Vamos a reiniciar."
];

const portada = document.querySelector('.portada');
const text = document.querySelector('.text');
const restartButton = document.querySelector('.restart-button');
const yesButton = document.querySelector('.yes-button');
const noButton = document.querySelector('.no-button');

let currentIndex = 0;

function showContent(index) {
    portada.style.backgroundImage = `url(${images[index]})`;
    text.innerHTML = texts[index];
    if (index === 3) {
        restartButton.style.display = 'inline-block';
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
    } else {
        restartButton.style.display = 'none';
        yesButton.style.display = 'inline-block';
        noButton.style.display = 'inline-block';
    }
}

restartButton.addEventListener('click', () => {
    currentIndex = 0;
    showContent(0);
});

yesButton.addEventListener('click', () => {
    currentIndex = 1;
    showContent(1);
    // Ocultar los botones después de mostrar el mensaje
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
});

noButton.addEventListener('click', () => {
    if (currentIndex === 0) {
        // Mostrar el mensaje "¿Estás segura? Bueno, piénsalo."
        currentIndex = 2;
        showContent(2);
    } else if (currentIndex === 2) {
        // Mostrar el mensaje de error y el botón de reinicio
        currentIndex = 3;
        showContent(3);
    }
});


// Ocultar el botón de reinicio al inicio
restartButton.style.display = 'none';

// Mostrar contenido inicial al cargar la página
showContent(0);
