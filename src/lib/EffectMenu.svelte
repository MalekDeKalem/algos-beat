<script lang="ts">
    import MenuItem from "./MenuItem.svelte";
    let menuOpen = false;
    // const menuItems = ["TrippleDelay", "FreeStudioVerb", "NotAPhase"];
    const menuItems = [
        {
            id: 0,
            effectName: "TrippleDelay"
        },
        {
            id: 1,
            effectName: "FreeStudioVerb"
        },
        {
            id: 2,
            effectName: "NotAPhase"
        },
    ];


    const handleClick = () => {
        menuOpen = !menuOpen;
    }
</script>

<div class="container">
    <button on:click={handleClick}> Effects </button>
    <div class="dropdown">
        <div class:show={menuOpen} class="dropdown-content">
            {#each menuItems as item (item.id)}
                <div class="clickable">
                    <!-- svelte-ignore missing-declaration -->
                    <MenuItem {...item} />
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