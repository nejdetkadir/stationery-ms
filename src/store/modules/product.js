import Vue from "vue";
import {router} from "@/router";

const state = {
  products: [],
};

const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {
    return id => state.products.filter(element => {
      return element.id === id;
    });
  }
};

const mutations = {
  updateProductList(state, product) {
    state.products.push(product);
  }
};

const actions = {
  initApp({ commit }) {
    Vue.axios.get(`${process.env.VUE_APP_FIREBASE_DATABASE_URL}products.json`)
      .then((res) => {
        for (let id in res.data) {
          res.data[id].id = id;
          commit("updateProductList", res.data[id]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
        dispatch("setTradeResult", tradeResult);
        router.replace("/");
      })
      .catch((err) => {
        console.log(err)
      });
  },
  sellProduct({ state, dispatch }, payload) {
    // processes of vue axios
    let product = state.products.filter(element => {
      return element.id === payload.id;
    });

    if (product) {
      let totalPiece = product[0].piece - payload.piece;
      Vue.axios.patch(`${process.env.VUE_APP_FIREBASE_DATABASE_URL}products/${payload.id}.json`, {
        piece: totalPiece
      })
        .then(() => {
          product[0].piece = totalPiece;
          let tradeResult = {
            price: 0,
            sale: product[0].price,
            piece: payload.piece
          }
          dispatch("setTradeResult", tradeResult);
          router.replace("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
