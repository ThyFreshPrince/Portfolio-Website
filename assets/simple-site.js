
(function(){
  const dropdown = document.querySelector('.dropdown');
  const button = document.querySelector('.dropdown .nav-button');
  if(dropdown && button){
    button.addEventListener('click', function(e){
      e.preventDefault();
      dropdown.classList.toggle('open');
      button.setAttribute('aria-expanded', dropdown.classList.contains('open') ? 'true' : 'false');
    });
    document.addEventListener('click', function(e){
      if(!dropdown.contains(e.target)){
        dropdown.classList.remove('open');
        button.setAttribute('aria-expanded','false');
      }
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){
        dropdown.classList.remove('open');
        button.setAttribute('aria-expanded','false');
      }
    });
  }
  const page = document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach(el=>{
    if(el.dataset.nav === page) el.classList.add('active');
  });
  document.getElementById('year')?.append(new Date().getFullYear());
})();
