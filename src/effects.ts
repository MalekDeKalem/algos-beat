import * as Tone from "tone";
import type { Effect } from "./Resource";



const trippleDelay = new Tone.PingPongDelay({
    delayTime: "8n.",
    feedback: 0.5,
    maxDelay: 2.0,
    wet: 0.6
});


const freestudioverb = new Tone.Freeverb({
    roomSize: 0.3,
    wet: 0.3,
    dampening: 1000
});

const dist = new Tone.Distortion({
    distortion: 0.9,
    oversample: "2x",
    wet: 0.6
});

const phase = new Tone.Phaser({
    frequency: 500,
    baseFrequency: 440,
    octaves: 3,
    wet: 0.5
}).connect(dist);

export const drumEffectChain: Effect[] = [
    {
        id: 0,
        effectName: "TrippleDelay",
        effect: trippleDelay
    },
    {
        id: 1,
        effectName: "FreeStudioVerb",
        effect: freestudioverb
    },
    {
        id: 2,
        effectName: "PhaseDistrd",
        effect: phase
    }
]




// export const effects2 = [
//     {
//         id: 0,
//         effectName: 'TrippleDelay',
//         fx_chain: [
//             new Tone.Distortion({
//                 distortion: 0.9,
//                 oversample: "2x",
//                 wet: 0.6
//             }),
            
//             new Tone.Phaser({
//                 frequency: 500,
//                 baseFrequency: 440,
//                 octaves: 3,
//                 wet: 0.5
//             }).connect(dist)
//         ]

//     }
// ]