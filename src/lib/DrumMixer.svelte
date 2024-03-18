<script lang="ts">
    export let setGainMixer: (n: number, id: number) => void;
    export let gainNumbers: number[]
</script>





<div>
    {#each gainNumbers as gainNumber, index}
        <input type="range" min="0" max="1.5"/>
    {/each}
</div>



<style>

</style>