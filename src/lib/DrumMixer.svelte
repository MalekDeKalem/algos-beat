<script lang="ts">
    export let setGainKick: (n: number) => void;
    export let setGainSnare: (n: number) => void;
    export let setGainClap: (n: number) => void;
    export let setGainHat: (n: number) => void;
    export let setGainPerc: (n: number) => void;
    export let setGainPerc2: (n: number) => void;
</script>





<div>
    <input type="range" min="0" max="1.5" on:change={event => setGainKick(event.currentTarget.valueAsNumber)} />
</div>



<style>

</style>