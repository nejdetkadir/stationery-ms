import Vue from "vue";
import Vuex from 'vuex';
import product from "@/store/modules/product";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  modules: {
    product
  }
});
