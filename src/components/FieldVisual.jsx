function FieldVisual() {
  return (
    <div
      role="img"
      aria-label="Abstract illustrative agricultural field artwork, not a company photograph"
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-leaf-border bg-leaf-earth shadow-sm sm:aspect-[5/4] lg:aspect-[4/3]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 720 560"
        className="absolute inset-0 size-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="720" height="560" fill="#f5f1e8" />
        <circle cx="540" cy="130" r="58" fill="#d8e8c8" />
        <path d="M0 332c108-74 189-83 302-38 91 37 181 30 418-37v303H0Z" fill="#dce8d3" />
        <path d="M0 394c137-49 238-38 348 7 104 43 232 32 372-26v185H0Z" fill="#9ab88d" />
        <path d="M0 461c144-33 250-19 360 20 132 47 244 34 360-4v83H0Z" fill="#557c55" />
        <g fill="none" stroke="#f5f1e8" strokeLinecap="round" strokeWidth="3" opacity=".72">
          <path d="M352 560c-15-85-34-128-84-184" />
          <path d="M410 560c-6-83-11-130-24-190" />
          <path d="M468 560c8-83 18-128 42-184" />
          <path d="M526 560c22-75 42-115 80-161" />
          <path d="M294 560c-28-61-54-94-99-123" />
        </g>
        <g fill="none" stroke="#14532d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" opacity=".75">
          <path d="M128 348c-2-53 4-91 27-127m-26 91c-25-24-39-43-45-66m51 45c24-21 40-43 47-69" />
          <path d="M128 305c-18-4-33-14-44-30m61 3c18-9 31-23 40-42" />
          <path d="M610 358c-1-42 5-72 24-100m-22 71c-20-17-31-33-37-51m47 34c19-17 31-34 37-54" />
        </g>
        <path d="M0 0h720v12H0z" fill="#14532d" opacity=".9" />
      </svg>
      <span className="absolute bottom-4 left-4 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-medium text-leaf-primary shadow-sm">
        Illustrative concept visual
      </span>
    </div>
  )
}

export default FieldVisual
