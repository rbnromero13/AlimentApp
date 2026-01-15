function showSection(id) {
  document.getElementById("content").style.display = "none";
  document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  if (id === "psico") {
    document.getElementById("searchInput").value = "";
    mostrarConceptos(conceptos);
  }

  if (id === "paracaidas") {
    renderParacaidas();
  }
}


function goHome() {
  document.getElementById("content").style.display = "block";
  document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
}

function openLink(url) {
  window.open(url, "_blank");
}

const conceptos = [
  {
    termino: "Adicción",
    definicion: "La adicción es una enfermedad del cerebro que afecta la conducta, el control de los impulsos y la toma de decisiones. Se caracteriza por la repetición de una conducta a pesar de sus consecuencias negativas. No es una falta de voluntad ni un problema moral y requiere tratamiento, apoyo y tiempo."
  },
  {
    termino: "Abstinencia",
    definicion: "La abstinencia es la decisión consciente de no realizar la conducta adictiva. No implica que no haya ganas, sino mantener el compromiso con el tratamiento incluso cuando aparece malestar o impulso."
  },
  {
    termino: "Aceptación",
    definicion: "Aceptar significa permitir pensamientos, emociones o sensaciones sin luchar contra ellas ni intentar eliminarlas. No es resignación, sino una forma de reducir el sufrimiento añadido y evitar reacciones impulsivas."
  },
  {
    termino: "Alimentación consciente",
    definicion: "Forma de relacionarse con la comida basada en la atención plena, la escucha del cuerpo y una actitud sin juicio. Implica comer conectando con el hambre, la saciedad, la satisfacción y el momento presente."
  },
  {
    termino: "Alimentación intuitiva",
    definicion: "Enfoque no centrado en el peso que promueve comer en respuesta a las señales internas del cuerpo, el placer y el autocuidado, dejando atrás las normas externas rígidas y las dietas."
  },
  {
    termino: "Alimentos bala",
    definicion: "Alimentos que, una vez iniciada su ingesta, resultan difíciles de detener. Suelen estar asociados a pérdida de control y requieren una gestión consciente dentro del tratamiento."
  },
  {
    termino: "Alimentos fetiche",
    definicion: "Alimentos cargados de significado emocional, recuerdos o situaciones concretas que pueden activar el impulso de comer de forma compulsiva."
  },
  {
    termino: "Alto riesgo",
    definicion: "Situaciones, momentos o estados emocionales en los que la probabilidad de recaída es elevada. Identificarlos permite anticiparse y protegerse."
  },
  {
    termino: "Atención plena / Mindfulness",
    definicion: "Capacidad de prestar atención al momento presente de forma intencional, sin juicio y con amabilidad. Permite observar pensamientos, emociones y ganas sin reaccionar automáticamente."
  },
  {
    termino: "Atracón",
    definicion: "Episodio de ingesta excesiva no ligada al hambre física, acompañado de sensación de pérdida de control y seguido de culpa, vergüenza o malestar emocional."
  },
  {
    termino: "Autocompasión",
    definicion: "Capacidad de responder al propio sufrimiento con amabilidad, comprensión y cuidado en lugar de crítica, dureza o autoexigencia. Es una base fundamental del autocuidado."
  },
  {
    termino: "Autocuidado",
    definicion: "Conjunto de acciones conscientes orientadas a proteger y mejorar la salud física, emocional, mental y social. Incluye descanso, alimentación, límites, pedir ayuda y atender necesidades."
  },
  {
    termino: "Conciencia corporal",
    definicion: "Capacidad de percibir y escuchar las señales internas del cuerpo, como hambre, saciedad, tensión, relajación o estados emocionales."
  },
  {
    termino: "Conciencia del impulso",
    definicion: "Habilidad para darse cuenta de las ganas de comer o consumir sin actuar automáticamente sobre ellas, creando un espacio para elegir una respuesta más saludable."
  },
  {
    termino: "Conductas sustitutivas",
    definicion: "Sustitución de una conducta adictiva por otra que cumple la misma función (compras, trabajo excesivo, deporte compulsivo), manteniendo el patrón adictivo."
  },
  {
    termino: "Control de impulsos",
    definicion: "Capacidad de frenar la respuesta automática ante el impulso y elegir una conducta alineada con el tratamiento y el autocuidado."
  },
  {
    termino: "Craving",
    definicion: "Deseo intenso e imperioso de consumir o comer. Es muy incómodo, pero no peligroso, no dura para siempre y no obliga a actuar."
  },
  {
    termino: "Cuadraditos",
    definicion: "Herramienta de planificación estructurada del tiempo diario y semanal que reduce el tiempo muerto y disminuye el riesgo de recaídas."
  },
  {
    termino: "Cultura de la dieta",
    definicion: "Sistema de creencias que prioriza la delgadez como ideal de salud y valor personal, favoreciendo la culpa, la rigidez y los trastornos de la conducta alimentaria."
  },
  {
    termino: "Disciplina",
    definicion: "En el tratamiento, disciplina significa hacer lo que corresponde aunque no apetezca. No es castigo, sino una forma de cuidado y responsabilidad."
  },
  {
    termino: "Disparadores / Detonadores",
    definicion: "Personas, situaciones, pensamientos o emociones que activan las ganas de comer o consumir."
  },
  {
    termino: "Distorsión corporal",
    definicion: "Percepción alterada del propio cuerpo que no se corresponde con la realidad, frecuente en los trastornos de la conducta alimentaria."
  },
  {
    termino: "Enfermedad crónica",
    definicion: "Problema de salud de larga duración que requiere cuidado continuado y puede presentar recaídas a lo largo del tiempo."
  },
  {
    termino: "Factores de riesgo",
    definicion: "Elementos internos o externos (emociones, situaciones, personas, pensamientos) que aumentan la probabilidad de recaída."
  },
  {
    termino: "Ganas directas",
    definicion: "Deseo activado por estímulos directamente relacionados con la conducta adictiva, como ver comida o pasar por un lugar concreto."
  },
  {
    termino: "Ganas indirectas",
    definicion: "Deseo activado por estados emocionales, estrés, cansancio o situaciones vitales, aunque no haya estímulos directos."
  },
  {
    termino: "Gordofobia",
    definicion: "Estigmatización y discriminación hacia las personas por su peso corporal, con impacto negativo en la autoestima y la salud mental."
  },
  {
    termino: "Hambre física vs hambre emocional",
    definicion: "Diferenciación entre la necesidad biológica de comer y el uso de la comida como forma de regular emociones o malestar."
  },
  {
    termino: "Imagen corporal",
    definicion: "Conjunto de percepciones, pensamientos y emociones que una persona tiene sobre su propio cuerpo."
  },
  {
    termino: "Imprevistos",
    definicion: "Situaciones no planificadas que pueden aumentar el riesgo si no se gestionan con conciencia y apoyo."
  },
  {
    termino: "Inicio de tratamiento",
    definicion: "Primer contacto con el proceso terapéutico, donde se establecen normas, objetivos y compromiso personal."
  },
  {
    termino: "Mente errante / Piloto automático",
    definicion: "Funcionamiento habitual de la mente que tiende a distraerse y actuar sin conciencia. El mindfulness ayuda a salir de este modo automático."
  },
  {
    termino: "Modelo bio-psico-social",
    definicion: "Modelo que entiende la adicción como el resultado de la interacción entre factores biológicos, psicológicos y sociales."
  },
  {
    termino: "Normas de grupo",
    definicion: "Reglas básicas que sostienen un espacio terapéutico seguro, respetuoso y eficaz."
  },
  {
    termino: "Participación activa",
    definicion: "Implicación personal y comprometida en el proceso terapéutico y en el trabajo grupal."
  },
  {
    termino: "Pedir ayuda",
    definicion: "Reconocer la necesidad de apoyo externo y solicitarlo a tiempo. Es una fortaleza y una herramienta clave de prevención."
  },
  {
    termino: "Prevención de recaídas",
    definicion: "Conjunto de estrategias para anticiparse al riesgo, protegerse y actuar a tiempo cuando aparecen señales de alarma."
  },
  {
    termino: "Proceso",
    definicion: "La recuperación es un camino gradual y no lineal, que incluye avances, dificultades y aprendizaje continuo, sin exigencia de perfección."
  },
  {
    termino: "Protección",
    definicion: "Acciones inmediatas que reducen el riesgo de actuar el impulso, como pedir ayuda, cambiar de situación o posponer la conducta."
  },
  {
    termino: "Recaída",
    definicion: "Retorno a conductas problemáticas. No es un fracaso, sino una señal de que algo necesita revisión y cuidado."
  },
  {
    termino: "Red de apoyo",
    definicion: "Personas vinculadas al tratamiento que ofrecen acompañamiento, contención y ayuda en momentos de dificultad."
  },
  {
    termino: "Registro",
    definicion: "Herramienta de observación consciente de conductas, pensamientos, emociones y situaciones para aumentar la conciencia y el autoconocimiento."
  },
  {
    termino: "Responsabilidad",
    definicion: "Compromiso activo con el tratamiento y el cuidado personal, diferenciándolo de la culpa, que paraliza."
  },
  {
    termino: "Sostenibilidad",
    definicion: "Capacidad de mantener hábitos y cambios a largo plazo sin rigidez, exigencia ni desgaste."
  },
  {
    termino: "TCA / TCAIA",
    definicion: "Trastornos de la conducta alimentaria que afectan la salud física, emocional y social, y que son tratables con un abordaje adecuado."
  },
  {
    termino: "Tiempo muerto",
    definicion: "Espacios sin estructura ni actividad que aumentan el riesgo de recaída dentro del tratamiento."
  }
];


