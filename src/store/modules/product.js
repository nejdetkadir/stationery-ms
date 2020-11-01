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
  saveProduct({ commit }, product) {
    // processes of vue resource
    console.log(commit, product);
    Vue.axios.post(`${process.env.VUE_APP_FIREBASE_DATASE_URL}products.json`, product)
      .then((res) => {
        console.log(res);
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
