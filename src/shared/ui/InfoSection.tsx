import type { BlogSection } from "@/types";

type Props = { section: BlogSection };

export function InfoSection({ section }: Props) {
  return (
    <div className="mb-3 md:mb-6">
      {section.heading && (
        <h2 className="font-work-sans font-bold text-dark text-[18px] md:text-[24px] leading-6 md:leading-8 mb-2">
          {section.heading}
        </h2>
      )}
      {section.paragraphs.map((p, i) => (
        <p
          key={i}
          className="mb-2 md:mb-3 font-manrope text-xs lg:text-base leading-4.5 md:leading-6 text-secondary"
        >
          {p}
        </p>
      ))}
      {section.list && (
        <ul className="list-disc pl-5 flex flex-col gap-1.5 mb-2 md:mb-3">
          {section.list.map((item) => (
            <li
              key={item}
              className="font-manrope text-xs md:text-base leading-4.5 md:leading-6 text-secondary"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      {section.note && (
        <p className="font-manrope text-xs md:text-base leading-4.5 md:leading-6 text-secondary italic">
          {section.note}
        </p>
      )}
    </div>
  );
}
