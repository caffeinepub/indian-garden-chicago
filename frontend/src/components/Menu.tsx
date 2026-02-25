import { useState, useMemo } from 'react';
import { useMenuItems } from '../hooks/useQueries';
import MenuItemCard from './MenuItemCard';
import { Skeleton } from '@/components/ui/skeleton';
import type { MenuItem } from '../backend';

const CATEGORY_ORDER = [
  'Appetizers',
  'Soups',
  'Breads',
  'Vegetarian Entrees',
  'Non-Vegetarian Entrees',
  'Biryanis',
  'Desserts',
  'Drinks',
  'Beverages',
];

const CATEGORY_ICONS: Record<string, string> = {
  'Appetizers': '🌿',
  'Soups': '🍲',
  'Breads': '🫓',
  'Vegetarian Entrees': '🥗',
  'Non-Vegetarian Entrees': '🍗',
  'Biryanis': '🍛',
  'Desserts': '🍮',
  'Drinks': '🥤',
  'Beverages': '🥤',
};

export default function Menu() {
  const { data: menuItems, isLoading } = useMenuItems();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const grouped = useMemo(() => {
    if (!menuItems) return {};
    const map: Record<string, MenuItem[]> = {};
    menuItems.forEach((item) => {
      if (!map[item.category]) map[item.category] = [];
      map[item.category].push(item);
    });
    return map;
  }, [menuItems]);

  const categories = useMemo(() => {
    const keys = Object.keys(grouped);
    const ordered = CATEGORY_ORDER.filter((c) => keys.includes(c));
    const rest = keys.filter((k) => !CATEGORY_ORDER.includes(k));
    return [...ordered, ...rest];
  }, [grouped]);

  const displayCategories = activeCategory ? [activeCategory] : categories;

  return (
    <section id="menu" className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-body text-saffron text-xs tracking-[0.4em] uppercase mb-3">Culinary Delights</p>
          <h2 className="font-display text-4xl sm:text-5xl text-crimson font-bold mb-4">Our Menu</h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold/50" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="h-px w-12 bg-gold/50" />
          </div>
          <p className="font-body text-warm-gray max-w-xl mx-auto text-base leading-relaxed">
            Each dish is crafted with authentic spices and time-honored recipes, 
            bringing the vibrant flavors of India to your table.
          </p>
        </div>

        {/* Category Filter Tabs */}
        {!isLoading && categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 text-xs font-body font-medium tracking-wider uppercase rounded-sm transition-all duration-200 ${
                activeCategory === null
                  ? 'bg-crimson text-ivory shadow-md'
                  : 'bg-white border border-gold/30 text-warm-gray hover:border-gold hover:text-crimson'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                className={`px-4 py-2 text-xs font-body font-medium tracking-wider uppercase rounded-sm transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-crimson text-ivory shadow-md'
                    : 'bg-white border border-gold/30 text-warm-gray hover:border-gold hover:text-crimson'
                }`}
              >
                {CATEGORY_ICONS[cat] || '✦'} {cat}
              </button>
            ))}
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <Skeleton key={i} className="h-28 rounded-sm" />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && categories.length === 0 && (
          <div className="text-center py-16">
            <p className="font-display text-2xl text-crimson/40 mb-2">Menu Coming Soon</p>
            <p className="font-body text-warm-gray/60 text-sm">
              Our full menu will be available shortly. Please call us for today's offerings.
            </p>
          </div>
        )}

        {/* Menu Categories */}
        {!isLoading && displayCategories.map((category) => (
          <div key={category} className="mb-14">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gold/20" />
              <h3 className="font-display text-2xl text-crimson font-semibold px-4 flex items-center gap-2">
                <span className="text-xl">{CATEGORY_ICONS[category] || '✦'}</span>
                {category}
              </h3>
              <div className="h-px flex-1 bg-gold/20" />
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {grouped[category]?.map((item) => (
                <MenuItemCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
