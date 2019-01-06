import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

const gridSize = Dimensions.get('window').width * 0.9;
const cellBorderWidth = 0.3
const blockBorderWidth = 1
const gridBorderWidth = 2

export default StyleSheet.create({
  board: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  number: {
    color: '#000',
    fontSize: 32,
    fontWeight: '100',
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
