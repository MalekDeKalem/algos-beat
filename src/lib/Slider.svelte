<script lang="ts">
  import { onMount, beforeUpdate, afterUpdate } from 'svelte';
  import {normalizeVal, clamp} from '../util'

  let border_size = 2;
  let isDragging = false;
  export let size = 100;
  export let min = 0;
  export let max = 100;
  export let value = 20.0;
  export let steps = 10;


  export let updateValue: (number) => void = (newValue) => {};


  let mouseY;
  let top;
  let bottom;
  let headY;


  afterUpdate(() => {
    const slider = document.getElementById("slider");
    const ctx = slider.getContext("2d");

    headY = normalizeVal(min, max, value) * (max / steps) ;

    console.log(headY)


    ctx.clearRect(0, 0, slider.width, slider.height);


    // Draw Linw
    ctx.beginPath();
    ctx.strokeStyle = "#D9D9D9";
    ctx.lineWidth = size / 30;
    ctx.lineCap = "round";
    ctx.moveTo(size / 2, size - size / 30);
    ctx.lineTo(size / 2, 0 + size / 30);
    ctx.stroke();
    ctx.closePath();

    // slider head
    ctx.beginPath();
    ctx.fillStyle = "#323232";
    ctx.roundRect(size / 2 - size / 5 / 2, 0, size / 5, size / 5, [5, 5, 5, 5]);
    ctx.fill();
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
