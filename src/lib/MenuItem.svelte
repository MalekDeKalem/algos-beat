<script lang="ts">
    import { drumEffectStore } from '../stores'
    export let id: number;
    export let effectName: String;


    const handleClick = () => {
        drumEffectStore.set(id);
    }

    const handleEffectSelect = (effectId: number) => {

    }
</script>


<div>
    <a on:click={handleClick}> { effectName } </a>
</div>