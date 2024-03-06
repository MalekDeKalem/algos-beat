import * as Tone from "tone";



export const trippleDelay = new Tone.PingPongDelay({
    delayTime: "8n.",
    feedback: 0.5,
    maxDelay: 2.0,
    wet: 0.6
}).toDestination();