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
    -webkit-appearance: slider-vertical;
    width: 20px;
    height: 80px;
    margin-right: 20px;
    padding: 0;
  }

  .vertical-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid red;
    color: red;
  }
</style>


