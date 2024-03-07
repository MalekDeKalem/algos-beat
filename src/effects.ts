import * as Tone from "tone";



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

const alien = new Tone.Distortion({
    distortion: 0.9,
    oversample: "2x",
    wet: 0.6
});

const bitcrusher = new Tone.Phaser({
    frequency: 500,
    baseFrequency: 440,
    octaves: 3,
    wet: 0.5
}).connect(trippleDelay);





export const effects = [
    trippleDelay.toDestination(),
    freestudioverb.toDestination(),
    bitcrusher.toDestination()
]