function mostrarConceptos(lista) {
  const contenedor = document.getElementById("listaConceptos");
  contenedor.innerHTML = "";

  if (lista.length === 0) {
    contenedor.innerHTML = "<p>No se encontraron resultados.</p>";
    return;
  }

  lista.forEach(concepto => {
    const card = document.createElement("div");
    card.className = "concept-card";

    card.innerHTML = `
      <div class="concept-title" onclick="toggleDefinicion(this)">
        ${concepto.termino}
      </div>
      <div class="concept-definition">
        ${concepto.definicion}
      </div>
    `;

    contenedor.appendChild(card);
  });
}

function buscarConceptos() {
  const texto = document.getElementById("searchInput").value.toLowerCase();

  const filtrados = conceptos.filter(c =>
    c.termino.toLowerCase().includes(texto)
  );

  mostrarConceptos(filtrados);
}

function toggleDefinicion(elemento) {
  const definicion = elemento.nextElementSibling;
  definicion.style.display =
    definicion.style.display === "block" ? "none" : "block";
}


// -----------------------------
// MI PARACAÍDAS (Editable + localStorage)
// -----------------------------

const PARACAIDAS_KEY = "mi_paracaidas_v1";

const paracaidasDefault = {
  telefonos: [
    { nombre: "", telefono: "" },
    { nombre: "", telefono: "" },
    { nombre: "", telefono: "" },
    { nombre: "", telefono: "" },
    { nombre: "", telefono: "" }
  ],
  espaciosSeguros: "",
  minutosCraving: "20",
  actividadesDistractoras: "",
  pensamientosAutomaticos: "",
  motivosLogros: "",
  consecuenciasComer: "",
  contacto: {
    telefono: "93 318 17 96",
    email: "cas@creuroja.org",
    horarios: "Lunes 8:30–19:00 · Martes a viernes 8:30–14:00",
    nota: "Recuerda que siempre puedes pedir visita urgente con tu terapeuta de referencia si lo necesitas."
  }
};

