window.addEventListener('scroll', () => {
  let scrollDistance = (window.scrollY)
  document.querySelectorAll('section').forEach((el, i) => {
    if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
      document.querySelectorAll('.nav-js a').forEach((el) => {
        if (el.classList.contains('active')) {
          el.classList.remove('active')
        }
      })
      document.querySelectorAll('.nav-js li')[i].querySelector('a').classList.add('active')
    }
  })

})

const filterBox = document.querySelectorAll('.work__grid-item')

document.querySelector('.work__tags').addEventListener('click', event => {
  if (event.target.tagName !== 'LI') return false
  let filterClass = event.target.dataset['f']
  filterBox.forEach(elem => {
    elem.classList.remove('hide')
    if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
      elem.classList.add('hide')
    }
  })
})

const list = document.querySelectorAll('.work__tags ul li')
list.forEach(item => {
  item.addEventListener('click', (e) => {
    list.forEach(el => { el.classList.remove('active'); });
    item.classList.add('active')
  })
})