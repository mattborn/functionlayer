const g = document.getElementById.bind(document)

document.addEventListener('keydown', event => {
  if (event.key === 's') document.body.classList.toggle('deck')
})

const jump = (action, target) => {
  g(action).addEventListener('click', e =>
    gsap.to(window, {
      duration: 1.5,
      ease: 'expo.out',
      scrollTo: target,
    }),
  )
}

jump('see-plans', '#pricing')
