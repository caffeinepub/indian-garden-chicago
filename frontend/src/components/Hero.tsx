import { useSpecialties } from '../hooks/useQueries';

export default function Hero() {
  const { data: specialties } = useSpecialties();

  const handleScrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/assets/generated/hero-mandala-bg.dim_1920x1080.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-crimson/70 via-crimson/50 to-crimson/80" />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Decorative mandala circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-gold/5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-gold/60" />
          <span className="text-gold text-xs tracking-[0.4em] uppercase font-body">Est. 1981 · Chicago</span>
          <div className="h-px w-16 bg-gold/60" />
        </div>

        {/* Restaurant Name */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory font-bold leading-tight mb-4 drop-shadow-2xl">
          Indian Garden
        </h1>

        {/* Tagline */}
        <p className="font-display text-xl sm:text-2xl md:text-3xl text-gold/90 italic mb-6 font-light">
          Authentic Flavors of India
        </p>

        <p className="font-body text-ivory/80 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          A culinary journey through the rich spices and vibrant traditions of Indian cuisine, 
          nestled in the heart of Chicago since 1981.
        </p>

        {/* Specialties badges */}
        {specialties && specialties.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {specialties.slice(0, 4).map((s) => (
              <span
                key={s}
                className="px-3 py-1 bg-gold/20 border border-gold/40 text-gold text-xs font-body tracking-wider rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleScrollToMenu}
            className="px-8 py-3.5 bg-gold text-crimson font-body font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-saffron transition-all duration-200 shadow-lg shadow-gold/30 hover:shadow-saffron/40 hover:-translate-y-0.5"
          >
            Explore Our Menu
          </button>
          <button
            onClick={handleScrollToContact}
            className="px-8 py-3.5 bg-transparent border-2 border-ivory/60 text-ivory font-body font-bold text-sm tracking-widest uppercase rounded-sm hover:border-gold hover:text-gold transition-all duration-200 hover:-translate-y-0.5"
          >
            Reserve a Table
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-8 bg-gold/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
        </div>
      </div>
    </section>
  );
}
