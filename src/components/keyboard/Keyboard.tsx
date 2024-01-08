import { Box } from "@mui/material";
import { PITCH_MAP, PitchClass } from "../../data/notes";
import { PianoKey, PianoKeyType } from "../piano-key/Piano-Key";

export function Keyboard() {
  return (
    <Box display="flex">
      <TwoCluster octave={2} />
      <ThreeCluster octave={2} />
      <TwoCluster octave={3} />
      <ThreeCluster octave={3} />
      <TwoCluster octave={4} />
      <ThreeCluster octave={4} />
      <TwoCluster octave={5} />
      <ThreeCluster octave={5} />
      <TwoCluster octave={6} />
      <ThreeCluster octave={6} />
    </Box>
  );
}

// First grouping of keys starting with C
const TwoCluster = ({ octave }: { octave: number }) => {
  return (
    <Box display="flex" position={"relative"}>
      <PianoKey
        pitch={PitchClass.C}
        octave={octave}
        onClick={(pitch, octave) => playTone(PITCH_MAP[pitch]![octave])}
      />
      <PianoKey
        pitch={PitchClass.D}
        octave={octave}
        onClick={(pitch, octave) => playTone(PITCH_MAP[pitch]![octave])}
      />
      <PianoKey
        pitch={PitchClass.E}
        octave={octave}
        onClick={(pitch, octave) => playTone(PITCH_MAP[pitch]![octave])}
      />
      <Box position={"absolute"} left={30}>
        <PianoKey
          pianoKeyType={PianoKeyType.Black}
          pitch={PitchClass.CSharp}
          octave={octave}
          onClick={(pitch, octave) => playTone(PITCH_MAP[pitch]![octave])}
        />
      </Box>
      <Box position={"absolute"} left={120}>
        <PianoKey
          pianoKeyType={PianoKeyType.Black}
          pitch={PitchClass.DSharp}
          octave={octave}
          onClick={(pitch, octave) => playTone(PITCH_MAP[pitch]![octave])}
        />
      </Box>
    </Box>
  );
};

// Second group starting with F
const ThreeCluster = ({ octave }: { octave: number }) => {
  return (
    <Box display="flex" position={"relative"}>
      <PianoKey
        pitch={PitchClass.F}
        octave={octave}
        onClick={(pitch, octave) => playTone(PITCH_MAP[pitch]![octave])}
      />
      <PianoKey
        pitch={PitchClass.G}
        octave={octave}
        onClick={(pitch, octave) => playTone(PITCH_MAP[pitch]![octave])}
      />
      <PianoKey
        pitch={PitchClass.A}
        octave={octave}
        onClick={(pitch, octave) => playTone(PITCH_MAP[pitch]![octave])}
      />
      <PianoKey
        pitch={PitchClass.B}
        octave={octave}
        onClick={(pitch, octave) => playTone(PITCH_MAP[pitch]![octave])}
      />
      <Box position={"absolute"} left={30}>
        <PianoKey
          pianoKeyType={PianoKeyType.Black}
          pitch={PitchClass.FSharp}
          octave={octave}
          onClick={(pitch, octave) => playTone(PITCH_MAP[pitch]![octave])}
        />
      </Box>
      <Box position={"absolute"} left={112}>
        <PianoKey
          pianoKeyType={PianoKeyType.Black}
          pitch={PitchClass.GSharp}
          octave={octave}
          onClick={(pitch, octave) => playTone(PITCH_MAP[pitch]![octave])}
        />
      </Box>
      <Box position={"absolute"} left={195}>
        <PianoKey
          pianoKeyType={PianoKeyType.Black}
          pitch={PitchClass.ASharp}
          octave={octave}
          onClick={(pitch, octave) => playTone(PITCH_MAP[pitch]![octave])}
        />
      </Box>
    </Box>
  );
};

function playTone(hz: number) {
  const ctx = new window.AudioContext();
  const osc = ctx.createOscillator();
  osc.type = "square";
  osc.connect(ctx.destination);

  osc.frequency.value = hz;
  osc.start(0);
  osc.stop(0.5);
}
