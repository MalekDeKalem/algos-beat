<script lang="ts">
  import DrumSeq from "./lib/DrumSeq.svelte";
  import EffectMenu from "./lib/EffectMenu.svelte";
  import Knob from "./lib/Knob.svelte";

  let val = 0.0;



</script>

<div>
  <Knob min={0} max={100} steps={10} size={50} value={0}  />
</div>

<style>
  .container {
    position: relative;
  }

</style>
