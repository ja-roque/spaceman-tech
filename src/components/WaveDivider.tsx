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
    1: "M0,64 C90,100 270,28 360,64 C450,100 630,28 720,64 C810,100 990,28 1080,64 C1170,100 1350,28 1440,64 L1440,160 L0,160 Z",
    2: "M0,80 C120,116 360,44 480,80 C600,116 840,44 960,80 C1080,116 1320,44 1440,80 L1440,160 L0,160 Z",
    3: "M0,90 C240,128 480,52 720,90 C960,128 1200,52 1440,90 L1440,160 L0,160 Z",
  };

  const wave = (
    <svg
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
      style={{ height: "80px", display: "block", minWidth: "100%" }}
    >
      <path d={paths[variant]} fill={fillColor} />
    </svg>
  );

  return (
    <div
      className="wave-divider"
      style={{
        backgroundColor: bgColor,
        marginBottom: "-1px",
        overflow: "hidden",
        transform: flip ? "rotate(180deg)" : undefined,
      }}
    >
      {/* Back wave — offset, slower */}
      <div
        style={{
          display: "flex",
          width: "200%",
          opacity: 0.45,
          position: "absolute",
          animation: "wave-scroll 18s linear infinite",
        }}
      >
        {wave}{wave}
      </div>
      {/* Front wave — full color */}
      <div
        style={{
          display: "flex",
          width: "200%",
          animation: "wave-scroll 13s linear infinite",
          position: "relative",
        }}
      >
        {wave}{wave}
      </div>
    </div>
  );
}
