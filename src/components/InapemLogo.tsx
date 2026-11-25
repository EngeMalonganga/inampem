import React from 'react';

export const InapemLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`inline-flex items-center justify-center gap-2.5 sm:gap-3.5 select-none max-w-full ${className}`}
      aria-label="INAPEM"
    >
      {/* Swirling Ribbon Emblem */}
      <svg
        viewBox="0 0 110 78"
        className="h-10 w-auto sm:h-14 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="inapem-gold" x1="18" y1="8" x2="98" y2="68" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F5A623" />
            <stop offset="50%" stopColor="#ED7D1F" />
            <stop offset="100%" stopColor="#E14924" />
          </linearGradient>
          <linearGradient id="inapem-crimson" x1="10" y1="24" x2="72" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9E1B1E" />
            <stop offset="55%" stopColor="#B82325" />
            <stop offset="100%" stopColor="#D63B25" />
          </linearGradient>
          <linearGradient id="inapem-highlight" x1="28" y1="62" x2="96" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D94524" />
            <stop offset="50%" stopColor="#EE8320" />
            <stop offset="100%" stopColor="#F8B526" />
          </linearGradient>
          <radialGradient id="inapem-core" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#6D1316" />
            <stop offset="100%" stopColor="#991D20" />
          </radialGradient>
        </defs>

        {/* Outer upper sweeping golden-orange arc */}
        <path
          d="M22 25C35 8 68 4 86 19C98 29 101 44 92 55C86 62 74 67 60 66C74 62 84 52 84 39C84 24 68 15 47 18C35 20 26 24 22 25Z"
          fill="url(#inapem-gold)"
          opacity="0.92"
        />

        {/* Deep crimson inner swirl wrapping left to bottom-right */}
        <path
          d="M54 17C33 17 16 28 16 42C16 58 34 70 59 69C72 68 83 63 90 56C79 63 63 64 49 58C33 51 27 38 35 27C40 20 49 17 54 17Z"
          fill="url(#inapem-crimson)"
        />

        {/* Lower sweeping warm orange-gold ribbon */}
        <path
          d="M26 52C36 66 60 72 80 64C95 58 103 44 97 31C94 24 88 19 80 16C89 23 93 34 87 44C80 56 61 61 42 56C35 54 30 53 26 52Z"
          fill="url(#inapem-highlight)"
        />

        {/* Inner dark crimson eye / focal oval */}
        <path
          d="M42 29C49 24 58 26 62 32C66 38 62 46 54 49C46 52 38 48 36 41C34 36 37 32 42 29Z"
          fill="url(#inapem-core)"
        />

        {/* Inner warm highlight crescent inside the loop */}
        <path
          d="M64 25C71 29 74 37 70 44C66 51 56 54 46 52C56 52 63 47 65 40C67 34 66 29 64 25Z"
          fill="#F6B229"
          opacity="0.75"
        />

        {/* Subtle left tail accent */}
        <path
          d="M11 38C13 30 22 22 34 20C23 25 18 33 19 43C20 50 25 56 32 60C20 56 10 47 11 38Z"
          fill="#B32422"
          opacity="0.88"
        />
      </svg>

      {/* Wordmark */}
      <span className="text-[1.85rem] sm:text-[2.5rem] font-bold tracking-[-0.035em] leading-none text-[#4c4541]">
        inapem
      </span>
    </div>
  );
};
