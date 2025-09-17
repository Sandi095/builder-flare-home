import { Button } from "@/components/ui/button";
import { Leaf, ThermometerSun, Heart } from "lucide-react";

export default function Index() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        </div>
        <div className="mx-auto max-w-[1160px] px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80">Non GMO. Organic. Fresh. From Farm.</p>
          <h1 className="mt-4 text-gradient-hero text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] text-glow">
            Monthly Food Plans for Healthy, Satisfied Pets!
          </h1>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button className="rounded-full px-6 py-3 text-base bg-[#ffe074] text-[#042e40] hover:bg-[#ffd555]">View Plans</Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1160px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={<Leaf className="h-6 w-6" />}
              title="Whole, Organic Ingredients"
              desc="Farm‑fresh produce and premium proteins from trusted suppliers."
            />
            <FeatureCard
              icon={<ThermometerSun className="h-6 w-6" />}
              title="Maximum Nutrient Absorption"
              desc="Gently cooked to preserve natural goodness for optimal digestion."
            />
            <FeatureCard
              icon={<Heart className="h-6 w-6" />}
              title="Loved by Vets & Pets"
              desc="Formulated with veterinarians for balanced, tail‑wagging meals."
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 sm:py-24 bg-card/60">
        <div className="mx-auto max-w-[1160px] px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold">Our Farm in California</h2>
              <p className="mt-4 text-foreground/80 max-w-prose">See how we source ingredients the right way—from local family farms to your pet’s bowl.</p>
              <div className="mt-6">
                <Button variant="outline" className="rounded-full border-2 border-primary text-primary px-6 py-3">Watch Video</Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <TestimonialCard
                quote="My picky eater cleans the bowl every time. Coats are shinier, energy is up!"
                name="Ava R."
              />
              <TestimonialCard
                quote="Vet noticed healthier weight within weeks. Couldn’t be happier."
                name="Michael T."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
      <div className="h-11 w-11 rounded-full bg-secondary/60 text-secondary-foreground grid place-items-center text-primary">
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-foreground/80">{desc}</p>
    </div>
  );
}

function TestimonialCard({ quote, name }: { quote: string; name: string }) {
  return (
    <figure className="rounded-3xl border border-border bg-card p-6 shadow-sm">
      <blockquote className="text-lg text-primary/90">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm text-foreground/70">— {name}</figcaption>
    </figure>
  );
}
