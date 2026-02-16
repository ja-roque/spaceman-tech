interface WaveDividerProps {
  fillColor: string;
  bgColor?: string;
  flip?: boolean;
  variant?: 1 | 2 | 3;
}

export default function WaveDivider({
  fillColor,
  bgColor = "transparent",
  flip = false,
  variant = 1,
}: WaveDividerProps) {
  const paths: Record<number, string> = {
    1: "M0,64 C120,100 240,20 360,64 C480,108 600,28 720,64 C840,100 960,20 1080,64 C1200,108 1320,28 1440,64 L1440,160 L0,160 Z",
    2: "M0,80 C180,120 360,40 540,80 C720,120 900,40 1080,80 C1200,106 1320,54 1440,80 L1440,160 L0,160 Z",
    3: "M0,96 C240,130 480,50 720,90 C960,130 1200,60 1440,96 L1440,160 L0,160 Z",
  };

  return (
    <div
      className="wave-divider"
      style={{
        backgroundColor: bgColor,
        marginBottom: "-1px",
        transform: flip ? "rotate(180deg)" : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        style={{ height: "80px" }}
      >
        <path d={paths[variant]} fill={fillColor} />
      </svg>
    </div>
  );
}
