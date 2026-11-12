import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Pyetje për Blerje PC',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Ju lutem plotësoni të gjitha fushat e kërkuara!');
      return;
    }
    setFormSubmitted(true);
    toast.success('Mesazhi juaj u dërgua me sukses! Do t\'ju kontaktojmë së shpejti.');
  };

  return (
    <div className="container py-12 space-y-12 max-w-6xl">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
          Jemi këtu për ty
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          Na Kontaktoni 📍
        </h1>
        <p className="text-gray-400 text-sm">
          Vizitoni dyqanet tona fizike në Prishtinë dhe Tiranë ose na dërgoni një mesazh për këshilla dhe pyetje teknike.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#111622] rounded-2xl border border-white/10 p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-white border-b border-white/10 pb-4">
              Informacionet e Kontaktit
            </h2>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Adresa Kryesore (Showroom):</h4>
                  <p className="text-gray-400 mt-0.5">Rruga Agim Ramadani, Nr. 45, Prishtinë, Kosovë</p>
                  <p className="text-gray-400">Rruga Myslym Shyri, Tiranë, Shqipëri</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Telefon & WhatsApp:</h4>
                  <p className="text-cyan-400 font-semibold mt-0.5">+383 44 123 456 (Kosovë)</p>
                  <p className="text-cyan-400 font-semibold">+355 69 987 6543 (Shqipëri)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email Zyrtar:</h4>
                  <p className="text-gray-400 mt-0.5">info@nexora-store.com</p>
                  <p className="text-gray-400">support@nexora-store.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Orari i Punës:</h4>
                  <p className="text-gray-400 mt-0.5">E Hënë - E Shtunë: 09:00 - 20:00</p>
                  <p className="text-gray-500">E Diel: E mbyllur (Servisi emergjent me thirrje)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed visual */}
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 h-64 relative">
            <iframe
              title="NEXORA Store Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.341178652014!2d21.163351915478477!3d42.664789979167445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee14a05df85%3A0xc3f58a36d2f347d4!2sPristina!5e0!3m2!1sen!2s!4v1658392019345!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-[#111622] rounded-2xl border border-white/10 p-6 sm:p-10 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Na Dërgoni një Mesazh</h2>
            <p className="text-xs text-gray-400 mt-1">
              Plotësoni formën më poshtë dhe ekipi ynë do t'ju përgjigjet brenda 2 orëve pune.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-lg font-bold text-white">Mesazhi u Dërgua me Sukses!</h3>
              <p className="text-xs text-gray-300">
                Faleminderit që na kontaktuat. Do t'ju kthejmë përgjigje në <strong>{formData.email}</strong>.
              </p>
              <Button
                onClick={() => setFormSubmitted(false)}
                variant="outline"
                className="text-xs border-white/20 text-white mt-2"
              >
                Dërgo një mesazh tjetër
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-gray-300 font-semibold">Emri dhe Mbiemri *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Emri juaj"
                    className="bg-black/30 border-white/10 text-white text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-300 font-semibold">Numri i Telefonit</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+383 44 000 000"
                    className="bg-black/30 border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-gray-300 font-semibold">Adresa Email *</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="shembull@email.com"
                    className="bg-black/30 border-white/10 text-white text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-300 font-semibold">Subjekti</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-xs text-white outline-none"
                  >
                    <option value="Pyetje për Blerje PC">Pyetje për Blerje PC</option>
                    <option value="PC Builder & Kompatibilitet">PC Builder & Kompatibilitet</option>
                    <option value="Kërkesë për Servis / Pastrim">Kërkesë për Servis / Pastrim</option>
                    <option value="Statusi i Porosisë">Statusi i Porosisë</option>
                    <option value="Tjetër">Tjetër</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-gray-300 font-semibold">Mesazhi Juaj *</label>
                <Textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Shkruani pyetjen tuaj, specifikat e dëshiruara ose detajet e servisit..."
                  className="bg-black/30 border-white/10 text-white text-xs"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-black font-extrabold py-6 rounded-xl text-sm shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Dërgo Mesazhin
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
