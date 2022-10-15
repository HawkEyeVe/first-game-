function newSquare2(x, y, color) {
  const newDiv = document.createElement('div')
  newDiv.className += ` square`
  newDiv.className += ` color_${color}`
  newDiv.style.top = `${x}px`
  newDiv.style.left = `${y}px`
  document.querySelector('#board').appendChild(newDiv)

  return newDiv
}

function gridCreation3(width, height) {
  let moveH = 15
  let moveW = 15
  let color = true
  for (let i = 0; i < height; i++) {
    if (i % 2 === 0) {
      color = 'marmol'
    } else {
      color = 'brown'
    }
    for (let j = 0; j < width; j++) {
      newSquare2(moveW, moveH, color)
      if (color === 'brown') {
        color = 'marmol'
      } else {
        color = 'brown'
      }
      moveH += 54
    }
    moveH = 15
    moveW += 54
  }
}

gridCreation3(8, 8)

// **************
// OLD CODE BELOW
// **************

// only  make the div
function newSquare(color) {
  const newDiv = document.createElement('div')
  newDiv.id = color
  document.body.appendChild(newDiv)
}

function newBreak() {
  const nextLine = document.createElement('br')
  document.body.appendChild(nextLine)
}

function gridCreation(width, height) {
  let color = 'brown'
  for (let i = 0; i < height; i++) {
    newBreak()
    if (i % 2 === 0) {
      color = 'marmol'
    } else {
      color = 'brown'
    }
    for (let j = 0; j < width; j++) {
      newSquare(color)
      if (color === 'brown') {
        color = 'marmol'
      } else {
        color = 'brown'
      }
    }
  }
}
// gridCreation(8, 8)

function gridCreation2(width, height) {
  let color = true
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      newSquare(color ? 'brown' : 'marmol')
      color = !color
    }
    newBreak()
    color = i % 2 != 0
  }
}

// gridCreation2(14, 3)
