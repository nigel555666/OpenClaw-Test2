import { Palette, Cpu, Ship, ShieldCheck, Ruler, HeadphonesIcon } from "lucide-react";

const features = [
  {
    title: "Unlimited Customization",
    desc: "Any shape, any size, any color. From 2D flat pins to 3D sculpted coins — your imagination is the only limit.",
    icon: Palette,
  },
  {
    title: "Precision Craftsmanship",
    desc: "State-of-the-art die-striking and CNC engraving ensures every detail is razor-sharp, every edge perfectly defined.",
    icon: Cpu,
  },
  {
    title: "Global Shipping",
    desc: "Reliable logistics partners shipping to 50+ countries. Tracked delivery with estimated 7-15 business days worldwide.",
    icon: Ship,
  },
  {
    title: "Quality Guaranteed",
    desc: "Each piece undergoes rigorous QC inspection. We offer free samples before mass production and full refunds on defects.",
    icon: ShieldCheck,
  },
  {
    title: "MOQ as Low as 50 PCS",
    desc: "Whether you need 50 or 50,000 — we accommodate orders of all sizes with scalable production lines.",
    icon: Ruler,
  },
  {
    title: "Dedicated Support",
    desc: "Your personal project manager guides you from concept to delivery. Real-time updates at every stage.",
    icon: HeadphonesIcon,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Work With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We don&apos;t just make pins — we build partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