// Cargar plan (o crear uno nuevo)
function loadParacaidas() {
  try {
    const raw = localStorage.getItem(PARACAIDAS_KEY);
    if (!raw) return structuredClone(paracaidasDefault);
    const parsed = JSON.parse(raw);

    // Merge simple para evitar fallos si faltan campos
    return {
      ...structuredClone(paracaidasDefault),
      ...parsed,
      contacto: { ...paracaidasDefault.contacto, ...(parsed.contacto || {}) }
    };
  } catch (e) {
    return structuredClone(paracaidasDefault);
  }
}

// Guardar plan
function saveParacaidas(data) {
  localStorage.setItem(PARACAIDAS_KEY, JSON.stringify(data));
}

// Borrar plan
function resetParacaidas() {
  localStorage.removeItem(PARACAIDAS_KEY);
  renderParacaidas(); // repinta en blanco
  alert("Tu plan se ha borrado de este dispositivo.");
}

// Render del acordeón
function renderParacaidas() {
  const data = loadParacaidas();
  const container = document.getElementById("paracaidasContent");
  if (!container) return;

  container.innerHTML = `
    ${cardParacaidasTelefonos(data)}
    ${cardParacaidasEspacios(data)}
    ${cardParacaidasPosponer(data)}
    ${cardParacaidasPensamientos(data)}
    ${cardParacaidasMotivos(data)}
    ${cardParacaidasConsecuencias(data)}
  `;
}

