<script lang="ts">
  import DrumSeq from "./lib/DrumSeq.svelte";
  import EffectMenu from "./lib/EffectMenu.svelte";
  import Knob from "./lib/Knob.svelte";

  let val = 0.0;



</script>

<div>
  <Knob min={-1} max={1} steps={0.1} size={500} value={0}  />
</div>

<style>
  .container {
    position: relative;
  }

</style>
