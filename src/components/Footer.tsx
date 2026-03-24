import React from 'react';
import { Truck, Mail, Phone, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-orange-600 p-2 rounded-lg">
                <Truck className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">EthioCargo</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Empowering Ethiopia's logistics sector with technology. Connecting every corner of the country through reliable freight services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500"><Globe size={20} /></a>
              <a href="#" className="hover:text-orange-500"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-orange-500">Post Cargo</a></li>
              <li><a href="#" className="hover:text-orange-500">Find Truck</a></li>
              <li><a href="#" className="hover:text-orange-500">Pricing</a></li>
              <li><a href="#" className="hover:text-orange-500">Safety Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500" />
                <span>support@ethiocargo.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500" />
                <span>+251 911 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange-500 text-lg">📍</span>
                <span>Bole, Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© 2024 EthioCargo. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span>Built for Ethiopia's future</span>
            <span className="text-red-500">🇪🇹</span>
          </div>
        </div>
      </div>
    </footer>
  );
};