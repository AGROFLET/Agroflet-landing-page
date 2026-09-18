/* ═══════════════════════════════════════════════════════════
   AgroFlet — Landing Page Interactivity
   Features:
   - Internationalization (ES / EN) with LocalStorage persistence
   - Header scroll & active navigation tracking
   - Mobile menu toggle & smooth anchor scrolling
   - Hero canvas particle system (performance-optimized)
   - Animated statistics counters
   - Scroll reveal animations
   - Touch & drag-enabled Testimonials carousel with auto-rotation
   - Interactive 3D tilt effect (hover-only)
   - Plan selection & Enterprise contact flow
   - Authentication modal (Sign Up / Sign In) with live validation
   - Password strength indicator & session persistence (LocalStorage)
   - Video modal with auto-stop on close
   - Legal (Privacy / Terms) & FAQ interactive modal
   - Toast notification system
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ─── 1. Internationalization (ES/EN) ───
  const translations = {
    es: {
      'nav.home': 'Inicio',
      'nav.plans': 'Planes',
      'nav.testimonials': 'Testimonios',
      'nav.whatWeSolve': 'La App',
      'nav.team': 'Equipo',
      'nav.videos': 'Videos',
      'nav.signIn': 'Iniciar Sesión',
      'nav.signUp': 'Registrarse',
      'nav.logout': 'Cerrar sesión',
      'nav.greeting': 'Hola',

      'hero.badge': '🚀 Plataforma de trazabilidad agrícola #1 en Perú',
      'hero.title1': 'AgroFlet',
      'hero.title2': 'Digitalizando la trazabilidad del',
      'hero.title3': 'transporte agrícola en Perú',
      'hero.subtitle': 'Confianza, transparencia y eficiencia en cada envío.',
      'hero.cta': 'Empieza ahora',
      'hero.ctaLearn': 'Conoce más ↓',
      'hero.stat1': 'Transportistas',
      'hero.stat2': 'Envíos rastreados',
      'hero.stat3': 'Satisfacción',

      'plans.tag': 'Suscripciones',
      'plans.title': 'Elige tu Plan Ideal',
      'plans.subtitle': 'Planes flexibles diseñados para productores, transportistas y compradores mayoristas.',
      'plans.period': '/mes',
      'plans.cta': 'Elegir Plan',
      'plans.ctaPro': 'Contactar ventas',
      'plans.basic.ribbon': '',
      'plans.basic.name': 'Básico',
      'plans.basic.units': 'Hasta 5 unidades de transporte',
      'plans.basic.f1': '✓ Rastreo GPS en tiempo real',
      'plans.basic.f2': '✓ Registro de envíos básico',
      'plans.basic.f3': '✓ Notificaciones por SMS',
      'plans.basic.f4': '✓ Soporte por email',
      'plans.basic.f5': '✕ Reportes avanzados',
      'plans.basic.f6': '✕ API de integración',
      'plans.standard.ribbon': '⭐ Más Popular',
      'plans.standard.name': 'Estándar',
      'plans.standard.units': 'Hasta 20 unidades de transporte',
      'plans.standard.f1': '✓ Todo del plan Básico',
      'plans.standard.f2': '✓ Reportes avanzados',
      'plans.standard.f3': '✓ Gestión de contratos',
      'plans.standard.f4': '✓ Dashboard analítico',
      'plans.standard.f5': '✓ Soporte prioritario 24/7',
      'plans.standard.f6': '✕ API de integración',
      'plans.pro.ribbon': '🏆 Enterprise',
      'plans.pro.name': 'Profesional',
      'plans.pro.units': 'Unidades ilimitadas',
      'plans.pro.f1': '✓ Todo del plan Estándar',
      'plans.pro.f2': '✓ API de integración completa',
      'plans.pro.f3': '✓ Multi-usuario & roles',
      'plans.pro.f4': '✓ Predicción de rutas con IA',
      'plans.pro.f5': '✓ Account manager dedicado',
      'plans.pro.f6': '✓ SLA garantizado 99.9%',

      'testimonials.tag': 'Testimonios',
      'testimonials.title': 'Lo que dicen nuestros usuarios',
      'testimonials.subtitle': 'Productores, transportistas y compradores confían en AgroFlet.',
      'testimonials.t1.quote': '"Desde que usamos AgroFlet, redujimos las pérdidas post-cosecha en un 40%. La trazabilidad en tiempo real cambió nuestro negocio."',
      'testimonials.t1.role': 'Productor de papa — Junín',
      'testimonials.t2.quote': '"AgroFlet me permite gestionar 15 camiones de manera eficiente. Las alertas y el seguimiento GPS son increíbles."',
      'testimonials.t2.role': 'Transportista — Arequipa',
      'testimonials.t3.quote': '"Como comprador mayorista, necesitaba saber exactamente cuándo llegan mis pedidos. AgroFlet me da esa tranquilidad."',
      'testimonials.t3.role': 'Mayorista — Lima (Mercado Santa Anita)',
      'testimonials.t4.quote': '"La transparencia que ofrece AgroFlet en los contratos de transporte nos ha generado más confianza con nuestros proveedores."',
      'testimonials.t4.role': 'Gerente de Operaciones — Ica',
      'testimonials.t5.quote': '"Antes perdíamos horas llamando para saber dónde estaban los camiones. Ahora lo veo todo desde mi celular en tiempo real."',
      'testimonials.t5.role': 'Productor de mango — Piura',

      'solve.tag': '¿Qué resuelve AgroFlet?',
      'solve.title': 'La App que transforma la logística agrícola',
      'solve.subtitle': 'Soluciones reales para los desafíos diarios del transporte de productos agrícolas en Perú.',
      'solve.c1.title': 'Rastreo GPS en Tiempo Real',
      'solve.c1.desc': 'Monitorea cada vehículo con precisión satelital. Sabe exactamente dónde está tu carga en todo momento.',
      'solve.c2.title': 'Contratos Digitales',
      'solve.c2.desc': 'Formaliza acuerdos entre productores y transportistas con contratos digitales seguros y verificables.',
      'solve.c3.title': 'Reducción de Pérdidas',
      'solve.c3.desc': 'Alertas inteligentes de temperatura, humedad y retrasos que evitan pérdidas post-cosecha hasta un 40%.',
      'solve.c4.title': 'Rutas Optimizadas con IA',
      'solve.c4.desc': 'Algoritmos inteligentes que sugieren las mejores rutas considerando clima, tráfico y estado de carreteras.',
      'solve.c5.title': 'Red de Confianza',
      'solve.c5.desc': 'Conecta productores, transportistas y compradores en una plataforma verificada con reputación transparente.',
      'solve.c6.title': 'App Móvil Intuitiva',
      'solve.c6.desc': 'Gestiona todo desde tu celular. Interfaz simple diseñada para usuarios con cualquier nivel de experiencia digital.',

      'team.tag': 'Nuestro Equipo',
      'team.title': 'El equipo detrás de AgroFlet',
      'team.subtitle': 'Ingenieros y emprendedores comprometidos con la transformación digital del agro peruano.',
      'team.cesar.role': 'Full-Stack Developer',
      'team.adriano.role': 'Backend Engineer',
      'team.bernie.role': 'UX/UI Designer',
      'team.christoper.role': 'Mobile Developer',
      'team.jose.role': 'DevOps & Cloud',

      'videos.tag': 'Videos',
      'videos.title': 'Conoce a AgroFlet en acción',
      'videos.subtitle': 'Descubre cómo funciona nuestra plataforma y conoce al equipo detrás del proyecto.',
      'videos.v1.title': 'Sobre el Equipo — Quiénes somos',
      'videos.v1.desc': 'Conoce la historia, la motivación y la visión del equipo fundador de AgroFlet.',
      'videos.v2.title': 'Sobre el Producto — Demo en vivo',
      'videos.v2.desc': 'Mira cómo AgroFlet gestiona rutas, contratos y trazabilidad desde la app móvil.',

      'footer.desc': 'Digitalizando la trazabilidad del transporte agrícola en Perú. Confianza, transparencia y eficiencia.',
      'footer.links': 'Enlaces',
      'footer.legal': 'Legal',
      'footer.contact': 'Contacto',
      'footer.privacy': 'Política de Privacidad',
      'footer.terms': 'Términos de Uso',
      'footer.faq': 'FAQ',
      'footer.rights': 'Todos los derechos reservados.',

      'auth.signUpTitle': 'Crear cuenta',
      'auth.signInTitle': 'Iniciar sesión',
      'auth.name': 'Nombre completo',
      'auth.namePlaceholder': 'Ej: Carlos Mendoza',
      'auth.email': 'Correo electrónico',
      'auth.emailPlaceholder': 'tu@email.com',
      'auth.phone': 'Teléfono',
      'auth.phonePlaceholder': '+51 999 999 999',
      'auth.role': 'Tipo de usuario',
      'auth.roleSelect': 'Selecciona...',
      'auth.roleProducer': 'Productor',
      'auth.roleTransporter': 'Transportista',
      'auth.roleBuyer': 'Comprador mayorista',
      'auth.password': 'Contraseña',
      'auth.passwordPlaceholder': 'Mín. 8 caracteres',
      'auth.passwordSignInPlaceholder': 'Tu contraseña',
      'auth.signUpBtn': 'Crear cuenta',
      'auth.signInBtn': 'Iniciar sesión',
      'auth.haveAccount': '¿Ya tienes cuenta?',
      'auth.switchSignIn': 'Inicia sesión',
      'auth.noAccount': '¿No tienes cuenta?',
      'auth.switchSignUp': 'Regístrate',

      'toast.signUpSuccess': '¡Cuenta creada exitosamente! Bienvenido a AgroFlet.',
      'toast.signInSuccess': '¡Sesión iniciada con éxito!',
      'toast.logout': 'Sesión cerrada correctamente.',
      'toast.planSelected': 'Plan seleccionado. Por favor completa tu registro.',
      'toast.salesContact': 'Nuestro equipo comercial se contactará contigo a la brevedad.',

      'validation.nameShort': 'El nombre debe tener al menos 3 caracteres',
      'validation.emailInvalid': 'Ingresa un correo electrónico válido',
      'validation.phoneInvalid': 'Ingresa un teléfono válido (ej: +51 999 999 999)',
      'validation.passwordShort': 'La contraseña debe tener mínimo 8 caracteres',
      'validation.passwordRequired': 'Ingresa tu contraseña para continuar',
      'validation.roleRequired': 'Por favor selecciona tu tipo de usuario',

      'faq.title': 'Preguntas Frecuentes (FAQ)',
      'privacy.title': 'Política de Privacidad',
      'terms.title': 'Términos de Servicio'
    },
    en: {
      'nav.home': 'Home',
      'nav.plans': 'Plans',
      'nav.testimonials': 'Testimonials',
      'nav.whatWeSolve': 'The App',
      'nav.team': 'Team',
      'nav.videos': 'Videos',
      'nav.signIn': 'Sign In',
      'nav.signUp': 'Sign Up',
      'nav.logout': 'Sign Out',
      'nav.greeting': 'Hello',

      'hero.badge': '🚀 #1 Agricultural Traceability Platform in Peru',
      'hero.title1': 'AgroFlet',
      'hero.title2': 'Digitizing traceability of',
      'hero.title3': 'agricultural transport in Peru',
      'hero.subtitle': 'Trust, transparency, and efficiency in every shipment.',
      'hero.cta': 'Get started',
      'hero.ctaLearn': 'Learn more ↓',
      'hero.stat1': 'Transporters',
      'hero.stat2': 'Shipments tracked',
      'hero.stat3': 'Satisfaction',

      'plans.tag': 'Subscriptions',
      'plans.title': 'Choose Your Ideal Plan',
      'plans.subtitle': 'Flexible plans designed for producers, transporters, and wholesale buyers.',
      'plans.period': '/month',
      'plans.cta': 'Choose Plan',
      'plans.ctaPro': 'Contact sales',
      'plans.basic.ribbon': '',
      'plans.basic.name': 'Basic',
      'plans.basic.units': 'Up to 5 transport units',
      'plans.basic.f1': '✓ Real-time GPS tracking',
      'plans.basic.f2': '✓ Basic shipment logging',
      'plans.basic.f3': '✓ SMS notifications',
      'plans.basic.f4': '✓ Email support',
      'plans.basic.f5': '✕ Advanced reports',
      'plans.basic.f6': '✕ Integration API',
      'plans.standard.ribbon': '⭐ Most Popular',
      'plans.standard.name': 'Standard',
      'plans.standard.units': 'Up to 20 transport units',
      'plans.standard.f1': '✓ Everything in Basic',
      'plans.standard.f2': '✓ Advanced reports',
      'plans.standard.f3': '✓ Contract management',
      'plans.standard.f4': '✓ Analytics dashboard',
      'plans.standard.f5': '✓ 24/7 Priority support',
      'plans.standard.f6': '✕ Integration API',
      'plans.pro.ribbon': '🏆 Enterprise',
      'plans.pro.name': 'Professional',
      'plans.pro.units': 'Unlimited units',
      'plans.pro.f1': '✓ Everything in Standard',
      'plans.pro.f2': '✓ Full integration API',
      'plans.pro.f3': '✓ Multi-user & roles',
      'plans.pro.f4': '✓ AI-powered route prediction',
      'plans.pro.f5': '✓ Dedicated account manager',
      'plans.pro.f6': '✓ 99.9% SLA guaranteed',

      'testimonials.tag': 'Testimonials',
      'testimonials.title': 'What our users say',
      'testimonials.subtitle': 'Producers, transporters, and buyers trust AgroFlet.',
      'testimonials.t1.quote': '"Since using AgroFlet, we reduced post-harvest losses by 40%. Real-time traceability changed our business."',
      'testimonials.t1.role': 'Potato producer — Junín',
      'testimonials.t2.quote': '"AgroFlet lets me efficiently manage 15 trucks. The alerts and GPS tracking are incredible."',
      'testimonials.t2.role': 'Transporter — Arequipa',
      'testimonials.t3.quote': '"As a wholesale buyer, I needed to know exactly when my orders arrive. AgroFlet gives me that peace of mind."',
      'testimonials.t3.role': 'Wholesale buyer — Lima (Santa Anita Market)',
      'testimonials.t4.quote': '"The transparency AgroFlet offers in transport contracts has built more trust with our suppliers."',
      'testimonials.t4.role': 'Operations Manager — Ica',
      'testimonials.t5.quote': '"We used to spend hours calling to find out where the trucks were. Now I see everything from my phone in real time."',
      'testimonials.t5.role': 'Mango producer — Piura',

      'solve.tag': 'What does AgroFlet solve?',
      'solve.title': 'The App that transforms agricultural logistics',
      'solve.subtitle': 'Real solutions for the daily challenges of agricultural product transport in Peru.',
      'solve.c1.title': 'Real-Time GPS Tracking',
      'solve.c1.desc': 'Monitor every vehicle with satellite precision. Know exactly where your cargo is at all times.',
      'solve.c2.title': 'Digital Contracts',
      'solve.c2.desc': 'Formalize agreements between producers and transporters with secure, verifiable digital contracts.',
      'solve.c3.title': 'Loss Reduction',
      'solve.c3.desc': 'Smart temperature, humidity, and delay alerts that prevent post-harvest losses by up to 40%.',
      'solve.c4.title': 'AI-Optimized Routes',
      'solve.c4.desc': 'Smart algorithms that suggest the best routes considering weather, traffic, and road conditions.',
      'solve.c5.title': 'Trust Network',
      'solve.c5.desc': 'Connect producers, transporters, and buyers on a verified platform with transparent reputation.',
      'solve.c6.title': 'Intuitive Mobile App',
      'solve.c6.desc': 'Manage everything from your phone. Simple interface designed for users of any digital experience level.',

      'team.tag': 'Our Team',
      'team.title': 'The team behind AgroFlet',
      'team.subtitle': 'Engineers and entrepreneurs committed to the digital transformation of Peruvian agriculture.',
      'team.cesar.role': 'Full-Stack Developer',
      'team.adriano.role': 'Backend Engineer',
      'team.bernie.role': 'UX/UI Designer',
      'team.christoper.role': 'Mobile Developer',
      'team.jose.role': 'DevOps & Cloud',

      'videos.tag': 'Videos',
      'videos.title': 'See AgroFlet in action',
      'videos.subtitle': 'Discover how our platform works and meet the team behind the project.',
      'videos.v1.title': 'About the Team — Who we are',
      'videos.v1.desc': 'Learn about the story, motivation, and vision of the AgroFlet founding team.',
      'videos.v2.title': 'About the Product — Live Demo',
      'videos.v2.desc': 'See how AgroFlet manages routes, contracts, and traceability from the mobile app.',

      'footer.desc': 'Digitizing the traceability of agricultural transport in Peru. Trust, transparency, and efficiency.',
      'footer.links': 'Links',
      'footer.legal': 'Legal',
      'footer.contact': 'Contact',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Use',
      'footer.faq': 'FAQ',
      'footer.rights': 'All rights reserved.',

      'auth.signUpTitle': 'Create account',
      'auth.signInTitle': 'Sign in',
      'auth.name': 'Full name',
      'auth.namePlaceholder': 'E.g.: Carlos Mendoza',
      'auth.email': 'Email address',
      'auth.emailPlaceholder': 'you@email.com',
      'auth.phone': 'Phone number',
      'auth.phonePlaceholder': '+51 999 999 999',
      'auth.role': 'User type',
      'auth.roleSelect': 'Select...',
      'auth.roleProducer': 'Producer',
      'auth.roleTransporter': 'Transporter',
      'auth.roleBuyer': 'Wholesale buyer',
      'auth.password': 'Password',
      'auth.passwordPlaceholder': 'Min. 8 characters',
      'auth.passwordSignInPlaceholder': 'Your password',
      'auth.signUpBtn': 'Create account',
      'auth.signInBtn': 'Sign in',
      'auth.haveAccount': 'Already have an account?',
      'auth.switchSignIn': 'Sign in',
      'auth.noAccount': "Don't have an account?",
      'auth.switchSignUp': 'Sign up',

      'toast.signUpSuccess': 'Account created successfully! Welcome to AgroFlet.',
      'toast.signInSuccess': 'Signed in successfully!',
      'toast.logout': 'Signed out successfully.',
      'toast.planSelected': 'Plan selected. Please complete your registration.',
      'toast.salesContact': 'Our sales team will reach out to you shortly.',

      'validation.nameShort': 'Name must be at least 3 characters',
      'validation.emailInvalid': 'Please enter a valid email address',
      'validation.phoneInvalid': 'Please enter a valid phone number',
      'validation.passwordShort': 'Password must be at least 8 characters',
      'validation.passwordRequired': 'Please enter your password to continue',
      'validation.roleRequired': 'Please select your user type',

      'faq.title': 'Frequently Asked Questions (FAQ)',
      'privacy.title': 'Privacy Policy',
      'terms.title': 'Terms of Service'
    }
  };

  let currentLang = localStorage.getItem('agroflet_lang') || 'es';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('agroflet_lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.lang = lang;

    // Update text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    // Update form placeholders
    const nameInput = document.getElementById('signUpName');
    if (nameInput) nameInput.placeholder = translations[lang]['auth.namePlaceholder'];

    const emailSignUp = document.getElementById('signUpEmail');
    if (emailSignUp) emailSignUp.placeholder = translations[lang]['auth.emailPlaceholder'];

    const phoneInput = document.getElementById('signUpPhone');
    if (phoneInput) phoneInput.placeholder = translations[lang]['auth.phonePlaceholder'];

    const passSignUp = document.getElementById('signUpPassword');
    if (passSignUp) passSignUp.placeholder = translations[lang]['auth.passwordPlaceholder'];

    const emailSignIn = document.getElementById('signInEmail');
    if (emailSignIn) emailSignIn.placeholder = translations[lang]['auth.emailPlaceholder'];

    const passSignIn = document.getElementById('signInPassword');
    if (passSignIn) passSignIn.placeholder = translations[lang]['auth.passwordSignInPlaceholder'];

    // Update language toggle button label
    const langLabel = document.getElementById('langLabel');
    if (langLabel) langLabel.textContent = lang.toUpperCase();

    // Update document title
    if (lang === 'en') {
      document.title = 'AgroFlet — Digitizing Agricultural Transport Traceability in Peru';
    } else {
      document.title = 'AgroFlet — Digitalizando la trazabilidad del transporte agrícola en Perú';
    }

    // Refresh user session display if logged in
    renderUserSession();
  }

  // Language toggle button listener
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const newLang = currentLang === 'es' ? 'en' : 'es';
      setLanguage(newLang);
    });
  }

  // ─── 2. Header Scroll & Active Nav Tracking ───
  const header = document.getElementById('header');

  function handleScroll() {
    if (!header) return;
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    const scrollY = window.scrollY + 180;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ─── 3. Mobile Menu Handling ───
  const burger = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  function closeMobileMenu() {
    if (mobileMenu && burger) {
      mobileMenu.classList.remove('open');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open');
      burger.classList.toggle('active');
      burger.setAttribute('aria-expanded', String(!isOpen));
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    mobileMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // ─── 4. Smooth Anchor Scroll ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        closeMobileMenu();
        const headerHeight = header ? header.offsetHeight : 80;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
      }
    });
  });

  // Learn more button
  const btnCtaLearn = document.getElementById('btnCtaLearn');
  if (btnCtaLearn) {
    btnCtaLearn.addEventListener('click', () => {
      const plansSection = document.getElementById('plans');
      if (plansSection) {
        plansSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Hero mouse scroll indicator
  const heroScroll = document.querySelector('.hero__scroll-indicator');
  if (heroScroll) {
    heroScroll.style.cursor = 'pointer';
    heroScroll.addEventListener('click', () => {
      const plansSection = document.getElementById('plans');
      if (plansSection) {
        plansSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // ─── 5. Hero Particles Animation ───
  function createParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;

    container.innerHTML = '';
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 18 : 36;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      const size = Math.random() * 5 + 2;
      const left = Math.random() * 100;
      const duration = Math.random() * 8 + 7;
      const delay = Math.random() * 8;

      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        bottom: -20px;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        opacity: ${Math.random() * 0.35 + 0.1};
        background: ${Math.random() > 0.5 ? 'rgba(39, 174, 96, 0.45)' : 'rgba(243, 156, 18, 0.35)'};
      `;
      container.appendChild(particle);
    }
  }

  createParticles();
  window.addEventListener('resize', createParticles);

  // Pause particle animations when tab is inactive to save battery
  document.addEventListener('visibilitychange', () => {
    const container = document.getElementById('heroParticles');
    if (!container) return;
    container.style.animationPlayState = document.hidden ? 'paused' : 'running';
  });

  // ─── 6. Statistics Counter Animation ───
  function animateCounters() {
    const counters = document.querySelectorAll('.hero__stat-number[data-count]');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'), 10) || 0;
      const duration = 2000;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = Math.floor(eased * target);

        counter.textContent = current.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          counter.textContent = target.toLocaleString();
        }
      }

      requestAnimationFrame(update);
    });
  }

  const heroElement = document.getElementById('hero');
  if (heroElement && 'IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          heroObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    heroObserver.observe(heroElement);
  } else {
    animateCounters();
  }

  // ─── 7. Scroll Reveal Animation ───
  const revealElements = document.querySelectorAll(
    '.plan-card, .testimonial-card, .solve-card, .team-card, .video-card, .section__header'
  );

  revealElements.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, index * 80);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // ─── 8. 3D Tilt Effect (Hover Devices Only) ───
  const canHover = window.matchMedia('(hover: hover)').matches;
  if (canHover) {
    document.querySelectorAll('[data-tilt]').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / centerY * -5;
        const rotateY = (x - centerX) / centerX * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // ─── 9. Testimonials Carousel with Touch & Swipe ───
  const track = document.getElementById('testimonialTrack');
  const carouselEl = document.getElementById('testimonialCarousel');
  const dotsContainer = document.getElementById('testimonialDots');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');

  let currentSlide = 0;
  let cardsPerView = 1;
  let carouselInterval = null;

  if (track && carouselEl && dotsContainer) {
    const cards = track.querySelectorAll('.testimonial-card');

    function getCardsPerView() {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }

    function getTotalSlides() {
      return Math.ceil(cards.length / cardsPerView);
    }

    function createDots() {
      dotsContainer.innerHTML = '';
      const total = getTotalSlides();
      for (let i = 0; i < total; i++) {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.setAttribute('aria-label', `Testimonio ${i + 1}`);
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
      }
    }

    function goToSlide(index) {
      const total = getTotalSlides();
      currentSlide = Math.max(0, Math.min(index, total - 1));

      if (cards.length > 0) {
        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(track).gap) || 24;
        const offset = currentSlide * (cardWidth + gap) * cardsPerView;
        track.style.transform = `translateX(-${offset}px)`;
      }

      dotsContainer.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }

    function initCarousel() {
      cardsPerView = getCardsPerView();
      createDots();
      goToSlide(Math.min(currentSlide, getTotalSlides() - 1));
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const total = getTotalSlides();
        goToSlide(currentSlide === 0 ? total - 1 : currentSlide - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const total = getTotalSlides();
        goToSlide((currentSlide + 1) % total);
      });
    }

    // Auto-advance
    function startAutoSlide() {
      stopAutoSlide();
      carouselInterval = setInterval(() => {
        const total = getTotalSlides();
        goToSlide((currentSlide + 1) % total);
      }, 5500);
    }

    function stopAutoSlide() {
      if (carouselInterval) clearInterval(carouselInterval);
    }

    carouselEl.addEventListener('mouseenter', stopAutoSlide);
    carouselEl.addEventListener('mouseleave', startAutoSlide);

    // Touch & Swipe gestures for mobile
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    carouselEl.addEventListener('touchstart', (e) => {
      stopAutoSlide();
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    carouselEl.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].clientX;
      touchEndY = e.changedTouches[0].clientY;
      handleSwipe();
      startAutoSlide();
    }, { passive: true });

    // Mouse drag support for desktop
    let isDragging = false;
    let mouseStartX = 0;

    carouselEl.addEventListener('mousedown', (e) => {
      isDragging = true;
      mouseStartX = e.clientX;
      stopAutoSlide();
    });
    
    window.addEventListener('mouseup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      const diffX = e.clientX - mouseStartX;
      if (diffX < -50) {
        const total = getTotalSlides();
        goToSlide((currentSlide + 1) % total);
      } else if (diffX > 50) {
        const total = getTotalSlides();
        goToSlide(currentSlide === 0 ? total - 1 : currentSlide - 1);
      }
      startAutoSlide();
    });

    function handleSwipe() {
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;
      const total = getTotalSlides();

      // Only trigger horizontal swipe if movement was predominantly horizontal
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
        if (diffX < 0) {
          goToSlide((currentSlide + 1) % total);
        } else {
          goToSlide(currentSlide === 0 ? total - 1 : currentSlide - 1);
        }
      }
    }

    window.addEventListener('resize', initCarousel);
    initCarousel();
    startAutoSlide();
  }

  // ─── 10. Toast Notification System ───
  function showToast(message, type = 'success') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'alert');
    const icon = type === 'success' ? '✓' : 'ℹ';
    toast.innerHTML = `<span class="toast__icon">${icon}</span> <span>${message}</span>`;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  // ─── 11. Auth Modal & Session Management ───
  const authModal = document.getElementById('authModal');
  const signUpForm = document.getElementById('signUpForm');
  const signInForm = document.getElementById('signInForm');
  const modalTitle = document.getElementById('modalTitle');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('modalBackdrop');

  function openAuthModal(mode = 'signUp', preselectedPlan = null) {
    if (!authModal) return;
    closeMobileMenu();

    authModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Clear previous errors
    clearFormErrors(signUpForm);
    clearFormErrors(signInForm);

    if (mode === 'signUp') {
      if (signUpForm) signUpForm.style.display = 'block';
      if (signInForm) signInForm.style.display = 'none';
      if (modalTitle) {
        modalTitle.setAttribute('data-i18n', 'auth.signUpTitle');
        modalTitle.textContent = translations[currentLang]['auth.signUpTitle'];
        if (preselectedPlan) {
          modalTitle.textContent += ` (${preselectedPlan})`;
        }
      }
      // Focus first input
      setTimeout(() => {
        const firstInput = document.getElementById('signUpName');
        if (firstInput) firstInput.focus();
      }, 200);
    } else {
      if (signUpForm) signUpForm.style.display = 'none';
      if (signInForm) signInForm.style.display = 'block';
      if (modalTitle) {
        modalTitle.setAttribute('data-i18n', 'auth.signInTitle');
        modalTitle.textContent = translations[currentLang]['auth.signInTitle'];
      }
      setTimeout(() => {
        const firstInput = document.getElementById('signInEmail');
        if (firstInput) firstInput.focus();
      }, 200);
    }
  }

  function closeAuthModal() {
    if (authModal) {
      authModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeAuthModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeAuthModal);

  // Switch between Sign In and Sign Up inside modal
  const switchToSignIn = document.getElementById('switchToSignIn');
  if (switchToSignIn) {
    switchToSignIn.addEventListener('click', (e) => {
      e.preventDefault();
      openAuthModal('signIn');
    });
  }

  const switchToSignUp = document.getElementById('switchToSignUp');
  if (switchToSignUp) {
    switchToSignUp.addEventListener('click', (e) => {
      e.preventDefault();
      openAuthModal('signUp');
    });
  }

  // Open modal button triggers
  ['btnSignUp', 'btnSignUpMobile', 'btnCtaHero'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', () => openAuthModal('signUp'));
  });

  ['btnSignIn', 'btnSignInMobile'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', () => openAuthModal('signIn'));
  });

  // ─── 12. Plan Selection Interaction ───
  const planButtons = document.querySelectorAll('.plans__grid .btn');
  planButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const planCard = btn.closest('.plan-card');
      const planNameEl = planCard ? planCard.querySelector('.plan-card__name') : null;
      const planName = planNameEl ? planNameEl.textContent.trim() : 'Plan';

      if (btn.getAttribute('data-i18n') === 'plans.ctaPro') {
        showToast(translations[currentLang]['toast.salesContact'], 'info');
        openAuthModal('signUp', 'Enterprise / ' + planName);
      } else {
        showToast(translations[currentLang]['toast.planSelected'], 'success');
        openAuthModal('signUp', planName);
      }
    });
  });

  // ─── 13. Form Validation & User Session Simulation ───
  function clearFormErrors(form) {
    if (!form) return;
    form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    form.querySelectorAll('.auth-form__error').forEach(el => el.textContent = '');
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  function validatePhone(phone) {
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');
    return /^\+?[0-9]{7,15}$/.test(cleaned);
  }

  function getPasswordStrength(password) {
    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return Math.min(score, 4);
  }

  // Password strength meter
  const passwordInput = document.getElementById('signUpPassword');
  if (passwordInput) {
    passwordInput.addEventListener('input', () => {
      const strength = getPasswordStrength(passwordInput.value);
      const bar = document.querySelector('.auth-form__strength-bar');
      if (bar) {
        const colors = ['#E74C3C', '#E67E22', '#F1C40F', '#2ECC71', '#27AE60'];
        const widths = [15, 35, 60, 85, 100];
        bar.style.width = passwordInput.value ? `${widths[strength]}%` : '0';
        bar.style.background = colors[strength];
      }
    });
  }

  // Live input error cleanup
  ['signUpName', 'signUpEmail', 'signUpPhone', 'signUpPassword', 'signInEmail', 'signInPassword'].forEach(id => {
    const input = document.getElementById(id);
    const errorEl = document.getElementById(id + 'Error');
    if (input && errorEl) {
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
          input.classList.remove('error');
          errorEl.textContent = '';
        }
      });
    }
  });

  // User session state handling
  function getUserSession() {
    try {
      const raw = localStorage.getItem('agroflet_user');
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function saveUserSession(userData) {
    localStorage.setItem('agroflet_user', JSON.stringify(userData));
    renderUserSession();
  }

  function clearUserSession() {
    localStorage.removeItem('agroflet_user');
    renderUserSession();
    showToast(translations[currentLang]['toast.logout'], 'info');
  }

  function renderUserSession() {
    const user = getUserSession();
    const btnSignIn = document.getElementById('btnSignIn');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnSignInMobile = document.getElementById('btnSignInMobile');
    const btnSignUpMobile = document.getElementById('btnSignUpMobile');

    if (user && user.name) {
      const firstName = user.name.split(' ')[0];
      const greetingText = `${translations[currentLang]['nav.greeting']}, ${firstName}`;

      // Desktop Navbar
      if (btnSignIn && btnSignUp) {
        btnSignIn.textContent = `👤 ${greetingText}`;
        btnSignIn.onclick = () => showToast(`${greetingText}! Rol: ${user.role || 'Usuario'}`, 'info');

        btnSignUp.textContent = translations[currentLang]['nav.logout'];
        btnSignUp.className = 'btn btn--outline btn--sm';
        btnSignUp.onclick = clearUserSession;
      }

      // Mobile Menu
      if (btnSignInMobile && btnSignUpMobile) {
        btnSignInMobile.textContent = `👤 ${greetingText}`;
        btnSignInMobile.onclick = () => showToast(`${greetingText}!`, 'info');

        btnSignUpMobile.textContent = translations[currentLang]['nav.logout'];
        btnSignUpMobile.onclick = () => {
          closeMobileMenu();
          clearUserSession();
        };
      }
    } else {
      // Restore default buttons
      if (btnSignIn && btnSignUp) {
        btnSignIn.textContent = translations[currentLang]['nav.signIn'];
        btnSignIn.className = 'btn btn--outline btn--sm';
        btnSignIn.onclick = () => openAuthModal('signIn');

        btnSignUp.textContent = translations[currentLang]['nav.signUp'];
        btnSignUp.className = 'btn btn--primary btn--sm';
        btnSignUp.onclick = () => openAuthModal('signUp');
      }

      if (btnSignInMobile && btnSignUpMobile) {
        btnSignInMobile.textContent = translations[currentLang]['nav.signIn'];
        btnSignInMobile.onclick = () => openAuthModal('signIn');

        btnSignUpMobile.textContent = translations[currentLang]['nav.signUp'];
        btnSignUpMobile.onclick = () => openAuthModal('signUp');
      }
    }
  }

  // Sign Up submission
  if (signUpForm) {
    signUpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const name = document.getElementById('signUpName');
      const nameError = document.getElementById('signUpNameError');
      if (name.value.trim().length < 3) {
        nameError.textContent = translations[currentLang]['validation.nameShort'];
        name.classList.add('error');
        valid = false;
      } else {
        nameError.textContent = '';
        name.classList.remove('error');
      }

      const email = document.getElementById('signUpEmail');
      const emailError = document.getElementById('signUpEmailError');
      if (!validateEmail(email.value)) {
        emailError.textContent = translations[currentLang]['validation.emailInvalid'];
        email.classList.add('error');
        valid = false;
      } else {
        emailError.textContent = '';
        email.classList.remove('error');
      }

      const phone = document.getElementById('signUpPhone');
      const phoneError = document.getElementById('signUpPhoneError');
      if (!validatePhone(phone.value)) {
        phoneError.textContent = translations[currentLang]['validation.phoneInvalid'];
        phone.classList.add('error');
        valid = false;
      } else {
        phoneError.textContent = '';
        phone.classList.remove('error');
      }

      const role = document.getElementById('signUpRole');
      if (!role.value) {
        role.classList.add('error');
        valid = false;
      } else {
        role.classList.remove('error');
      }

      const password = document.getElementById('signUpPassword');
      const passwordError = document.getElementById('signUpPasswordError');
      if (password.value.length < 8) {
        passwordError.textContent = translations[currentLang]['validation.passwordShort'];
        password.classList.add('error');
        valid = false;
      } else {
        passwordError.textContent = '';
        password.classList.remove('error');
      }

      if (valid) {
        const submitBtn = signUpForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = currentLang === 'es' ? 'Creando cuenta...' : 'Creating account...';

        setTimeout(() => {
          saveUserSession({
            name: name.value.trim(),
            email: email.value.trim(),
            phone: phone.value.trim(),
            role: role.options[role.selectedIndex].text
          });

          closeAuthModal();
          showToast(translations[currentLang]['toast.signUpSuccess']);
          signUpForm.reset();
          submitBtn.disabled = false;
          submitBtn.textContent = translations[currentLang]['auth.signUpBtn'];

          const strengthBar = document.querySelector('.auth-form__strength-bar');
          if (strengthBar) strengthBar.style.width = '0';
        }, 1200);
      }
    });
  }

  // Sign In submission
  if (signInForm) {
    signInForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const email = document.getElementById('signInEmail');
      const emailError = document.getElementById('signInEmailError');
      if (!validateEmail(email.value)) {
        emailError.textContent = translations[currentLang]['validation.emailInvalid'];
        email.classList.add('error');
        valid = false;
      } else {
        emailError.textContent = '';
        email.classList.remove('error');
      }

      const password = document.getElementById('signInPassword');
      const passwordError = document.getElementById('signInPasswordError');
      if (!password.value) {
        passwordError.textContent = translations[currentLang]['validation.passwordRequired'];
        password.classList.add('error');
        valid = false;
      } else {
        passwordError.textContent = '';
        password.classList.remove('error');
      }

      if (valid) {
        const submitBtn = signInForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = currentLang === 'es' ? 'Verificando...' : 'Verifying...';

        setTimeout(() => {
          // Check if previous registration exists, or default to mock
          const existing = getUserSession();
          const userName = existing && existing.email === email.value.trim() ? existing.name : email.value.split('@')[0];

          saveUserSession({
            name: userName,
            email: email.value.trim(),
            role: existing ? existing.role : 'Productor'
          });

          closeAuthModal();
          showToast(translations[currentLang]['toast.signInSuccess']);
          signInForm.reset();
          submitBtn.disabled = false;
          submitBtn.textContent = translations[currentLang]['auth.signInBtn'];
        }, 1000);
      }
    });
  }

  // ─── 14. Video Modal with Auto-Stop ───
  const videoModal = document.getElementById('videoModal');
  const videoIframe = document.getElementById('videoIframe');
  const videoModalClose = document.getElementById('videoModalClose');
  const videoModalBackdrop = document.getElementById('videoModalBackdrop');

  document.querySelectorAll('.video-card__play-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const videoUrl = btn.getAttribute('data-video');
      if (videoIframe && videoUrl) {
        const separator = videoUrl.includes('?') ? '&' : '?';
        videoIframe.src = `${videoUrl}${separator}autoplay=1`;
      }
      if (videoModal) {
        videoModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeVideoModal() {
    if (videoModal) {
      videoModal.classList.remove('open');
      document.body.style.overflow = '';
    }
    if (videoIframe) {
      videoIframe.src = '';
    }
  }

  if (videoModalClose) videoModalClose.addEventListener('click', closeVideoModal);
  if (videoModalBackdrop) videoModalBackdrop.addEventListener('click', closeVideoModal);

  // ─── 15. Legal & FAQ Interactive Modal ───
  function openInfoModal(type) {
    let modal = document.getElementById('infoModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'infoModal';
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal__backdrop" id="infoModalBackdrop"></div>
        <div class="modal__content" style="max-width: 580px;">
          <button class="modal__close" id="infoModalClose" aria-label="Cerrar">&times;</button>
          <div class="modal__header">
            <h2 class="modal__title" id="infoModalTitle" style="font-size: 1.4rem;"></h2>
          </div>
          <div id="infoModalBody" style="font-size: 0.95rem; line-height: 1.6; color: var(--gray-700); max-height: 60vh; overflow-y: auto; padding-right: 0.5rem; margin-top: 1rem;"></div>
        </div>
      `;
      document.body.appendChild(modal);

      document.getElementById('infoModalClose').addEventListener('click', closeInfoModal);
      document.getElementById('infoModalBackdrop').addEventListener('click', closeInfoModal);
    }

    const titleEl = document.getElementById('infoModalTitle');
    const bodyEl = document.getElementById('infoModalBody');

    if (type === 'privacy') {
      titleEl.textContent = translations[currentLang]['privacy.title'];
      bodyEl.innerHTML = currentLang === 'es' ? `
        <p><strong>1. Responsable del Tratamiento:</strong> AgroFlet Perú S.A.C., con domicilio en Lima, Perú, garantiza la protección y confidencialidad de tus datos conforme a la Ley N° 29733 (Ley de Protección de Datos Personales de Perú).</p>
        <p style="margin-top: 0.75rem;"><strong>2. Datos Recopilados:</strong> Recopilamos información de contacto, geolocalización GPS en tiempo real de unidades de transporte, registros de carga agrícola y documentación digital de transporte (guías de remisión).</p>
        <p style="margin-top: 0.75rem;"><strong>3. Finalidad:</strong> La información se utiliza exclusivamente para permitir la trazabilidad logística, gestión de contratos digitales, cálculo de rutas y alertas de conservación de cosechas.</p>
        <p style="margin-top: 0.75rem;"><strong>4. Seguridad:</strong> Empleamos cifrado TLS 1.3 en tránsito y cifrado AES-256 en reposo para salvaguardar tu información.</p>
      ` : `
        <p><strong>1. Data Controller:</strong> AgroFlet Peru S.A.C., based in Lima, Peru, ensures the confidentiality of personal data in compliance with Peruvian Law No. 29733.</p>
        <p style="margin-top: 0.75rem;"><strong>2. Data Collected:</strong> We collect contact info, real-time GPS coordinates of transport units, cargo records, and digital transit documentation.</p>
        <p style="margin-top: 0.75rem;"><strong>3. Purpose:</strong> Data is solely utilized to provide agricultural freight traceability, digital contracts, route optimization, and freshness monitoring.</p>
        <p style="margin-top: 0.75rem;"><strong>4. Security:</strong> We enforce TLS 1.3 encryption in transit and AES-256 in storage.</p>
      `;
    } else if (type === 'terms') {
      titleEl.textContent = translations[currentLang]['terms.title'];
      bodyEl.innerHTML = currentLang === 'es' ? `
        <p><strong>1. Aceptación:</strong> Al registrarte en AgroFlet, aceptas estos términos y condiciones que rigen el uso del software de gestión y trazabilidad.</p>
        <p style="margin-top: 0.75rem;"><strong>2. Cumplimiento Normativo:</strong> Los transportistas registrados deben contar con autorizaciones vigentes emitidas por el MTC, SUTRAN y SENASA para el traslado seguro de productos agrícolas.</p>
        <p style="margin-top: 0.75rem;"><strong>3. Contratos Digitales:</strong> Los acuerdos pactados dentro de AgroFlet tienen validez vinculante entre las partes suscriptoras.</p>
        <p style="margin-top: 0.75rem;"><strong>4. Responsabilidad de la Carga:</strong> AgroFlet actúa como intermediario tecnológico que provee trazabilidad y herramientas analíticas.</p>
      ` : `
        <p><strong>1. Acceptance:</strong> Registering on AgroFlet constitutes acceptance of these terms governing platform usage.</p>
        <p style="margin-top: 0.75rem;"><strong>2. Regulatory Compliance:</strong> Registered transporters must hold valid certifications issued by MTC, SUTRAN, and SENASA.</p>
        <p style="margin-top: 0.75rem;"><strong>3. Digital Contracts:</strong> Agreements created inside AgroFlet are legally binding between contracting parties.</p>
        <p style="margin-top: 0.75rem;"><strong>4. Cargo Accountability:</strong> AgroFlet provides traceability technology and analytical tools to streamline operations.</p>
      `;
    } else if (type === 'faq') {
      titleEl.textContent = translations[currentLang]['faq.title'];
      bodyEl.innerHTML = currentLang === 'es' ? `
        <div style="margin-bottom: 1rem;">
          <h4 style="color: var(--navy); margin-bottom: 0.25rem;">¿Cómo funciona la trazabilidad satelital?</h4>
          <p>La app móvil del transportista envía coordenadas GPS y datos telemáticos encriptados a nuestra nube cada 15 segundos, visibles en el mapa del productor y comprador.</p>
        </div>
        <div style="margin-bottom: 1rem;">
          <h4 style="color: var(--navy); margin-bottom: 0.25rem;">¿Qué necesito para registrarme como transportista?</h4>
          <p>Licencia de conducir vigente, SOAT, revisión técnica y registro sanitario para transporte de alimentos (SENASA).</p>
        </div>
        <div style="margin-bottom: 1rem;">
          <h4 style="color: var(--navy); margin-bottom: 0.25rem;">¿Funciona en zonas rurales sin señal?</h4>
          <p>Sí, la app cuenta con modo offline que almacena los registros localmente y los sincroniza de forma automática en cuanto recupera señal celular.</p>
        </div>
      ` : `
        <div style="margin-bottom: 1rem;">
          <h4 style="color: var(--navy); margin-bottom: 0.25rem;">How does GPS traceability work?</h4>
          <p>The transporter's mobile app sends encrypted GPS coordinates every 15 seconds to our cloud dashboard, visible in real time to producers and wholesale buyers.</p>
        </div>
        <div style="margin-bottom: 1rem;">
          <h4 style="color: var(--navy); margin-bottom: 0.25rem;">What is needed to join as a transporter?</h4>
          <p>Valid driver's license, vehicle technical inspection, and sanitary food transport authorization (SENASA).</p>
        </div>
        <div style="margin-bottom: 1rem;">
          <h4 style="color: var(--navy); margin-bottom: 0.25rem;">Does it work in rural areas without coverage?</h4>
          <p>Yes, the app features an offline mode that stores trip logs locally and syncs automatically once network signal returns.</p>
        </div>
      `;
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeInfoModal() {
    const modal = document.getElementById('infoModal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // Attach footer legal links
  document.querySelectorAll('a[data-i18n="footer.privacy"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openInfoModal('privacy');
    });
  });

  document.querySelectorAll('a[data-i18n="footer.terms"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openInfoModal('terms');
    });
  });

  document.querySelectorAll('a[data-i18n="footer.faq"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openInfoModal('faq');
    });
  });

  // ─── 16. Global Escape Key Listener ───
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAuthModal();
      closeVideoModal();
      closeInfoModal();
      closeMobileMenu();
    }
  });

  // ─── 17. Parallax Effect on Hero Content ───
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroContent = document.querySelector('.hero__content');
    if (heroContent && scrollY < window.innerHeight) {
      heroContent.style.transform = `translateY(${(scrollY * 0.25).toFixed(1)}px)`;
      heroContent.style.opacity = Math.max(0, 1 - (scrollY / window.innerHeight) * 0.7).toFixed(2);
    }
  }, { passive: true });

  // ─── 18. Initialize System ───
  setLanguage(currentLang);
  handleScroll();
  updateActiveNav();
  renderUserSession();
});
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('mobileMenu');
  const burgerBtn = document.getElementById('burgerBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
  const mobileNavLinks = mobileMenu.querySelectorAll('.nav-link');

  // 1. Abrir el menú y bloquear el fondo
  if(burgerBtn) {
    burgerBtn.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden'; 
    });
  }

  // 2. Función para cerrar y liberar la pantalla (Solución al bug)
  function closeMobileMenu() {
    if(mobileMenu) {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = ''; 
    }
  }

  // 3. Ejecutar el cierre al tocar la "X", el fondo oscuro, o un enlace
  if(closeMenuBtn) closeMenuBtn.addEventListener('click', closeMobileMenu);
  if(mobileMenuBackdrop) mobileMenuBackdrop.addEventListener('click', closeMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
});
