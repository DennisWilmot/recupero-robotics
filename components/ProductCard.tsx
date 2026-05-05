import type { Product } from "@/data/types";

export function ProductCard({
  product,
  featured = false,
}: {
  product: Product;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <article className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover min-h-[280px] lg:min-h-[380px]"
          />
        </div>
        <div>
          <p className="text-green-700 text-xs font-semibold tracking-wider uppercase mb-2">
            {product.subtitle}
          </p>
          <h3 className="font-display font-bold text-fluid-sub text-ink-900 mb-4">
            {product.name}
          </h3>
          <ul className="space-y-2.5 mb-6">
            {product.bullets.map((bullet) => (
              <li
                key={bullet}
                className="text-ink-600 text-[0.95rem] leading-relaxed flex items-start gap-2.5"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
          {product.quote && (
            <blockquote className="text-ink-500 text-sm italic">
              &ldquo;{product.quote}&rdquo;
            </blockquote>
          )}
        </div>
      </article>
    );
  }

  return (
    <article className="group">
      <div className="overflow-hidden rounded-xl mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <p className="text-green-700 text-xs font-semibold tracking-wider uppercase mb-1">
        {product.subtitle}
      </p>
      <h3 className="font-display font-bold text-lg text-ink-900 mb-3">
        {product.name}
      </h3>
      <ul className="space-y-1.5">
        {product.bullets.slice(0, 4).map((bullet) => (
          <li
            key={bullet}
            className="text-ink-500 text-sm leading-relaxed flex items-start gap-2"
          >
            <span className="mt-1.5 w-1 h-1 rounded-full bg-green-400 flex-shrink-0" />
            {bullet}
          </li>
        ))}
      </ul>
      {product.quote && (
        <blockquote className="mt-4 text-ink-400 text-sm italic">
          &ldquo;{product.quote}&rdquo;
        </blockquote>
      )}
    </article>
  );
}
