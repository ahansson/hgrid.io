(() => {
  
  const toggle1       = document.querySelector('.desktop-toggle'),
        toggle2       = document.querySelector('.mobile-toggle'),
        toggle3       = document.querySelector('.docs-toggle'),
        sun           = document.querySelectorAll('.light'),
        moon          = document.querySelectorAll('.dark'),
        docsMenu      = document.querySelector('.docs-menu'),
        body          = document.querySelector('body'),
        html          = document.querySelector('html'),
        hash          = window.location.hash

  // Remove focus outline on clicks
  body.addEventListener('mousedown', () => { body.classList.add('no-outline')})
  body.addEventListener('keydown', () => { body.classList.remove('no-outline') })
  

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
      localStorage.theme      = 'dark'
      colorMode.meta.content  = '#060323'
    }
    
    else {
      
      document.documentElement.setAttribute('data-theme', 'light')
      swapIcons(sun, moon)
      localStorage.theme      = 'light'
      colorMode.meta.content  = '#23004b'
    }
  }

  const toggles = [
    toggle1,
    toggle2,
    toggle3
  ]

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
    
    const trigger = document.querySelector('.menu-trigger'),
    mobileMenu    = document.querySelector('.mobile-menu'),
    docsMenu      = document.querySelector('.docs-menu'),
    close = document.querySelector('.close-x'),
    
    toggleMenu = (el) => {
      
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

  // Set active anchor link on pageload
  const activeSubLink = (h) => {
    const links = docsMenu.querySelectorAll('a')
    links.forEach((el) => {
      if (el.hash === h) {
        el.classList.add('active-link')
      } else {
        el.classList.remove('active-link')
      }
    })
  }
  (hash) ? activeSubLink(hash) : null

  // Set active anchor for anchor links
  const colorHashLinks = (e) => {
    docsMenu.querySelectorAll('.active-link').forEach(l => l.classList.remove('active-link'))
    e.target.classList.add('active-link')
  }

  if (docsMenu && typeof docsMenu === 'string') {
    docsMenu.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'a' && e.target.hash) {
        const path = window.location.pathname
        if (e.target.pathname === path)  {
          colorHashLinks(e)
        }
      }
    })
  }
})();

// highlight.js, from separate file
hljs.initHighlightingOnLoad()