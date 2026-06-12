const VERSION = "1.0.2";
let preguntasEvaluacion = [];

function obtenerPreguntasAleatorias(
    cantidad = 10
){

    const copia =
        [...PREGUNTAS];

    copia.sort(
        () => Math.random() - 0.5
    );

    return copia.slice(
        0,
        cantidad
    );

}

if(
    localStorage.getItem(
        "version_lms"
    ) !== VERSION
){

    localStorage.clear();

    localStorage.setItem(
        "version_lms",
        VERSION
    );

}

let avance = JSON.parse(
    localStorage.getItem("avance")
) || {
    completados: []
};

let participante = JSON.parse(
    localStorage.getItem("participante")
);

if (!participante) {

    let nombre = "";
    let documento = "";

    while (true) {

        nombre = prompt(
            "Ingrese su nombre completo"
        );

        if (
            nombre &&
            /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(
                nombre.trim()
            )
        ) {
            break;
        }

        alert(
            "El nombre solo puede contener letras y espacios."
        );

    }

    while (true) {

        documento = prompt(
            "Ingrese su documento"
        );

        if (
            documento &&
            /^[0-9.]+$/.test(
                documento.trim()
            )
        ) {
            break;
        }

        alert(
            "El documento solo puede contener números y puntos."
        );

    }

    participante = {

        nombre: nombre.trim(),

        documento: documento.trim()

    };

    localStorage.setItem(
        "participante",
        JSON.stringify(
            participante
        )
    );

}

// ======================================
// MENÚ
// ======================================

function renderMenu() {

    const lista =
        document.getElementById(
            "listaModulos"
        );

    lista.innerHTML = "";

    CURSO.modulos.forEach(modulo => {

        const moduloDiv =
            document.createElement("div");

        moduloDiv.className =
            "modulo";

        moduloDiv.innerHTML = `

            <h3>
                ${modulo.titulo}
            </h3>

            <p>
                ${modulo.descripcion}
            </p>

        `;

        lista.appendChild(
            moduloDiv
        );

        modulo.submodulos.forEach(sub => {

            const bloqueado =
                !puedeAbrir(sub.id);

            const item =
                document.createElement(
                    "div"
                );

            item.className =
                bloqueado
                    ? "submodulo bloqueado"
                    : "submodulo";

            let icono = "📄";

            if (sub.tipo === "video")
                icono = "🎥";

            if (sub.tipo === "audio")
                icono = "🎧";

            if (sub.tipo === "evaluacion")
                icono = "📝";

            if (sub.tipo === "certificado")
                icono = "🏆";

            item.innerHTML = `

                <div class="subtitulo">

                    ${bloqueado
                    ? "🔒"
                    : icono
                }

                    ${sub.titulo}

                </div>

                <div class="subdescripcion">

                    ${sub.descripcion}

                </div>

            `;

            if (!bloqueado) {

                item.onclick =
                    () => abrirSubmodulo(sub);

            }

            // Mostrar completado

            if (
                avance.completados.includes(
                    sub.id
                )
            ) {

                item.classList.add(
                    "completado"
                );

                item.innerHTML += `

                    <div
                        class="estado-completado">

                        ✅ Completado

                    </div>

                `;
            }

            lista.appendChild(
                item
            );

        });

    });

}

function completarSubmodulo(id) {

    if (
        !avance.completados.includes(id)
    ) {

        avance.completados.push(id);

        guardarAvance();

    }

    renderMenu();

}

function puedeAbrir(id) {

    if (id === "7.1") {

        return localStorage.getItem(
            "curso_aprobado"
        ) === "true";

    }

    const posicion =
        ORDEN_SUBMODULOS.indexOf(id);

    if (posicion === 0) {
        return true;
    }

    const anterior =
        ORDEN_SUBMODULOS[
        posicion - 1
        ];

    return avance.completados.includes(
        anterior
    );

}

// ======================================
// ABRIR SUBMÓDULO
// ======================================

