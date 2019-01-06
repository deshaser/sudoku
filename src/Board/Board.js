import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from "./Board.styles";

const area = [
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

let area2 = []
for (let i = 1; i <= 9; i++) {
  let row = []
  for (let j = 1; j <= 9; j++) {
    row.push(i * j)
  }
  area2.push(row)
}

export default class Board extends Component {
  render() {
    return (
      <View style={styles.board}>
        <View style={styles.grid}>
          {area.map((row, i) => (
            <View style={styles.row}>
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

                return (
                  <View style={style}>
                    <Text style={styles.number}>{cell}</Text>
                  </View>
                )
              })}
            </View>
          ))}
        </View>
        <View style={styles.controls}>
          {area.map((row, i) => (
            <View style={styles.control}>
              <Text style={[styles.number, styles.controlNumber]}>{i + 1}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
};