interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) => {
  return (
    <div
      className={`mb-10 md:mb-16 ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      {/* Red accent line */}
      <div
        className={`h-1 w-12 bg-ted-red rounded-full mb-6 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] uppercase tracking-tight text-white leading-[0.95]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm md:text-base text-white/50 max-w-2xl leading-relaxed font-light mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
