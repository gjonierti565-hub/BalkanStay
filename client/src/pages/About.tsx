import React from 'react';
import { Link } from 'wouter';
import { ShieldCheck, Award, Users, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function AboutPage() {
  return (
    <div className="container py-12 space-y-16 max-w-5xl">
      {/* Intro Header */}
      <div className="text-center space-y-4">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
          Historia & Filozofia Jonë
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          Rreth NEXORA Computer Store
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Themeluar me një pasion të thellë për performancën maksimale të harduerit kompjuterik, ne jemi kthyer në pikën e referimit për gamer-at dhe profesionistët e teknologjisë në Kosovë, Shqipëri dhe rajon.
        </p>
      </div>

      {/* Story section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-[#111622] rounded-3xl p-8 sm:p-12 border border-white/10">
        <div className="space-y-4">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
            Historia e Dyqanit
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Nga një punishte e vogël entuziastësh, në qendrën kryesore të PC Gaming
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Filluam në vitin 2018 nga dëshira për të ndërtuar kompjutera pa kompromise në cilësinë e ftohjes dhe montimit. Sot, kemi dorëzuar mbi 5,000 konfigurime unike, duke testuar çdo bërthamë dhe memorie për stabilitet absolut.
          </p>
          <div className="space-y-2 text-xs text-gray-300">
            <p className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 100% Pjesë Origjinale me certifikatë nga prodhuesi
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Teste termike në temperaturë ambienti 25°C për 24 orë
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Servis i garantuar me zëvendësim të menjëhershëm
            </p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
          <img
            src="/manus-storage/rtJXRBv6lCbl_90571e4a.jpg"
            alt="NEXORA Store Interior"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-black text-white text-center">
          Pse të Zgjidhni NEXORA?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#111622] border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base">Garanci e Vërtetë 3-Vjeçare</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Nuk keni nevojë të prisni me muaj. Në rast defekti fabrike, ne ndërrojmë pjesën me një të re në vend.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#111622] border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base">Mjeshtëri në Cable Management</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Çdo tel është i fshehur me përpikmëri për të siguruar qarkullim maksimal ajri dhe pamje spektakolare.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#111622] border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base">Konsulencë e Ndershme</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Nuk ju shesim komponentë të shtrenjtë që nuk ju duhen; ju sugjerojmë ekzaktësisht atë që i duhet buxhetit tuaj.
            </p>
          </div>
        </div>
      </div>

      {/* Team CTA */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-cyan-950 via-[#101b30] to-blue-950 border border-cyan-500/30 text-center space-y-4">
        <h3 className="text-2xl font-black text-white">Ke pyetje apo dëshiron të vizitosh showroom-in?</h3>
        <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto">
          Teknikët tanë janë të hapur për t'ju mirëpritur çdo ditë nga ora 09:00 deri në 20:00.
        </p>
        <div className="flex gap-4 justify-center pt-2">
          <Link href="/contact">
            <Button className="bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold px-8">
              Na Kontaktoni
            </Button>
          </Link>
          <Link href="/pc-builder">
            <Button variant="outline" className="border-white/20 text-white font-bold">
              Krijo PC-në Tënde ⭐
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
