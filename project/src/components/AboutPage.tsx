import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Award, Shield, Users } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Dra. Thaís Costa',
    specialty: 'Dermatologia',
    description: 'Especializada em harmonização facial com mais de 10 anos de experiência.',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    credentials: ['CRM: 12345-PR', 'Dermatologia']
  },
  {
    id: 2,
    name: 'Dra. Carolina Silva',
    specialty: 'Medicina Estética',
    description: 'Especialista em tratamentos injetáveis e rejuvenescimento.',
    image: 'https://images.pexels.com/photos/5998464/pexels-photo-5998464.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    credentials: ['CRM: 67890-SP', 'Medicina Estética']
  },
  {
    id: 3,
    name: 'Dr. Ricardo Santos',
    specialty: 'Cirurgia Plástica',
    description: 'Especializado em procedimentos corporais minimamente invasivos.',
    image: 'https://images.pexels.com/photos/6627322/pexels-photo-6627322.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    credentials: ['CRM: 54321-RS', 'Cirurgia Plástica']
  }
];

export default function AboutPage() {
  const [currentMember, setCurrentMember] = useState(0);

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sobre a TC Clinic
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça nossa história e descubra valores
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Nossa História */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa História</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              A TC Clinic nasceu do sonho de oferecer tratamentos estéticos de
              alta qualidade, aliando ciência e modernos tratamentos estéticos da
              pele para todas as fases da vida.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Com anos de experiência no mercado, investimos constantemente em
              tecnologia de ponta e capacitação profissional para garantir os
              melhores resultados aos nossos pacientes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nossa missão é realçar a beleza natural de cada cliente através de
              procedimentos seguros e eficazes.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Equipe TC Clinic"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Nossos Valores */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Nossos Valores
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Os princípios que norteiam nosso trabalho
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Atendimento Humanizado
              </h3>
              <p className="text-gray-600">
                Cada cliente é tratado com carinho e respeito em nossas instalações.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Excelência
              </h3>
              <p className="text-gray-600">
                Buscamos sempre a excelência em nossos procedimentos e atendimento.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Segurança
              </h3>
              <p className="text-gray-600">
                Todos os procedimentos são realizados com total segurança e protocolos de segurança.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Inovação
              </h3>
              <p className="text-gray-600">
                Investimos em tecnologia avançada e métodos inovadores de tratamento.
              </p>
            </div>
          </div>
        </div>

        {/* Nossa Equipe */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Nossa Equipe
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Profissionais qualificados e dedicados ao seu bem-estar
          </p>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-80 lg:h-auto">
                  <img
                    src={teamMembers[currentMember].image}
                    alt={teamMembers[currentMember].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {teamMembers[currentMember].name}
                  </h3>
                  <p className="text-pink-600 font-semibold mb-4">
                    {teamMembers[currentMember].specialty}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {teamMembers[currentMember].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {teamMembers[currentMember].credentials.map((credential, index) => (
                      <span
                        key={index}
                        className="bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full"
                      >
                        {credential}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                  onClick={prevMember}
                  className="bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-700" />
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                  onClick={nextMember}
                  className="bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="h-6 w-6 text-gray-700" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMember(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentMember ? 'bg-pink-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Nossos Diferenciais */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Nossos Diferenciais
          </h2>

          <div className="space-y-8">
            {[
              {
                number: '01',
                title: 'Atendimento Personalizado',
                description: 'Avaliação completa e tratamentos personalizados para cada necessidade.'
              },
              {
                number: '02',
                title: 'Equipamentos Modernos',
                description: 'Tecnologia de ponta para garantir os melhores resultados com segurança.'
              },
              {
                number: '03',
                title: 'Ambiente Acolhedor',
                description: 'Espaço moderno e confortável para seu total tranquilidade.'
              },
              {
                number: '04',
                title: 'Acompanhamento Completo',
                description: 'Suporte em todas as etapas do tratamento para garantir sua satisfação.'
              }
            ].map((differential, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  {differential.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {differential.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {differential.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}