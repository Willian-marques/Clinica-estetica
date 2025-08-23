import React from 'react';
import { MapPin, Phone, Mail, Heart, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 text-center sm:text-left" data-aos="fade-right" data-aos-delay="100">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto sm:mx-0">
                <span className="text-sm font-bold text-white">TC</span>
              </div>
              <span className="text-xl font-bold hidden sm:inline">TC Clinic</span>
            </div>
            <div className="sm:hidden text-xl font-bold">TC Clinic</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sua jornada para a beleza natural
            </p>
            <div className="space-y-2 text-sm text-gray-300 text-center sm:text-left">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-pink-400 mx-auto sm:mx-0" />
                <span>Rua das Flores, 123 - Centro, Curitiba</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-pink-400 mx-auto sm:mx-0" />
                <span>(41) 3333-4444</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-pink-400 mx-auto sm:mx-0" />
                <span>contato@tcclinic.com.br</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4 text-center sm:text-left" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Início</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Serviços</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Nossos Serviços */}
          <div className="space-y-4 text-center sm:text-left" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-lg font-semibold">Nossos Serviços</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Harmonização Facial</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Preenchimento Labial</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Criolipólise</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Limpeza de Pele</a></li>
            </ul>
          </div>

          {/* Siga-nos */}
          <div className="space-y-4 text-center sm:text-left" data-aos="fade-left" data-aos-delay="400">
            <h3 className="text-lg font-semibold">Siga-nos</h3>
            <div className="flex space-x-3 justify-center sm:justify-start">
              <a href="#" className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="text-sm text-gray-300 text-center sm:text-left">
              <p className="font-medium">Horário de Funcionamento</p>
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center" data-aos="fade-up" data-aos-delay="500">
          <p className="text-sm text-gray-400 mb-2">
            © 2024 TC Clinic. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-400 flex items-center justify-center flex-wrap">
            Desenvolvido com <Heart className="h-4 w-4 text-pink-400 mx-1" /> para realçar sua beleza natural
          </p>
        </div>
      </div>
    </footer>
  );
}