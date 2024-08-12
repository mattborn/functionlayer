const g = document.getElementById.bind(document)
const q = document.querySelectorAll.bind(document)

q('.jump').forEach(el =>
  el.addEventListener('click', e => window.scrollTo({ behavior: 'smooth', top: g(el.dataset.id).offsetTop })),
)
