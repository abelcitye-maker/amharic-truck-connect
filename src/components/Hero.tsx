import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Package } from 'lucide-react';

interface HeroProps {
  onPostCargo: () => void;
  onFindCargo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPostCargo, onFindCargo }) => {
  return (
    <div className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
      <img
        src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/3993feb1-3b17-43bf-971c-f32fdb5d6fe0/hero-truck-image-19f43ec5-1774373478926.webp"
        alt="Logistics background"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6 leading-tight">
              የጭነት መኪና እና ጭነትን <br/> 
              <span className="text-orange-500">በቀላሉ የሚያገናኝ</span>
            </h1>
            <p className="text-lg leading-8 text-slate-300 mb-10 max-w-xl">
              Connecting cargo owners with professional truck drivers. Fast, reliable, and secure logistics services across Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onPostCargo}
                className="flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-500 transition-all transform hover:scale-105 active:scale-95"
              >
                <Package size={20} />
                ጭነት አለኝ (Post Cargo)
                <ArrowRight size={18} />
              </button>
              <button
                onClick={onFindCargo}
                className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md hover:bg-white/20 transition-all border border-white/20"
              >
                <Truck size={20} />
                መኪና አለኝ (Find Cargo)
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};