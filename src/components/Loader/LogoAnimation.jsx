
function LogoAnimation() {
  return (
    <svg
      className="loader-svg"
      viewBox="0 0 220 120"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="JA"
    >
      <g
        className="logo-strokes"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          id="letter-j"
          d="M12 27 H37 V72 Q37 91 21 91 Q10 91 10 78"
        />
        <path
          id="letter-a-left"
          d="M72 91 L97 27"
        />
        <path
          id="letter-a-right"
          d="M97 27 L122 91"
        />
        <path
          id="letter-a-crossbar"
          d="M82 66 H112"
        />
      </g>
      <circle
        id="logo-dot"
        cx="142"
        cy="89"
        r="4"
        fill="currentColor"
      />
    </svg>
  );
}

export default LogoAnimation;
