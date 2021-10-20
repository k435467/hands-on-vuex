<template>
  <h3>My home</h3>
  <button @click="addJoke">
    Add Joke
  </button>
  <h3>{{ joke }}</h3>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  methods: {
    ...mapActions({ addJoke: "setCurrentJoke" }),
    // addJoke() {
    //   this.$store.dispatch("setCurrentJoke");
    // }
  },
  computed: {
    ...mapGetters({ joke: "getCurrentJoke" }),
  },
};
</script>
