
<script lang="ts">
import { onMount, beforeUpdate, afterUpdate } from 'svelte'
/*
<Knob {min} {max} {step} {value} />
*/

/*
  const knob = document.getElementsByClassName('slider');
  let num = 0;
  
  if (knob[0]) {
    knob[0].style.transform = 'rotate(10deg)';
  }

  $: {
    console.log(num);
  }
*/
  let border_size = '2px';
  export let size = '100px';

  // lifecycle function
  afterUpdate(() => {
    const knob = document.getElementById("knob");
    const ctx = knob.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "#41404E";
    ctx.arc(50, 50, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = "#D9D9D9";
    ctx.lineWidth = 3;
    ctx.arc(50, 50, 47, 7 * Math.PI / 10, 23 / 10 * Math.PI);
    ctx.stroke();
    ctx.closePath();
  }); 
  



</script>

<canvas id="knob" width="100" height="100" style="--border-size: {border_size}; --size: {size}">


</canvas>




<style>

  #knob {
    border: var(--border-size) solid #343434;
    width: var(--size);
    height: var(--size);
  }
  .slider {
    position: relative;
    width: 10em;
    height: 10em;
    border-radius: 50%;
    background: linear-gradient(0deg, #525252 0%, #373737 100%);
    box-shadow: 0px -20px 20px #757575, 0px 20px 35px #111111, inset 0px 5px 6px #979797, inset 0px -5px 6px #242424;
  }

  input[type="range"] {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20em;
    appearance: slider-vertical;
    top: 3rem;
    outline: none;
    background: transparent;
  }

  input[type="range"]::-webkit-slider-thumb {
    background-color: azure;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px #349beb;
  }

  .knob {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px; /* Adjust knob size as needed */
    height: 10px; /* Adjust knob size as needed */
    background: #fff;
    border-radius: 50%;
    box-shadow: 0px 0px 10px #349beb;
  }

  .slider::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 3px solid #fff;
    width: 130%;
    height: 130%;
    border-radius: 50%;
    box-shadow: inset 0px 0px 10px #349beb;
  }
</style>
