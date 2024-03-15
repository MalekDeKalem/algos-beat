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
}).toDestination();

const phase = new Tone.Phaser({
    frequency: 500,
    baseFrequency: 440,
    octaves: 3,
    wet: 0.5
}).connect(dist);

const cheby = new Tone.Chebyshev({
    order: 15,
    oversample: "2x",
    wet: 0.6
});

const auto = new Tone.AutoWah({
    baseFrequency: 440,
    follower: "4n",
    octaves: 3,
    wet: 1.0
});

const jc = new Tone.JCReverb({
    roomSize: 0.05,
    wet: 0.2
}).toDestination();

const widener = new Tone.Chorus({
    delayTime: 10,
    depth: 0.4,
    feedback: 0.4,
    frequency: 440,
    spread: 45,
    type: "sine",
    wet: 0.4
}).connect(jc);

const filter = new Tone.Filter({
    frequency: 100,
    type: "lowpass",
}).toDestination();

const verb = new Tone.Reverb({
    decay: 5,
    wet: 0.4
}).connect(filter);





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
    },
    {
        id: 3,
        effectName: "Cheby",
        effect: cheby
    },
    {
        id: 4,
        effectName: "Autobots",
        effect: auto
    },
    {
        id: 5,
        effectName: "Widener",
        effect: widener
    },
    {
        id: 6,
        effectName: "Rumble",
        effect: verb
    }
]


