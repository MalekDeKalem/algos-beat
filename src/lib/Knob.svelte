
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
  let border_size = 2;

  export let size = 100;
  export let min = 0;
  export let max = 100;
  export let value = 10.0;
  export let steps = 10;


  if (value > max) {
    value = max;
  } else if (value < min) {
    value = min;
  }  

  const normalizeVal = (minVal: number, maxVal: number, val: number): number => {
    return (val - minVal) / (maxVal - minVal);
  }

  console.log(value);

  let radius = size / 2;
  const startAngle = 7 * Math.PI / 10;
  const endAngle = 23 / 10 * Math.PI;
  let angle = startAngle + normalizeVal(min, max, value) * 5;

  let endX = radius + 45 * Math.cos(angle);
  let endY = radius + 45 * Math.sin(angle) ;

  // lifecycle function
  afterUpdate(() => {
    const knob = document.getElementById("knob");
    const ctx = knob.getContext("2d");
    
    // knob body
    ctx.beginPath();
    ctx.fillStyle = '#41404E';
    ctx.arc(radius, radius, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    
    // knob ring
    ctx.beginPath();
    ctx.strokeStyle = '#D9D9D9';
    ctx.lineWidth = size / 30;
    ctx.arc(radius, radius, radius - size / 30, startAngle, endAngle);
    ctx.stroke();
    ctx.closePath();
    
    // knob line
    ctx.beginPath();
    ctx.strokeStyle = '#D9D9D9';
    ctx.lineWidth = 3;
    ctx.moveTo(radius, radius);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.closePath();

    // green line
    ctx.beginPath();
    ctx.strokeStyle = '#2BE127';
    ctx.lineWidth = size / 30;
    ctx.arc(radius, radius, radius - size / 30, startAngle, angle);
    ctx.stroke();
    ctx.closePath();
  }); 
  



</script>

<canvas id="knob" width={`${size}`} height={`${size}`} style="--border-size: {`${border_size}px`}">

</canvas>




<style>

  #knob {
    border: var(--border-size) solid #343434;
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
