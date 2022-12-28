let form2 = document.forms[1]

function generateCSS() {

  let offsetX2 = document.getElementById('offsetX2').value
  let offsetY2 = document.getElementById('offsetY2').value
  let blur2 = document.getElementById('blur2').value

  let color2 = document.getElementById('color2').value
  let R = parseInt(color2.slice(1, 3), 16)
  let G = parseInt(color2.slice(3, 5), 16)
  let B = parseInt(color2.slice(5, 7), 16)

  let result2 = document.getElementById('result2')
  let textarea2 = document.getElementById('cssCode2')

  let str = `${offsetX2}px ${offsetY2}px ${blur2}px rgb(${R}, ${G}, ${B})`

  textarea2.value = 'text-shadow: ' + str
  result2.style.textShadow = str
}

for (let input of document.querySelectorAll('input')) {
  input.addEventListener('input', generateCSS)
}
generateCSS()
