/* ==========================================================================
   Barra de progresso de rolagem
   ========================================================================== */

window.addEventListener('scroll', () => {
  const alturaTotal = document.body.scrollHeight - window.innerHeight;
  const progresso = (window.scrollY / alturaTotal) * 100;
  document.querySelector('.barra-progresso').style.width = progresso + '%';
});


/* ==========================================================================
    Efeito de digitação para o título
   ========================================================================== */

const titulo = document.querySelector('h1');
const texto = titulo.textContent;
titulo.textContent = '';

let i = 0;
function digitar() {
  if (i < texto.length) {
    titulo.textContent += texto.charAt(i);
    i++;
    setTimeout(digitar, 60);
  }
}
digitar();


/* ==========================================================================
    Botão de voltar ao topo
   ========================================================================== */

const btnTopo = document.querySelector('.btn-topo');

window.addEventListener('scroll', () => {
  btnTopo.classList.toggle('mostrar', window.scrollY > 400);
});

btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* ==========================================================================
    Efeito de fade-in para os capítulos
   ========================================================================== */

const capitulos = document.querySelectorAll('.capitulo');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visivel');
    }
  });
}, { threshold: 0.2 });

capitulos.forEach((cap) => observador.observe(cap));