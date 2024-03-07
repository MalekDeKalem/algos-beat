<script lang="ts">
    import { drumEffectStore } from '../stores'
    export let id: number;
    export let effectName: String;


    const handleClick = () => {
        drumEffectStore.set(id);
    }
</script>


<div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <p on:click={handleClick}> { effectName } </p>
</div>