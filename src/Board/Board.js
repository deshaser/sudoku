import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import styles from "./Board.styles";

const grid = [
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

let grid2 = []
for (let i = 1; i <= 9; i++) {
  let row = []
  for (let j = 1; j <= 9; j++) {
    row.push(i * j)
  }
  grid2.push(row)
}

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: grid,
      active: null,
    }
  }

  onPressBoard = () => {
    this.setState({
      active: null,
    })
  }

  onPressCell = (i, j) => {
    this.setState({
      active: [i, j]
    })
  }

  onPressControl = (num) => {
    let { grid, active } = this.state

    if (active) {
      grid[active[0]][active[1]] = num
      this.setState({ grid: grid })
    }
  }

  render() {
    const { grid, active } = this.state

    return (
      <TouchableWithoutFeedback
        onPress={this.onPressBoard}
      >
        <View style={styles.board}>
          <View style={styles.grid}>
            {grid.map((row, i) => (
              <View
                key={i}
                style={styles.row}
              >
                {row.map((cell, j) => {
                  let style = [styles.cell]

                  if (i === 3 || i === 6) {
                    style.push(styles.cellBlockTop)
                  }
                  if (j === 3 || j === 6) {
                    style.push(styles.cellBlockLeft)
                  }

                  if (i === 0) {
                    style.push(styles.cellGridTop)
                  }
                  if (j == 8) {
                    style.push(styles.cellGridRight)
                  }
                  if (i === 8) {
                    style.push(styles.cellGridBottom)
                  }
                  if (j === 0) {
                    style.push(styles.cellGridLeft)
                  }

                  if (active && i === active[0] && j === active[1]) {
                    style.push(styles.cellActive)
                  }

                  return (
                    <TouchableWithoutFeedback
                      key={j}
                      onPressIn={() => this.onPressCell(i, j)}
                    >
                      <View style={style} >
                        <Text style={styles.number}>{cell}</Text>
                      </View>
                    </TouchableWithoutFeedback>
                  )
                })}
              </View>
            ))}
          </View>
          <View style={styles.controls}>
            {grid.map((row, i) => (
              <TouchableWithoutFeedback
                key={i}
                onPress={() => this.onPressControl(i + 1)}
              >
                <View style={styles.control}>
                  <Text style={[styles.number, styles.controlNumber]}>{i + 1}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};
