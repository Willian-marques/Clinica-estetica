import React from 'react';
import { Calendar, ArrowDown } from 'lucide-react';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">TC</span>
          </div>
          <div className="text-sm text-amber-300 tracking-widest">
            CURITIBA | SÃO PAULO | PORTO ALEGRE
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          TRATAMENTOS FACIAIS E<br />
          CORPORAIS PARA DEIXAR VOCÊ<br />
          <span className="text-amber-400">AINDA MAIS BONITA</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Conheça a Locatelli Clinic, especializada em dermatologia estética com toda a
          segurança da medicina, profissionais qualificados, métodos avançados e tecnologia
          de ponta.
        </p>

        <p className="text-md text-gray-300 mb-10">
          Faça com nossa secretária e agende sua consulta agora.
        </p>

        {/* CTA Button */}
        <button 
          onClick={() => setCurrentPage('contact')}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white font-semibold rounded-full hover:from-amber-500 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Calendar className="mr-2 h-5 w-5" />
          AGENDAR CONSULTA
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-white opacity-70" />
          </div>
        </div>
      </div>
    </div>
  );
}