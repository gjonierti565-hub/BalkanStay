import React from 'react';
import { Link } from 'wouter';
import { 
  ArrowRight, 
  Gamepad2, 
  Cpu, 
  Laptop, 
  Monitor, 
  Headphones, 
  Flame, 
  Sparkles, 
  Wrench, 
  ShieldCheck, 
  Star, 
  CheckCircle2,
  Sliders,
  ChevronRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { PRODUCTS, DEALS, SERVICES } from '../data/storeData';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

export default function Home() {
  const { addToCart } = useCart();
  const featuredGamingPcs = PRODUCTS.filter((p) => p.category === 'gaming-pcs');
  const hotDeals = PRODUCTS.filter((p) => p.badge && p.badge.includes('Deal') || p.badge === 'High End' || p.badge === 'Best Seller');

  return (
    <div className="space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden border-b border-white/10">
        {/* Background Ambient Glow & Image */}
        <div className="absolute inset-0 bg-[#07090e] z-0">
          <img
            src="/manus-storage/gAaeHLUMeUcf_36310f7c.webp"
            alt="Gaming PC Room Setup"
            className="w-full h-full object-cover opacity-25 scale-105 filter blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-[#090c10]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090c10] via-[#090c10]/60 to-transparent" />
        </div>

        <div className="container relative z-10 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Gjenerata e Re e Gaming & Workstation 2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Build Your <span className="gradient-text">Dream PC</span>. <br />
              Fuqi Pa Kompromise.
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
              Konfigurime unike gaming, laptopë të fuqishëm, komponentë origjinalë nga NVIDIA, AMD dhe Intel, si dhe PC Builder interaktiv për të llogaritur çdo detaj në kohë reale.
            </p>

            {/* Buttons: Shop Now / View Products / PC Builder */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/products">
                <Button className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-black font-extrabold px-8 py-6 text-base rounded-xl shadow-xl shadow-cyan-500/20 flex items-center gap-2">
                  Bli Tani (Shop Now)
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              <Link href="/pc-builder">
                <Button
                  variant="outline"
                  className="border-white/20 hover:border-cyan-400/50 hover:bg-white/5 text-white font-bold px-7 py-6 text-base rounded-xl flex items-center gap-2"
                >
                  <Sliders className="w-5 h-5 text-cyan-400" />
                  PC Builder ⭐
                </Button>
              </Link>

              <Link href="/quiz">
                <Button
                  variant="ghost"
                  className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 text-sm font-semibold"
                >
                  🎯 Bëj Quiz-in (Gjej PC-në Tënde)
                </Button>
              </Link>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-md">
              <div>
                <p className="text-2xl font-black text-white">5,000+</p>
                <p className="text-xs text-gray-400">Klientë të Kënaqur</p>
              </div>
              <div>
                <p className="text-2xl font-black text-cyan-400">3 Vite</p>
                <p className="text-xs text-gray-400">Garanci Zyrtare</p>
              </div>
              <div>
                <p className="text-2xl font-black text-blue-400">24 Orë</p>
                <p className="text-xs text-gray-400">Dërgesë Ekspres</p>
              </div>
            </div>
          </div>

          {/* Hero visual card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-2xl p-1 bg-gradient-to-b from-cyan-500/30 via-white/10 to-transparent shadow-2xl">
              <div className="rounded-xl overflow-hidden bg-[#121620] border border-white/10 p-4">
                <div className="relative h-64 rounded-lg overflow-hidden mb-4 group">
                  <img
                    src="/manus-storage/rtJXRBv6lCbl_90571e4a.jpg"
                    alt="Titan X-90 Gaming PC"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-red-600/90 text-white font-extrabold text-xs px-2.5 py-1 rounded-md uppercase tracking-wider">
                    -20% Oferta e Javës
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Flamur i Dyqanit</span>
                    <span className="text-xs text-green-400 flex items-center gap-1 font-medium">● Në Stok (Gati)</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">NEXORA Pulse Vanguard Gaming PC</h3>
                  <p className="text-xs text-gray-400">AMD Ryzen 7 7800X3D + RTX 4070 Ti SUPER 16GB + 32GB DDR5</p>

                  <div className="flex items-baseline gap-3 pt-2">
                    <span className="text-2xl font-black text-cyan-300">1,799 €</span>
                    <span className="text-sm text-gray-500 line-through">1,999 €</span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Kurseni 200 €</span>
                  </div>

                  <Link href="/product/pc-pulse-rtx4070ti">
                    <Button className="w-full mt-3 bg-white/10 hover:bg-cyan-500 hover:text-black text-white font-bold transition-all">
                      Shiko Detajet e Plota
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIAL OFFERS / DEALS BANNER */}
      <section className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-widest">
              <Flame className="w-4 h-4" /> Oferta të Veçanta & Zbritje
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Deals / Offers 🔥</h2>
          </div>
          <Link href="/deals" className="text-sm font-semibold text-cyan-400 hover:underline flex items-center gap-1">
            Shiko të Gjitha Ofertat <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DEALS.map((deal) => (
            <div
              key={deal.id}
              className="relative rounded-2xl p-6 bg-gradient-to-br from-[#151c2c] to-[#0e131f] border border-cyan-500/20 hover:border-cyan-500/40 transition-all group overflow-hidden"
            >
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all" />
              <div className="inline-block bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-extrabold px-3 py-1 rounded-full mb-3">
                {deal.discount}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{deal.title}</h3>
              <p className="text-xs text-gray-400 mb-4">{deal.target}</p>
              <div className="flex items-center justify-between text-xs pt-4 border-t border-white/10">
                <span className="font-mono bg-black/40 px-2 py-1 rounded text-cyan-300 font-semibold border border-cyan-500/30">
                  KODI: {deal.code}
                </span>
                <span className="text-amber-400 font-medium">⏳ {deal.expires}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. GAMING PCS TIERS (Entry Level / Mid Range / High End) */}
      <section className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Zgjidh Nivelin Tënd</span>
          <h2 className="text-3xl font-black text-white mt-1">Gaming PCs të Montuara me Kujdes</h2>
          <p className="text-gray-400 text-sm mt-2">
            Nga lojërat e para e-sports deri tek performanca më brutale 4K me Ray Tracing. Çdo kompjuter vjen me teste termike 24-orëshe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredGamingPcs.map((pc) => (
            <div
              key={pc.id}
              className={`rounded-2xl p-6 bg-[#111622] border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                pc.tier === 'High End'
                  ? 'border-cyan-500/40 shadow-xl shadow-cyan-500/10'
                  : 'border-white/10 hover:border-cyan-500/30'
              }`}
            >
              <div>
                <div className="relative h-56 rounded-xl overflow-hidden mb-5">
                  <img src={pc.image} alt={pc.name} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-cyan-400 border border-cyan-500/30 text-xs font-bold px-3 py-1 rounded-full">
                    {pc.badge}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-amber-400 text-xs mb-2">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="font-bold">{pc.rating}</span>
                  <span className="text-gray-500">({pc.reviewCount} vlerësime)</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{pc.name}</h3>
                <p className="text-xs text-gray-400 mb-4 line-clamp-2">{pc.description}</p>

                {/* Specs quick bullets */}
                <div className="space-y-1.5 text-xs text-gray-300 mb-6 bg-white/[0.03] p-3 rounded-lg border border-white/5">
                  <p>⚡ <strong className="text-white">CPU:</strong> {pc.specs.CPU}</p>
                  <p>🎮 <strong className="text-white">GPU:</strong> {pc.specs.GPU}</p>
                  <p>🧠 <strong className="text-white">RAM:</strong> {pc.specs.RAM}</p>
                  <p>💾 <strong className="text-white">SSD:</strong> {pc.specs.Storage}</p>
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="text-xs text-gray-400 block">Çmimi me TVSH</span>
                    <span className="text-2xl font-black text-white">{pc.price} €</span>
                  </div>
                  {pc.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">{pc.originalPrice} €</span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link href={`/product/${pc.id}`}>
                    <Button variant="outline" className="w-full border-white/20 text-white text-xs font-semibold hover:bg-white/5">
                      Detajet
                    </Button>
                  </Link>
                  <Button
                    onClick={() => {
                      addToCart(pc);
                      toast.success(`${pc.name} u shtua në shportë!`);
                    }}
                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold"
                  >
                    Shto në Shportë
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PC BUILDER CALL TO ACTION BANNER */}
      <section className="container">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-blue-950 via-[#101b33] to-[#0a1122] border border-cyan-500/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/20 text-cyan-300 font-bold text-xs uppercase tracking-wider">
              ⭐ Veçoria më e Pëlqyer
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Nuk e gjen dot gati? <br />
              <span className="gradient-text">Ndërto vetë kompjuterin tënd!</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Zgjidh çdo pjesë hap pas hapi: CPU, GPU, RAM, Motherboard, SSD, Ushqyes dhe Kuti. Sistemi llogarit totalin automatikisht dhe kontrollon përputhshmërinë e komponentëve.
            </p>
            <div className="pt-2">
              <Link href="/pc-builder">
                <Button className="bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold px-8 py-6 text-base rounded-xl shadow-lg shadow-cyan-400/20">
                  Hap PC Builder Interaktiv 🛠️
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "FIND YOUR PC" QUIZ TEASER */}
      <section className="container">
        <div className="rounded-2xl bg-gradient-to-br from-[#121622] to-[#182133] border border-white/10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              🎯 Ndihmë në Zgjedhje
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Quiz: "Find Your PC" — Çfarë do të bësh me të?
            </h3>
            <p className="text-gray-300 text-sm">
              Përgjigju 3 pyetjeve të shpejta (Gaming 🎮, Shkollë 📚, Programim 💻, Video Editing 🎬 apo Zyrë 🏢) dhe inteligjenca e dyqanit do të sugjerojë konfigurimin fiks për buxhetin tënd.
            </p>
          </div>
          <Link href="/quiz">
            <Button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black font-extrabold px-8 py-6 text-base rounded-xl shrink-0 shadow-lg shadow-orange-500/20">
              Nis Kuizin Tani 🚀
            </Button>
          </Link>
        </div>
      </section>

      {/* 6. SERVICES (PC Assembly, Cleaning, Windows, etc.) */}
      <section className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Servis Profesional</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Shërbimet Tona Teknike 🔧</h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-cyan-400 hover:underline flex items-center gap-1">
            Të Gjitha Shërbimet <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-[#111622] border border-white/10 hover:border-cyan-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-white text-base">{service.title}</h3>
                <span className="text-cyan-400 font-extrabold text-sm">{service.price}</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">{service.description}</p>
              <Link href="/contact">
                <span className="text-xs font-semibold text-gray-300 hover:text-cyan-400 flex items-center gap-1 cursor-pointer">
                  Rezervo Shërbim <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
