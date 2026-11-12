import React from 'react';
import { Link } from 'wouter';
import { Cpu, Phone, Mail, MapPin, ShieldCheck, Truck, Headphones, Wrench } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07090d] border-t border-white/10 text-gray-400 text-sm mt-20">
      {/* Guarantees bar */}
      <div className="border-b border-white/5 py-8 bg-white/[0.02]">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white">Transport i Shpejtë</h4>
              <p className="text-xs text-gray-400">Dërgesa brenda 24-48 orëve në derën tuaj</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white">Garanci Origjinale</h4>
              <p className="text-xs text-gray-400">Deri në 3 vite garanci zyrtare nga prodhuesi</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white">Servis & Asistencë</h4>
              <p className="text-xs text-gray-400">Teknikë të certifikuar për çdo montim apo riparim</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white">Mbështetje 24/7</h4>
              <p className="text-xs text-gray-400">Konsulencë live për zgjedhjen e pjesëve</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-cyan-500 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-black text-white tracking-wider">NEXORA</span>
          </div>
          <p className="text-xs leading-relaxed text-gray-400 mb-6">
            Destinacioni yt kryesor për PC Gaming të nivelit të lartë, komponentë origjinalë, laptopë dhe servis profesional me pasion për teknologjinë.
          </p>
          <div className="space-y-2 text-xs">
            <p className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-4 h-4 text-cyan-400" /> Rruga Agim Ramadani, Prishtinë / Rr. Myslym Shyri, Tiranë
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <Phone className="w-4 h-4 text-cyan-400" /> +383 44 123 456 / +355 69 987 6543
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <Mail className="w-4 h-4 text-cyan-400" /> support@nexora-store.com
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Kategoritë</h4>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="/products?category=gaming-pcs" className="hover:text-cyan-400 transition-colors">Gaming PCs (Entry, Mid, High End)</Link></li>
            <li><Link href="/products?category=laptops" className="hover:text-cyan-400 transition-colors">Laptopë Gaming & Punes</Link></li>
            <li><Link href="/products?category=components" className="hover:text-cyan-400 transition-colors">Pjesë PC (CPU, GPU, RAM, SSD)</Link></li>
            <li><Link href="/products?category=monitors" className="hover:text-cyan-400 transition-colors">Monitore Gaming 144Hz - 240Hz</Link></li>
            <li><Link href="/products?category=accessories" className="hover:text-cyan-400 transition-colors">Tastiera, Mausa & Kufje RGB</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Vegla & Shërbime</h4>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="/pc-builder" className="hover:text-cyan-400 transition-colors">⭐ PC Builder (Krijo vetë)</Link></li>
            <li><Link href="/quiz" className="hover:text-cyan-400 transition-colors">🎯 Quiz: Gjej PC-në Tënde Ideale</Link></li>
            <li><Link href="/deals" className="hover:text-cyan-400 transition-colors">🔥 Oferta Ditore & Clearance</Link></li>
            <li><Link href="/services" className="hover:text-cyan-400 transition-colors">🔧 Servis, Pastrim & Termopastë</Link></li>
            <li><Link href="/services#custom" className="hover:text-cyan-400 transition-colors">💧 Custom Watercooling Builds</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Dyqani & Ndihmë</h4>
          <ul className="space-y-2.5 text-xs mb-6">
            <li><Link href="/about" className="hover:text-cyan-400 transition-colors">Rreth Nesh & Historia</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Harta & Orari i Punës</Link></li>
            <li><Link href="/cart" className="hover:text-cyan-400 transition-colors">Shporta & Pagesa</Link></li>
            <li><span className="text-gray-500">Politika e Kthimit (14 Ditë)</span></li>
          </ul>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs">
            <span className="text-cyan-300 font-semibold block mb-1">Orari i Punës:</span>
            <span>Hënë - Shtunë: 09:00 - 20:00</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} NEXORA Computer Store. Të gjitha të drejtat të rezervuara. Zhvilluar me teknologji moderne.
      </div>
    </footer>
  );
};
