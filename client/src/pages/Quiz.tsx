import React, { useState } from 'react';
import { Link } from 'wouter';
import { 
  Gamepad2, 
  GraduationCap, 
  Code2, 
  Film, 
  Building2, 
  Sparkles, 
  ArrowRight, 
  RotateCcw,
  CheckCircle,
  Cpu
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { PRODUCTS, Product } from '../data/storeData';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

interface QuizOption {
  id: string;
  label: string;
  icon: any;
  desc: string;
  recommendedProductId: string;
  specReason: string;
}

export default function QuizPage() {
  const [selectedUse, setSelectedUse] = useState<string | null>(null);
  const [budgetTier, setBudgetTier] = useState<'standard' | 'high'>('standard');
  const { addToCart } = useCart();

  const usageOptions: QuizOption[] = [
    {
      id: 'gaming',
      label: 'Gaming 🎮',
      icon: Gamepad2,
      desc: 'Për lojëra AAA, esports, 144Hz - 240Hz, Ray Tracing dhe streaming pa vonesa.',
      recommendedProductId: 'pc-pulse-rtx4070ti',
      specReason: 'Rekomandohet AMD Ryzen 7 7800X3D me RTX 4070 Ti SUPER 16GB për FPS maksimale.'
    },
    {
      id: 'school',
      label: 'Shkollë & Studime 📚',
      icon: GraduationCap,
      desc: 'Projekte shkollore, Zoom/Teams, kërkime, MS Office, multitasking me kosto të ulët.',
      recommendedProductId: 'pc-starter-rtx4060',
      specReason: 'Konfigurimi me Ryzen 5 dhe RTX 4060 ofron balancë ideale mes çmimit dhe fuqisë për studime dhe argëtim.'
    },
    {
      id: 'programming',
      label: 'Programim & Zhvillim 💻',
      icon: Code2,
      desc: 'Docker, compiling të shpejtë, makina virtuale, VS Code dhe zhvillim softuerik.',
      recommendedProductId: 'laptop-msi-stealth14',
      specReason: 'Intel Core i7 me 14 bërthama dhe ekran QHD+ me shumë hapësirë pune dhe portabilitet të lartë.'
    },
    {
      id: 'video',
      label: 'Video Editing & 3D 🎬',
      icon: Film,
      desc: 'Premiere Pro, DaVinci Resolve, Blender, After Effects dhe eksportim 4K ProRes.',
      recommendedProductId: 'pc-beast-rtx4090',
      specReason: 'Intel i9-14900K 24-cores me 64GB DDR5 dhe RTX 4090 me 24GB VRAM garantojnë renderim në kohë reale.'
    },
    {
      id: 'office',
      label: 'Zyrë & Biznes 🏢',
      icon: Building2,
      desc: 'Financa, Excel i rëndë, shumë dritare hapur njëkohësisht, qetësi dhe besueshmëri maksimale.',
      recommendedProductId: 'pc-starter-rtx4060',
      specReason: 'Sistem i qetë, me konsum shumë të ulët energjie dhe SSD NVMe super të shpejtë.'
    }
  ];

  const currentSelection = usageOptions.find((u) => u.id === selectedUse);
  const recommendedProduct: Product | undefined = currentSelection
    ? PRODUCTS.find((p) => p.id === currentSelection.recommendedProductId)
    : undefined;

  return (
    <div className="container py-12 max-w-4xl space-y-10">
      {/* Quiz Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
          <Sparkles className="w-4 h-4" />
          <span>Interaktiv: Find Your PC</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          Për çfarë do ta përdorësh kompjuterin?
        </h1>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          Zgjidh qëllimin kryesor më poshtë dhe sistemi ynë do të gjejë menjëherë arkitekturën e përshtatshme pa harxhuar para kot.
        </p>
      </div>

      {/* Options Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {usageOptions.map((opt) => {
          const isSelected = selectedUse === opt.id;
          const Icon = opt.icon;
          return (
            <div
              key={opt.id}
              onClick={() => setSelectedUse(opt.id)}
              className={`p-6 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'bg-cyan-500/15 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-[1.02]'
                  : 'bg-[#111622] border-white/10 hover:border-white/30 hover:bg-[#141b2a]'
              }`}
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    isSelected ? 'bg-cyan-400 text-black' : 'bg-white/5 text-cyan-400'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{opt.label}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{opt.desc}</p>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs font-semibold">
                <span className={isSelected ? 'text-cyan-300' : 'text-gray-500'}>
                  {isSelected ? '✓ E Përzgjedhur' : 'Kliko për ta zgjedhur'}
                </span>
                <span className="text-cyan-400">→</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Result Display Box */}
      {currentSelection && recommendedProduct && (
        <div className="mt-10 rounded-3xl p-8 bg-gradient-to-br from-[#131929] via-[#0d121c] to-[#0a0e17] border border-cyan-500/40 shadow-2xl animate-in fade-in zoom-in-95 duration-300 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                🎯 Rekomandimi Zyrtar i Ekspertëve
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Konfigurimi më i Mirë për {currentSelection.label}
              </h2>
            </div>
            <Button
              onClick={() => setSelectedUse(null)}
              variant="outline"
              size="sm"
              className="border-white/20 text-gray-300 text-xs flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Provo një tjetër
            </Button>
          </div>

          <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 text-xs leading-relaxed">
            💡 <strong>Pse ky konfigurim?</strong> {currentSelection.specReason}
          </div>

          {/* Product showcase card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-black/40 p-6 rounded-2xl border border-white/10">
            <div className="md:col-span-5 h-56 rounded-xl overflow-hidden bg-black/50">
              <img
                src={recommendedProduct.image}
                alt={recommendedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-cyan-500 text-black text-xs font-black uppercase px-2.5 py-0.5 rounded">
                  {recommendedProduct.badge || 'Zgjedhja Ideale'}
                </span>
                <span className="text-xs text-green-400 font-medium">● Në Stok</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {recommendedProduct.name}
              </h3>

              <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                {Object.entries(recommendedProduct.specs).slice(0, 4).map(([k, v]) => (
                  <div key={k} className="bg-white/5 p-2 rounded-lg">
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">{k}</span>
                    <span className="truncate block font-medium">{v}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-baseline gap-4 pt-2">
                <span className="text-3xl font-black text-cyan-300">
                  {recommendedProduct.price} €
                </span>
                {recommendedProduct.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    {recommendedProduct.originalPrice} €
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  onClick={() => {
                    addToCart(recommendedProduct);
                    toast.success(`${recommendedProduct.name} u shtua në shportë!`);
                  }}
                  className="bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold px-6 py-5 rounded-xl shadow-lg shadow-cyan-400/20"
                >
                  Shto Menjëherë në Shportë
                </Button>

                <Link href={`/product/${recommendedProduct.id}`}>
                  <Button variant="outline" className="border-white/20 text-white font-semibold py-5">
                    Shiko të Gjitha Specifikat
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
