<script lang="ts">
    export let setGainMixer: (n: number, id: number) => void;
    export let gainNumbers: number[]
</script>





<div>
    {#each gainNumbers as gainNumber, index}
        <input type="range" class="vertical-slider" min="0" max="1.5" step="0.1" key={index}/>
    {/each}
</div>

<style>
  .vertical-slider {
    writing-mode: bt-lr;
    appearance: slider-vertical;
    margin: 0;
    padding: 0;
  }
</style>


