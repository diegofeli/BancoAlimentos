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
            titulo: "Introducción",
            descripcion: "Descripción Modulo",
            submodulos: [

                {
                    id: "1.1",
                    titulo: "Conceptos Básicos",
                    descripcion: "descripción1",
                    tipo: "video",
                    archivo: "recursos/video1.mp4"
                },

                {
                    id: "1.2",
                    titulo: "Fundamentos",
                    descripcion: "descripción2",
                    tipo: "video",
                    archivo: "recursos/video2.mp4"
                },

                {
                    id: "1.3",
                    titulo: "Manual",
                    descripcion: "descripción3",
                    tipo: "pdf",
                    archivo: "recursos/pdf1.pdf"
                },

                {
                    id: "1.4",
                    titulo: "Manual2",
                    descripcion: "descripción32",
                    tipo: "pdf",
                    archivo: "recursos/pdf1.pdf"
                }

            ]
        },

        {
            id: 2,
            titulo: "Aplicación Práctica",
            descripcion: "Descripción Modulo 2",
            submodulos: [

                {
                    id: "2.1",
                    titulo: "Caso Real",
                    descripcion: "descripción4",
                    tipo: "video",
                    archivo: "recursos/video3.mp4"
                }

            ]
        },
        {
            id: 3,
            titulo: "Evaluación Final",
            descripcion: "Evaluación de conocimientos",

            submodulos: [

                {
                    id: "3.1",
                    titulo: "Examen Final",
                    descripcion: "Responda todas las preguntas",

                    tipo: "evaluacion"
                }

            ]
        },
        {
            id: 4,
            titulo: "Certificado",
            descripcion: "Descargue su certificado de participación",

            submodulos: [
                {
                    id: "4.1",
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