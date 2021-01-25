(() => {
  
  // Color Theme Switcher
  
  const themeSwitch = document.querySelectorAll('.theme-switch input[type="checkbox"]')
  const toggle1 = document.querySelector('.toggle1')
  const toggle2 = document.querySelector('.toggle2')
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
  toggle1.addEventListener('change', switchTheme, false)
  toggle2.addEventListener('change', switchTheme, false)
  
  // Documentation Menu (handheld)

  if (!document.querySelector('.docs-menu')) {
    return
  } else {
    const trigger = document.querySelector('.menu-trigger')
    const docsMenu = document.querySelector('.docs-menu')
    const close = document.querySelector('.close-x')  
    trigger.addEventListener('click', () => {
      docsMenu.classList.toggle('show')
    })
    close.addEventListener('click', () => {
      docsMenu.classList.toggle('show')
    })
    document.addEventListener('click', (e) => {
      const clickInside = docsMenu.contains(e.target) || close.contains(e.target) || trigger.contains(e.target)
      if (!clickInside) {
        docsMenu.classList.remove('show')
      }
    })
  }
})();
  
(() => {
  
  // Regular menu (handheld)

  if (!document.querySelector('.mobile-menu')) {
    return
  } else {
    const trigger = document.querySelector('.menu-trigger')
    const mobileMenu = document.querySelector('.mobile-menu')
    const close = document.querySelector('.close-x')

    trigger.addEventListener('click', () => {
      mobileMenu.classList.toggle('show')
    })
    close.addEventListener('click', () => {
      mobileMenu.classList.toggle('show')
    })
    document.addEventListener('click', (e) => {
      const clickInside = mobileMenu.contains(e.target) || close.contains(e.target) || trigger.contains(e.target)
      if (!clickInside) {
        mobileMenu.classList.remove('show')
      }
    })
  }
})();

// Load highlight.js, from separate file
hljs.initHighlightingOnLoad()