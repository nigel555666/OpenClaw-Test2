import { Lightbulb, FileText, Ruler, Palette, Factory, Truck } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Concept & Design",
    desc: "Share your idea, sketch, or logo. Our designers create a free digital mockup for your approval.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Quote & Sample",
    desc: "Receive a detailed quote. We produce a physical sample for your approval before mass production.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Tooling & Mold",
    desc: "We craft precision steel dies or silicone molds to ensure every piece is identical to the sample.",
    icon: Ruler,
  },
  {
    step: "04",
    title: "Enamel & Finish",
    desc: "Skilled artisans apply enamel colors, electroplating, and protective coatings by hand.",
    icon: Palette,
  },
  {
    step: "05",
    title: "Mass Production",
    desc: "Our factory runs 24/7 production lines to deliver your order on time, every time.",
    icon: Factory,
  },
  {
    step: "06",
    title: "QC & Delivery",
    desc: "Every piece is inspected, packaged with care, and shipped to your door with full tracking.",
    icon: Truck,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From idea to doorstep — a seamless 6-step process.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-accent to-primary -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((item, i) => {
              const Icon = item.icon;
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={item.step}
                  className={`relative lg:w-1/2 ${isLeft ? "lg:pr-16 lg:ml-0" : "lg:pl-16 lg:ml-auto"}`}
                >
                  <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-amber-600 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-gold tracking-wider">
                          STEP {item.step}
                        </span>
                        <h3 className="text-xl font-bold text-primary mt-1 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                  {/* Dot on timeline */}
                  <div className="hidden lg:block absolute top-8 w-4 h-4 rounded-full bg-gold border-4 border-white shadow -translate-x-1/2 left-0 right-auto"
                    style={{ [isLeft ? "right" : "left"]: "-8px" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
