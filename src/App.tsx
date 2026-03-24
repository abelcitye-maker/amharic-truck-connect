import React, { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  User, 
  Menu, 
  X, 
  Bell, 
  LayoutDashboard, 
  PlusCircle, 
  Search,
  Package,
  Ship,
  ArrowRight
} from 'lucide-react';
import { Hero } from './components/Hero';
import { CargoForm } from './components/CargoForm';
import { CargoList } from './components/CargoList';
import { Footer } from './components/Footer';
import { Toaster, toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { CargoPost } from './types';
import { cn } from './lib/utils';

export default function App() {
  const [view, setView] = useState<'home' | 'post-cargo' | 'find-cargo'>('home');
  const [cargoList, setCargoList] = useState<CargoPost[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePostCargo = (data: Omit<CargoPost, 'id' | 'status'>) => {
    const newCargo: CargoPost = {
      ...data,
      id: (Math.floor(Math.random() * 90000) + 10000).toString(),
      status: 'pending',
    };
    setCargoList([newCargo, ...cargoList]);
    toast.success('የጭነት ጥያቄዎ በተሳካ ሁኔታ ተልኳል!', {
      description: 'Truck drivers will contact you soon.',
    });
    setView('find-cargo');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900">
      <Toaster position="top-center" expand={true} richColors />
      
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => setView('home')}
          >
            <div className="bg-orange-600 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-orange-200">
              <Truck className="text-white w-5 h-5" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight text-slate-900">
              Ethio<span className="text-orange-600">Cargo</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <NavButton active={view === 'home'} onClick={() => setView('home')} label="Home" />
            <NavButton active={view === 'post-cargo'} onClick={() => setView('post-cargo')} label="Post Cargo" icon={<PlusCircle size={16}/>} />
            <NavButton active={view === 'find-cargo'} onClick={() => setView('find-cargo')} label="Find Loads" icon={<Search size={16}/>} />
            
            <div className="h-6 w-[1px] bg-slate-200 mx-4"></div>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 text-slate-500 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-colors relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-orange-600 rounded-full border-2 border-white"></span>
              </button>
              <button className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95">
                <User size={18} />
                Sign In
              </button>
            </div>
          </div>

          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-white shadow-2xl border-b border-slate-200 flex flex-col p-6 space-y-4 md:hidden overflow-hidden"
            >
              <MobileNavButton active={view === 'home'} onClick={() => { setView('home'); setIsMenuOpen(false); }} label="Home" />
              <MobileNavButton active={view === 'post-cargo'} onClick={() => { setView('post-cargo'); setIsMenuOpen(false); }} label="Post Cargo" />
              <MobileNavButton active={view === 'find-cargo'} onClick={() => { setView('find-cargo'); setIsMenuOpen(false); }} label="Find Loads" />
              <hr className="border-slate-100" />
              <button className="bg-orange-600 text-white px-5 py-4 rounded-2xl font-bold text-center shadow-lg shadow-orange-100">Sign In</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {view === 'home' && (
          <>
            <Hero onPostCargo={() => setView('post-cargo')} onFindCargo={() => setView('find-cargo')} />
            
            <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-10 mb-20 relative z-10">
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: 'Verified Drivers', value: '2,500+' },
                  { label: 'Active Shipments', value: '840+' },
                  { label: 'Cities Covered', value: '45' },
                  { label: 'Happy Customers', value: '12k+' }
                ].map((stat, i) => (
                  <div key={i} className="text-center md:text-left">
                    <div className="text-2xl md:text-3xl font-black text-slate-900">{stat.value}</div>
                    <div className="text-sm font-medium text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    Reliable Logistics
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 leading-[1.15] text-slate-900">
                    ጭነትዎን ለማጓጓዝ <br/>
                    <span className="text-orange-600">ቀላሉ እና አስተማማኙ መንገድ</span>
                  </h2>
                  <p className="text-slate-500 text-lg mb-8 leading-relaxed max-w-lg">
                    Connect with thousands of verified truck drivers across Ethiopia. Whether it's grain from Gojam, coffee from Jimma, or construction materials in Addis Ababa, we've got you covered.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    {[
                      { title: 'Real-time Tracking', desc: 'Monitor your cargo live' },
                      { title: 'Verified Drivers', desc: 'Secure & trusted logistics' },
                      { title: 'Fair Pricing', desc: 'Competitive market rates' },
                      { title: '24/7 Support', desc: 'Always here to help you' }
                    ].map((item) => (
                      <div key={item.title} className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 font-bold text-slate-900">
                           <div className="bg-green-100 text-green-600 p-0.5 rounded-full">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                          </div>
                          {item.title}
                        </div>
                        <span className="text-sm text-slate-500 ml-6">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => setView('post-cargo')}
                    className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-lg"
                  >
                    Get Started Now
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                   <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                   <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-10 animate-pulse delay-700"></div>
                   <div className="rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] bg-slate-100">
                    <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/3993feb1-3b17-43bf-971c-f32fdb5d6fe0/truck-fleet-5474fc3c-1774373484258.webp" alt="Truck Fleet" className="w-full h-auto hover:scale-105 transition-transform duration-700" />
                  </div>
                </motion.div>
              </div>

              <div className="mb-24">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-black mb-4">እንዴት ነው የሚሰራው? (How it Works)</h2>
                  <p className="text-slate-500 max-w-2xl mx-auto">Get your cargo moving in three simple steps. We make logistics easy for everyone in Ethiopia.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                  {[
                    { step: '01', title: 'Post Cargo', desc: 'Tell us what you need to move, where, and when.', icon: <Package className="w-8 h-8"/> },
                    { step: '02', title: 'Get Bids', desc: 'Verified drivers will offer their best rates for your cargo.', icon: <Ship className="w-8 h-8"/> },
                    { step: '03', title: 'Start Transport', desc: 'Select the best driver and track your delivery in real-time.', icon: <Truck className="w-8 h-8"/> }
                  ].map((item, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -top-10 -left-6 text-9xl font-black text-slate-100 -z-10 group-hover:text-orange-50 transition-colors">{item.step}</div>
                      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all h-full relative z-10">
                        <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                        <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {view === 'post-cargo' && (
          <div className="max-w-4xl mx-auto px-4 py-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h1 className="text-4xl font-black mb-3">ጭነት ይላኩ <span className="text-orange-600">(Post Cargo)</span></h1>
              <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
                Fill in the details about your cargo. We will notify relevant truck drivers immediately to give you the best shipping rates.
              </p>
            </motion.div>
            <CargoForm onSubmit={handlePostCargo} />
          </div>
        )}

        {view === 'find-cargo' && (
          <div className="max-w-7xl mx-auto px-4 py-16">
             <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h1 className="text-4xl font-black mb-3 text-slate-900">Available Loads</h1>
                  <p className="text-slate-500 text-lg">Browse shipments looking for transport. Filter by route or truck type.</p>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" placeholder="Search routes..." className="pl-12 pr-4 py-3 bg-white rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-orange-500 w-full md:w-64" />
                  </div>
                  <button className="bg-white p-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600">
                    <LayoutDashboard size={20} />
                  </button>
                </div>
             </div>
             <CargoList posts={cargoList} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

function NavButton({ active, onClick, label, icon }: { active: boolean, onClick: () => void, label: string, icon?: React.ReactNode }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full font-bold text-sm transition-all flex items-center gap-2",
        active 
          ? "bg-orange-50 text-orange-600" 
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
      )}
    >
      {icon}
      {label}
    </button>
  );
}

function MobileNavButton({ active, onClick, label }: { active: boolean, onClick: () => void, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full text-left px-4 py-3 rounded-xl font-bold text-lg transition-all",
        active 
          ? "bg-orange-50 text-orange-600" 
          : "text-slate-600 hover:bg-slate-50"
      )}
    >
      {label}
    </button>
  );
}