function abrirSubmodulo(sub) {

    const c =
        document.getElementById(
            "contenido"
        );

    let html = `
        <h2>
            ${sub.titulo}
        </h2>

        <p>
            ${sub.descripcion}
        </p>
    `;

    if (sub.tipo === "video") {

        html += `

            <video
                id="videoCurso"
                controls
                width="100%">

                <source
                    src="${sub.archivo}"
                    type="video/mp4">

            </video>

            <br><br>

            <label>

                <input
                    type="checkbox"
                    id="confirmarVideo"
                    disabled>

                Confirmo que visualicé el video

            </label>

            <br><br>

            <a
                href="${sub.archivo}"
                target="_blank"
                class="btn">

                📥 Abrir Video

            </a>

            <br><br>

            <button
                id="btnCompletar"
                disabled>

                Completar módulo

            </button>

        `;
    }

    if (sub.tipo === "pdf") {

        html += `
            <iframe
                src="${sub.archivo}"
                width="100%"
                height="700">

            </iframe>

            <br>

            <label>

                <input
                    type="checkbox"
                    id="confirmarLectura">

                Confirmo que he leído el documento

            </label>   

            <br><br>

            <a
                href="${sub.archivo}"
                target="_blank"
                class="btn">

                📥 Descargar PDF

            </a>

            <br><br>

            <button
                id="btnCompletar"
                disabled>

                Completar lectura

            </button>
        `;

        setTimeout(() => {

            const chk =
                document.getElementById(
                    "confirmarLectura"
                );

            const btn =
                document.getElementById(
                    "btnCompletar"
                );

            chk.addEventListener(
                "change",
                () => {

                    btn.disabled =
                        !chk.checked;

                }
            );

            btn.onclick =
                () => completarYContinuar(
                    sub.id
                );

        }, 100);
    }

    if (sub.tipo === "audio") {

        html += `

            <audio
                id="audioCurso"
                controls
                width="100%">

                <source
                    src="${sub.archivo}"
                    type="audio/mpeg">

            </audio>

            <br><br>

            <label>

                <input
                    type="checkbox"
                    id="confirmarAudio"
                    disabled>

                Confirmo que escuché el audio

            </label>

            <br><br>

            <a
                href="${sub.archivo}"
                target="_blank"
                class="btn">

                🎧 Abrir Audio

            </a>

            <br><br>

            <button
                id="btnCompletar"
                disabled>

                Completar módulo

            </button>

        `;
    }

    if (sub.tipo === "evaluacion") {

        mostrarEvaluacion();

        return;

    }

    if (sub.tipo === "certificado") {

        mostrarCertificado();

        return;
    }

    c.innerHTML = html;

    if (sub.tipo === "audio") {

        const video =
            document.getElementById(
                "audioCurso"
            );

        const chk =
            document.getElementById(
                "confirmarAudio"
            );

        const btn =
            document.getElementById(
                "btnCompletar"
            );

        video.addEventListener(
            "ended",
            () => {

                chk.disabled = false;

            }
        );

        chk.addEventListener(
            "change",
            () => {

                btn.disabled =
                    !chk.checked;

            }
        );

        btn.onclick =
            () => completarYContinuar(
                sub.id
            );

    }

    if (sub.tipo === "video") {

        const video =
            document.getElementById(
                "videoCurso"
            );

        const chk =
            document.getElementById(
                "confirmarVideo"
            );

        const btn =
            document.getElementById(
                "btnCompletar"
            );

        video.addEventListener(
            "ended",
            () => {

                chk.disabled = false;

            }
        );

        chk.addEventListener(
            "change",
            () => {

                btn.disabled =
                    !chk.checked;

            }
        );

        btn.onclick =
            () => completarYContinuar(
                sub.id
            );

    }

}

function completarYContinuar(id) {

    completarSubmodulo(id);

    const indice =
        ORDEN_SUBMODULOS.indexOf(id);

    const siguiente =
        ORDEN_SUBMODULOS[
            indice + 1
        ];

    if(!siguiente){
        return;
    }

    setTimeout(() => {

        abrirPorId(
            siguiente
        );

    }, 200);

}

function abrirPorId(id) {

    CURSO.modulos.forEach(modulo => {

        modulo.submodulos.forEach(sub => {

            if (sub.id === id) {

                abrirSubmodulo(sub);

            }

        });

    });

}

// ======================================
// EVALUACIÓN
// ======================================

function mostrarEvaluacion() {

    preguntasEvaluacion =
        obtenerPreguntasAleatorias(10);

    const c =
        document.getElementById(
            "contenido"
        );

    let html = `
        <h2>
            Evaluación Final
        </h2>

        <form id="formEvaluacion">
    `;

    preguntasEvaluacion.forEach(
        (pregunta, index) => {

            html += `
                <div class="pregunta">

                    <h3>
                        ${index + 1}.
                        ${pregunta.pregunta}
                    </h3>
            `;

            pregunta.opciones.forEach(
                (opcion, i) => {

                    html += `
                        <label>

                            <input
                                type="radio"
                                name="pregunta_${index}"
                                value="${i}">

                            ${opcion}

                        </label>

                        <br>
                    `;
                }
            );

            html += `
                </div>
                <hr>
            `;
        }
    );

    html += `
        <button
            type="button"
            onclick="calificarEvaluacion()">

            Finalizar Evaluación

        </button>

        </form>
    `;

    c.innerHTML = html;

}

// ======================================
// CALIFICAR
// ======================================

