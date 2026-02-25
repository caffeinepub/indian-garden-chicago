interface SectionDividerProps {
  flip?: boolean;
}

export default function SectionDivider({ flip = false }: SectionDividerProps) {
  return (
    <div className={`flex items-center justify-center py-8 bg-ivory overflow-hidden ${flip ? 'scale-x-[-1]' : ''}`}>
      <svg
        viewBox="0 0 1200 60"
        className="w-full max-w-5xl h-12 text-gold/40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Left line */}
        <line x1="0" y1="30" x2="480" y2="30" stroke="currentColor" strokeWidth="1" />
        {/* Left lotus petal group */}
        <ellipse cx="500" cy="30" rx="12" ry="6" stroke="currentColor" strokeWidth="1" fill="none" />
        <ellipse cx="500" cy="30" rx="8" ry="4" stroke="currentColor" strokeWidth="0.5" fill="none" />
        {/* Center mandala */}
        <circle cx="600" cy="30" r="20" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="600" cy="30" r="14" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <circle cx="600" cy="30" r="6" stroke="currentColor" strokeWidth="1" fill="none" />
        {/* Petal lines */}
        <line x1="600" y1="10" x2="600" y2="50" stroke="currentColor" strokeWidth="0.5" />
        <line x1="580" y1="30" x2="620" y2="30" stroke="currentColor" strokeWidth="0.5" />
        <line x1="585.86" y1="15.86" x2="614.14" y2="44.14" stroke="currentColor" strokeWidth="0.5" />
        <line x1="614.14" y1="15.86" x2="585.86" y2="44.14" stroke="currentColor" strokeWidth="0.5" />
        {/* Right lotus petal group */}
        <ellipse cx="700" cy="30" rx="12" ry="6" stroke="currentColor" strokeWidth="1" fill="none" />
        <ellipse cx="700" cy="30" rx="8" ry="4" stroke="currentColor" strokeWidth="0.5" fill="none" />
        {/* Right line */}
        <line x1="720" y1="30" x2="1200" y2="30" stroke="currentColor" strokeWidth="1" />
        {/* Small diamonds */}
        <rect x="540" y="26" width="8" height="8" transform="rotate(45 544 30)" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <rect x="652" y="26" width="8" height="8" transform="rotate(45 656 30)" stroke="currentColor" strokeWidth="0.8" fill="none" />
      </svg>
    </div>
  );
}
