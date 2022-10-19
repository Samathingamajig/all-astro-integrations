<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@nanostores/vue";
import { globalCountStore, incrementGlobalCount } from "./stores";

export default defineComponent({
  setup() {
    const globalCount = useStore(globalCountStore);
    return { globalCount };
  },
  data() {
    return {
      personalCount: 0,
    };
  },
  methods: {
    incrementPersonalCount() {
      this.personalCount++;
    },
    incrementGlobalCount,
  },
});
</script>

<template>
  <h2>Vue State</h2>
  <button @click="incrementPersonalCount">
    Personal count {{ personalCount }}
  </button>
  <button @click.native="incrementGlobalCount">
    Global count {{ globalCount }}
  </button>
</template>
