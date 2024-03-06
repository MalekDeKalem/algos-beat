<script lang="ts">
    let menuOpen = false;
    const menuItems = ["About", "Base", "Blog", "Contact", "Custom", "Support", "Tools", "Boats", "Cars", "Bikes", "Sheds", "Billygoats", "Zebras", "Tennis Shoes", "New Zealand"];

    const handleClick = () => {
        menuOpen = !menuOpen;
    }
</script>

<div class="container">
    <button on:click={handleClick}> Effects </button>
    <div class="dropdown" style="position: fixed; left: calc(50vw); z-index: 1000; overflow-y: auto; max-height: 200px;">
        <div class:show={menuOpen} class="dropdown-content">
            {#each menuItems as item}
                <p> { item } </p>
            {/each}
        </div>
    </div>
</div>

<style>
    .container {
      position: relative;
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
</style>