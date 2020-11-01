import Vue from "vue";

export const setTradeResult = ({state, commit}, tradeResult) => {
  commit("updateTradeResult", tradeResult);

  Vue.axios.put(`${process.env.VUE_APP_FIREBASE_DATABASE_URL}trade-result.json`, {
    totalPurchase: state.totalPurchase,
    totalSale: state.totalSale
  })
    .then(() => {
      //console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTradeResult = ({commit}) => {
  Vue.axios.get(`${process.env.VUE_APP_FIREBASE_DATABASE_URL}trade-result.json`)
    .then((res) => {
      commit("updateTradeResult", res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
