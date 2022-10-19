<script lang="ts">
  import { globalCountStore, incrementGlobalCount } from "./stores";
  let personalCount = 0;
</script>

<h2>Svelte State</h2>
<button on:click={() => personalCount++}>Personal count {personalCount}</button
><button on:click={incrementGlobalCount}
  >Global count {$globalCountStore}</button
>
