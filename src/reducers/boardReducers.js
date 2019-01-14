import { BOARD_SHOW_PALETTE } from '../actions/boardActions'

const initialState = {
  showPalette: false,
}

const boardReducers = (state = initialState, action) => {
  switch (action.type) {
    case BOARD_SHOW_PALETTE:
      return {
        ...state,
        showPalette: action.payload.showPalette,
      }
    default:
      return state
  }
}

export default boardReducers
