import { createStore } from "vuex";

const url = "https://icanhazdadjoke.com";
const headers = { Accept: "application/json" };

export default createStore({
  state: {
    currentJoke: "This is a joke",
    allJokes: [],
  },
  mutations: {
    // Synchronous
    setCurrentJoke(state, payload) {
      state.currentJoke = payload;
      state.allJokes.push(payload);
    },
  },
  actions: {
    // Asynchronous
    async setCurrentJoke(state) {
      const joke = await fetch(url, { headers });
      const j = await joke.json();

      // call synchronous method
      state.commit("setCurrentJoke", j.joke);
    },
  },
  modules: {},
  getters: {
    getCurrentJoke: (state) => state.currentJoke,
    getAllJokes: (state) => state.allJokes,
  },
});
