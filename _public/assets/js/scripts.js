(() => {
  
  // Theme Switcher
  const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]')
  const sun = document.querySelector('.light')
  const moon = document.querySelector('.dark')
  if (colorMode.preferredTheme === 'dark') {
    themeSwitch.checked = true
    moon.classList.remove('hide')
    localStorage.setItem('theme', 'dark')
  }
  if (colorMode.preferredTheme === 'light') {
    themeSwitch.checked = false
    sun.classList.remove('hide')
    localStorage.setItem('theme', 'light')
  }
  const switchTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark')
      moon.classList.remove('hide')
      moon.classList.add('fade-in')
      sun.classList.add('hide')
      sun.classList.remove('fade-in')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      moon.classList.add('hide')
      moon.classList.remove('fade-in')
      sun.classList.remove('hide')
      sun.classList.add('fade-in')
      localStorage.setItem('theme', 'light')
    }
  }
  themeSwitch.addEventListener('change', switchTheme, false)
  
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