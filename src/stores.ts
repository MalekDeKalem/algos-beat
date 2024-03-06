import { writable } from 'svelte/store';


export const bpmStore = writable(120);
export const beatStore = writable(0);
export const playStore = writable(false);