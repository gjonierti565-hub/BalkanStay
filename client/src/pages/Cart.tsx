import React, { useState } from 'react';
import { Link } from 'wouter';
import { 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  CheckCircle,
  CreditCard,
  MapPin,
  Phone,
  Mail,
  User
} from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { toast } from 'sonner';

export default function CartPage() {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    cartTotal, 
    shippingCost, 
    finalTotal 
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Checkout form
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Prishtinë',
    address: '',
    paymentMethod: 'cash_on_delivery',
    notes: '',
  });

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'WEEKEND200' && cartTotal >= 1000) {
      setDiscountAmount(200);
      toast.success('Kodi WEEKEND200 u aplikua me sukses! (-200€)');
    } else if (couponCode.toUpperCase() === 'STUDENT15') {
      const disc = Math.round(cartTotal * 0.15);
      setDiscountAmount(disc);
      toast.success(`Kodi STUDENT15 u aplikua! (-${disc}€)`);
    } else {
      toast.error('Kodi i zbritjes nuk është i vlefshëm ose nuk përmbush kushtin e shumës.');
    }
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      toast.error('Ju lutem plotësoni Emrin, Telefonin dhe Adresën e dërgesës!');
      return;
    }

    setOrderPlaced(true);
    clearCart();
    toast.success('Porosia juaj u regjistrua me sukses!');
  };

  if (orderPlaced) {
    return (
      <div className="container py-20 max-w-xl text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-black text-white">Faleminderit për Porosinë Tuaj!</h1>
        <p className="text-gray-300 text-sm leading-relaxed">
          Porosia u regjistrua në sistemin e <strong>NEXORA Computer Store</strong>. Agjenti ynë do t'ju telefonojë brenda 30 minutave në numrin <strong>{formData.phone}</strong> për të konfirmuar dërgesën.
        </p>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-left space-y-1 text-gray-300">
          <p><strong>Emri:</strong> {formData.name}</p>
          <p><strong>Adresa:</strong> {formData.address}, {formData.city}</p>
          <p><strong>Mënyra e Pagesës:</strong> {formData.paymentMethod === 'cash_on_delivery' ? 'Para në dorë gjatë dorëzimit (Cash)' : 'Kartelë / Transfer Bankar'}</p>
        </div>
        <Link href="/">
          <Button className="bg-cyan-500 text-black font-bold px-8">Kthehu në Ballinë</Button>
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center space-y-6 max-w-md mx-auto">
        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto text-gray-500">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h1 className="text-2xl font-black text-white">Shporta juaj është e zbrazët</h1>
        <p className="text-gray-400 text-sm">
          Shfletoni produktet tona ose provoni PC Builder për të krijuar kompjuterin tuaj të ëndrrave.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/products">
            <Button className="bg-cyan-500 text-black font-bold">Shiko Produktet</Button>
          </Link>
          <Link href="/pc-builder">
            <Button variant="outline" className="border-white/20 text-white font-bold">
              PC Builder ⭐
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const grandTotal = Math.max(0, finalTotal - discountAmount);

  return (
    <div className="container py-10 space-y-8">
      <div>
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Blerja e Sigurt</span>
        <h1 className="text-3xl font-black text-white mt-1">Shporta e Blerjeve 🛒</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Cart Items List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs text-gray-400">
            <span>Produkti & Përshkrimi</span>
            <span>Nëntotali</span>
          </div>

          {items.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-[#111622] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover bg-black/40 shrink-0"
                />
                <div>
                  <h3 className="font-bold text-white text-sm">{item.name}</h3>
                  {item.details && (
                    <p className="text-[11px] text-cyan-400 line-clamp-1 max-w-xs">{item.details}</p>
                  )}
                  <span className="text-xs text-gray-400 block">{item.price} € për copë</span>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                {/* Quantity */}
                <div className="flex items-center border border-white/20 rounded-lg bg-black/40">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2.5 py-1 text-xs text-gray-300 hover:text-white"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-xs font-bold text-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2.5 py-1 text-xs text-gray-300 hover:text-white"
                  >
                    +
                  </button>
                </div>

                <span className="text-base font-black text-cyan-300">
                  {item.price * item.quantity} €
                </span>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-500 hover:text-red-400 p-1"
                  title="Fshij nga shporta"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {/* Coupon Code input */}
          <div className="pt-4 flex gap-3">
            <Input
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Kodi i kuponit (p.sh. WEEKEND200)"
              className="bg-[#111622] border-white/10 text-white text-xs"
            />
            <Button
              onClick={handleApplyCoupon}
              variant="outline"
              className="border-white/20 text-white text-xs shrink-0"
            >
              Apliko Kodin
            </Button>
          </div>
        </div>

        {/* Right: Checkout Details & Summary */}
        <div className="lg:col-span-5 bg-[#121622] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
          <h2 className="text-xl font-bold text-white border-b border-white/10 pb-4">
            Të Dhënat e Dërgesës & Pagesa
          </h2>

          <form onSubmit={handleCheckout} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs text-gray-400 font-semibold">Emri dhe Mbiemri *</label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="p.sh. Dardan Berisha"
                className="bg-black/30 border-white/10 text-white text-xs"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs text-gray-400 font-semibold">Numri i Telefonit *</label>
                <Input
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+383 44 000 000"
                  className="bg-black/30 border-white/10 text-white text-xs"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-400 font-semibold">Qyteti *</label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-xs text-white outline-none"
                >
                  <option value="Prishtinë">Prishtinë</option>
                  <option value="Tiranë">Tiranë</option>
                  <option value="Prizren">Prizren</option>
                  <option value="Shkup">Shkup</option>
                  <option value="Durrës">Durrës</option>
                  <option value="Pejë">Pejë</option>
                  <option value="Ferizaj">Ferizaj</option>
                  <option value="Gjakovë">Gjakovë</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-gray-400 font-semibold">Adresa e Saktë *</label>
              <Input
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Rruga, Nr. i ndërtesës / hyrjes"
                className="bg-black/30 border-white/10 text-white text-xs"
              />
            </div>

            <div className="space-y-2 pt-2">
              <label className="text-xs text-gray-400 font-semibold">Mënyra e Pagesës:</label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <label
                  className={`p-3 rounded-lg border cursor-pointer flex flex-col justify-between ${
                    formData.paymentMethod === 'cash_on_delivery'
                      ? 'border-cyan-400 bg-cyan-500/10 text-white'
                      : 'border-white/10 bg-white/5 text-gray-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="pm"
                    checked={formData.paymentMethod === 'cash_on_delivery'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'cash_on_delivery' })}
                    className="sr-only"
                  />
                  <span className="font-bold">Para në dorë</span>
                  <span className="text-[10px] text-gray-400">Paguaj pas kontrollit të mallit</span>
                </label>

                <label
                  className={`p-3 rounded-lg border cursor-pointer flex flex-col justify-between ${
                    formData.paymentMethod === 'card'
                      ? 'border-cyan-400 bg-cyan-500/10 text-white'
                      : 'border-white/10 bg-white/5 text-gray-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="pm"
                    checked={formData.paymentMethod === 'card'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className="sr-only"
                  />
                  <span className="font-bold">Kartelë / Bankë</span>
                  <span className="text-[10px] text-gray-400">Pagesë e menjëhershme</span>
                </label>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="border-t border-white/10 pt-4 space-y-2 text-xs">
              <div className="flex justify-between text-gray-400">
                <span>Nëntotali i produkteve:</span>
                <span className="text-white font-semibold">{cartTotal} €</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Transporti (Dërgesa):</span>
                <span className={shippingCost === 0 ? 'text-emerald-400 font-bold' : 'text-white'}>
                  {shippingCost === 0 ? 'Falas (Mbi 300€)' : `${shippingCost} €`}
                </span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-red-400 font-bold">
                  <span>Zbritje me Kupon:</span>
                  <span>-{discountAmount} €</span>
                </div>
              )}
              <div className="flex justify-between items-baseline pt-2 border-t border-white/10">
                <span className="text-sm font-bold text-white">Totali Final:</span>
                <span className="text-2xl font-black text-cyan-300">{grandTotal} €</span>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-black font-extrabold py-6 rounded-xl text-base shadow-xl shadow-cyan-500/25 mt-4"
            >
              Konfirmo Porosinë ({grandTotal} €)
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
