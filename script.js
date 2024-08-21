// Lista de preguntas
const questions = [
    "¡Hora de limpiar! Sal a la calle y coloca la basura en su lugar",
    "¡Atrapa la energía! Apaga todas las luces de cada que no se estén usando",
    "¡Ordenemos! Ve al market más cercano y ordena todos los paquetes que no estén en su lugar"
];

// Función para obtener una pregunta aleatoria
function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

// Mostrar una pregunta al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    const randomQuestion = getRandomQuestion();
    document.getElementById("question").innerText = randomQuestion;
});

// Puedes mantener la función onQRCodeScanned si tienes un lector de QR y deseas disparar la función manualmente
function onQRCodeScanned() {
    const randomQuestion = getRandomQuestion();
    document.getElementById("question").innerText = randomQuestion;
}
