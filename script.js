let id = (id) => document.getElementById(id)

let classes = (classes) => document.getElementsByClassName(classes)

let firstname = id('fname'),
  lastname = id('lname'),
  email = id('email'),
  password = id('password'),
  form = id('form'),
  errorMsg = classes('error')
errorIcon = classes('error-icon')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  output(firstname, 0, 'First Name cannot be empty')
  output(lastname, 1, 'Last Name cannot be empty')
  output(email, 2, 'Looks like this is not an email')
  output(password, 3, 'Password cannot be empty')
})

let output = (id, serial, message) => {
  if (id.value.trim() === '') {
    errorMsg[serial].innerHTML = message
    id.style.border = '2px solid hsl(0, 100%, 74%)'
    errorIcon[serial].style.opacity = '1'
  } else {
    errorMsg[serial].innerHTML = ''
    id.style.border = '2px solid hsl(0, 100%, 74%)'
    errorIcon[serial].style.opacity = '0'
  }
}
