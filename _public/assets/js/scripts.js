(() => {
  const toggle1 = document.querySelector('.desktop-toggle')
  const toggle2 = document.querySelector('.mobile-toggle')
  const toggle3 = document.querySelector('.docs-toggle')
  const sun = document.querySelectorAll('.light')
  const moon = document.querySelectorAll('.dark')
  const body = document.querySelector('body')
  const html = document.querySelector('html')

  // Remove focus outline on clicks
  body.addEventListener('mousedown', () => { body.classList.add('no-outline')})
  body.addEventListener('keydown', () => { body.classList.remove('no-outline')})

  // Color Theme Switcher
  const swapIcons = (el1, el2) => {
    el1.forEach((el) => {
      el.classList.remove('hide')
      el.classList.add('fade-in')
    })
    el2.forEach(el => {
      el.classList.add('hide')
      el.classList.remove('fade-in')
    })
  }
  
  if (colorMode.preferredTheme === 'dark') {
    moon.forEach(el => el.classList.remove('hide'))
    localStorage.theme = 'dark'
  } else {
    sun.forEach(el => el.classList.remove('hide'))
    localStorage.theme = 'light'
  }
  
  const switchTheme = () => {
    if (html.dataset.theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark')
      swapIcons(moon, sun)
      localStorage.theme = 'dark'
      colorMode.meta.content = '#060323'
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light')
      swapIcons(sun, moon)
      localStorage.theme = 'light'
      colorMode.meta.content = '#23004b'
    }
  }

  const toggles = [toggle1, toggle2, toggle3]
  const listen = (arr) => {
    arr.map((el) => {
      if (el) {
        el.addEventListener('click', switchTheme, false)
        el.addEventListener('keydown', (e) => {
          if (e.keyCode === 13 || e.keyCode === 32) {
            e.preventDefault()
            switchTheme()
          }
        }, false)
      }
    })
  }
  listen(toggles)

  // Mobile menus
  if (document.querySelector('.docs-menu') || document.querySelector('.mobile-menu')) {
    const trigger = document.querySelector('.menu-trigger')
    const mobileMenu = document.querySelector('.mobile-menu')
    const docsMenu = document.querySelector('.docs-menu')
    const close = document.querySelector('.close-x')

    const toggleMenu = (el) => {
      trigger.addEventListener('click', () => el.classList.toggle('show'))
      close.addEventListener('click', () => el.classList.toggle('show'))
      document.addEventListener('click', (e) => {
        const clickInside = el.contains(e.target) || close.contains(e.target) || trigger.contains(e.target)
        if (!clickInside) {
          el.classList.remove('show')
        }
      })
    }
    (mobileMenu) ? toggleMenu(mobileMenu) : toggleMenu(docsMenu)
  }
})();

// Load highlight.js, from separate file
hljs.initHighlightingOnLoad()