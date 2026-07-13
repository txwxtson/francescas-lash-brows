"use client";

import { useId, useState } from "react";
import Image from "next/image";

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  caption = "Drag to see the transformation",
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  caption?: string;
}) {
  const [value, setValue] = useState(50);
  const id = useId();

  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="relative aspect-[3/4] select-none overflow-hidden rounded-sm bg-sand">
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(min-width: 640px) 384px, 90vw"
          className="object-cover"
          draggable={false}
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            sizes="(min-width: 640px) 384px, 90vw"
            className="object-cover"
            draggable={false}
          />
        </div>

        <label htmlFor={id} className="sr-only">
          {caption}
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          className="ba-range absolute inset-0 z-30 h-full w-full"
          aria-label={caption}
          aria-valuetext={`${value}% after, ${100 - value}% before`}
        />

        <span className="pointer-events-none absolute left-3 top-3 z-20 bg-espresso/85 px-2 py-1 text-[11px] font-medium uppercase tracking-wide text-cream">
          After
        </span>
        <span className="pointer-events-none absolute right-3 top-3 z-20 bg-espresso/85 px-2 py-1 text-[11px] font-medium uppercase tracking-wide text-cream">
          Before
        </span>

        <div
          className="ba-handle pointer-events-none absolute top-0 z-20 h-full w-0.5 bg-cream"
          style={{ left: `${value}%`, transform: "translateX(-50%)" }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-espresso shadow-md">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M8 5l-6 7 6 7M16 5l6 7-6 7" />
            </svg>
          </span>
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-taupe">{caption}</p>
    </div>
  );
}
