<script lang="ts">
  import DrumSeq from "./lib/DrumSeq.svelte";
  import EffectMenu from "./lib/EffectMenu.svelte";
  import Knob from "./lib/Knob.svelte";

  let val = 0.0;

  const updateValue = (value: number) => {
    val = value;
  }





</script>

<div>
  <Knob min={-2} max={4} steps={1} size={500} value={0} polarity={"Unipolar"} updateValue={updateValue} />
  <p> {val} </p>
</div>

<style>
  .container {
    position: relative;
  }

</style>
