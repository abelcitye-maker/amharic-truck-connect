import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Truck, Calendar, User, Phone, Package, ArrowRight } from 'lucide-react';
import { CargoPost } from '../types';

interface CargoListProps {
  posts: CargoPost[];
}

const MOCK_DATA: CargoPost[] = [
  {
    id: '1',
    origin: 'Addis Ababa',
    destination: 'Mekelle',
    cargoType: 'Industrial Machinery',
    weight: 24,
    weightUnit: 'tons',
    preferredTruck: 'Sino Truck',
    pickupDate: '2024-06-15',
    status: 'pending',
    contactName: 'Abebe Bekele',
    contactPhone: '+251911223344',
  },
  {
    id: '2',
    origin: 'Adama',
    destination: 'Djibouti Port',
    cargoType: 'Export Coffee',
    weight: 18,
    weightUnit: 'tons',
    preferredTruck: 'Trailer',
    pickupDate: '2024-06-18',
    status: 'pending',
    contactName: 'Chala Tadesse',
    contactPhone: '+251922334455',
  },
  {
    id: '3',
    origin: 'Bahir Dar',
    destination: 'Addis Ababa',
    cargoType: 'White Peahoney',
    weight: 5,
    weightUnit: 'tons',
    preferredTruck: 'Isuzu',
    pickupDate: '2024-06-20',
    status: 'pending',
    contactName: 'Sara Mohammed',
    contactPhone: '+251933445566',
  }
];

export const CargoList: React.FC<CargoListProps> = ({ posts }) => {
  const allPosts = [...posts, ...MOCK_DATA];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allPosts.map((post, idx) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {post.status}
              </div>
              <span className="text-slate-400 text-sm">Ref: #{post.id}</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <div className="w-0.5 h-8 bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full border-2 border-orange-500"></div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-sm font-semibold text-slate-900">{post.origin}</div>
                  <div className="text-sm font-semibold text-slate-900 mt-2">{post.destination}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-50 mt-4">
                <div className="flex items-center gap-2">
                  <Package size={16} className="text-slate-400" />
                  <span className="text-xs text-slate-500">{post.cargoType}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={16} className="text-slate-400" />
                  <span className="text-xs text-slate-500">{post.preferredTruck}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-slate-400" />
                  <span className="text-xs text-slate-500">{post.weight} {post.weightUnit}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-slate-400" />
                  <span className="text-xs text-slate-500">{post.pickupDate}</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 mb-1">Posted by</div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-xs font-bold">
                      {post.contactName.charAt(0)}
                    </div>
                    <span className="text-sm font-medium">{post.contactName}</span>
                  </div>
                </div>
                <button className="bg-slate-900 text-white p-3 rounded-xl group-hover:bg-orange-600 transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};