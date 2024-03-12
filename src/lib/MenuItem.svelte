<script lang="ts">
    import { drumEffectChain } from '../effects';
    import { drumEffectStore } from '../stores'
    export let id: number;
    export let effectName: String;
    export let handleClickItem: () => void



    const handleEffectSelect = () => {
        if ($drumEffectStore !== null) {
            drumEffectChain[$drumEffectStore].effect.disconnect();
            drumEffectStore.set(id);
        } else {
            drumEffectStore.set(id);
        }

        handleClickItem();

    }
</script>


<div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <a on:click={handleEffectSelect}> { effectName } </a>
</div>