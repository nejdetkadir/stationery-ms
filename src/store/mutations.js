export const updateTradeResult = (state, payload) => {
  state.totalPurchase += parseFloat(payload.price) * parseInt(payload.piece);
  state.totalSale += parseFloat(payload.sale) * parseInt(payload.piece);
  state.balance = parseFloat(state.totalSale) - parseFloat(state.totalPurchase);
};
