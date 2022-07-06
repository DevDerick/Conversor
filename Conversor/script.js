function metros() {
  var km = document.querySelector('valor_km')
  var res = document.querySelector('span')
  const metros = 1000

  res.innerHTML = valor_km.value * metros + ' metros'
}
function milhas() {
  var km = document.querySelector('valor_km')
  var res = document.querySelector('span')
  const milhas = 0.62

  res.innerHTML = valor_km.value * milhas + ' milhas'
}
function jardas() {
  var km = document.querySelector('valor_km')
  var res = document.querySelector('span')
  const jardas = 1093.6

  res.innerHTML = valor_km.value * jardas + ' jardas'
}
