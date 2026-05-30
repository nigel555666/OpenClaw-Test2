import { Medal, Contact, KeyRound, Globe, Gem, Star } from "lucide-react";

const products = [
  {
    title: "Challenge Coins",
    desc: "Military-grade custom coins with intricate 3D engraving, vibrant enamel, and antique finishes. Perfect for events, achievements, and branding.",
    icon: Medal,
    gradient: "from-gold/20 to-amber-500/10",
    border: "border-gold/30",
  },
  {
    title: "Lapel Pins",
    desc: "Soft enamel, hard enamel, die-struck, or screen-printed pins in any shape and size. From corporate logos to artistic designs.",
    icon: Star,
    gradient: "from-accent/20 to-rose-500/10",
    border: "border-accent/30",
  },
  {
    title: "Keychains & Medallions",
    desc: "Durable zinc-alloy or brass keychains, medallions, and tags with full-color printing or cloisonné enamel.",
    icon: KeyRound,
    gradient: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-400/30",
  },
  {
    title: "Custom Medals",
    desc: "Ribbon-ready medals for sports, competitions, and corporate awards. Die-struck with brilliant enamel colors.",
    icon: Gem,
    gradient: "from-purple-500/20 to-violet-500/10",
    border: "border-purple-400/30",
  },
  {
    title: "Patches & Emblems",
    desc: "Embroidered or woven patches with velcro backing. Perfect complements to your metal pin collections.",
    icon: Contact,
    gradient: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-400/30",
  },
  {
    title: "Corporate Gifts",
    desc: "Full-service custom packaging and gift sets for corporate events, trade shows, and employee recognition.",
    icon: Globe,
    gradient: "from-orange-500/20 to-yellow-500/10",
    border: "border-orange-400/30",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What We Create
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every piece is a statement. Explore our range of precision-crafted metal products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className={`group relative overflow-hidden rounded-2xl border ${product.border} bg-gradient-to-br ${product.gradient} p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{product.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{product.desc}</p>
                <div className="mt-6">
                  <span className="text-sm font-medium text-accent hover:text-accent/80 cursor-pointer transition-colors inline-flex items-center gap-1">
                    Learn more →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
