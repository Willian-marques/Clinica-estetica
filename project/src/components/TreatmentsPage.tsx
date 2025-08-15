import React, { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';

interface Treatment {
  id: string;
  name: string;
  description: string;
  duration: string;
  category: string;
  image: string;
}

interface TreatmentsPageProps {
  setCurrentPage: (page: string) => void;
  setSelectedTreatment: (treatment: Treatment) => void;
}

const treatments: Treatment[] = [
  {
    id: 'harmonizacao-facial',
    name: 'Harmonização Facial',
    description: 'Realce sua beleza natural com procedimentos minimamente invasivos para harmonizar os traços faciais.',
    duration: '90-60 minutos',
    category: 'INJETÁVEIS',
    image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  },
  {
    id: 'preenchimento-labial',
    name: 'Preenchimento Labial',
    description: 'Lábios mais definidos e volumosos com ácido hialurônico de alta qualidade.',
    duration: '30-45 minutos',
    category: 'INJETÁVEIS',
    image: 'https://images.pexels.com/photos/5240673/pexels-photo-5240673.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  },
  {
    id: 'toxina-botulinica',
    name: 'Toxina Botulínica',
    description: 'Redução de rugas de expressão e prevenção do envelhecimento facial.',
    duration: '25-30 minutos',
    category: 'INJETÁVEIS',
    image: 'https://images.pexels.com/photos/3985175/pexels-photo-3985175.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  },
  {
    id: 'criolipolise',
    name: 'Criolipólise',
    description: 'Eliminação de gordura localizada através do congelamento controlado das células adiposas.',
    duration: '60 minutos',
    category: 'CORPORAL',
    image: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  },
  {
    id: 'drenagem-linfatica',
    name: 'Drenagem Linfática',
    description: 'Massagem terapêutica para redução de inchaço e melhora da circulação.',
    duration: '50 minutos',
    category: 'CORPORAL',
    image: 'https://images.pexels.com/photos/3985175/pexels-photo-3985175.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  },
  {
    id: 'limpeza-de-pele',
    name: 'Limpeza de Pele',
    description: 'Limpeza profunda e tratamento personalizado para todos os tipos de pele.',
    duration: '60-90 minutos',
    category: 'FACIAL',
    image: 'https://images.pexels.com/photos/3985175/pexels-photo-3985175.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
  }
];

export default function TreatmentsPage({ setCurrentPage, setSelectedTreatment }: TreatmentsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  
  const categories = ['Todas', 'Facial', 'Corporal', 'Injetáveis'];
  
  const filteredTreatments = selectedCategory === 'Todas' 
    ? treatments 
    : treatments.filter(treatment => 
        treatment.category.toLowerCase() === selectedCategory.toLowerCase()
      );

  const handleTreatmentClick = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
    setCurrentPage('treatment-detail');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nossos Produtos e Serviços
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra nossos tratamentos estéticos avançados
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-pink-300 hover:text-pink-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden cursor-pointer"
              onClick={() => handleTreatmentClick(treatment)}
            >
              <div className="relative">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {treatment.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {treatment.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {treatment.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{treatment.duration}</span>
                  </div>
                  
                  <button className="flex items-center text-pink-600 font-medium hover:text-pink-700 transition-colors">
                    Saiba mais
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}