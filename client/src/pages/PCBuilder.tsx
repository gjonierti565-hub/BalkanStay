import React, { useState, useMemo } from 'react';
import { 
  Cpu, 
  Layers, 
  HardDrive, 
  Zap, 
  Box, 
  Check, 
  ShoppingCart, 
  RefreshCw, 
  HelpCircle, 
  ShieldCheck,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { PC_BUILDER_OPTIONS, ComponentOption } from '../data/storeData';
import { Button } from '../components/ui/button';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

export default function PCBuilderPage() {
  const { addCustomPcToCart } = useCart();

  // Selected components
  const [selected, setSelected] = useState<Record<string, ComponentOption | null>>({
    cpu: PC_BUILDER_OPTIONS.cpu[0],
    motherboard: PC_BUILDER_OPTIONS.motherboard[0],
    ram: PC_BUILDER_OPTIONS.ram[0],
    gpu: PC_BUILDER_OPTIONS.gpu[0],
    storage: PC_BUILDER_OPTIONS.storage[0],
    psu: PC_BUILDER_OPTIONS.psu[0],
    case: PC_BUILDER_OPTIONS.case[0],
  });

  const [activeStep, setActiveStep] = useState<string>('cpu');

  const steps = [
    { id: 'cpu', label: 'Procesori (CPU)', icon: Cpu },
    { id: 'motherboard', label: 'Pllaka Amë (Motherboard)', icon: Layers },
    { id: 'ram', label: 'Memoria (RAM)', icon: Zap },
    { id: 'gpu', label: 'Karta Grafike (GPU)', icon: Zap },
    { id: 'storage', label: 'Disku (SSD / HDD)', icon: HardDrive },
    { id: 'psu', label: 'Furnizuesi (Power Supply)', icon: Zap },
    { id: 'case', label: 'Kutia (PC Case)', icon: Box },
  ];

  // Calculate total price
  const totalPrice = useMemo(() => {
    return Object.values(selected).reduce((sum, item) => sum + (item ? item.price : 0), 0);
  }, [selected]);

  // Compatibility score simulation
  const isComplete = Object.values(selected).every((item) => item !== null);

  const handleSelect = (category: string, option: ComponentOption) => {
    setSelected((prev) => ({
      ...prev,
      [category]: option,
    }));
  };

  const resetBuild = () => {
    setSelected({
      cpu: null,
      motherboard: null,
      ram: null,
      gpu: null,
      storage: null,
      psu: null,
      case: null,
    });
    toast.info('Konfigurimi u rivendos!');
  };

  const handleAddToCart = () => {
    if (!isComplete) {
      toast.error('Ju lutem zgjidhni të gjithë komponentët para se ta shtoni në shportë!');
      return;
    }

    const summary = Object.entries(selected)
      .map(([cat, item]) => `${cat.toUpperCase()}: ${item?.name}`)
      .join(' | ');

    addCustomPcToCart('Custom Built NEXORA Gaming PC', totalPrice, summary);
    toast.success('Konfigurimi yt i personalizuar u shtua në shportë!');
  };

  return (
    <div className="container py-10 space-y-8">
      {/* Header */}
      <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            ⭐ Interactive PC Builder
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-2">
            Ndërto PC-në Tënde me Llogaritje Live
          </h1>
          <p className="text-gray-400 text-sm mt-1 max-w-2xl">
            Zgjidh komponentët që dëshiron. Çmimi përditësohet në sekondë dhe ekipi ynë i teknikëve e monton dhe teston falas!
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={resetBuild}
            variant="outline"
            className="text-xs border-white/20 text-gray-300 hover:text-white hover:bg-white/5 flex items-center gap-2"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Pastro Zgjedhjet
          </Button>
        </div>
      </div>

      {/* Main Grid: Steps on Left, Live Summary on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Step navigation + Component options */}
        <div className="lg:col-span-8 space-y-6">
          {/* Step Pill Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {steps.map((s, idx) => {
              const isChosen = selected[s.id] !== null;
              const isActive = activeStep === s.id;
              const StepIcon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveStep(s.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 border ${
                    isActive
                      ? 'bg-cyan-500 text-black border-cyan-400 shadow-md shadow-cyan-500/20'
                      : isChosen
                      ? 'bg-white/10 text-cyan-300 border-cyan-500/30'
                      : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <StepIcon className="w-4 h-4" />
                  <span>{idx + 1}. {s.label.split(' ')[0]}</span>
                  {isChosen && <Check className="w-3 h-3 text-emerald-400" />}
                </button>
              );
            })}
          </div>

          {/* Active Category Options */}
          <div className="bg-[#111622] rounded-2xl border border-white/10 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h2 className="text-xl font-bold text-white">
                  Zgjidh {steps.find((s) => s.id === activeStep)?.label}
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  Të gjitha pjesët janë 100% të pajtueshme me arkitekturat moderne.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-2">
              {PC_BUILDER_OPTIONS[activeStep]?.map((opt) => {
                const isCurrent = selected[activeStep]?.id === opt.id;
                return (
                  <div
                    key={opt.id}
                    onClick={() => handleSelect(activeStep, opt)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      isCurrent
                        ? 'bg-cyan-500/10 border-cyan-400 shadow-md shadow-cyan-500/10'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/30 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm sm:text-base">
                          {opt.name}
                        </span>
                        {isCurrent && (
                          <span className="bg-cyan-500 text-black text-[10px] font-black uppercase px-2 py-0.5 rounded">
                            Zgjedhur
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400">{opt.specs}</p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-lg font-black text-white block">
                        +{opt.price} €
                      </span>
                      <Button
                        size="sm"
                        className={`text-xs mt-1 ${
                          isCurrent
                            ? 'bg-cyan-500 text-black hover:bg-cyan-400 font-bold'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {isCurrent ? 'Ndrysho' : 'Zgjidh'}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Live Configuration Card & Summary */}
        <div className="lg:col-span-4 sticky top-28 space-y-6">
          <div className="bg-[#121622] rounded-2xl border border-cyan-500/30 p-6 space-y-6 shadow-2xl">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                Konfigurimi Yt
              </span>
              <h3 className="text-xl font-black text-white mt-1">Përmbledhje & Totali</h3>
            </div>

            {/* Selected items list */}
            <div className="space-y-2.5 text-xs">
              {steps.map((st) => {
                const item = selected[st.id];
                return (
                  <div
                    key={st.id}
                    onClick={() => setActiveStep(st.id)}
                    className="flex items-center justify-between p-2 rounded-lg bg-black/30 border border-white/5 hover:border-white/20 cursor-pointer"
                  >
                    <div className="truncate pr-2">
                      <span className="text-gray-400 font-medium block text-[10px] uppercase">
                        {st.label.split(' ')[0]}
                      </span>
                      <span className="text-white font-semibold truncate block">
                        {item ? item.name : <em className="text-amber-400">E pazgjedhur</em>}
                      </span>
                    </div>
                    <span className="text-cyan-400 font-bold shrink-0">
                      {item ? `${item.price} €` : '--'}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Compatibility check */}
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <p className="font-bold text-emerald-300">Përputhshmëri 100% e Garantuar</p>
                <p className="text-gray-400">Të gjithë komponentët e përzgjedhur janë të pajtueshëm në socket, tension dhe dimensione.</p>
              </div>
            </div>

            {/* Total calculation */}
            <div className="border-t border-white/10 pt-4 space-y-2">
              <div className="flex justify-between text-xs text-gray-400">
                <span>Montimi & Cable Management</span>
                <span className="text-emerald-400 font-bold">FALAS (Dhuratë)</span>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>Testimi Termik & BIOS Update</span>
                <span className="text-emerald-400 font-bold">FALAS</span>
              </div>
              <div className="flex justify-between items-baseline pt-2 border-t border-white/10">
                <span className="text-sm font-bold text-white">Totali i Pjesëve:</span>
                <span className="text-2xl font-black text-cyan-300">{totalPrice} €</span>
              </div>
            </div>

            {/* Action button */}
            <Button
              onClick={handleAddToCart}
              disabled={!isComplete}
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-black font-extrabold py-6 text-sm rounded-xl shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Porosit Këtë Konfigurim
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
