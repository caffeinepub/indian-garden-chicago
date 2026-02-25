import type { MenuItem } from '../backend';

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <div className="group relative bg-white border border-gold/20 rounded-sm p-5 hover:border-gold/60 hover:shadow-md hover:shadow-gold/10 transition-all duration-300">
      {/* Gold corner accent */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold/50 rounded-tl-sm" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold/50 rounded-br-sm" />

      <div className="flex justify-between items-start gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-crimson text-base font-semibold leading-snug mb-1.5 group-hover:text-saffron transition-colors">
            {item.name}
          </h3>
          {item.description && (
            <p className="font-body text-warm-gray text-sm leading-relaxed line-clamp-2">
              {item.description}
            </p>
          )}
        </div>
        <div className="flex-shrink-0">
          <span className="font-display text-gold font-bold text-base">
            ${item.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
