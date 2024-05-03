<script lang="ts">
  import DrumSeq from "./lib/DrumSeq.svelte";
  import EffectMenu from "./lib/EffectMenu.svelte";
  import Knob from "./lib/Knob.svelte";
  import Slider from "./lib/Slider.svelte";

  let val = 0.0;



</script>

<div>
  <Slider size={500} steps={0.1} min={0} max={1.5} value={1.0}  />

</div>

<style>
  .container {
    position: relative;
  }

</style>
