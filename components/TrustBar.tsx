import { Check, Clock, Shield, MapPin } from "lucide-react";

const items = [
  { icon: Check, k: "Festpreis", v: "ab 199 €" },
  { icon: Clock, k: "Termine", v: "Kurzfristig" },
  { icon: Shield, k: "Besichtigung", v: "Kostenlos" },
  { icon: MapPin, k: "Gebiet", v: "Saarland" },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-brand-100">
      <div className="container-tight py-6 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 md:gap-y-0">
          {items.map((item, i) => (
            <div
              key={item.k}
              className={`flex items-center gap-3 md:gap-4 px-2 md:px-6 py-2 md:py-0 ${
                i > 0 ? "md:border-l md:border-brand-100" : ""
              }`}
            >
              <div className="shrink-0 h-10 w-10 md:h-11 md:w-11 rounded bg-signal-50 border border-signal-100 flex items-center justify-center">
                <item.icon className="h-4 w-4 md:h-5 md:w-5 text-signal-600" />
              </div>
              <div className="min-w-0">
                <div className="label-mono text-brand-500">{item.k}</div>
                <div className="text-sm md:text-lg font-bold text-brand-900 tracking-tight mt-0.5 truncate">
                  {item.v}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
