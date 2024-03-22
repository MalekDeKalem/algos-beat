import { writable } from 'svelte/store';


export const bpmStore = writable(120);
export const beatStore = writable(0);
export const playStore = writable(false);
export const drumEffectStore = writable<number | null>(null);
export const synthEffectStore = writable<number | null>(null);
export const gainDrumStore = writable<number[]>([1, 1, 1, 1, 1, 0]); // Perc2, Perc1, Hat, Clap, Snare, Kick