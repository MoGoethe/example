function setTitle(title) {
  document.setTitle = function(t) {
    document.title = t
    var i = document.createElement('iframe')
    i.src = '//m.baidu.com/favicon.ico'
    i.style.display = 'none'
    i.onload = function() {
      setTimeout(function() {
        i.remove()
      }, 0)
    }
    document.body.appendChild(i)
  }

  setTimeout(function() {
    document.setTitle(title)
  }, 0)
}

window.setTitle = setTitle
