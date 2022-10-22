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
console.table(border())
