import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Factory-direct pricing — no middlemen markups",
  "Free professional design consultation",
  "Free physical sample before mass production",
  "Military-grade quality control standards",
  "Eco-friendly materials & packaging options",
  "Express production available (7-10 days)",
  "Secure payment via Alibaba Trade Assurance",
  "Dedicated English-speaking project manager",
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-secondary to-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose
              <br />
              <span className="text-gold">Bright Medal Trading Co.,</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              With over 15 years in the metal craft industry, we&apos;ve delivered 
              millions of custom pieces to clients in 50+ countries. Our commitment 
              to quality, transparency, and on-time delivery sets us apart.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm">
                🏆 ISO 9001 Certified
              </div>
              <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm">
                🌱 Eco-Friendly Production
              </div>
              <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm">
                🚀 7-Day Express Available
              </div>
            </div>
          </div>

          {/* Right - checklist */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <div className="space-y-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
