function darkMode() {
  let toggle = document.querySelector('.form-check-input')
  let list = document.querySelectorAll('li')

  if (toggle.checked == true) {
    document.querySelector('body').className = 'dark-Mode'
    for (var i = 0; i < list.length; i++) {
      list[i].className = 'list-dark-Mode'
    }
  } else {
    document.querySelector('body').className = 'light-Mode'
    for (var i = 0; i < list.length; i++) {
      list[i].className = 'list-light-Mode'
    }
  }
}
