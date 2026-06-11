const ORDEN_SUBMODULOS = [];

const CURSO = {

    nombre:
        "Fortalecimiento de Competencias Familiares para la Convivencia \n y el Bienestar Comunitario con Enfoque en Derechos Humanos",
    intensidadHoraria:
        7,

    notaMinima:
        70,

    modulos: [

        {
            id: 1,
            titulo: "Comunicación y Gestión Emocional En la Familia",
            descripcion: "Fortalecer habilidades de comunicación asertiva y regulación emocional para favorecer relaciones familiares basadas en el respeto y la comprensión.",
            submodulos: [

                {
                    id: "1.1",
                    titulo: "Comunicación asertiva y escucha activa.",
                    descripcion: "descripción1",
                    tipo: "pdf",
                    archivo: "recursos/Comunicación asertiva y escucha activa.pdf"
                },

                {
                    id: "1.2",
                    titulo: "Reconocimiento y expresión adecuada de emociones.",
                    descripcion: "descripción2",
                    tipo: "pdf",
                    archivo: "recursos/Reconocimiento y expresión adecuada de emociones.pdf"
                },

                {
                    id: "1.3",
                    titulo: "Estrategias para la regulación emocional en el hogar.",
                    descripcion: "descripción3",
                    tipo: "pdf",
                    archivo: "recursos/Estrategias para la regulación emocional en el hogar.pdf"
                },

                {
                    id: "1.4",
                    titulo: "Infografía Comunicación y Gestión Emocional En la Familia.",
                    descripcion: "descripción3",
                    tipo: "pdf",
                    archivo: "recursos/Infografía 1.pdf"
                }

            ]
        },

        {
            id: 2,
            titulo: "Resolución de Conflictos y Mediación Familiar",
            descripcion: "Promover estrategias para la resolución pacífica de conflictos y la construcción de acuerdos familiares.",
            submodulos: [

                {
                    id: "2.1",
                    titulo: "Comprender el conflicto como oportunidad de aprendizaje.",
                    descripcion: "descripción4",
                    tipo: "pdf",
                    archivo: "recursos/Comprender el conflicto como oportunidad de aprendizaje.pdf"
                },
                {
                    id: "2.2",
                    titulo: "Técnicas de mediación y diálogo",
                    descripcion: "descripción4",
                    tipo: "pdf",
                    archivo: "recursos/Técnicas de mediación y diálogo.pdf"
                },
                {
                    id: "2.3",
                    titulo: "Construcción de acuerdos y convivencia positiva.",
                    descripcion: "descripción4",
                    tipo: "pdf",
                    archivo: "recursos/Construccion de Acuerdos y Convivencia Positiva.pdf"
                },
                {
                    id: "2.4",
                    titulo: "Infografía Resolución de Conflictos y Mediación Familiar.",
                    descripcion: "descripción3",
                    tipo: "pdf",
                    archivo: "recursos/8 pasos para resolver conflictos de manera pacifica Infografía.pdf"
                }

            ]
        },

        {
            id: 3,
            titulo: "Derechos Humanos, Inclusión y Diversidad Familiar.",
            descripcion: "Sensibilizar sobre la importancia del respeto por la diversidad, la igualdad y los derechos humanos dentro del entorno familiar.",
            submodulos: [

                {
                    id: "3.1",
                    titulo: "Derechos y responsabilidades en la familia.",
                    descripcion: "descripción4",
                    tipo: "pdf",
                    archivo: "recursos/Infografía 1.pdf"
                },
                {
                    id: "3.2",
                    titulo: "Igualdad y equidad en las relaciones familiares.",
                    descripcion: "descripción4",
                    tipo: "pdf",
                    archivo: "recursos/Infografía 1.pdf"
                },
                {
                    id: "3.3",
                    titulo: "Diversidad e inclusión como factores de convivencia.",
                    descripcion: "descripción4",
                    tipo: "pdf",
                    archivo: "recursos/Infografía 1.pdf"
                },
                {
                    id: "3.4",
                    titulo: "Infografía Derechos Humanos, Inclusión y Diversidad Familiar.",
                    descripcion: "descripción4",
                    tipo: "pdf",
                    archivo: "recursos/Infografía 1.pdf"
                }

            ]
        },

        {
            id: 4,
            titulo: "Resiliencia y Bienestar Familiar.",
            descripcion: "Fortalecer la capacidad de afrontar situaciones difíciles mediante estrategias de resiliencia y apoyo familiar.",
            submodulos: [

                {
                    id: "4.1",
                    titulo: "¿Qué es la resiliencia familiar?",
                    descripcion: "descripción4",
                    tipo: "pdf",
                    archivo: "recursos/Infografía 1.pdf"
                },
                {
                    id: "4.2",
                    titulo: "Factores protectores y redes de apoyo.",
                    descripcion: "descripción4",
                    tipo: "pdf",
                    archivo: "recursos/Infografía 1.pdf"
                },
                {
                    id: "4.3",
                    titulo: "Estrategias para afrontar cambios y dificultades.",
                    descripcion: "descripción4",
                    tipo: "pdf",
                    archivo: "recursos/Infografía 1.pdf"
                },
                {
                    id: "4.4",
                    titulo: "Infografía Resiliencia y Bienestar Familiar.",
                    descripcion: "descripción4",
                    tipo: "pdf",
                    archivo: "recursos/Infografía 1.pdf"
                }

            ]
        },

        {
            id: 5,
            titulo: "Crianza Positiva: Educar con Respeto y Límites Saludables.",
            descripcion: "Promover prácticas de crianza basadas en el respeto, el afecto y el establecimiento de límites saludables.",
            submodulos: [

                {
                    id: "5.1",
                    titulo: "Podcast: Crianza positiva: educar con respeto y límites saludables.",
                    descripcion: "descripción4",
                    tipo: "audio",
                    archivo: "recursos/audio1.mp3"
                },
                {
                    id: "5.2",
                    titulo: "-------------------",
                    descripcion: "descripción4",
                    tipo: "pdf",
                    archivo: "recursos/Infografía 1.pdf"
                },
                {
                    id: "5.2",
                    titulo: "Infografía Crianza Positiva: Educar con Respeto y Límites Saludables.",
                    descripcion: "descripción4",
                    tipo: "pdf",
                    archivo: "recursos/Infografía 1.pdf"
                }

            ]
        },
        {
            id: 6,
            titulo: "Evaluación Final",
            descripcion: "Evaluación de conocimientos",

            submodulos: [

                {
                    id: "6.1",
                    titulo: "Examen Final",
                    descripcion: "Responda todas las preguntas",

                    tipo: "evaluacion"
                }

            ]
        },
        {
            id: 7,
            titulo: "Certificado",
            descripcion: "Descargue su certificado de participación",

            submodulos: [
                {
                    id: "7.1",
                    titulo: "Certificado de Participación",
                    descripcion: "Disponible después de aprobar la evaluación",
                    tipo: "certificado"
                }
            ]
        }

    ]

};

CURSO.modulos.forEach(modulo => {

    modulo.submodulos.forEach(sub => {

        ORDEN_SUBMODULOS.push(
            sub.id
        );

    });

});