import React, { useState } from 'react';
import { MapPin, Weight, Calendar, Truck, User, Phone, Package } from 'lucide-react';
import { CargoPost, TruckType } from '../types';
import { cn } from '../lib/utils';

interface CargoFormProps {
  onSubmit: (data: Omit<CargoPost, 'id' | 'status'>) => void;
}

const TRUCK_TYPES: TruckType[] = ['Isuzu', 'Sino Truck', 'Trailer', 'Tanker', 'Pickup', 'Refrigerated'];

export const CargoForm: React.FC<CargoFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    cargoType: '',
    weight: 10,
    weightUnit: 'tons' as 'tons' | 'kg',
    preferredTruck: 'Sino Truck' as TruckType,
    pickupDate: '',
    contactName: '',
    contactPhone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Route Details */}
        <div className="space-y-4">
          <label className="text-sm font-semibold text-slate-700 flex items-center gap-2 uppercase tracking-wider">
            <MapPin className="text-orange-500" size={16} />
            Route Information
          </label>
          <div className="space-y-3">
            <input
              type="text"
              required
              placeholder="ከየት ይነሳል? (Origin e.g. Addis Ababa)"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
              value={formData.origin}
              onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
            />
            <input
              type="text"
              required
              placeholder="ወዴት ይሄዳል? (Destination e.g. Dire Dawa)"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            />
          </div>
        </div>

        {/* Cargo Details */}
        <div className="space-y-4">
          <label className="text-sm font-semibold text-slate-700 flex items-center gap-2 uppercase tracking-wider">
            <Package className="text-orange-500" size={16} />
            Cargo Details
          </label>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              required
              placeholder="የጭነቱ አይነት (e.g. Grain)"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 outline-none"
              value={formData.cargoType}
              onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
            />
            <div className="flex">
              <input
                type="number"
                required
                className="w-full px-4 py-3 rounded-l-xl border border-slate-200 border-r-0 focus:ring-2 focus:ring-orange-500 outline-none"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: Number(e.target.value) })}
              />
              <select 
                className="bg-slate-50 border border-slate-200 rounded-r-xl px-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                value={formData.weightUnit}
                onChange={(e) => setFormData({ ...formData, weightUnit: e.target.value as 'tons' | 'kg' })}
              >
                <option value="tons">Tons</option>
                <option value="kg">Kg</option>
              </select>
            </div>
          </div>
        </div>

        {/* Logistics Preferences */}
        <div className="space-y-4">
          <label className="text-sm font-semibold text-slate-700 flex items-center gap-2 uppercase tracking-wider">
            <Truck className="text-orange-500" size={16} />
            Truck Preference
          </label>
          <select 
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 outline-none appearance-none bg-white"
            value={formData.preferredTruck}
            onChange={(e) => setFormData({ ...formData, preferredTruck: e.target.value as TruckType })}
          >
            {TRUCK_TYPES.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-semibold text-slate-700 flex items-center gap-2 uppercase tracking-wider">
            <Calendar className="text-orange-500" size={16} />
            Pickup Date
          </label>
          <input
            type="date"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 outline-none"
            value={formData.pickupDate}
            onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
          />
        </div>

        {/* Contact Info */}
        <div className="md:col-span-2 space-y-4 border-t border-slate-100 pt-6">
          <label className="text-sm font-semibold text-slate-700 flex items-center gap-2 uppercase tracking-wider">
            <User className="text-orange-500" size={16} />
            Contact Information
          </label>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              required
              placeholder="ስም (Full Name)"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 outline-none"
              value={formData.contactName}
              onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
            />
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="tel"
                required
                placeholder="ስልክ ቁጥር (Phone Number)"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 outline-none"
                value={formData.contactPhone}
                onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-200"
      >
        ጭነት አስተዋውቅ (Post This Cargo)
      </button>
    </form>
  );
};