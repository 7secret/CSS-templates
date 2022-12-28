let form = document.forms[0]

function generateCSS() {
  let inset = document.getElementById('inset').checked
  inset = inset ? ' inset' : ''

  let offsetX = document.getElementById('offsetX').value
  let offsetY = document.getElementById('offsetY').value
  let blur = document.getElementById('blur').value
  let stretch = document.getElementById('stretch').value

  let color = document.getElementById('color').value
  let R = parseInt(color.slice(1, 3), 16)
  let G = parseInt(color.slice(3, 5), 16)
  let B = parseInt(color.slice(5, 7), 16)

  let opacity = document.getElementById('opacity').value

  let result = document.getElementById('result')
  let textarea = document.getElementById('cssCode')

  let str = `${inset} ${offsetX}px ${offsetY}px ${blur}px ${stretch}px rgba(${R}, ${G}, ${B}, ${opacity})`

  textarea.value = 'box-shadow:' + str
  result.style.boxShadow = str
}

for (let input of document.querySelectorAll('input')) {
  input.addEventListener('input', generateCSS)
}
generateCSS()
