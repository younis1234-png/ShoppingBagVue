import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  // this is where we gonna store all of our data
  // This is where we gonna store all the information of the application

  state: {
    // the data it self, this is accessible in any component
    // in comneent to get access to it we do items: this.$store.state.products
    products: [],
  },
  mutations: {
    // this has access to the state
    // mutations are synchronouse compare to the action
    // first argement is allways the state
    // second us the data
    items(state, products) {
      console.log(products);
      state.products = products;
    },
  },
  actions: {
    // we can call from any component by dispacting
    // we use commit to pass it to out mutations
    loadProducts({ commit }) {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        commit("items", res.data);
      });
    },
  },
  modules: {},
});
