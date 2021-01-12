(() => {
  
  // Documentation menu (handheld)

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