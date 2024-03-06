<script lang="ts">
  import DrumSeq from "./lib/DrumSeq.svelte";
  import EffectMenu from "./lib/EffectMenu.svelte";
</script>

<div class="container">
  <DrumSeq />
  <EffectMenu />
</div>

<style>
  .container {
    position: relative;
  }
</style>