(() => {

  // Color Theme Switcher
  const themeSwitch = document.querySelectorAll('.theme-switch input[type="checkbox"]')
  const toggle1 = document.querySelector('.desktop-toggle')
  const toggle2 = document.querySelector('.mobile-toggle')
  const toggle3 = document.querySelector('.docs-toggle')
  const sun = document.querySelectorAll('.light')
  const moon = document.querySelectorAll('.dark')
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
    themeSwitch.forEach(el => el.checked = true)
    moon.forEach(el => el.classList.remove('hide'))
    localStorage.setItem('theme', 'dark')
  } else {
    themeSwitch.forEach(el => el.checked = false)
    sun.forEach(el => el.classList.remove('hide'))
    localStorage.setItem('theme', 'light')
  }

  const switchTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark')
      swapIcons(moon, sun)
      localStorage.setItem('theme', 'dark')
      colorMode.meta.content = '#060323'
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      swapIcons(sun, moon)
      localStorage.setItem('theme', 'light')
      colorMode.meta.content = '#23004b'
    }
  }

  const toggles = [toggle1, toggle2, toggle3]
  const listen = (elem) => elem.map(el => (el !== null) ? el.addEventListener('change', switchTheme, false) : false)
  listen(toggles)

  // Documentation Menu (handheld)
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
    (mobileMenu !== null) ? toggleMenu(mobileMenu) : toggleMenu(docsMenu)
  }
})();

// Load highlight.js, from separate file
hljs.initHighlightingOnLoad()