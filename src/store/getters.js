export const getTradeResult = (state) => {
  return{
    totalPurchase: state.totalPurchase,
    totalSale: state.totalSale,
    balance: state.balance
  }
};
