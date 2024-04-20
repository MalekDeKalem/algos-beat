import * as Tone from "tone";

export type Effect = {
    id: number,
    effectName: string,
    effect: Tone.Reverb | Tone.Delay | Tone.Distortion | Tone.Phaser | Tone.Freeverb | Tone.JCReverb | Tone.PingPongDelay | Tone.PitchShift | Tone.Tremolo | Tone.Vibrato | Tone.FrequencyShifter | Tone.FeedbackDelay | Tone.Chebyshev | Tone.AutoWah | Tone.Chorus | Tone.Filter
};

export type Polarity = "Bipolar" | "Unipolar";