function calificarEvaluacion() {

    let correctas = 0;

    preguntasEvaluacion.forEach(
        (pregunta, index) => {

            const respuesta =
                document.querySelector(
                    `input[name="pregunta_${index}"]:checked`
                );

            if (
                respuesta &&
                parseInt(
                    respuesta.value
                ) === pregunta.correcta
            ) {

                correctas++;

            }

        }
    );

    const total =
        preguntasEvaluacion.length;

    const porcentaje =
        Math.round(
            (correctas / total) * 100
        );

    const aprobado =
        porcentaje >= 70;

    if (aprobado) {

        localStorage.setItem(
            "curso_aprobado",
            "true"
        );

        completarSubmodulo(
            "6.1"
        );

        renderMenu();

    }

    document.getElementById(
        "contenido"
    ).innerHTML = `

        <div class="resultado">

            <h2>
                Resultado Final
            </h2>

            <p>
                Correctas:
                ${correctas}
            </p>

            <p>
                Incorrectas:
                ${total - correctas}
            </p>

            <p>
                Calificación:
                ${porcentaje}%
            </p>

            <h3>

                ${aprobado
            ? "✅ APROBADO"
            : "❌ NO APROBADO"
        }

            </h3>

            ${aprobado
            ?
            `
                <p style="color:green">

                    Evaluación aprobada.

                    El módulo Certificado ha sido habilitado.

                </p>
                <button
                    onclick="mostrarCertificado()">

                    Generar Cerfiticado

                </button>
                `
            :
            `
                <p>
                    Debe obtener mínimo
                    ${CURSO.notaMinima}% para aprobar.
                </p>
                <button
                    onclick="reintentarEvaluacion()">

                    Reintentar Evaluación

                </button>
                `
        }

            <button
                onclick="reiniciarCurso()">

                Reiniciar Curso

            </button>

        </div>

    `;
}

// ======================================
// CERTIFICADO
// ======================================

function generarCertificado() {

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF(
        "landscape",
        "mm",
        "a4"
    );

    pdf.addFileToVFS(
        "Montserrat-ExtraBold.ttf",
        MONTSERRAT_FONT
    );

    pdf.addFont(
        "Montserrat-ExtraBold.ttf",
        "Montserrat",
        "normal"
    );

    pdf.setFont(
        "Montserrat"
    );

    pdf.addImage(
        CERTIFICADO_FONDO,
        "PNG",
        0,
        0,
        297,
        210
    );

    // NOMBRE
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(26);
    pdf.setTextColor(11, 42, 99);

    pdf.text(
        participante.nombre,
        148,
        84,
        { align: "center" }
    );

    // DOCUMENTO
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(16);
    pdf.setTextColor(80, 80, 80);

    pdf.text(
        "CC No. " +
        participante.documento,
        148,
        98,
        { align: "center" }
    );

    //ASISTENCIA
    pdf.setFont("times", "normal");
    pdf.setFontSize(18);
    pdf.setTextColor(60, 60, 60);

    pdf.text(
        "Asistió y aprobó la formación en -",
        148,
        115,
        { align: "center" }
    );

    // CURSO
    pdf.setFont("Montserrat");
    pdf.setFontSize(14);
    pdf.setTextColor(11, 42, 99);

    pdf.text(
        CURSO.nombre,
        148,
        125,
        { align: "center" }
    );

    pdf.text(
        "Intensidad horaria: " + CURSO.intensidadHoraria,
        148,
        144,
        { align: "center" }
    );

    // FECHA
    const fechaActual = new Date();

    const dia = fechaActual.getDate();

    const mes = fechaActual.toLocaleString(
        "es-CO",
        {
            month: "long"
        }
    );

    const anio = fechaActual.getFullYear();

    const fecha =
        `${dia} ${mes.charAt(0).toUpperCase() +
        mes.slice(1)
        } ${anio}`;

    pdf.setFont("times", "normal");
    pdf.setFontSize(18);
    pdf.setTextColor(60, 60, 60);

    pdf.text(
        "Bogotá, " +
        fecha,
        148,
        155,
        { align: "center" }
    );

    pdf.save("certificado.pdf");

}

// ======================================
// REINICIAR
// ======================================

function reiniciarCurso() {

   if(
       !confirm(
           "¿Está seguro de reiniciar el curso? Se perderá todo el avance."
       )
   ){
       return;
   }

   localStorage.clear();

   sessionStorage.clear();

   location.href =
       window.location.pathname;

}

// ======================================
// INICIO
// ======================================

renderMenu();

// Abrir primer submódulo automáticamente

const primerSubmodulo =
    CURSO.modulos[0]
        .submodulos[0];

abrirSubmodulo(
    primerSubmodulo
);

function mostrarCertificado() {

    const aprobado =
        localStorage.getItem(
            "curso_aprobado"
        );

    const c =
        document.getElementById(
            "contenido"
        );

    if (aprobado !== "true") {

        c.innerHTML = `

            <h2>
                Certificado
            </h2>

            <p>

                Debe aprobar la
                evaluación final para
                obtener el certificado.

            </p>

        `;

        return;
    }

    c.innerHTML = `

        <h2>
            Certificado
        </h2>

        <p>

            Felicitaciones.

            Ha aprobado el curso.

        </p>

        <button
            onclick="generarCertificado()">

            Descargar Certificado

        </button>

    `;
}

function guardarAvance() {

    localStorage.setItem(
        "avance",
        JSON.stringify(avance)
    );

}

function reintentarEvaluacion() {

    mostrarEvaluacion();

}