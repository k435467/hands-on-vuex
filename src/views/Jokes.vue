<template>
  <div>
    <h1>This is all the jokes you've retrieved</h1>
    <h4 v-for="(joke, index) in jokes" :key="index">
      <span>{{ index + 1 }}</span>
      <span>{{ joke }}</span>
    </h4>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Jokes",
  computed: {
    ...mapGetters({
      jokes: "getAllJokes",
    }),
    // jokes() {
    //  return this.$store.getters.getAllJokes;
    // }
  },
};
</script>