// Helpers UI: tarjeta desplegable
function cardTemplate({ title, bodyHtml, id }) {
  return `
    <div class="concept-card">
      <div class="concept-title" onclick="toggleDefinicion(this)">
        ${title}
      </div>
      <div class="concept-definition" id="${id}">
        ${bodyHtml}
      </div>
    </div>
  `;
}

// 1) Teléfonos
function cardParacaidasTelefonos(data) {
  const rows = data.telefonos
    .map((c, i) => `
      <div class="field">
        <label>Nombre ${i + 1}</label>
        <input type="text" id="tel_nombre_${i}" value="${escapeHtml(c.nombre)}" placeholder="Nombre" />
      </div>
      <div class="field">
        <label>Teléfono ${i + 1}</label>
        <input type="tel" id="tel_telefono_${i}" value="${escapeHtml(c.telefono)}" placeholder="Teléfono" />
      </div>
      <hr />
    `)
    .join("");

  const body = `
    <p class="small-note">Personas de soporte a quien puedo llamar para expresar cómo me siento y pedir ayuda.</p>
    ${rows}
    <button onclick="saveTelefonosParacaidas()">Guardar teléfonos <span id="saved_tel" class="badge-saved" style="display:none;">Guardado ✓</span></button>
  `;

  return cardTemplate({ title: "1. Mis teléfonos de emergencia", bodyHtml: body, id: "par_tel" });
}

function saveTelefonosParacaidas() {
  const data = loadParacaidas();
  data.telefonos = data.telefonos.map((_, i) => ({
    nombre: (document.getElementById(`tel_nombre_${i}`)?.value || "").trim(),
    telefono: (document.getElementById(`tel_telefono_${i}`)?.value || "").trim()
  }));
  saveParacaidas(data);
  flashSaved("saved_tel");
}

// 2) Espacios seguros
function cardParacaidasEspacios(data) {
  const body = `
    <p class="small-note">
      Si me encuentro en una situación de riesgo de recaída, puedo ir a un espacio seguro o cambiar de situación.
    </p>
    <div class="field">
      <label>Mis espacios seguros (lugares / acciones)</label>
      <textarea id="espaciosSeguros" placeholder="Ej.: salir a caminar, ir a casa de…, biblioteca, cafetería, sala común...">${escapeHtml(data.espaciosSeguros)}</textarea>
    </div>
    <button onclick="saveEspaciosSeguros()">Guardar <span id="saved_esp" class="badge-saved" style="display:none;">Guardado ✓</span></button>
  `;

  return cardTemplate({ title: "2. Mis espacios seguros", bodyHtml: body, id: "par_esp" });
}

function saveEspaciosSeguros() {
  const data = loadParacaidas();
  data.espaciosSeguros = (document.getElementById("espaciosSeguros")?.value || "").trim();
  saveParacaidas(data);
  flashSaved("saved_esp");
}

// 3) Pospongo decisión
function cardParacaidasPosponer(data) {
  const body = `
    <p class="small-note">
      Pospongo la decisión de <u>comer</u> hasta que pase un tiempo. El craving sube, llega a un pico y baja.
    </p>

    <div class="field">
      <label>Pospondré la decisión durante (minutos)</label>
      <input type="number" min="1" max="180" id="minutosCraving" value="${escapeHtml(String(data.minutosCraving || "20"))}" />
    </div>

    <div class="field">
      <label>Actividades distractoras que me ayudan</label>
      <textarea id="actividadesDistractoras" placeholder="Ej.: ducha, caminar 10 min, llamar a alguien, ordenar, respiración, música...">${escapeHtml(data.actividadesDistractoras)}</textarea>
    </div>

    <button onclick="savePosponer()">Guardar <span id="saved_pos" class="badge-saved" style="display:none;">Guardado ✓</span></button>
  `;

  return cardTemplate({ title: "3. Pospongo la decisión", bodyHtml: body, id: "par_pos" });
}

