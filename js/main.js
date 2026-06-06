/* ══════════════════════════════════════════
   NEOFLUX — main.js
   Nav · Scroll · Animaciones · Formulario
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

  // Cerrar al hacer click en un link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    });
  });

  // Cerrar al hacer click fuera
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
    '.service-card',
    '.benefit-item',
    '.case-card',
    '.process-step',
    '.section-header',
    '.benefits__left',
    '.contact__left',
    '.contact-form'
  ];

  const revealEls = document.querySelectorAll(revealTargets.join(','));
  revealEls.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ══════════════════════════════════════
     STAGGER — cards con delay escalonado
  ══════════════════════════════════════ */
  document.querySelectorAll('.services__grid, .cases__grid, .process__steps').forEach(grid => {
    grid.querySelectorAll('.reveal').forEach((card, i) => {
      card.style.transitionDelay = `${i * 80}ms`;
    });
  });

  /* ══════════════════════════════════════
     FORMULARIO DE CONTACTO
  ══════════════════════════════════════ */
  const form       = document.getElementById('contact-form');
  const successBox = document.getElementById('form-success');
  const submitBtn  = document.getElementById('submit-btn');

  if (!form) return;

  /* Validación individual de campo */
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

    // Reset
    error.textContent = '';
    field.style.borderColor = '';

    if (field.required && !field.value.trim()) {
      error.textContent = m.required;
      field.style.borderColor = '#ff6b6b';
      return false;
    }

    if (field.type === 'email' && field.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value.trim())) {
        error.textContent = m.email;
        field.style.borderColor = '#ff6b6b';
        return false;
      }
    }

    field.style.borderColor = 'var(--color-green)';
    return true;
  }

  /* Validar en tiempo real (blur) */
  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.style.borderColor === 'rgb(255, 107, 107)') {
        validateField(field);
      }
    });
  });

  /* Submit */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fields  = form.querySelectorAll('input, textarea, select');
    let   isValid = true;

    fields.forEach(field => {
      if (!validateField(field)) isValid = false;
    });

    if (!isValid) return;

    /* Estado: enviando */
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
    submitBtn.querySelector('span').textContent =
      document.documentElement.getAttribute('data-lang') === 'it' ? 'Invio...' :
      document.documentElement.getAttribute('data-lang') === 'en' ? 'Sending...' :
      'Enviando...';

    /* Simulación de envío — reemplazá con tu backend/Formspree/EmailJS */
    await new Promise(resolve => setTimeout(resolve, 1500));

    /* Éxito */
    form.hidden      = true;
    successBox.hidden = false;

    /* Reset por si el usuario vuelve atrás */
    setTimeout(() => {
      form.reset();
      form.hidden       = false;
      successBox.hidden = true;
      submitBtn.disabled  = false;
      submitBtn.style.opacity = '';

      const lang = document.documentElement.getAttribute('data-lang') || 'es';
      submitBtn.querySelector('span').textContent =
        lang === 'it' ? 'Invia messaggio' :
        lang === 'en' ? 'Send message' :
        'Enviar mensaje';

      form.querySelectorAll('input, textarea, select').forEach(f => {
        f.style.borderColor = '';
      });
    }, 8000);
  });

  /* ══════════════════════════════════════
     SMOOTH SCROLL — offset por header fijo
  ══════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 110;
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ══════════════════════════════════════
     COUNTER — animar números del hero
  ══════════════════════════════════════ */
  function animateCounter(el, target, suffix = '') {
    let start    = 0;
    const duration = 1500;
    const step   = 16;
    const increment = target / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        el.textContent = target + suffix;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(start) + suffix;
      }
    }, step);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const nums = entry.target.querySelectorAll('.stat__number');
        nums.forEach(el => {
          const text = el.textContent.trim();
          if (text.includes('+')) animateCounter(el, parseInt(text), '+');
          else if (text.includes('%')) animateCounter(el, parseInt(text), '%');
          else if (text.includes('×')) animateCounter(el, parseInt(text), '×');
          else animateCounter(el, parseInt(text), '');
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero__stats');
  if (heroStats) statsObserver.observe(heroStats);

});
