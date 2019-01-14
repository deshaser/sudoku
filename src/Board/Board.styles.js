import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

const gridSize = Dimensions.get('window').width * 0.9;
const cellBorderWidth = 0.3
const blockBorderWidth = 1
const gridBorderWidth = 0.3

export default StyleSheet.create({
  board: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  grid: {
    width: gridSize,
    height: gridSize,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderColor: '#ccc',
    borderTopWidth: cellBorderWidth,
    borderLeftWidth: cellBorderWidth,
  },
  cellActive: {
    backgroundColor: '#f0f0f0',
  },

  cellBlockTop: {
    borderTopWidth: blockBorderWidth,
  },
  cellBlockLeft: {
    borderLeftWidth: blockBorderWidth,
  },

  cellGridTop: {
    borderTopWidth: gridBorderWidth,
  },
  cellGridRight: {
    borderRightWidth: gridBorderWidth,
  },
  cellGridBottom: {
    borderBottomWidth: gridBorderWidth,
  },
  cellGridLeft: {
    borderLeftWidth: gridBorderWidth,
  },

  number: {
    color: '#222',
    fontSize: 32,
    fontWeight: '200',
  },
  numberConst: {
    fontSize: 28,
    color: '#666',
  },
  numberVar: {
    color: '#000',
  },

  controls: {
    width: gridSize,
    flexDirection: 'row',
    marginTop: 40,
  },
  control: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',

  },
  controlNumber: {
    fontSize: 24,
  }
});
