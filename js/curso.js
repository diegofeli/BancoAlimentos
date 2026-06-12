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
            titulo: "Comunicación y Gestión Emocional en la Familia",
            descripcion: "Este módulo busca fortalecer las competencias familiares relacionadas con la comunicación asertiva, la escucha activa y la gestión emocional como elementos fundamentales para construir relaciones saludables en el hogar. A través de herramientas psicoeducativas, se promueve el reconocimiento de las emociones, la expresión adecuada de sentimientos y el desarrollo de estrategias que favorezcan el diálogo, la empatía y la convivencia familiar basada en el respeto y la comprensión.",
            submodulos: [

                {
                    id: "1.1",
                    titulo: "Comunicación asertiva y escucha activa.",
                    descripcion: "Este documento aborda la importancia de la comunicación asertiva y la escucha activa como herramientas fundamentales para fortalecer los vínculos familiares. A través de estrategias basadas en el respeto, la expresión adecuada de ideas y la comprensión del otro, se promueve una convivencia más saludable y una resolución positiva de las diferencias.",
                    tipo: "pdf",
                    archivo: "recursos/M1_1 COMUNICACIÓN Y GESTIÓN EMOCIONAL.pdf"
                },

                {
                    id: "1.2",
                    titulo: "Reconocimiento y expresión adecuada de emociones.",
                    descripcion: "Este material orienta sobre la importancia de identificar, comprender y expresar las emociones de manera adecuada dentro del contexto familiar. Reconocer las propias emociones y las de los demás favorece la empatía, el autocontrol y la construcción de relaciones afectivas más positivas.",
                    tipo: "pdf",
                    archivo: "recursos/M1_2 COMUNICACIÓN Y GESTIÓN EMOCIONAL.pdf"
                },

                {
                    id: "1.3",
                    titulo: "Estrategias para la regulación emocional en el hogar.",
                    descripcion: "Este documento presenta estrategias para fortalecer la regulación emocional en la familia, promoviendo el manejo adecuado de las emociones ante situaciones de tensión o dificultad. Se brindan herramientas prácticas que favorecen el bienestar emocional, la convivencia y la respuesta saludable frente a los desafíos cotidianos.",
                    tipo: "pdf",
                    archivo: "recursos/M1_3 COMUNICACIÓN Y GESTIÓN EMOCIONAL.pdf"
                },

                {
                    id: "1.4",
                    titulo: "Infografía. Claves para una comunicación familiar saludable.",
                    descripcion: "Material visual de apoyo que resume estrategias prácticas para fortalecer la comunicación familiar, promoviendo la escucha activa, el respeto, la expresión emocional adecuada y la construcción de relaciones basadas en la confianza y la cooperación.",
                    tipo: "pdf",
                    archivo: "recursos/Infografía M1 Comunicación y Gestión Emocional en la Familia.pdf"
                }

            ]
        },

        {
            id: 2,
            titulo: "Resolución de Conflictos y Mediación Familiar",
            descripcion: "Este módulo busca fortalecer las capacidades familiares para comprender y gestionar los conflictos de manera constructiva, reconociéndolos como oportunidades de aprendizaje y transformación de las relaciones. A través de herramientas de mediación, comunicación efectiva y construcción de acuerdos, se promueve una convivencia basada en el respeto, la empatía y la búsqueda conjunta de soluciones.",
            submodulos: [

                {
                    id: "2.1",
                    titulo: "Comprender el conflicto como oportunidad de aprendizaje.",
                    descripcion: "Este documento aborda el conflicto como una situación natural dentro de las relaciones familiares y proporciona herramientas para comprenderlo desde una perspectiva positiva. Se promueve la reflexión sobre las causas de los desacuerdos y la importancia de transformarlos en oportunidades para fortalecer la comunicación y los vínculos familiares.",
                    tipo: "pdf",
                    archivo: "recursos/M2_1 RESOLUCIÓN DE CONFLICTOS Y MEDIACIÓN FAMILIAR.pdf"
                },
                {
                    id: "2.2",
                    titulo: "Técnicas de mediación y diálogo.",
                    descripcion: "Este material presenta estrategias de mediación y diálogo orientadas a favorecer la escucha activa, la empatía y la resolución pacífica de diferencias. A través de herramientas prácticas, se fortalecen habilidades para expresar necesidades, comprender otros puntos de vista y construir soluciones colaborativas.",
                    tipo: "pdf",
                    archivo: "recursos/M2_2 RESOLUCIÓN DE CONFLICTOS Y MEDIACIÓN FAMILIAR.pdf"
                },
                {
                    id: "2.3",
                    titulo: "Construcción de acuerdos y convivencia positiva.",
                    descripcion: "Este documento desarrolla la importancia de establecer acuerdos familiares como herramienta para mejorar la organización, la corresponsabilidad y el bienestar colectivo. Se brindan orientaciones para construir compromisos claros que favorezcan relaciones familiares respetuosas, participativas y armoniosas.",
                    tipo: "pdf",
                    archivo: "recursos/M2_3 RESOLUCIÓN DE CONFLICTOS Y MEDIACIÓN FAMILIAR.pdf"
                },
                {
                    id: "2.4",
                    titulo: "Infografía. Pasos para resolver conflictos de manera pacífica.",
                    descripcion: "Material visual de apoyo que resume estrategias fundamentales para el manejo adecuado de conflictos familiares, destacando la importancia de mantener la calma, escuchar, expresar emociones con respeto, buscar soluciones conjuntas y construir acuerdos que fortalezcan la convivencia.",
                    tipo: "pdf",
                    archivo: "recursos/Infografía M2 Resolución de Conflictos y Mediación Familiar.pdf"
                }

            ]
        },

        {
            id: 3,
            titulo: "Derechos Humanos, Inclusión y Diversidad Familiar.",
            descripcion: "Este módulo busca fortalecer el reconocimiento de los derechos humanos como base fundamental para la convivencia familiar, promoviendo el respeto por las diferencias individuales y la participación equitativa de todos sus integrantes. A través de contenidos psicoeducativos, se abordan temas relacionados con los derechos y responsabilidades familiares, la igualdad, la equidad y la inclusión como elementos esenciales para construir hogares más respetuosos, seguros y solidarios.",
            submodulos: [

                {
                    id: "3.1",
                    titulo: "Derechos y responsabilidades en la familia.",
                    descripcion: "Este documento aborda la importancia de reconocer los derechos y responsabilidades de cada integrante de la familia como elementos fundamentales para una convivencia saludable. Se promueve la comprensión de la dignidad humana, el respeto mutuo y la corresponsabilidad como bases para fortalecer las relaciones familiares.",
                    tipo: "pdf",
                    archivo: "recursos/M3_1 DERECHOS HUMANOS INCLUSIÓN Y DIVERSIDAD FAMILIAR.pdf"
                },
                {
                    id: "3.2",
                    titulo: "Igualdad y equidad en las relaciones familiares.",
                    descripcion: "Este material presenta los conceptos de igualdad y equidad dentro del contexto familiar, resaltando la importancia de garantizar oportunidades, participación y respeto para todos los integrantes del hogar. Se brindan herramientas para identificar prácticas que favorecen relaciones más justas, equilibradas e inclusivas.",
                    tipo: "pdf",
                    archivo: "recursos/M3_2 DERECHOS HUMANOS INCLUSIÓN Y DIVERSIDAD FAMILIAR.pdf"
                },
                {
                    id: "3.3",
                    titulo: "Diversidad e inclusión como factores de convivencia.",
                    descripcion: "Este documento reflexiona sobre la diversidad familiar como una característica propia de las relaciones humanas y destaca la inclusión como un principio fundamental para promover ambientes de respeto y aceptación. Se fortalecen habilidades orientadas al reconocimiento de las diferencias, la empatía y la construcción de espacios familiares libres de discriminación.",
                    tipo: "pdf",
                    archivo: "recursos/M3_3 DERECHOS HUMANOS INCLUSIÓN Y DIVERSIDAD FAMILIAR.pdf"
                },
                {
                    id: "3.4",
                    titulo: "Infografía. Derechos y deberes para una convivencia respetuosa.",
                    descripcion: "Material visual de apoyo que sintetiza los principales derechos, responsabilidades y prácticas inclusivas necesarias para fortalecer la convivencia familiar. A través de mensajes claros, promueve el respeto, la igualdad, la participación y la valoración de las diferencias como elementos esenciales para el bienestar familiar.",
                    tipo: "pdf",
                    archivo: "recursos/Infografía M3 DDHH, Inclusión y Diversidad Familiar.pdf"
                }

            ]
        },

        {
            id: 4,
            titulo: "Resiliencia y Bienestar Familiar.",
            descripcion: "Este módulo busca fortalecer las capacidades familiares para enfrentar situaciones adversas, reconociendo la resiliencia como un proceso de adaptación, aprendizaje y crecimiento ante las dificultades. A través de herramientas psicoeducativas, se abordan estrategias relacionadas con el fortalecimiento de vínculos familiares, la identificación de factores protectores y la construcción de redes de apoyo que contribuyan al bienestar emocional y la convivencia familiar.",
            submodulos: [

                {
                    id: "4.1",
                    titulo: "¿Qué es la resiliencia familiar?",
                    descripcion: "Este documento aborda el concepto de resiliencia familiar como la capacidad de afrontar dificultades, adaptarse a los cambios y fortalecer los vínculos familiares frente a situaciones adversas. Se presentan elementos que favorecen la recuperación emocional, la confianza y el desarrollo de recursos internos para superar desafíos.",
                    tipo: "pdf",
                    archivo: "recursos/M4_1 RESILIENCIA Y BIENESTAR FAMILIAR.pdf"
                },
                {
                    id: "4.2",
                    titulo: "Factores protectores y redes de apoyo.",
                    descripcion: "Este material desarrolla la importancia de identificar factores personales, familiares y comunitarios que favorecen el bienestar y la capacidad de afrontamiento. Además, resalta el papel de las redes de apoyo como recursos fundamentales para brindar acompañamiento, orientación y fortalecimiento familiar ante situaciones difíciles.",
                    tipo: "pdf",
                    archivo: "recursos/M4_2 RESILIENCIA Y BIENESTAR FAMILIAR.pdf"
                },
                {
                    id: "4.3",
                    titulo: "Estrategias para afrontar cambios y dificultades.",
                    descripcion: "Este documento presenta herramientas prácticas para enfrentar transformaciones y momentos de dificultad en la vida familiar. Se promueven estrategias relacionadas con la comunicación, la regulación emocional, la búsqueda de apoyo y la resolución de problemas como elementos claves para fortalecer la adaptación y el bienestar familiar.",
                    tipo: "pdf",
                    archivo: "recursos/M4_3 RESILIENCIA Y BIENESTAR FAMILIAR.pdf"
                },
                {
                    id: "4.4",
                    titulo: "Infografía. Estrategias para fortalecer la resiliencia familiar.",
                    descripcion: "Material visual de apoyo que resume estrategias para fortalecer la resiliencia en el hogar, destacando la importancia del apoyo mutuo, la comunicación, el autocuidado, las redes de apoyo y la capacidad de encontrar aprendizajes positivos frente a las dificultades.",
                    tipo: "pdf",
                    archivo: "recursos/Infografía M4 Resiliencia y Bienestar Familiar.pdf"
                }

            ]
        },

        {
            id: 5,
            titulo: "Crianza Positiva: Educar con Respeto y Límites Saludables.",
            descripcion: "Este módulo busca fortalecer las competencias familiares relacionadas con la crianza positiva, promoviendo prácticas educativas basadas en el respeto, la comunicación afectiva y la orientación adecuada del comportamiento. A través de herramientas psicoeducativas, se abordan estrategias para establecer límites saludables, fortalecer los vínculos afectivos y favorecer ambientes familiares seguros que contribuyan al desarrollo emocional, social y personal de niños, niñas y adolescentes.",
            submodulos: [

                {
                    id: "5.1",
                    titulo: "Principios de la crianza positiva",
                    descripcion: "Este documento aborda los fundamentos de la crianza positiva como un enfoque basado en el respeto, la empatía y el reconocimiento de las necesidades emocionales y evolutivas de los niños, niñas y adolescentes. Se presentan principios orientados a fortalecer relaciones familiares afectivas, protectoras y favorecedoras del desarrollo integral.",
                    tipo: "pdf",
                    archivo: "recursos/M5_1 CRIANZA POSITIVA EDUCAR CON RESPETO Y LÍMITES SALUDABLES.pdf"
                },
                {
                    id: "5.2",
                    titulo: "Disciplina positiva y establecimiento de límites",
                    descripcion: "Este material presenta estrategias para establecer normas y límites saludables desde una perspectiva educativa y respetuosa. Se promueve el acompañamiento del comportamiento infantil y adolescente mediante la comunicación, la coherencia y la orientación positiva, evitando prácticas basadas en el miedo o la violencia.",
                    tipo: "pdf",
                    archivo: "recursos/M5_2 CRIANZA POSITIVA EDUCAR CON RESPETO Y LÍMITES SALUDABLES.pdf"
                },
                {
                    id: "5.3",
                    titulo: "Vínculos afectivos y desarrollo infantil",
                    descripcion: "Este documento destaca la importancia de los vínculos afectivos seguros en el desarrollo emocional, social y cognitivo de niños, niñas y adolescentes. Se abordan estrategias familiares para fortalecer el apego, la confianza, la seguridad emocional y la construcción de relaciones protectoras.",
                    tipo: "pdf",
                    archivo: "recursos/M5_3 CRIANZA POSITIVA EDUCAR CON RESPETO Y LÍMITES SALUDABLES.pdf"
                },
                {
                    id: "5.4",
                    titulo: "Infografía. Principios de la crianza positiva.",
                    descripcion: "Material visual de apoyo que sintetiza los principales elementos de la crianza positiva, resaltando la importancia del afecto, la comunicación, los límites respetuosos, la escucha y el acompañamiento emocional como herramientas para fortalecer la relación entre familias e hijos.",
                    tipo: "pdf",
                    archivo: "recursos/Infografía M5 Crianza Positiva Educar con Respeto y Límites.pdf"
                },
                {
                    id: "5.5",
                    titulo: "Podcast. Crianza positiva: educar con respeto y límites saludables.",
                    descripcion: "Recurso auditivo orientado a reflexionar sobre la importancia de acompañar la crianza desde el respeto, el afecto y la comprensión de las necesidades de niños, niñas y adolescentes. El podcast brinda herramientas prácticas para fortalecer la relación familiar, promover una comunicación positiva y establecer límites que favorezcan el desarrollo integral.",
                    tipo: "audio",
                    archivo: "recursos/podcast.mp3"
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