import React from 'react';
import { Link } from 'wouter';
import { 
  Wrench, 
  MonitorCheck, 
  Sparkle, 
  ThermometerSnowflake, 
  Stethoscope, 
  Layers, 
  CheckCircle2, 
  Phone, 
  Clock, 
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { SERVICES } from '../data/storeData';
import { Button } from '../components/ui/button';

export default function ServicesPage() {
  const iconMap: Record<string, any> = {
    Wrench,
    MonitorCheck,
    Sparkle,
    ThermometerSnowflake,
    Stethoscope,
    Layers,
  };

  return (
    <div className="container py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
          Qendra e Servisit & Modifikimit
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          Shërbime Teknike Profesionale 🔧
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Keni nevojë për montim të ri, pastrim, ulje temperaturash apo riparim defektesh? Teknikët tanë me përvojë 10-vjeçare janë gati për t'ju ndihmuar.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((srv) => {
          const IconComp = iconMap[srv.icon] || Wrench;
          return (
            <div
              key={srv.id}
              className="bg-[#111622] rounded-2xl border border-white/10 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <IconComp className="w-7 h-7" />
                </div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-white">{srv.title}</h3>
                  <span className="text-cyan-400 font-extrabold text-base shrink-0 bg-cyan-500/10 px-2.5 py-1 rounded-md">
                    {srv.price}
                  </span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-gray-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" /> Kohëzgjatja: 1-3 Orë
                </span>
                <Link href="/contact">
                  <span className="text-cyan-400 font-bold hover:underline cursor-pointer">
                    Rezervo →
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom PC Builds Spotlight */}
      <div id="custom" className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-950 via-[#12192e] to-[#0a0f1d] border border-cyan-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
            Ekstrem & Modding
          </span>
          <h2 className="text-3xl font-black text-white">
            Custom Watercooling & Extreme Overclocking
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Dëshironi një kompjuter unik me tuba qelqi (Hard Tubing), lëng ftohës me ngjyrë dhe sinkronizim të plotë të dritave ARGB? Ne krijojmë kryevepra teknologjike të dizajnuara posaçërisht për dhomën apo studion tuaj.
          </p>
          <div className="space-y-2 pt-2 text-xs text-gray-300">
            <p className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Tuba akrilikë ose bakri të lakuar me saktësi milimetrike
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Radiatorë të dyfishtë për heshtje totale edhe në ngarkesë maksimale
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Testim i presionit të ajrit për të garantuar 0% rrezik rrjedhjeje
            </p>
          </div>
          <div className="pt-4">
            <Link href="/contact">
              <Button className="bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold px-8 py-6 rounded-xl">
                Kërko Konsulencë Falas
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 bg-black/40">
          <img
            src="/manus-storage/gAaeHLUMeUcf_36310f7c.webp"
            alt="Custom Watercooled PC"
            className="w-full h-72 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
