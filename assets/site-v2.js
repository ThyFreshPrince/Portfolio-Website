
(function(){
  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');

  function preferredTheme(){
    const saved = localStorage.getItem('zac-portfolio-theme');
    if(saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme){
    root.setAttribute('data-theme', theme);
    localStorage.setItem('zac-portfolio-theme', theme);
    if(toggle){
      toggle.textContent = theme === 'dark' ? '☀ Light' : '☾ Dark';
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  setTheme(preferredTheme());

  if(toggle){
    toggle.addEventListener('click', function(){
      setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  const dropdown = document.querySelector('.dropdown');
  const dropdownButton = dropdown?.querySelector('.nav-button');

  if(dropdown && dropdownButton){
    dropdownButton.addEventListener('click', function(e){
      e.preventDefault();
      const isOpen = dropdown.classList.toggle('open');
      dropdownButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', function(e){
      if(!dropdown.contains(e.target)){
        dropdown.classList.remove('open');
        dropdownButton.setAttribute('aria-expanded','false');
      }
    });

    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){
        dropdown.classList.remove('open');
        dropdownButton.setAttribute('aria-expanded','false');
      }
    });
  }

  const current = document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach(el => {
    if(el.dataset.nav === current) el.classList.add('active');
  });

  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
})();
