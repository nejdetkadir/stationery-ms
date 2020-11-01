import Vue from "vue";

const state = {
  products: [],
};

const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {
    return state.products[0];
  }
};

const mutations = {
  updateProductList(state, product) {
    state.products.push(product);
  }
};

const actions = {
  initApp({ commit }) {
    // processes of vue resource
    console.log(commit);
  },
  saveProduct({ dispatch, commit }, product) {
    Vue.axios.post(`${process.env.VUE_APP_FIREBASE_DATABASE_URL}products.json`, product)
      .then((res) => {
        // update product list
        commit("updateProductList", {id: res.data.name, ...product})
        // update totalSale, totalPurchase and balance
        let tradeResult = {
          price: product.price,
          sale: 0,
          piece: product.piece
        }
        dispatch("setTradeResult", tradeResult)
      })
      .catch((err) => {
        console.log(err)
      });
  },
  sellProduct({ commit }, product) {
    // processes of vue resource
    console.log(commit, product);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
