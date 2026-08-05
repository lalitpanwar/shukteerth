export default function StoryItem({ badge, title, description, last = false }) {
  return (
    <article
      className={`
        relative
        py-24

        ${!last ? "border-b border-brand-border/60" : ""}
      `}
    >
      {/* Badge */}

      <span
        className="
          inline-flex
          items-center

          rounded-full

          border
          border-brand-gold/30

          bg-brand-gold/10

          px-4
          py-2

          text-xs
          font-medium
          tracking-[0.18em]

          text-brand-primary
          uppercase
        "
      >
        {badge}
      </span>

      {/* Heading */}

      <h3
        className="
          mt-6

          font-heading

          text-3xl
          leading-tight

          text-brand-brown

          md:text-4xl
        "
      >
        {title}
      </h3>

      {/* Gold Divider */}

      <div className="my-8 h-px w-24 bg-brand-gold"></div>

      {/* Description */}

{description.map((paragraph) => (
  <p key={paragraph} className="mt-5 leading-8">
    {paragraph}
  </p>
))}
    </article>
  );
}
