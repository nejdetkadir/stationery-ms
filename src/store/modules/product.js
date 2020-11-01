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
