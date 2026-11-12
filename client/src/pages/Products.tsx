import React, { useState, useMemo } from 'react';
import { useSearch } from 'wouter';
import { Link } from 'wouter';
import { 
  Search, 
  SlidersHorizontal, 
  Star, 
  ShoppingCart, 
  Eye, 
  Check, 
  ArrowUpDown,
  Tag
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, Product } from '../data/storeData';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

export default function ProductsPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Tier filter for Gaming PCs
      if (selectedTier !== 'all' && product.tier !== selectedTier) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesSpecs = Object.values(product.specs).some((v) => v.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesSpecs) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCategory, selectedTier, searchQuery, sortBy]);

  return (
    <div className="container py-10 space-y-8">
      {/* Header */}
      <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Katalogu Zyrtar</span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-1">Produktet & Komponentët</h1>
          <p className="text-gray-400 text-sm mt-1">
            Gjej të gjitha pajisjet e fundit, laptopë, komponentë individualë dhe aksesorë gaming.
          </p>
        </div>
        <div className="text-xs text-gray-400">
          U gjetën <span className="text-cyan-400 font-bold">{filteredProducts.length}</span> produkte
        </div>
      </div>

      {/* Categories Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                if (cat.id !== 'gaming-pcs') setSelectedTier('all');
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 border ${
                isSelected
                  ? 'bg-cyan-500 text-black border-cyan-400 shadow-md shadow-cyan-500/20'
                  : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Search and Filters toolbar */}
      <div className="bg-[#121622] p-4 rounded-xl border border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Kërko me emër, CPU, GPU..."
            className="pl-9 bg-black/40 border-white/10 text-white placeholder:text-gray-500 text-xs focus:border-cyan-400"
          />
        </div>

        {/* Tier filter if Gaming PCs */}
        {selectedCategory === 'gaming-pcs' && (
          <div className="flex items-center gap-2 w-full md:w-auto">
            <span className="text-xs text-gray-400 font-medium">Niveli:</span>
            {['all', 'Entry Level', 'Mid Range', 'High End'].map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                  selectedTier === tier
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:text-white'
                }`}
              >
                {tier === 'all' ? 'Të gjithë' : tier}
              </button>
            ))}
          </div>
        )}

        {/* Sort Select */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <ArrowUpDown className="w-4 h-4 text-gray-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-black/40 text-xs text-white border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-cyan-400"
          >
            <option value="featured">Renditja: Të Zgjedhura</option>
            <option value="price-asc">Çmimi: Nga më i ulëti</option>
            <option value="price-desc">Çmimi: Nga më i larti</option>
            <option value="rating">Vlerësimet më të larta</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center bg-white/[0.02] rounded-2xl border border-white/5">
          <p className="text-lg font-bold text-white mb-2">Nuk u gjet asnjë produkt</p>
          <p className="text-xs text-gray-400 mb-6">Provo të ndryshosh kategorinë ose fjalët kyçe të kërkimit.</p>
          <Button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
              setSelectedTier('all');
            }}
            variant="outline"
            className="text-cyan-400 border-cyan-400/40 text-xs"
          >
            Pastro Filtrat
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#111622] rounded-xl border border-white/10 hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 bg-black/40 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span className="absolute top-2 left-2 bg-cyan-500/90 text-black text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wider">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-[11px] text-gray-300 px-2 py-0.5 rounded">
                    Stok: <span className="text-green-400 font-bold">{product.stock}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
                    {product.categoryName}
                  </span>
                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-sm font-bold text-white hover:text-cyan-300 transition-colors line-clamp-1 cursor-pointer">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="font-bold">{product.rating}</span>
                    <span className="text-gray-500 text-[11px]">({product.reviewCount})</span>
                  </div>

                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 border-t border-white/5 space-y-1">
                    {Object.entries(product.specs).slice(0, 2).map(([k, v]) => (
                      <p key={k} className="text-[11px] text-gray-300 truncate">
                        <strong className="text-gray-400">{k}:</strong> {v}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price and Actions */}
              <div className="p-4 pt-0 border-t border-white/5 mt-3">
                <div className="flex items-baseline justify-between mb-3 pt-3">
                  <div>
                    <span className="text-lg font-black text-white">{product.price} €</span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-500 line-through ml-2">
                        {product.originalPrice} €
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link href={`/product/${product.id}`}>
                    <Button variant="outline" className="w-full text-xs border-white/20 text-gray-300 hover:text-white hover:bg-white/5">
                      Shiko
                    </Button>
                  </Link>
                  <Button
                    onClick={() => {
                      addToCart(product);
                      toast.success(`${product.name} u shtua në shportë!`);
                    }}
                    className="w-full text-xs bg-cyan-500 hover:bg-cyan-400 text-black font-bold flex items-center justify-center gap-1"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    + Shportë
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
