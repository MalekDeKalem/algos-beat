<script lang="ts">
    import { drumEffectChain } from "../effects";
    import { drumEffectStore } from "../stores";
    import MenuItem from "./MenuItem.svelte";
    let menuOpen = false;

    const handleClick = () => {
        menuOpen = !menuOpen;
    }

    const handleInitEffect = () => {

        drumEffectChain[$drumEffectStore!].effect.disconnect();
        drumEffectStore.set(null);
    }

</script>

<div class="container">
    <button on:click={handleClick}> Effects </button>
    <div class="dropdown">
        <div class:show={menuOpen} class="dropdown-content">
            <div class="clickable">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <a on:click={handleInitEffect}> Init </a>
            </div>
            {#each drumEffectChain as item (item.id)}
                <div class="clickable">
                    <!-- svelte-ignore missing-declaration -->
                    <MenuItem id={item.id} effectName={item.effectName} />
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .container {
      position: relative;
    }

    .dropdown {
        position: fixed;
        left: calc(50vw);
        z-index: 1000;
        overflow-y: auto;
        max-height: 200px;
    }

    .dropdown-content {
      display: none;
      background-color: #242424;
      border: 1px solid #2BE127;
      z-index: 1000;
      top: calc(100% + 5px); /* Position below the button */
      left: 1000px; 
    }
    
    .dropdown-content.show {
      display: block;
    }

    /* Ensure button stays in place */
    button {
      position: relative;
      z-index: 1001; /* Ensure button is above the dropdown */
    }

    .clickable {
        color: azure;
    }

    .clickable:hover {
        opacity: 0.5;
        cursor: pointer;
    }
</style>