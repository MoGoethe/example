const Cookie = {
  set(name, value, expiredays) {
    let exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = name + '=' + escape(value) +
      ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
  },

  get(name) {
    let start, end

    if (document.cookie.length > 0) {
      start = document.cookie.indexOf(name + '=')
      if (start != -1) {
        start = start + name.length + 1
        end = document.cookie.indexOf(';', start)
        if (end == -1) end = document.cookie.length
        return unescape(document.cookie.substring(start, end))
      }
    }
    return ''
  },

  remove(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  },
}

export default Cookie
