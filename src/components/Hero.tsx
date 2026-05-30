import Link from "next/link";
import { Shield, Award, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(201, 168, 76, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(233, 69, 96, 0.2) 0%, transparent 50%)`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up stagger-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white/80 mb-8">
            <Shield className="w-4 h-4 text-gold" />
            <span>Trusted by 500+ brands worldwide</span>
          </div>
        </div>

        <h1 className="animate-fade-in-up stagger-2 text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Craft Your Story
          <br />
          <span className="text-gold">In Metal</span>
        </h1>

        <p className="animate-fade-in-up stagger-3 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          From precision-minted challenge coins to intricately enameled lapel pins — 
          we transform your vision into metal masterpieces that leave a lasting impression.
        </p>

        <div className="animate-fade-in-up stagger-4 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#products"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-accent/30"
          >
            <Sparkles className="w-5 h-5" />
            Explore Our Work
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 backdrop-blur-sm"
          >
            <Award className="w-5 h-5" />
            Get a Quote
          </Link>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up stagger-5 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            ["15+", "Years Experience"],
            ["500K+", "Pins Produced"],
            ["50+", "Countries Served"],
            ["99.8%", "Satisfaction Rate"],
          ].map(([num, label]) => (
            <div key={label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-1">{num}</div>
              <div className="text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
