import React, { useState } from 'react';
import { ArrowLeft, Clock, Users, Calendar, CheckCircle, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface Treatment {
  id: string;
  name: string;
  description: string;
  duration: string;
  category: string;
  image: string;
}

interface TreatmentDetailProps {
  treatment: Treatment;
  setCurrentPage: (page: string) => void;
  setSelectedTreatment: (treatment: Treatment | null) => void;
}

export default function TreatmentDetail({ treatment, setCurrentPage, setSelectedTreatment }: TreatmentDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample images for the carousel
  const treatmentImages = [
    treatment.image,
    'https://images.pexels.com/photos/3985175/pexels-photo-3985175.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/5240673/pexels-photo-5240673.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % treatmentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + treatmentImages.length) % treatmentImages.length);
  };

  const handleBackClick = () => {
    setSelectedTreatment(null);
    setCurrentPage('treatments');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-aos="fade-down">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <button
            onClick={() => setCurrentPage('home')}
            className="hover:text-pink-600 transition-colors"
          >
            Início
          </button>
          <span>›</span>
          <button
            onClick={() => setCurrentPage('treatments')}
            className="hover:text-pink-600 transition-colors"
          >
            Produtos
          </button>
          <span>›</span>
          <span className="text-gray-800">{treatment.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          data-aos="fade-right"
          className="flex items-center text-gray-600 hover:text-pink-600 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar aos tratamentos
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Carousel */}
          <div className="space-y-4" data-aos="fade-right">
            <div className="relative">
              <img
                src={treatmentImages[currentImageIndex]}
                alt={treatment.name}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {treatmentImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative overflow-hidden rounded-lg ${
                    index === currentImageIndex ? 'ring-2 ring-pink-500' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${treatment.name} ${index + 1}`}
                    className="w-full h-20 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Treatment Details */}
          <div className="space-y-6">
            <div className="inline-block" data-aos="fade-left">
              <span className="bg-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                {treatment.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800" data-aos="fade-left" data-aos-delay="100">
              {treatment.name}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed" data-aos="fade-left" data-aos-delay="200">
              {treatment.description}
            </p>

            {/* Treatment Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6" data-aos="fade-left" data-aos-delay="300">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-pink-500" />
                <div>
                  <span className="text-sm text-gray-500 block">Duração:</span>
                  <span className="font-medium">{treatment.duration}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-pink-500" />
                <div>
                  <span className="text-sm text-gray-500 block">Sessões:</span>
                  <span className="font-medium">1 sessão</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-pink-500" />
                <div>
                  <span className="text-sm text-gray-500 block">Resultados:</span>
                  <span className="font-medium">4-6 meses</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4" data-aos="fade-left" data-aos-delay="400">
                Descrição Completa
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6" data-aos="fade-left" data-aos-delay="500">
                A aplicação de {treatment.name.toLowerCase()} é um tratamento eficaz para reduzir
                rugas dinâmicas e prevenir o envelhecimento precoce. O procedimento
                relaxa os músculos responsáveis pelas linhas de expressão,
                proporcionando uma aparência mais jovem e descansada.
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4" data-aos="fade-left" data-aos-delay="600">
                Benefícios
              </h3>
              <ul className="space-y-3" data-aos="fade-left" data-aos-delay="700">
                {[
                  'Redução de rugas dinâmicas',
                  'Prevenção do envelhecimento',
                  'Aparência mais descansada',
                  'Procedimento rápido',
                  'Mínimo tempo de recuperação'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-pink-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={() => setCurrentPage('contact')}
                data-aos="fade-up"
                data-aos-delay="800"
                className="flex items-center justify-center px-6 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Consulta
              </button>
              <button 
                data-aos="fade-up"
                data-aos-delay="900"
                className="flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Related Treatments */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center" data-aos="fade-down">
            Outros Tratamentos
          </h2>
          <p className="text-gray-600 text-center mb-8" data-aos="fade-down" data-aos-delay="100">
            Conheça outros serviços que podem interessar
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Harmonização Facial',
                image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
                category: 'INJETÁVEIS'
              },
              {
                name: 'Preenchimento Labial',
                image: 'https://images.pexels.com/photos/5240673/pexels-photo-5240673.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
                category: 'INJETÁVEIS'
              },
              {
                name: 'Criolipólise',
                image: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
                category: 'CORPORAL'
              }
            ].map((relatedTreatment, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden cursor-pointer"
              >
                <img
                  src={relatedTreatment.image}
                  alt={relatedTreatment.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-xs font-bold text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                    {relatedTreatment.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800 mt-3 mb-2">
                    {relatedTreatment.name}
                  </h3>
                  <button className="text-pink-600 font-medium hover:text-pink-700 transition-colors">
                    Saiba mais →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}