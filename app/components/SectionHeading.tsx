import { Reveal } from "./Reveal";
import { StrokeUnderline } from "./Sweep";

export function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-taupe">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 font-display text-4xl leading-none text-espresso sm:text-5xl">
        {title}
      </h2>
      <StrokeUnderline className="mt-1 text-rose" />
    </Reveal>
  );
}
