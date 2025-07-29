import React from 'react';
import { Truck, Package, ArrowRight, Star, Users, Award } from 'lucide-react';
import { User } from '../types';

interface ServiceDashboardProps {
  user: User;
  onVehicleService: () => void;
  onMaterialService: () => void;
}

export const ServiceDashboard: React.FC<ServiceDashboardProps> = ({ 
  user, 
  onVehicleService, 
  onMaterialService 
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Welcome, {user.name}!
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              What would you like to find today? Choose from our comprehensive range of construction services.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Star className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Quality Assured</h3>
                <p className="text-blue-100 text-sm">Verified suppliers and vehicle owners</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Users className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Direct Contact</h3>
                <p className="text-blue-100 text-sm">Connect directly with service providers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Award className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Best Prices</h3>
                <p className="text-blue-100 text-sm">Competitive rates across Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Choose Your Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from our comprehensive range of construction services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Service Vehicles */}
            <div 
              onClick={onVehicleService}
              className="group bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-10 cursor-pointer hover:shadow-2xl transition-all duration-500 border border-yellow-200 hover:border-yellow-300"
            >
              <div className="text-center">
                <div className="bg-yellow-400 p-6 rounded-2xl mx-auto mb-6 w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Truck className="text-white w-12 h-12" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4"> Service Vehicles</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Browse and rent heavy vehicles like JCBs, excavators, lorries, and more from verified owners across Sri Lanka.
                </p>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 mb-6">
                  <div className="text-sm text-gray-600 mb-2">Available Categories:</div>
                  <div className="flex justify-center space-x-4">
                    <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm"> Agricultural</span>
                    <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm"> Construction</span>
                    <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm"> Water Supply</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center text-yellow-600 font-semibold group-hover:text-yellow-700 text-lg">
                  Browse Vehicles
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Construction Materials */}
            <div 
              onClick={onMaterialService}
              className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-10 cursor-pointer hover:shadow-2xl transition-all duration-500 border border-blue-200 hover:border-blue-300"
            >
              <div className="text-center">
                <div className="bg-blue-500 p-6 rounded-2xl mx-auto mb-6 w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Package className="text-white w-12 h-12" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4"> Construction Materials</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Source quality construction materials like sand, soil, bricks, and gravel from verified suppliers.
                </p>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 mb-6">
                  <div className="text-sm text-gray-600 mb-2">Available Materials:</div>
                  <div className="flex justify-center space-x-2 flex-wrap gap-2">
                    <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs"> Sand</span>
                    <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs"> Soil</span>
                    <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs"> Bricks</span>
                    <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs"> Gravel</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center text-blue-600 font-semibold group-hover:text-blue-700 text-lg">
                  Browse Materials
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Active Suppliers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">25</div>
              <div className="text-gray-600">Districts Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
              <div className="text-gray-600">User Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};