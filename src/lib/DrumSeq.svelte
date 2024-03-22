<script lang="ts">
  import * as Tone from "tone";
  import { bpmStore, beatStore, playStore, drumEffectStore, gainDrumStore } from "../stores";
  import { drumEffectChain } from "../effects";
  import DrumMixer from "./DrumMixer.svelte";


  const samples = [
    new Tone.Sampler({urls: {
        C3: '/sounds/perc_2.wav'
      },
    }),
    new Tone.Sampler({urls: {
        C3: '/sounds/perc_1.wav'
      },
    }),
    new Tone.Sampler({urls: {
        C3: '/sounds/hat.wav'
      },
    }),
    new Tone.Sampler({urls: {
        C3: '/sounds/clap.wav'
      },
    }),
    new Tone.Sampler({urls: {
        C3: '/sounds/snare.wav'
      },
    }),
        new Tone.Sampler({urls: {
        C3: '/sounds/kick.wav'
      },
    })
  ];
  

  let rows = [
    Array.from({ length: 16 }, (_, i) => ({ note: "C3", active: false })),
    Array.from({ length: 16 }, (_, i) => ({ note: "C3", active: false })),
    Array.from({ length: 16 }, (_, i) => ({ note: "C3", active: false })),
    Array.from({ length: 16 }, (_, i) => ({ note: "C3", active: false })),
    Array.from({ length: 16 }, (_, i) => ({ note: "C3", active: false })),
    Array.from({ length: 16 }, (_, i) => ({ note: "C3", active: false })),
  ]

  let beatIndicators = Array.from({ length: 16 }, (_, i) => i);


  const gainNodes = $gainDrumStore.map(gain => new Tone.Gain(gain));

  Tone.Transport.scheduleRepeat(time => {
    rows.forEach((row, index) => {
      let synth = samples[index];
      let note = row[$beatStore];

      // if ($drumEffectStore !== null) {
      //   synth.chain(drumEffectChain[$drumEffectStore].effect.toDestination());
      //   if (note.active) synth.triggerAttackRelease("C3", "8n", time);
      // } else {
      //   if (note.active) synth.triggerAttackRelease("C3", "8n", time).toDestination();
      // }

      if ($drumEffectStore !== null) {
        synth.chain(gainNodes[index], drumEffectChain[$drumEffectStore].effect, Tone.Destination);
        if (note.active) synth.triggerAttackRelease("C3", "8n", time);
      } else {
        synth.chain(gainNodes[index], Tone.Destination);
        if (note.active) synth.triggerAttackRelease("C3", "8n", time);
      }
      

    });
    beatStore.update((beat) => (beat + 1) % 16);
  }, "16n");
    
  const handleNoteClick = (rowIndex: number, noteIndex: number) => {
    rows[rowIndex][noteIndex].active = !rows[rowIndex][noteIndex].active;
  };

  const handlePlayClick = () => {
    if (!($playStore)) Tone.start();
    Tone.Transport.bpm.value = $bpmStore;
    Tone.Transport.start();
    playStore.update(() => true);
  };

  const handleStopClick = () => {
    Tone.Transport.stop();
    playStore.update(() => false);
  };

  const handleClearClick = () => {
    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < rows[i].length; j++) {
        rows[i][j].active = false;
      }
    }
  }

  $: if ($playStore) {
    Tone.Transport.bpm.value = $bpmStore;
  }

  const handleSetGainMixer = (n: number, id: number) => {
    // Implement logic to update the gain value with index `id`
    console.log(`Updating gain for element with id ${id} to value ${n}`);
  };
    
</script>
  
  
  <div>

    <input type="range" min="30" max="300" bind:value={$bpmStore}>

    <div class="container">
      <div class="beat-indicators">
        {#each beatIndicators as beatIndicator, bi}
          <div class="beat-indicator {bi === $beatStore ? 'live' : ''}"></div>
        {/each}
      </div>
  
  
      {#each rows as row, i}
      
        <div class="row">
          {#each row as note, j}
            <button
            on:click={() => handleNoteClick(i, j)}
            class="note {note.active ? 'active' : ''}"></button> 
          {/each}
        </div>
      {/each}
    </div>
    <button on:click={handlePlayClick}> Play </button>
    <button on:click={handleStopClick}> Stop </button>
    <button on:click={handleClearClick}> Clear </button>



    <div class="mixer-container">
      <!-- container for the DrumMixer -->
    </div>



  </div>
  
  <style>
    .row {
      display: flex;
      flex-direction: row;
      margin-bottom: 1px;
    }

    .mixer-container {
      position: absolute;
    }
  
    .container {
      display: flex;
      flex-direction: column;
    }
  
    .beat-indicator {
      width: 10px;
      height: 10px;
      border-radius: 20px;
      background-color: #aaa;
      display:flex;
      margin: 0 auto; 
    }
  
    .beat-indicators {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
  
  
    .beat-indicator.live {
      background-color: #2BE127;
    }
  
    .note {
      background: #ccc;
      width: 25px;
      height: 25px;
      border: 3px solid #ccc;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 2px;
    }
  
    .note.active {
      background-color: #2BE127;
      border-color: #2BE127;
    }
  
    .note:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  
    .note:nth-child(4n - 3) {
      border-color: #2BE127;
    }
  
  </style>