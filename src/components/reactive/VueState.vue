<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      count: 0,
    };
  },
});
</script>

<template>
  <h2>Vue State</h2>
  <button @click="count++">Personal count {{ count }}</button>
</template>
