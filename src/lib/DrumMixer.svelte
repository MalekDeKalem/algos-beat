<script lang="ts">
    import { gainDrumStore } from '../stores'
    export let setGainMixer: (n: number, id: number) => void;
    export let gainNumbers: number[];

    const handleSlider = (index: number, newValue: number) => {
      gainDrumStore.update(gainArray => {
        gainArray[index] = newValue;
        return gainArray;
      });
    }
</script>





<div>
    {#each gainNumbers as gainNumber, index}
        <input type="range" class="vertical-slider" min="0" max="1.5" step="0.1" key={index} on:input={(event) => handleSlider(index, event.currentTarget.valueAsNumber)} />  
    {/each}
</div>

<style>
  .vertical-slider {
    writing-mode: bt-lr;
    appearance: slider-vertical;
    background-color: green;
    color: green;
    width: 20px;
    height: 80px;
    margin-right: 20px;
    padding: 0;
  }

  .vertical-slider::-webkit-slider-thumb {
    appearance: none;
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid red;
    color: red;
  }

  .vertical-slider::-moz-range-thumb {
    appearance: none;
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid red;
    color: red;
  }

</style>


