/* ══════════════════════════════════════════
   NEOFLUX — i18n.js
   Sistema multiidioma ES / EN / IT
══════════════════════════════════════════ */

const translations = {

  es: {
    meta: {
      title: "NeoFlux — Software a Medida, Automatización & Inteligencia Artificial",
      description: "Desarrollamos software a medida, automatizaciones con IA, integraciones WhatsApp y sistemas empresariales."
    },
    nav: {
      services: "Servicios",
      benefits: "Beneficios",
      cases: "Casos de uso",
      contact: "Contacto"
    },
    hero: {
      badge: "Disponibles para nuevos proyectos",
      title_1: "Software que trabaja",
      title_2: "por vos.",
      subtitle: "Desarrollamos sistemas a medida, automatizamos procesos con IA e integramos WhatsApp en tu negocio. Sin tecnicismos. Con resultados.",
      cta_primary: "Pedir presupuesto gratis",
      cta_secondary: "Ver qué hacemos",
      stat_1: "Proyectos entregados",
      stat_2: "Países",
      stat_3: "Código propio"
    },
    services: {
      tag: "Lo que hacemos",
      title: "Servicios diseñados<br>para escalar tu negocio",
      desc: "Cada solución está pensada para resolver un problema real, ahorrar tiempo y generar más ingresos.",
      web:        { title: "Desarrollo Web",          desc: "Sitios, landing pages y aplicaciones web que convierten visitas en clientes. Rápidas, seguras y con SEO desde el primer día.",                                                                    badge: "" },
      software:   { title: "Software a Medida",       desc: "Sistemas internos, paneles de gestión, CRMs y ERPs adaptados exactamente a tu operación. No pagás por lo que no usás.",                                                                          badge: "" },
      ai:         { title: "Inteligencia Artificial", desc: "Chatbots con IA, análisis de datos, generación de contenido y automatización inteligente usando los modelos más avanzados del mercado.",                                                         badge: "Más solicitado" },
      automation: { title: "Automatización",          desc: "Eliminamos tareas repetitivas: facturación automática, reportes, sincronización de sistemas y workflows sin intervención humana.",                                                                badge: "" },
      whatsapp:   { title: "Integración WhatsApp",    desc: "Atención al cliente, ventas y soporte automatizados por WhatsApp Business API. Tu negocio disponible 24/7 sin contratar más personal.",                                                         badge: "" },
      enterprise: { title: "Sistemas Empresariales",  desc: "Integraciones con ERP, sistemas de facturación AFIP, portales B2B y plataformas SaaS multitenancy escalables.",                                                                                 badge: "" }
    },
    benefits: {
      tag: "Por qué elegirnos",
      title: "No somos una agencia.<br>Somos tu equipo tech.",
      desc: "La diferencia entre un proveedor y un socio es que el socio entiende tu negocio antes de escribir una línea de código.",
      cta: "Hablemos de tu proyecto",
      speed:     { title: "Entrega rápida",          desc: "MVPs funcionales en 2–4 semanas. Sin promesas vacías. Con fechas reales." },
      ownership: { title: "Tu código, tuyo",         desc: "Todo el código fuente es tuyo desde el día 1. Sin lock-in, sin licencias ocultas." },
      scale:     { title: "Pensado para escalar",    desc: "Arquitectura que crece con tu negocio. Pagás por lo que necesitás hoy." },
      global:    { title: "Equipo internacional",    desc: "Trabajamos con clientes en Argentina, Italia y EEUU. Español, inglés, italiano." }
    },
    cases: {
      tag: "Casos de uso reales",
      title: "Problemas que resolvemos<br>todos los días",
      hotel:    { industry: "🏨 Hotelería", title: "Check-in digital sin papel",          desc: "Sistema de gestión hotelera con check-in QR, panel de staff, mensajería interna y facturación automática.",  result: "−70% tiempo recepción" },
      commerce: { industry: "🛒 Comercio",  title: "Catálogo y cotización por WhatsApp",  desc: "Catálogo digital con panel de administración, generación de presupuestos en PDF y envío automático al cliente.", result: "3× más cotizaciones"   },
      services: { industry: "⚙️ Servicios", title: "Bot de atención 24/7",                desc: "Chatbot con IA entrenado en los productos y políticas de la empresa. Responde, toma turnos y escala a humano.", result: "80% consultas resueltas" }
    },
    process: {
      tag: "Cómo trabajamos",
      title: "De la idea al producto<br>en 4 pasos",
      step1: { title: "Diagnóstico gratis",    desc: "Analizamos tu negocio, tus procesos actuales y lo que querés lograr. Sin costo, sin compromiso." },
      step2: { title: "Propuesta técnica",     desc: "Presentamos la arquitectura, tecnologías, tiempos y presupuesto detallado. Todo por escrito." },
      step3: { title: "Desarrollo iterativo",  desc: "Entregas parciales cada semana. Podés ver el progreso y dar feedback en tiempo real." },
      step4: { title: "Lanzamiento y soporte", desc: "Deploy, capacitación y soporte post-lanzamiento incluido. No desaparecemos cuando entregamos." }
    },
    contact: {
      tag: "Contacto",
      title: "Contanos tu proyecto.<br>Te respondemos en 24h.",
      desc: "Primera consulta gratuita. Sin presión, sin compromiso. Solo una conversación sobre cómo podemos ayudarte.",
      whatsapp: "Escribinos por WhatsApp",
      form: {
        name: "Tu nombre", name_placeholder: "Juan García",
        email: "Email", email_placeholder: "juan@empresa.com",
        service: "¿Qué necesitás?",
        service_default: "Seleccioná un servicio",
        service_web: "Desarrollo Web", service_software: "Software a Medida",
        service_ai: "Inteligencia Artificial", service_automation: "Automatización",
        service_whatsapp: "Integración WhatsApp", service_enterprise: "Sistemas Empresariales",
        service_other: "Otro",
        message: "Contanos tu proyecto", message_placeholder: "Describí brevemente qué querés construir o automatizar...",
        submit: "Enviar mensaje",
        privacy: "🔒 Tus datos están seguros. No enviamos spam.",
        success_title: "¡Mensaje recibido!",
        success_desc: "Te respondemos en menos de 24 horas. Revisá tu bandeja de entrada.",
        error_required: "Este campo es obligatorio",
        error_email: "Ingresá un email válido"
      }
    },
    footer: { tagline: "Software que trabaja por vos.", rights: "Todos los derechos reservados." },
    whatsapp: { tooltip: "¿Hablamos?" }
  },

  en: {
    meta: {
      title: "NeoFlux — Custom Software, Automation & Artificial Intelligence",
      description: "We build custom software, AI automations, WhatsApp integrations and enterprise systems. Digital solutions that grow your business."
    },
    nav: {
      services: "Services",
      benefits: "Benefits",
      cases: "Use cases",
      contact: "Contact"
    },
    hero: {
      badge: "Available for new projects",
      title_1: "Software that works",
      title_2: "for you.",
      subtitle: "We build custom systems, automate processes with AI and integrate WhatsApp into your business. No jargon. Just results.",
      cta_primary: "Get a free quote",
      cta_secondary: "See what we do",
      stat_1: "Projects delivered",
      stat_2: "Countries",
      stat_3: "Custom code"
    },
    services: {
      tag: "What we do",
      title: "Services designed<br>to scale your business",
      desc: "Every solution is built to solve a real problem, save time and generate more revenue.",
      web:        { title: "Web Development",       desc: "Websites, landing pages and web apps that turn visitors into clients. Fast, secure and SEO-ready from day one.",                                         badge: "" },
      software:   { title: "Custom Software",       desc: "Internal systems, management panels, CRMs and ERPs tailored exactly to your operation. You only pay for what you use.",                                  badge: "" },
      ai:         { title: "Artificial Intelligence",desc: "AI chatbots, data analysis, content generation and intelligent automation using the most advanced models on the market.",                                badge: "Most requested" },
      automation: { title: "Automation",            desc: "We eliminate repetitive tasks: automatic invoicing, reports, system sync and workflows without human intervention.",                                      badge: "" },
      whatsapp:   { title: "WhatsApp Integration",  desc: "Customer service, sales and support automated via WhatsApp Business API. Your business available 24/7 without hiring more staff.",                      badge: "" },
      enterprise: { title: "Enterprise Systems",    desc: "ERP integrations, invoicing systems, B2B portals and scalable multi-tenant SaaS platforms.",                                                            badge: "" }
    },
    benefits: {
      tag: "Why choose us",
      title: "We're not an agency.<br>We're your tech team.",
      desc: "The difference between a vendor and a partner is that a partner understands your business before writing a single line of code.",
      cta: "Let's talk about your project",
      speed:     { title: "Fast delivery",        desc: "Functional MVPs in 2–4 weeks. No empty promises. Real deadlines." },
      ownership: { title: "Your code, yours",     desc: "All source code is yours from day 1. No lock-in, no hidden licenses." },
      scale:     { title: "Built to scale",       desc: "Architecture that grows with your business. You pay for what you need today." },
      global:    { title: "International team",   desc: "We work with clients in Argentina, Italy and the US. Spanish, English, Italian." }
    },
    cases: {
      tag: "Real use cases",
      title: "Problems we solve<br>every day",
      hotel:    { industry: "🏨 Hospitality", title: "Paperless digital check-in",      desc: "Hotel management system with QR check-in, staff panel, internal messaging and automatic invoicing.",      result: "−70% reception time"    },
      commerce: { industry: "🛒 Commerce",    title: "Catalog & WhatsApp quotes",        desc: "Digital catalog with admin panel, PDF quote generation and automatic delivery to the client via WhatsApp.", result: "3× more quotes"         },
      services: { industry: "⚙️ Services",   title: "24/7 AI support bot",              desc: "AI chatbot trained on company products and policies. Answers queries, books appointments and escalates.",    result: "80% queries resolved"   }
    },
    process: {
      tag: "How we work",
      title: "From idea to product<br>in 4 steps",
      step1: { title: "Free diagnosis",      desc: "We analyze your business, current processes and goals. No cost, no commitment." },
      step2: { title: "Technical proposal",  desc: "We present the architecture, technologies, timeline and detailed budget. All in writing." },
      step3: { title: "Iterative development",desc: "Partial deliveries every week. You can see progress and give real-time feedback." },
      step4: { title: "Launch & support",    desc: "Deploy, training and post-launch support included. We don't disappear after delivery." }
    },
    contact: {
      tag: "Contact",
      title: "Tell us about your project.<br>We reply within 24h.",
      desc: "Free first consultation. No pressure, no commitment. Just a conversation about how we can help.",
      whatsapp: "Message us on WhatsApp",
      form: {
        name: "Your name", name_placeholder: "John Smith",
        email: "Email", email_placeholder: "john@company.com",
        service: "What do you need?",
        service_default: "Select a service",
        service_web: "Web Development", service_software: "Custom Software",
        service_ai: "Artificial Intelligence", service_automation: "Automation",
        service_whatsapp: "WhatsApp Integration", service_enterprise: "Enterprise Systems",
        service_other: "Other",
        message: "Tell us about your project", message_placeholder: "Briefly describe what you want to build or automate...",
        submit: "Send message",
        privacy: "🔒 Your data is safe. We don't spam.",
        success_title: "Message received!",
        success_desc: "We'll reply within 24 hours. Check your inbox.",
        error_required: "This field is required",
        error_email: "Please enter a valid email"
      }
    },
    footer: { tagline: "Software that works for you.", rights: "All rights reserved." },
    whatsapp: { tooltip: "Let's talk!" }
  },

  it: {
    meta: {
      title: "NeoFlux — Software Su Misura, Automazione & Intelligenza Artificiale",
      description: "Sviluppiamo software su misura, automazioni con IA, integrazioni WhatsApp e sistemi aziendali. Soluzioni digitali che fanno crescere il tuo business."
    },
    nav: {
      services: "Servizi",
      benefits: "Vantaggi",
      cases: "Casi d'uso",
      contact: "Contatto"
    },
    hero: {
      badge: "Disponibili per nuovi progetti",
      title_1: "Software che lavora",
      title_2: "per te.",
      subtitle: "Sviluppiamo sistemi su misura, automatizziamo processi con l'IA e integriamo WhatsApp nel tuo business. Senza tecnicismi. Con risultati.",
      cta_primary: "Richiedi un preventivo gratis",
      cta_secondary: "Scopri cosa facciamo",
      stat_1: "Progetti consegnati",
      stat_2: "Paesi",
      stat_3: "Codice proprietario"
    },
    services: {
      tag: "Cosa facciamo",
      title: "Servizi progettati<br>per scalare il tuo business",
      desc: "Ogni soluzione è pensata per risolvere un problema reale, risparmiare tempo e generare più fatturato.",
      web:        { title: "Sviluppo Web",              desc: "Siti, landing page e applicazioni web che trasformano i visitatori in clienti. Veloci, sicure e con SEO dal primo giorno.",                               badge: "" },
      software:   { title: "Software Su Misura",        desc: "Sistemi interni, pannelli di gestione, CRM ed ERP adattati esattamente alla tua operazione. Paghi solo per quello che usi.",                             badge: "" },
      ai:         { title: "Intelligenza Artificiale",  desc: "Chatbot con IA, analisi dei dati, generazione di contenuti e automazione intelligente usando i modelli più avanzati sul mercato.",                       badge: "Più richiesto" },
      automation: { title: "Automazione",               desc: "Eliminiamo le attività ripetitive: fatturazione automatica, report, sincronizzazione dei sistemi e workflow senza intervento umano.",                    badge: "" },
      whatsapp:   { title: "Integrazione WhatsApp",     desc: "Assistenza clienti, vendite e supporto automatizzati tramite WhatsApp Business API. Il tuo business disponibile 24/7 senza assumere altro personale.", badge: "" },
      enterprise: { title: "Sistemi Aziendali",         desc: "Integrazioni con ERP, sistemi di fatturazione, portali B2B e piattaforme SaaS multi-tenant scalabili.",                                                  badge: "" }
    },
    benefits: {
      tag: "Perché sceglierci",
      title: "Non siamo un'agenzia.<br>Siamo il tuo team tech.",
      desc: "La differenza tra un fornitore e un partner è che il partner capisce il tuo business prima di scrivere una riga di codice.",
      cta: "Parliamo del tuo progetto",
      speed:     { title: "Consegna rapida",       desc: "MVP funzionali in 2–4 settimane. Senza promesse vuote. Con scadenze reali." },
      ownership: { title: "Il tuo codice, tuo",   desc: "Tutto il codice sorgente è tuo dal giorno 1. Nessun lock-in, nessuna licenza nascosta." },
      scale:     { title: "Pensato per scalare",   desc: "Architettura che cresce con il tuo business. Paghi per quello che ti serve oggi." },
      global:    { title: "Team internazionale",   desc: "Lavoriamo con clienti in Argentina, Italia e USA. Spagnolo, inglese, italiano." }
    },
    cases: {
      tag: "Casi d'uso reali",
      title: "Problemi che risolviamo<br>ogni giorno",
      hotel:    { industry: "🏨 Ospitalità", title: "Check-in digitale senza carta",      desc: "Sistema di gestione alberghiera con check-in QR, pannello staff, messaggistica interna e fatturazione automatica.", result: "−70% tempo reception"   },
      commerce: { industry: "🛒 Commercio",  title: "Catalogo e preventivi su WhatsApp",  desc: "Catalogo digitale con pannello admin, generazione preventivi PDF e invio automatico al cliente via WhatsApp.",      result: "3× più preventivi"     },
      services: { industry: "⚙️ Servizi",   title: "Bot di assistenza 24/7",              desc: "Chatbot con IA addestrato sui prodotti e le politiche aziendali. Risponde, prenota appuntamenti e scala a umano.",  result: "80% richieste risolte"  }
    },
    process: {
      tag: "Come lavoriamo",
      title: "Dall'idea al prodotto<br>in 4 passi",
      step1: { title: "Diagnosi gratuita",      desc: "Analizziamo il tuo business, i processi attuali e gli obiettivi. Senza costi, senza impegno." },
      step2: { title: "Proposta tecnica",       desc: "Presentiamo architettura, tecnologie, tempi e budget dettagliato. Tutto per iscritto." },
      step3: { title: "Sviluppo iterativo",     desc: "Consegne parziali ogni settimana. Puoi vedere i progressi e dare feedback in tempo reale." },
      step4: { title: "Lancio e supporto",      desc: "Deploy, formazione e supporto post-lancio inclusi. Non spariremo dopo la consegna." }
    },
    contact: {
      tag: "Contatto",
      title: "Raccontaci il tuo progetto.<br>Rispondiamo entro 24h.",
      desc: "Prima consulenza gratuita. Senza pressioni, senza impegno. Solo una conversazione su come possiamo aiutarti.",
      whatsapp: "Scrivici su WhatsApp",
      form: {
        name: "Il tuo nome", name_placeholder: "Mario Rossi",
        email: "Email", email_placeholder: "mario@azienda.it",
        service: "Di cosa hai bisogno?",
        service_default: "Seleziona un servizio",
        service_web: "Sviluppo Web", service_software: "Software Su Misura",
        service_ai: "Intelligenza Artificiale", service_automation: "Automazione",
        service_whatsapp: "Integrazione WhatsApp", service_enterprise: "Sistemi Aziendali",
        service_other: "Altro",
        message: "Raccontaci il tuo progetto", message_placeholder: "Descrivi brevemente cosa vuoi costruire o automatizzare...",
        submit: "Invia messaggio",
        privacy: "🔒 I tuoi dati sono al sicuro. Non inviamo spam.",
        success_title: "Messaggio ricevuto!",
        success_desc: "Risponderemo entro 24 ore. Controlla la tua casella email.",
        error_required: "Questo campo è obbligatorio",
        error_email: "Inserisci un'email valida"
      }
    },
    footer: { tagline: "Software che lavora per te.", rights: "Tutti i diritti riservati." },
    whatsapp: { tooltip: "Parliamo!" }
  }

};

/* ── Motor de traducción ── */
function setLanguage(lang) {
  if (!translations[lang]) return;

  const t = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.setAttribute('data-lang', lang);

  // Actualizar título y meta
  document.title = t.meta.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t.meta.description);

  // Traducir todos los elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getNestedValue(t, key);
    if (value !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
      } else if (el.tagName === 'OPTION') {
        el.textContent = value;
      } else {
        el.innerHTML = value;
      }
    }
  });

  // Actualizar placeholders con data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = getNestedValue(t, key);
    if (value !== undefined) el.placeholder = value;
  });

  // Guardar preferencia
  localStorage.setItem('neoflux-lang', lang);

  // Actualizar botones activos
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang);
  });
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => {
    return acc && acc[key] !== undefined ? acc[key] : undefined;
  }, obj);
}

/* ── Inicializar ── */
document.addEventListener('DOMContentLoaded', () => {
  // Detectar idioma: localStorage → navegador → español
  const saved    = localStorage.getItem('neoflux-lang');
  const browser  = navigator.language?.slice(0, 2);
  const detected = saved || (['es','en','it'].includes(browser) ? browser : 'es');

  setLanguage(detected);

  // Eventos de los botones de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });
});
