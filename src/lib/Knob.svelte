<script lang="ts">
/*
<Knob {min} {max} {step} {value} />

*/

</script>





<div class="slider">
  <div class="knob">
      <input type="range"/>
  </div>
</div>



<style>
  .slider {
    position: relative;
    width: 10em;
    height: 10em;
    border-radius: 50%;
    background: linear-gradient(0deg, #525252 0%, #373737 100%);
    box-shadow: 0px -20px 20px #757575, 0px 20px 35px #111111, inset 0px 5px 6px #979797, inset 0px -5px 6px #242424;
  }

  input[type="range"] {
    positions: absolute;
    appearance: slider-vertical;
    margin-left: -9em;
    width: 20em;
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
