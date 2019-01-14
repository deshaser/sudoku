export const BOARD_SHOW_PALETTE = 'BOARD_SHOW_PALETTE'

export const showPalette = (value) => ({
  type: BOARD_SHOW_PALETTE,
  payload: {
    showPalette: value,
  },
})
