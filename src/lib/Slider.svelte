<script lang="ts">
  import { onMount, beforeUpdate, afterUpdate } from 'svelte';

  let border_size = 2;
  let isDragging = false;
  export let size = 100;
  export let min = 0;
  export let max = 100;
  export let value = 100.0;
  export let steps = 10;


  export let updateValue: (number) => void = (newValue) => {};


  let mouseY;
  let top;
  let bottom;


  afterUpdate(() => {
    const slider = document.getElementById("slider");
    const ctx = slider.getContext("2d");


    ctx.clearRect(0, 0, slider.width, slider.height);


    // Draw Linw
    ctx.beginPath();
    ctx.strokeStyle = "#D9D9D9";
    ctx.lineWidth = 5;
    ctx.moveTo(size / 2, size);
    ctx.lineTo(size / 2, 0);
    ctx.stroke();
    ctx.closePath();
  });
</script>





<canvas id="slider"
  width={`${size}`}
  height={`${size}`}
  style="--border-size: {`${border_size}px`}"
> 

</canvas>




<style>

  #slider {
    border: var(--border-size) solid #343434;
  }

</style>
