import React from 'react';
import { Link } from 'wouter';
import { Flame, Clock, Sparkles, ShoppingCart, Tag, ArrowRight } from 'lucide-react';
import { PRODUCTS, DEALS } from '../data/storeData';
import { Button } from '../components/ui/button';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

export default function DealsPage() {
  const { addToCart } = useCart();
  const discountedProducts = PRODUCTS.filter((p) => p.originalPrice || (p.badge && p.badge.includes('Deal')));

  return (
    <div className="container py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest">
          <Flame className="w-4 h-4" /> Zbritje Ekskluzive & Promocione
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          Deals / Offers 🔥
        </h1>
        <p className="text-gray-400 text-sm">
          Përfitoni nga çmimet më të mira për këtë javë. Sasi të kufizuara në magazinë!
        </p>
      </div>

      {/* Coupon promo banners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DEALS.map((deal) => (
          <div
            key={deal.id}
            className="p-6 rounded-2xl bg-gradient-to-br from-[#161f30] to-[#0f1422] border border-cyan-500/30 space-y-3"
          >
            <span className="text-red-400 font-extrabold text-xs uppercase tracking-wider block">
              Kuponi Aktiv
            </span>
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-black text-white">{deal.title}</h3>
            </div>
            <p className="text-xs text-gray-400">{deal.target}</p>
            <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs">
              <span className="bg-black/50 px-3 py-1.5 rounded-lg font-mono text-cyan-300 font-bold border border-cyan-500/30">
                {deal.code}
              </span>
              <span className="text-amber-400 font-semibold">{deal.expires}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Discounted Products Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-white flex items-center gap-2">
          <span>Produktet me Çmim të Zbritur</span>
          <span className="text-xs bg-red-500/20 text-red-400 font-bold px-2.5 py-0.5 rounded-full">
            LIVE TANI
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {discountedProducts.map((p) => {
            const savings = p.originalPrice ? p.originalPrice - p.price : 50;
            return (
              <div
                key={p.id}
                className="bg-[#111622] rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  <div className="relative h-48 bg-black/40 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-2 left-2 bg-red-600 text-white font-extrabold text-[11px] px-2.5 py-1 rounded">
                      Kurseni {savings} €
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest block">
                      {p.categoryName}
                    </span>
                    <Link href={`/product/${p.id}`}>
                      <h3 className="text-sm font-bold text-white hover:text-cyan-300 transition-colors line-clamp-1 cursor-pointer">
                        {p.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-white/5 mt-2">
                  <div className="flex items-baseline justify-between mb-3 pt-3">
                    <div>
                      <span className="text-xl font-black text-cyan-300">{p.price} €</span>
                      {p.originalPrice && (
                        <span className="text-xs text-gray-500 line-through ml-2">
                          {p.originalPrice} €
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link href={`/product/${p.id}`}>
                      <Button variant="outline" className="w-full text-xs border-white/20 text-white">
                        Detajet
                      </Button>
                    </Link>
                    <Button
                      onClick={() => {
                        addToCart(p);
                        toast.success(`${p.name} u shtua në shportë!`);
                      }}
                      className="w-full text-xs bg-cyan-500 hover:bg-cyan-400 text-black font-bold"
                    >
                      Bli me Ofertë
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
