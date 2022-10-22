function newSquare(x, y, color) {
  const newDiv = document.createElement('div')
  newDiv.className += ` square`
  newDiv.className += ` color_${color}`
  newDiv.style.top = `${x}px`
  newDiv.style.left = `${y}px`
  document.querySelector('#board').appendChild(newDiv)

  return newDiv
}

const textures = ['mountain', 'grass']
function gridMap(width, height) {
  const grid = []
  for (let i = 0; i < width; i++) {
    grid[i] = []
    for (j = 0; j < height; j++) {
      grid[i].push(0)
    }
  }
  return grid
}

let map = gridMap(10, 10)

function mapBase() {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      map[i][j] = textures[1]
    }
  }
  return map
}

function border() {
  map = mapBase()
  if (map) {
    for (let i = 0; i < map.length; i++) {
      map[0][i] = textures[0]
      map[map.length - 1][i] = textures[0]
      map[i][0] = textures[0]
      map[i][map.length - 1] = textures[0]
    }
  }
  return map
}

function gridCreation(width, height) {
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
      newSquare(moveW, moveH, color)
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

gridCreation(8, 8)
