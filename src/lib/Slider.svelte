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
</script>





<canvas id="slider"> </canvas>




<styles>


</styles>
