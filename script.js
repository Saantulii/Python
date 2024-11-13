// Respuestas a las preguntas que se mostrarán
const answers = {
    python: "Python es un lenguaje de programación interpretado, interactivo y orientado a objetos, conocido por su simplicidad y legibilidad.",
    "uso-python": "Con Python se pueden realizar tareas como desarrollo web, análisis de datos, automatización de tareas, inteligencia artificial, entre otros.",
    "creacion-webs": "Python es muy popular para la creación de sitios web mediante frameworks como Django y Flask.",
    videojuegos: "Python se usa en el desarrollo de videojuegos a través de bibliotecas como Pygame.",
    "gestion-empresarial": "Python puede utilizarse en sistemas de gestión empresarial para automatización de procesos, análisis de datos y más.",
    "comercio-electronico": "Python es útil en comercio electrónico, desde la creación de aplicaciones web hasta la implementación de sistemas de recomendación y análisis de datos.",
    "machine-learning": "Python es uno de los lenguajes más populares para Machine Learning, con bibliotecas como TensorFlow, Keras, y Scikit-learn.",
    "sectores-python": "Python se usa en muchos sectores, como tecnología, ciencia, salud, educación, marketing, y más.",
    depuracion: "La depuración (debugging) es el proceso de identificar y corregir errores en el código fuente de un programa.",
    "lenguaje-python": "El lenguaje de programación Python es conocido por su sintaxis simple y sus poderosas bibliotecas para diferentes aplicaciones. El diagrama de flujo depende del contexto del problema que se desea resolver.",
    "teorema-ambiguedad": "Ambigüedad en la Sintaxis: Algunas veces, el código puede ser ambiguo si no se sigue una convención clara o si se utilizan operadores o estructuras de manera que pueda haber múltiples interpretaciones posibles./                                       /Ambigüedad en la Lógica: Puede ocurrir cuando la lógica del programa no está completamente definida o tiene múltiples caminos posibles que no están claramente diferenciados./                                /Ambigüedad por la Herencia: En programación orientada a objetos (OOP), especialmente en lenguajes como Python, la herencia múltiple puede causar ambigüedad si no se maneja correctamente. Esto sucede cuando una clase hereda de dos o más clases y hay métodos o atributos que tienen el mismo nombre.",
    "palabras-reservadas": "Las 28 palabras reservadas de Python son: False, await, else, import, pass, None, break, except, in, raise, True, class, finally, is, return, and, continue, for, lambda, try, as, def, from, nonlocal, while, assert, del, global."
};


// Función para mostrar la respuesta al hacer clic en una pregunta
function showAnswer(question) {
    const answerText = answers[question];

    // Validar si existe una respuesta para la pregunta
    if (answerText) {
        const answerContainer = document.getElementById('answer-container');
        const answerParagraph = document.getElementById('answer-text');
        answerParagraph.textContent = answerText;
        answerContainer.style.display = 'block';  // Mostrar la respuesta
    } else {
        // Mostrar un mensaje de error si la pregunta no está en las respuestas
        const answerContainer = document.getElementById('answer-container');
        const answerParagraph = document.getElementById('answer-text');
        answerParagraph.textContent = "Lo siento, no tengo una respuesta para esa pregunta.";
        answerContainer.style.display = 'block';  // Mostrar mensaje de error
    }
}
