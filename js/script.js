document.addEventListener('DOMContentLoaded', function() {
    const botonInicio = document.getElementById('boton-inicio');
    const contenidoPrincipal = document.getElementById('contenido-principal');

    // Función genérica para inicializar cualquier carrusel
    function initializeCarousel(carouselId) {
        const carouselElement = document.getElementById(carouselId);
        if (!carouselElement) {
            console.error(`Elemento de carrusel con ID '${carouselId}' no encontrado.`);
            return;
        }

        const carouselImages = carouselElement.querySelectorAll('.carousel-img');
        let currentIndex = 0;
        const slideDuration = 5000; // 5 segundos en milisegundos

        if (carouselImages.length > 0) {
            function showNextImage() {
                carouselImages[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % carouselImages.length;
                carouselImages[currentIndex].classList.add('active');
            }

            // Asegurarse de que solo la primera imagen esté activa al inicio
            carouselImages.forEach((img, index) => {
                if (index === 0) {
                    img.classList.add('active');
                } else {
                    img.classList.remove('active');
                }
            });

            // Iniciar el carrusel automáticamente
            setInterval(showNextImage, slideDuration);
        } else {
            console.warn(`No se encontraron imágenes para el carrusel con ID '${carouselId}'.`);
        }
    }

    // Lógica para mostrar/ocultar contenido con el botón de inicio
    if (botonInicio && contenidoPrincipal) {
        botonInicio.addEventListener('click', function() {
            contenidoPrincipal.classList.remove('hidden-content'); // Mostrar el contenido
            botonInicio.style.display = 'none'; // Ocultar el botón

            // Una vez que el contenido es visible, inicializamos los carruseles
            initializeCarousel('our-carousel'); // Carrusel de ustedes
            initializeCarousel('kids-carousel'); // Carrusel de Milo y Simba
        });
    }

    // --- Lógica del Contador de Cumpleaños ---
    const birthdayDate = new Date("July 7, 2025 00:00:00").getTime(); 
    const countdownElement = document.getElementById("countdown");

    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = birthdayDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            if (countdownElement) {
                countdownElement.innerHTML = "¡Feliz Cumpleaños, Pamela!";
                countdownElement.classList.add('birthday-message');
            }
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (document.getElementById("days")) {
            document.getElementById("days").innerHTML = days;
        }
        if (document.getElementById("hours")) {
            document.getElementById("hours").innerHTML = hours;
        }
        if (document.getElementById("minutes")) {
            document.getElementById("minutes").innerHTML = minutes;
        }
        if (document.getElementById("seconds")) {
            document.getElementById("seconds").innerHTML = seconds;
        }
    }, 1000);
});
