import { useRestaurantInfo } from '../hooks/useQueries';
import { Skeleton } from '@/components/ui/skeleton';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const FALLBACK_INFO = {
  address: '68 W. Washington Street, Chicago, IL 60602',
  phone: '(312) 236-9280',
  hours: 'Mon–Thu: 11:30am–10pm | Fri–Sat: 11:30am–11pm | Sun: 12pm–10pm',
};

function parseHours(hoursStr: string): { day: string; time: string }[] {
  return hoursStr.split('|').map((part) => {
    const [day, ...rest] = part.trim().split(':');
    return { day: day.trim(), time: rest.join(':').trim() };
  });
}

export default function Contact() {
  const { data: info, isLoading } = useRestaurantInfo();

  const displayInfo = info || FALLBACK_INFO;
  const hoursList = parseHours(displayInfo.hours);

  return (
    <section id="contact" className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-body text-saffron text-xs tracking-[0.4em] uppercase mb-3">Find Us</p>
          <h2 className="font-display text-4xl sm:text-5xl text-crimson font-bold mb-4">Visit Us</h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold/50" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="h-px w-12 bg-gold/50" />
          </div>
          <p className="font-body text-warm-gray max-w-md mx-auto text-base">
            Come experience the warmth of Indian hospitality in the heart of Chicago.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info Cards */}
          <div className="space-y-5">
            {isLoading ? (
              <>
                <Skeleton className="h-24 rounded-sm" />
                <Skeleton className="h-24 rounded-sm" />
                <Skeleton className="h-40 rounded-sm" />
              </>
            ) : (
              <>
                {/* Address */}
                <div className="bg-white border border-gold/20 rounded-sm p-5 flex gap-4 hover:border-gold/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-crimson/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-crimson" />
                  </div>
                  <div>
                    <h4 className="font-display text-crimson font-semibold mb-1">Address</h4>
                    <p className="font-body text-warm-gray text-sm leading-relaxed">{displayInfo.address}</p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(displayInfo.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-saffron text-xs font-body hover:text-gold transition-colors mt-1 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white border border-gold/20 rounded-sm p-5 flex gap-4 hover:border-gold/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-crimson/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-crimson" />
                  </div>
                  <div>
                    <h4 className="font-display text-crimson font-semibold mb-1">Phone</h4>
                    <a
                      href={`tel:${displayInfo.phone.replace(/\D/g, '')}`}
                      className="font-body text-warm-gray text-sm hover:text-saffron transition-colors"
                    >
                      {displayInfo.phone}
                    </a>
                    <p className="font-body text-warm-gray/60 text-xs mt-0.5">Reservations & Takeout</p>
                  </div>
                </div>

                {/* Email placeholder */}
                <div className="bg-white border border-gold/20 rounded-sm p-5 flex gap-4 hover:border-gold/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-crimson/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-crimson" />
                  </div>
                  <div>
                    <h4 className="font-display text-crimson font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:info@indiangardenchicago.com"
                      className="font-body text-warm-gray text-sm hover:text-saffron transition-colors"
                    >
                      info@indiangardenchicago.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white border border-gold/20 rounded-sm p-5 hover:border-gold/50 transition-colors">
                  <div className="flex gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-crimson/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-crimson" />
                    </div>
                    <h4 className="font-display text-crimson font-semibold self-center">Hours of Operation</h4>
                  </div>
                  <div className="space-y-2 pl-14">
                    {hoursList.map(({ day, time }) => (
                      <div key={day} className="flex justify-between items-center border-b border-gold/10 pb-1.5 last:border-0">
                        <span className="font-body text-warm-gray text-sm font-medium">{day}</span>
                        <span className="font-body text-crimson text-sm">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Map */}
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-gold/20 rounded-sm pointer-events-none z-0" />
            <div className="relative z-10 rounded-sm overflow-hidden shadow-lg border border-gold/20 h-full min-h-[400px]">
              <iframe
                title="Indian Garden Chicago Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.5!2d-87.6298!3d41.8827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb9b5b5b5b5%3A0x0!2s68+W+Washington+St%2C+Chicago%2C+IL+60602!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Reservation CTA */}
        <div className="mt-14 text-center bg-crimson rounded-sm p-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, oklch(0.75 0.15 60) 0%, transparent 50%), radial-gradient(circle at 80% 50%, oklch(0.75 0.15 60) 0%, transparent 50%)`
            }}
          />
          <div className="relative z-10">
            <h3 className="font-display text-3xl text-ivory font-bold mb-3">Ready to Dine With Us?</h3>
            <p className="font-body text-ivory/70 mb-6 max-w-md mx-auto">
              Call us to make a reservation or place a takeout order. We look forward to serving you!
            </p>
            <a
              href={`tel:${FALLBACK_INFO.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-crimson font-body font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-saffron transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4" />
              {FALLBACK_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
