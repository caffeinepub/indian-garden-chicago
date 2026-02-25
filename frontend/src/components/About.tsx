export default function About() {
  return (
    <section id="about" className="py-20 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-body text-saffron text-xs tracking-[0.4em] uppercase mb-3">Our Story</p>
          <h2 className="font-display text-4xl sm:text-5xl text-crimson font-bold mb-4">About Indian Garden</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gold/50" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="h-px w-12 bg-gold/50" />
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 rounded-sm pointer-events-none" />
            <img
              src="/assets/generated/restaurant-ambiance.dim_1200x800.png"
              alt="Indian Garden Restaurant Ambiance"
              className="w-full h-80 lg:h-[480px] object-cover rounded-sm shadow-xl relative z-10"
            />
            {/* Gold badge overlay */}
            <div className="absolute -bottom-5 -right-5 z-20 bg-crimson border-2 border-gold rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg">
              <span className="font-display text-gold text-2xl font-bold leading-none">40+</span>
              <span className="font-body text-ivory/80 text-xs tracking-wide">Years</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl text-crimson font-semibold mb-4 leading-snug">
                A Legacy of Authentic Indian Cuisine in Chicago
              </h3>
              <p className="font-body text-warm-gray leading-relaxed mb-4">
                Since 1981, Indian Garden has been a beloved culinary landmark in the heart of Chicago. 
                Nestled at 68 W. Washington Street, we have been serving generations of Chicagoans and 
                visitors with the authentic flavors of India — from the tandoor-kissed breads to the 
                slow-simmered curries that warm the soul.
              </p>
              <p className="font-body text-warm-gray leading-relaxed mb-4">
                Our kitchen is guided by time-honored recipes passed down through generations, 
                using the finest hand-selected spices imported directly from India. Every dish 
                tells a story — of vibrant bazaars, fragrant spice markets, and the warmth of 
                Indian hospitality.
              </p>
              <p className="font-body text-warm-gray leading-relaxed">
                Whether you're savoring our signature Chicken Tikka Masala, exploring the 
                vegetarian delights of our Palak Paneer, or indulging in the aromatic layers 
                of our Biryani, each bite is a celebration of India's rich culinary heritage.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: '🌶️', title: 'Authentic Spices', desc: 'Imported directly from India' },
                { icon: '🍃', title: 'Vegetarian Friendly', desc: 'Extensive plant-based menu' },
                { icon: '🏆', title: 'Award Winning', desc: 'Chicago\'s finest Indian cuisine' },
                { icon: '👨‍🍳', title: 'Expert Chefs', desc: 'Trained in traditional techniques' },
              ].map((feat) => (
                <div key={feat.title} className="flex items-start gap-3 p-3 bg-white/60 rounded-sm border border-gold/15">
                  <span className="text-2xl">{feat.icon}</span>
                  <div>
                    <p className="font-display text-crimson text-sm font-semibold">{feat.title}</p>
                    <p className="font-body text-warm-gray text-xs">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Food spread banner */}
        <div className="mt-16 relative overflow-hidden rounded-sm">
          <img
            src="/assets/generated/food-spread-banner.dim_1400x600.png"
            alt="Indian Garden Food Spread"
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-crimson/70 via-transparent to-crimson/70 flex items-center justify-center">
            <p className="font-display text-ivory text-2xl sm:text-3xl font-bold text-center px-4 drop-shadow-lg">
              "Where Every Meal is a Celebration"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
