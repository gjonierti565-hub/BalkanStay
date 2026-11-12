import React, { useState } from 'react';
import { useRoute, Link } from 'wouter';
import { 
  Star, 
  ShoppingCart, 
  ShieldCheck, 
  Truck, 
  ArrowLeft, 
  Check, 
  Cpu, 
  Share2, 
  HelpCircle 
} from 'lucide-react';
import { PRODUCTS } from '../data/storeData';
import { Button } from '../components/ui/button';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

export default function ProductDetailPage() {
  const [, params] = useRoute('/product/:id');
  const productId = params?.id;
  const product = PRODUCTS.find((p) => p.id === productId);

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'features' | 'reviews'>('specs');

  if (!product) {
    return (
      <div className="container py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-white">Produkti nuk u gjet</h1>
        <p className="text-gray-400 text-sm">Ju lutemi kthehuni te katalogu i produkteve.</p>
        <Link href="/products">
          <Button className="bg-cyan-500 text-black font-bold">Kthehu te Produktet</Button>
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product, quantity);
    toast.success(`${quantity}x ${product.name} u shtua në shportë!`);
  };

  return (
    <div className="container py-10 space-y-12">
      {/* Back button */}
      <Link href="/products">
        <button className="flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-cyan-400 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Kthehu te Lista e Produkteve
        </button>
      </Link>

      {/* Main Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Product Image */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative rounded-2xl overflow-hidden bg-[#111622] border border-white/10 p-2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] sm:h-[460px] object-cover rounded-xl"
            />
            {product.badge && (
              <span className="absolute top-5 left-5 bg-cyan-500 text-black text-xs font-black uppercase px-3 py-1 rounded-md">
                {product.badge}
              </span>
            )}
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center text-xs">
              <span className="text-gray-400 block mb-1">Garancia</span>
              <span className="text-white font-bold">2 - 3 Vite Zyrtare</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center text-xs">
              <span className="text-gray-400 block mb-1">Gjendja</span>
              <span className="text-emerald-400 font-bold">Në Stok ({product.stock})</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center text-xs">
              <span className="text-gray-400 block mb-1">Dërgesa</span>
              <span className="text-cyan-400 font-bold">24-48 Orë</span>
            </div>
          </div>
        </div>

        {/* Right: Product Details & Add to Cart */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">
              {product.categoryName}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white">{product.name}</h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1 text-amber-400 text-xs">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="font-bold ml-1 text-white">{product.rating}</span>
              </div>
              <span className="text-gray-500 text-xs">|</span>
              <span className="text-gray-400 text-xs">{product.reviewCount} komente të verifikuara</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="p-4 rounded-xl bg-[#111622] border border-white/10 flex items-baseline justify-between">
            <div>
              <span className="text-xs text-gray-400 block">Çmimi i plotë me TVSH</span>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-cyan-300">{product.price} €</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    {product.originalPrice} €
                  </span>
                )}
              </div>
            </div>
            {product.originalPrice && (
              <span className="bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full border border-red-500/30">
                Kurseni {product.originalPrice - product.price} €
              </span>
            )}
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">{product.description}</p>

          {/* Key Quick Features */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Veçoritë Kryesore:
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quantity and Buy */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-400 font-semibold">Sasia:</span>
              <div className="flex items-center border border-white/20 rounded-lg bg-black/40">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-gray-300 hover:text-white"
                >
                  -
                </button>
                <span className="px-4 py-2 text-sm font-bold text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                  className="px-3 py-2 text-gray-300 hover:text-white"
                >
                  +
                </button>
              </div>
              <span className="text-xs text-gray-500">(Maksimumi {product.stock} copë në stok)</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleAdd}
                className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-black font-extrabold py-6 rounded-xl shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 text-base"
              >
                <ShoppingCart className="w-5 h-5" />
                Shto në Shportë ({product.price * quantity} €)
              </Button>
              <Link href="/cart">
                <Button
                  onClick={handleAdd}
                  variant="outline"
                  className="border-white/20 hover:border-cyan-400 text-white font-bold py-6 px-6 rounded-xl"
                >
                  Bli Menjëherë
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs: Specifications & Reviews */}
      <div className="bg-[#111622] rounded-2xl border border-white/10 p-6 sm:p-8 space-y-6">
        <div className="flex border-b border-white/10 gap-6">
          <button
            onClick={() => setActiveTab('specs')}
            className={`pb-3 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'specs'
                ? 'text-cyan-400 border-cyan-400'
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
          >
            Specifikat Teknike (Full Specs)
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-3 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'reviews'
                ? 'text-cyan-400 border-cyan-400'
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
          >
            Vlerësimet e Klientëve ({product.reviewCount})
          </button>
        </div>

        {activeTab === 'specs' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specs).map(([label, val]) => (
              <div
                key={label}
                className="flex items-center justify-between p-3 rounded-lg bg-black/30 border border-white/5 text-xs"
              >
                <span className="font-bold text-gray-400">{label}:</span>
                <span className="text-white font-semibold text-right">{val}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">Arben K. (Blerës i Verifikuar)</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-300">
                "Kompjuter i jashtëzakonshëm! Cable management perfekt, temperaturat nën 65 gradë gjatë Cyberpunk 4K. Ekipi i NEXORA shumë profesional me dërgesën."
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">Liridon M.</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-300">
                "Pjesë origjinale me kuti dhe garanci. Erdhi brenda 24 orëve në Prishtinë. Rekomandim 10/10."
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
