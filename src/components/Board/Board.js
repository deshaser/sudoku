import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'

import { showPalette } from '../../actions/boardActions'
import { grid } from '../../utils/sudoku'

import styles from "./Board.styles"

const mapStateToProps = state => ({
  showPalette: state.board.showPalette,
})
const mapDispatchToProps = dispatch => ({
  actions: {
    showPalette: (value) => dispatch(showPalette(value)),
  },
})

class Board extends Component {
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

    if (active && !grid[active[0]][active[1]].isConst) {
      grid[active[0]][active[1]].value = num
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
                  let cellStyles = [styles.cell]
                  let numberStyles = [styles.number]

                  if (i === 3 || i === 6) {
                    cellStyles.push(styles.cellBlockTop)
                  }
                  if (j === 3 || j === 6) {
                    cellStyles.push(styles.cellBlockLeft)
                  }

                  if (i === 0) {
                    cellStyles.push(styles.cellGridTop)
                  }
                  if (j == 8) {
                    cellStyles.push(styles.cellGridRight)
                  }
                  if (i === 8) {
                    cellStyles.push(styles.cellGridBottom)
                  }
                  if (j === 0) {
                    cellStyles.push(styles.cellGridLeft)
                  }

                  if (active && i === active[0] && j === active[1]) {
                    cellStyles.push(styles.cellActive)
                  }

                  numberStyles.push(styles[grid[i][j].isConst ? 'numberConst': 'numberVar'])

                  return (
                    <TouchableWithoutFeedback
                      key={j}
                      onPressIn={() => this.onPressCell(i, j)}
                      onLongPress={() => this.props.actions.showPalette(true)}
                      onPressOut={() => this.props.actions.showPalette(false)}
                      pressRetentionOffset={{
                        top: 1000, left: 1000, bottom: 1000, right: 1000
                      }}

                    >
                      <View style={cellStyles} >
                        <Text style={numberStyles}>{cell.value}</Text>
                      </View>
                    </TouchableWithoutFeedback>
                  )
                })}
              </View>
            ))}
            { this.props.showPalette && 
              <View style={styles.pallet}></View>
            }
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)