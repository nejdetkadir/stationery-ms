export const updateTradeResult = (state, payload) => {
  if (payload.piece) {
    state.totalPurchase += parseFloat(payload.price) * parseInt(payload.piece);
    state.totalSale += parseFloat(payload.sale) * parseInt(payload.piece);
  } else {
    state.totalPurchase += parseFloat(payload.totalPurchase);
    state.totalSale += parseFloat(payload.totalSale);
  }
  state.balance = parseFloat(state.totalSale) - parseFloat(state.totalPurchase);
};
