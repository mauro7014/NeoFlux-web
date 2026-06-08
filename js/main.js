cat > js/main.js << 'ENDOFFILE'
/* ══════════════════════════════════════════
   NEOFLUX — main.js
   Nav · Scroll · Animaciones · Formulario → WhatsApp
══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── AÑO EN FOOTER ── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ══════════════════════════════════════
     HEADER — scroll effect
  ══════════════════════════════════════ */
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* ══════════════════════════════════════
     HAMBURGER — menú mobile
  ══════════════════════════════════════ */
  const hamburger  = document.querySelector('.nav__hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    }
  });

  /* ══════════════════════════════════════
     NAV LINKS — active on scroll
  ══════════════════════════════════════ */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));

  /* ══════════════════════════════════════
     REVEAL — animación al hacer scroll
  ══════════════════════════════════════ */
  const revealTargets = [
    '.service-card', '.benefit-item', '.case-card',
    '.process-step', '.section-header', '.benefits__left',
    '.contact__left', '.contact-form', '.work-card'
  ];

  const revealEls = document.querySelectorAll(revealTargets.join(','));
  revealEls.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ══════════════════════════════════════
     STAGGER — delay escalonado en grillas
  ══════════════════════════════════════ */
  document.querySelectorAll('.services__grid, .cases__grid, .process__steps, .works__grid').forEach(grid => {
    grid.querySelectorAll('.reveal').forEach((card, i) => {
      card.style.transitionDelay = `${i * 80}ms`;
    });
  });

  /* ══════════════════════════════════════
     FORMULARIO → WHATSAPP
  ══════════════════════════════════════ */
  const form       = document.getElementById('contact-form');
  const successBox = document.getElementById('form-success');
  const submitBtn  = document.getElementById('submit-btn');

  if (!form) return;

  const WHATSAPP_NUMBER = '5493412603942';

  /* Etiquetas legibles para cada servicio */
  const serviceLabels = {
    web:        { es: 'Desarrollo Web',          en: 'Web Development',        it: 'Sviluppo Web' },
    software:   { es: 'Software a Medida',        en: 'Custom Software',        it: 'Software Su Misura' },
    ai:         { es: 'Inteligencia Artificial',  en: 'Artificial Intelligence', it: 'Intelligenza Artificiale' },
    automation: { es: 'Automatización',           en: 'Automation',             it: 'Automazione' },
    whatsapp:   { es: 'Integración WhatsApp',     en: 'WhatsApp Integration',   it: 'Integrazione WhatsApp' },
    enterprise: { es: 'Sistemas Empresariales',   en: 'Enterprise Systems',     it: 'Sistemi Aziendali' },
    other:      { es: 'Otro',                     en: 'Other',                  it: 'Altro' }
  };

  /* Validación de campo */
  function validateField(field) {
    const id    = field.id;
    const error = document.getElementById(id + '-error');
    const lang  = document.documentElement.getAttribute('data-lang') || 'es';

    const msgs = {
      es: { required: 'Este campo es obligatorio', email: 'Ingresá un email válido' },
      en: { required: 'This field is required',    email: 'Please enter a valid email' },
      it: { required: 'Questo campo è obbligatorio', email: "Inserisci un'email valida" }
    };
    const m = msgs[lang] || msgs.es;

    if (!error) return true;
    error.textContent = '';
    field.style.borderColor = '';

    if (field.required && !field.value.trim()) {
      error.textContent = m.required;
      field.style.borderColor = '#ff6b6b';
      return false;
    }

    if (field.type === 'email' && field.value.trim()) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())) {
        error.textContent = m.email;
        field.style.borderColor = '#ff6b6b';
        return false;
      }
    }

    field.style.borderColor = 'var(--color-green)';
    return true;
  }

  /* Validar en tiempo real */
  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.style.borderColor === 'rgb(255, 107, 107)') validateField(field);
    });
  });

  /* Submit → WhatsApp */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fields  = form.querySelectorAll('input, textarea, select');
    let   isValid = true;
    fields.forEach(field => { if (!validateField(field)) isValid = false; });
    if (!isValid) return;

    const lang    = document.documentElement.getAttribute('data-lang') || 'es';
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();

    const serviceLabel = service && serviceLabels[service]
      ? serviceLabels[service][lang] || serviceLabels[service].es
      : service;

    /* Armar mensaje según idioma */
    let waMsg = '';
    if (lang === 'en') {
      waMsg = `Hello NeoFlux! 👋\n\n*Name:* ${name}\n*Email:* ${email}\n*Service:* ${serviceLabel}\n\n*Project:*\n${message}`;
    } else if (lang === 'it') {
      waMsg = `Ciao NeoFlux! 👋\n\n*Nome:* ${name}\n*Email:* ${email}\n*Servizio:* ${serviceLabel}\n\n*Progetto:*\n${message}`;
    } else {
      waMsg = `Hola NeoFlux! 👋\n\n*Nombre:* ${name}\n*Email:* ${email}\n*Servicio:* ${serviceLabel}\n\n*Proyecto:*\n${message}`;
    }

    const waURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;

    /* Mostrar éxito y abrir WhatsApp */
    form.hidden       = false;
    successBox.hidden = false;
    successBox.style.marginTop = '20px';

    setTimeout(() => {
      window.open(waURL, '_blank');
    }, 600);

    /* Reset después de 6 segundos */
    setTimeout(() => {
      form.reset();
      successBox.hidden = true;
      successBox.style.marginTop = '';
      form.querySelectorAll('input, textarea, select').forEach(f => {
        f.style.borderColor = '';
      });
    }, 6000);
  });

  /* ══════════════════════════════════════
     SMOOTH SCROLL — offset header fijo
  ══════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ══════════════════════════════════════
     COUNTER — animar números del hero
  ══════════════════════════════════════ */
  function animateCounter(el, target, suffix = '') {
    let start = 0;
    const increment = target / (1500 / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        el.textContent = target + suffix;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(start) + suffix;
      }
    }, 16);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat__number').forEach(el => {
          const text = el.textContent.trim();
          if (text.includes('+'))      animateCounter(el, parseInt(text), '+');
          else if (text.includes('%')) animateCounter(el, parseInt(text), '%');
          else if (text.includes('×'))animateCounter(el, parseInt(text), '×');
          else                         animateCounter(el, parseInt(text), '');
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero__stats');
  if (heroStats) statsObserver.observe(heroStats);

});
ENDOFFILE