function savePosponer() {
  const data = loadParacaidas();
  data.minutosCraving = (document.getElementById("minutosCraving")?.value || "20").trim();
  data.actividadesDistractoras = (document.getElementById("actividadesDistractoras")?.value || "").trim();
  saveParacaidas(data);
  flashSaved("saved_pos");
}

// 4) Pensamientos automáticos
function cardParacaidasPensamientos(data) {
  const body = `
    <p class="small-note">
      Identifico pensamientos automáticos y los dejo pasar. Puedo observarlos como si fueran vagones de un tren que pasan ante mis ojos.
    </p>

    <div class="field">
      <label>Mis pensamientos automáticos típicos</label>
      <textarea id="pensamientosAutomaticos" placeholder="Ej.: 'solo un poco', 'me lo merezco', 'no pasa nada', 'ya da igual'...">${escapeHtml(data.pensamientosAutomaticos)}</textarea>
    </div>

    <button onclick="savePensamientos()">Guardar <span id="saved_pen" class="badge-saved" style="display:none;">Guardado ✓</span></button>
  `;

  return cardTemplate({ title: "4. Identificando pensamientos automáticos", bodyHtml: body, id: "par_pen" });
}

function savePensamientos() {
  const data = loadParacaidas();
  data.pensamientosAutomaticos = (document.getElementById("pensamientosAutomaticos")?.value || "").trim();
  saveParacaidas(data);
  flashSaved("saved_pen");
}

// 5) Motivos para mantener logros
function cardParacaidasMotivos(data) {
  const body = `
    <p class="small-note">
      Recuerdo mis motivos para seguir cuidándome. Me conecto con lo importante.
    </p>

    <div class="field">
      <label>Motivos para mantener mis logros</label>
      <textarea id="motivosLogros" placeholder="Ej.: salud, familia, tranquilidad, autoestima, libertad, energía...">${escapeHtml(data.motivosLogros)}</textarea>
    </div>

    <button onclick="saveMotivos()">Guardar <span id="saved_mot" class="badge-saved" style="display:none;">Guardado ✓</span></button>
  `;

  return cardTemplate({ title: "5. Motivos para mantener mis logros", bodyHtml: body, id: "par_mot" });
}

function saveMotivos() {
  const data = loadParacaidas();
  data.motivosLogros = (document.getElementById("motivosLogros")?.value || "").trim();
  saveParacaidas(data);
  flashSaved("saved_mot");
}

// 6) Consecuencias
function cardParacaidasConsecuencias(data) {
  const body = `
    <p class="small-note">
      Recuerdo a qué situaciones me ha llevado comer de forma problemática. No es para culparme, es para protegerme.
    </p>

    <div class="field">
      <label>Consecuencias que quiero recordar</label>
      <textarea id="consecuenciasComer" placeholder="Ej.: malestar físico, culpa, aislamiento, discusiones, pérdida de confianza, cansancio...">${escapeHtml(data.consecuenciasComer)}</textarea>
    </div>

    <button onclick="saveConsecuencias()">Guardar <span id="saved_con" class="badge-saved" style="display:none;">Guardado ✓</span></button>
  `;

  return cardTemplate({ title: "6. A qué situaciones me ha llevado comer", bodyHtml: body, id: "par_con" });
}

function saveConsecuencias() {
  const data = loadParacaidas();
  data.consecuenciasComer = (document.getElementById("consecuenciasComer")?.value || "").trim();
  saveParacaidas(data);
  flashSaved("saved_con");
}

// Utilidad: mostrar badge "Guardado ✓"
function flashSaved(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = "inline-block";
  setTimeout(() => {
    el.style.display = "none";
  }, 1200);
}

// Escape HTML para inputs/textarea (evita romper el DOM si hay < >)
function escapeHtml(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
