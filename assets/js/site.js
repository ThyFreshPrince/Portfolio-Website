(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('[data-category]');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const selected = button.dataset.filter;
      projectCards.forEach(card => {
        const categories = card.dataset.category.split(' ');
        card.hidden = selected !== 'all' && !categories.includes(selected);
      });
    });
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }

  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const image = lightbox.querySelector('img');
    const close = () => {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    };
    document.querySelectorAll('[data-lightbox]').forEach(button => {
      button.addEventListener('click', () => {
        image.src = button.dataset.lightbox;
        image.alt = button.querySelector('img')?.alt || 'Expanded project image';
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
        lightbox.querySelector('.lightbox-close').focus();
      });
    });
    lightbox.querySelector('.lightbox-close').addEventListener('click', close);
    lightbox.addEventListener('click', event => { if (event.target === lightbox) close(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
  }

  document.querySelectorAll('[data-copy-email]').forEach(button => {
    button.addEventListener('click', async () => {
      const email = button.dataset.copyEmail;
      try {
        await navigator.clipboard.writeText(email);
        const old = button.textContent;
        button.textContent = 'Email copied';
        setTimeout(() => button.textContent = old, 1600);
      } catch {
        window.location.href = `mailto:${email}`;
      }
    });
  });

  document.querySelectorAll('iframe[data-auto-height]').forEach(frame => {
    const resize = () => {
      try {
        const doc = frame.contentDocument || frame.contentWindow.document;
        const height = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
        if (height) frame.style.height = `${height + 8}px`;
        if ('ResizeObserver' in window && !frame._portfolioObserver) {
          frame._portfolioObserver = new ResizeObserver(() => {
            const next = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
            if (next) frame.style.height = `${next + 8}px`;
          });
          frame._portfolioObserver.observe(doc.body);
        }
      } catch (_) {
        frame.style.height = '1200px';
      }
    };
    frame.addEventListener('load', resize);
    resize();
    setTimeout(resize, 350);
    window.addEventListener('resize', resize);
  });

})();
