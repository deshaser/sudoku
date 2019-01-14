let reformat = (grid) =>
  grid.map((row, i) =>
    row.map((cell, j) => ({
      value: cell,
      isConst: !!+cell,
    }))
  )

let gridBeginnerLevel = [
  ['6','5','1',   '2',' ','3',   '8','4','9',],
  ['7',' ','2',   ' ',' ','4',   '5',' ',' ',],
  ['9','4',' ',   '1','6','5',   '2','3','7',],

  [' ','8',' ',   ' ',' ','6',   '9','1','2',],
  [' ','9','6',   '3','5','2',   '4',' ',' ',],
  ['4','2','7',   '9','8','1',   '3','5','6',],

  ['5',' ',' ',   ' ','2','7',   '1',' ',' ',],
  [' ','1',' ',   ' ',' ',' ',   '7','9','5',],
  ['8',' ',' ',   ' ','1',' ',   ' ','2',' ',],
]

let gridMasterLevel = [
  [' ','7',' ',   ' ',' ',' ',   '2',' ','1',],
  [' ','6',' ',   ' ',' ','5',   ' ',' ','8',],
  [' ',' ',' ',   ' ',' ',' ',   '4',' ',' ',],

  ['1','5','2',   '4',' ',' ',   ' ',' ',' ',],
  [' ',' ','6',   '8',' ',' ',   ' ',' ','5',],
  [' ',' ',' ',   ' ',' ','9',   ' ','6',' ',],

  [' ',' ','9',   ' ',' ',' ',   ' ','8','2',],
  [' ',' ',' ',   '7',' ',' ',   ' ',' ','3',],
  ['6',' ',' ',   '1','2',' ',   ' ',' ',' ',],
]

const grid = reformat(gridBeginnerLevel)


export { grid }