interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl font-bold text-neutral-100 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
