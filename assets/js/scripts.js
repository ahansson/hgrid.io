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
  
  // Display demo images in correct color mode
  const setImageMode = () => {
    const lightImage = document.querySelector('.demo-word-break');
    const darkImage = document.querySelector('.demo-word-break-dm');
    const colorTheme = localStorage.getItem('theme');

    if (!lightImage || !darkImage || !colorTheme) return;
    if (colorTheme === 'dark' && window.innerWidth <= 600) {
      lightImage.style.display = 'none'
      darkImage.style.display = 'block'
    } 
    if (colorTheme === 'light' && window.innerWidth <= 600) {
      lightImage.style.display = 'block'
      darkImage.style.display = 'none'
    }
  }

  setImageMode()
  
  // Process colorMode() from <head>
  if (colorMode.preferredTheme === 'dark') {
    moon.forEach(el => el.classList.remove('hide'))
    localStorage.theme = 'dark'

  } else {
    
    sun.forEach(el => el.classList.remove('hide'))
    localStorage.theme = 'light'
  }

  // Set correct color mode icon
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
  
  // Color theme switcher
  const switchTheme = () => {

    if (html.dataset.theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark')
      swapIcons(moon, sun)
      localStorage.theme      = 'dark'
      colorMode.meta.content  = '#060323'
      setImageMode()
    }
    
    else {
      document.documentElement.setAttribute('data-theme', 'light')
      swapIcons(sun, moon)
      localStorage.theme      = 'light'
      colorMode.meta.content  = '#23004b'
      setImageMode()
    }
  }

  // Add listener for theme switcher
  const listen = (arr) => {
    arr.map((el) => {
      
      if (el) {
        el.addEventListener('click', switchTheme, false)
        el.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            switchTheme()
          }
        }, false)
      }
    })
  }
  const toggles = [toggle1, toggle2, toggle3]
  listen(toggles)

  // Mobile menus
  if (document.querySelector('.docs-menu') || document.querySelector('.mobile-menu')) {
    
    const trigger = document.querySelector('.menu-trigger'),
    mobileMenu    = document.querySelector('.mobile-menu'),
    docsMenu      = document.querySelector('.docs-menu'),
    close         = document.querySelectorAll('.close'),
    
    toggleMenu = (el) => {
      trigger.addEventListener('click', () => el.classList.toggle('show'))
      close.forEach((elem) => {
        elem.addEventListener(
          'click', () => el.classList.remove('show')
        )
      })

      document.addEventListener('click', (e) => {
        const clickInside = el.contains(e.target) || close.forEach((elem) => { elem.contains(e.target)}) || trigger.contains(e.target)

        if (!clickInside) {
          el.classList.remove('show')
        }
      })
    }

    (mobileMenu) ? toggleMenu(mobileMenu) : toggleMenu(docsMenu)

  }

  // Activate current menu link on page load
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

  // Activate anchor links on click (no page load)
  const colorHashLinks = (e) => {
    docsMenu.querySelectorAll('.active-link').forEach(l => l.classList.remove('active-link'))
    e.target.classList.add('active-link')
  }

  if (docsMenu && typeof docsMenu === 'object') {
    docsMenu.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'a' && e.target.hash) {
        const path = window.location.pathname
        if (e.target.pathname === path)  {
          colorHashLinks(e)
        }
      }
    })
  }

  // Fade element demo
  (() => {
    const fadeTrigger = document.querySelector('.demo-fade-trigger')
    const fadeElem = document.querySelector('.fade')
    const x = document.querySelector('.x-close')

    if (!fadeTrigger || !fadeElem || !x) return

    fadeTrigger.addEventListener('click', () => {
      fadeElem.classList.add('fade-in')
      fadeElem.classList.remove('fade-out')
      fadeElem.classList.remove('hide')
    })

    x.addEventListener('click', () => {
      fadeElem.classList.remove('fade-in')
      fadeElem.classList.add('fade-out')

      setTimeout(() => {
        fadeElem.classList.add('hide')
      }, 600)
    })
  })();
})();

// highlight.js, from separate file
hljs.initHighlightingOnLoad()


// Grab latest release number from GitHub
const versionTags = document.querySelectorAll('.versiontag')
const url = 'https://hgrid.io/.netlify/functions/github'

if (versionTags && versionTags.length >= 1) {
  (async (url) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        mode: "no-cors"
      })

      const res = await response.text()
      console.log('Result: ' + res)
      
      versionTags.forEach((element) => {
        element.innerText = res
      })
    } catch(err) {
      if(err.response){
        console.log(err.response.data)
      } else if (err.request){
        console.log(err.request)
      } else {
        console.log(err.message)
      }
    }
  })(url)
}