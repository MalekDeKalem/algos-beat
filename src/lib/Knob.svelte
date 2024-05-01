
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

  type Polarity = "Unipolar" | "Bipolar";
  let border_size = 2;
  let isDragging = false;
  const epsilon = 1e-9;
  export let size = 100;
  export let min = 0;
  export let max = 100;
  export let value = 100.0;
  export let steps = 10;
  export let polarity: Polarity = "Unipolar";

  export let updateValue: (number) => void = (newValue) => {};


  const normalizeVal = (minVal: number, maxVal: number, val: number): number => {
    return (val - minVal) / (maxVal - minVal);
  }
  
  // clamping the value so it doesnt go above max or below min value
  const clamp = (minVal: number, maxVal: number, val: number): number => {
    if (val > maxVal) {
      val = maxVal;
    } else if (val <= minVal) {
      val = minVal;
    }
    return val;
  }



  let radius;
  let startAngle;
  let endAngle;
  let angle;
  let endX;
  let endY;
  let mouseY;


  // lifecycle function
  afterUpdate(() => {
    const knob = document.getElementById("knob");
    const ctx = knob.getContext("2d");

    // Clear canvas
    ctx.clearRect(0, 0, knob.width, knob.height);



    radius = size / 2;
    startAngle = 7 * Math.PI / 10;
    endAngle = 23 / 10 * Math.PI;
    angle = startAngle + normalizeVal(min, max, value) * 5.025;
    endX = radius + (size / 2 - size / 15) * Math.cos(angle);
    endY = radius + (size / 2 - size / 15) * Math.sin(angle);

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
    ctx.lineCap = "round";
    ctx.arc(radius, radius, radius - size / 30, startAngle, endAngle);
    ctx.stroke();
    ctx.closePath();

    // knob line
    ctx.beginPath();
    ctx.strokeStyle = '#D9D9D9';
    ctx.lineWidth = size / 30;
    ctx.lineCap = "round";
    ctx.moveTo(radius, radius);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.closePath();

    console.log(value);
    console.log(value - 0 < epsilon);

    // green line
    ctx.beginPath();
    if (polarity === 'Unipolar') {
      ctx.strokeStyle = '#2BE127';
      ctx.lineWidth = size / 30;
      ctx.arc(radius, radius, radius - size / 30, startAngle, angle);
      ctx.stroke();
    } else if (polarity === 'Bipolar') {
      ctx.strokeStyle = '#2BE127';
      ctx.lineWidth = size / 30;
      ctx.arc(radius, radius, radius - size / 30, value - Math.floor(max / 2) < epsilon ? -Math.PI / 2 : 3 / 2 * Math.PI, angle, value - Math.floor(max / 2) < epsilon);
      ctx.stroke();
    }
    ctx.closePath();
  });


  

  const handleMouseUp = () => {
    isDragging = false;
  }

  const handleMouseDown = () => {
    isDragging = true; 
  }

  const handleMouseMove = (event: any) => {
    if (isDragging) {
      if (mouseY! < event.offsetY) {
        value -= steps;
      } else if (mouseY > event.offsetY) {
        value += steps;
      }
    }
    value = clamp(min, max, value);
    updateValue(value);
    mouseY = event.offsetY;
  }




</script>


<canvas on:mousemove={handleMouseMove} 
        on:mouseup={handleMouseUp}
        on:mousedown={handleMouseDown}
        id="knob" 
        width={`${size}`}
        height={`${size}`}
        style="--border-size: {`${border_size}px`}">

</canvas>



<style>

  #knob {
    border: var(--border-size) solid #343434;
  }
</style>
