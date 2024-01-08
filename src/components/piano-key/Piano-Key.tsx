import { Box, styled } from "@mui/material";
import { PitchClass } from "../../data/notes";

export enum PianoKeyType {
  Black = "black",
  White = "white",
}
interface PianoKeyProps {
  pianoKeyType?: PianoKeyType;
  pitch: PitchClass;
  octave: number;
  onClick?: (pitch: PitchClass, octave: number) => void;
}
export function PianoKey({
  pianoKeyType,
  pitch,
  octave,
  onClick,
}: PianoKeyProps) {
  const handleKeyOnClick = () => {
    onClick && onClick(pitch, octave);
  };
  if (pianoKeyType === PianoKeyType.Black)
    return <StyledBlackPianoKey onMouseDown={handleKeyOnClick} />;
  return <StyledWhitePianoKey onMouseDown={handleKeyOnClick} />;
}

const StyledWhitePianoKey = styled(Box)(() => ({
  width: "70px",
  height: "300px",
  border: "1px solid black",
  backgroundColor: "#FFFFF0",
}));

const StyledBlackPianoKey = styled(Box)(() => ({
  width: "60px",
  height: "200px",
  border: "1px solid white",
  backgroundColor: "black",
}));
