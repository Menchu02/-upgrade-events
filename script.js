// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click
window.onload = () => {
  let body = document.querySelector('body')
  let button = document.querySelector('#btnToClick')
  button.innerText = ' click me'
  button.addEventListener('click', (e) => {
    console.log(e)
  })
  body.appendChild(button)
  // 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

  let focusEvent = document.querySelector('.focus')
  focusEvent.innerText = 'input focus'
  focusEvent.addEventListener('focus', (e) => {
    console.log('focus', e.target.value)
  })

  // 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
  let inputEvent = document.querySelector('.value')
  inputEvent.innerText = 'input '
  inputEvent.addEventListener('input', (e) => {
    console.log('input', e.target.value)
  })
}
