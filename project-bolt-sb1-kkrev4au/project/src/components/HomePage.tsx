import React from 'react';
import Hero from './Hero';
import { ArrowRight, Star, Users, Calendar, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

export default function HomePage({ setCurrentPage }: HomePageProps) {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const treatments = [
    {
      name: 'Harmonização Facial',
      description: 'Procedimentos para realçar sua beleza natural',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Facial'
    },
    {
      name: 'Toxina Botulínica',
      description: 'Redução de rugas e linhas de expressão',
      image: 'https://images.pexels.com/photos/3985175/pexels-photo-3985175.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Injetáveis'
    },
    {
      name: 'Criolipólise',
      description: 'Eliminação de gordura localizada',
      image: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Corporal'
    }
  ];

  const beforeAfterImages = [
    {
      before: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      after: 'https://images.pexels.com/photos/5240673/pexels-photo-5240673.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      treatment: 'Harmonização Facial',
    },
    {
      before: 'https://images.pexels.com/photos/3985175/pexels-photo-3985175.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      after: 'https://images.pexels.com/photos/5998464/pexels-photo-5998464.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      treatment: 'Preenchimento Labial',
    },
    {
      before: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      after: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      treatment: 'Criolipólise',
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      treatment: 'Harmonização Facial',
      comment: 'Resultado incrível! Me sinto mais confiante e bonita. A equipe é muito profissional.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Ana Costa',
      treatment: 'Toxina Botulínica',
      comment: 'Excelente atendimento e resultado natural. Recomendo a TC Clinic para todas!',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Paula Santos',
      treatment: 'Criolipólise',
      comment: 'Procedimento confortável e resultados visíveis. Estou muito satisfeita!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      <Hero setCurrentPage={setCurrentPage} />

      {/* Stats Section */}
      <div className="bg-white py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">10+</div>
              <div className="text-gray-600 text-sm md:text-base">Anos de Experiência</div>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">5000+</div>
              <div className="text-gray-600 text-sm md:text-base">Clientes Satisfeitos</div>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm md:text-base">Taxa de Satisfação</div>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="400">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">3</div>
              <div className="text-gray-600 text-sm md:text-base">Unidades</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Treatments */}
      <div className="bg-gray-50 py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-aos="fade-down">
              Nossos Tratamentos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-down" data-aos-delay="100">
              Descubra nossos procedimentos mais procurados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden cursor-pointer"
                onClick={() => setCurrentPage('treatments')}
              >
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-xs font-bold text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                    {treatment.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 mt-3 mb-2">
                    {treatment.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {treatment.description}
                  </p>
                  <button className="flex items-center text-pink-600 font-medium hover:text-pink-700 transition-colors">
                    Saiba mais
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setCurrentPage('treatments')}
              data-aos="fade-up"
              data-aos-delay="400"
              className="inline-flex items-center px-8 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Ver Todos os Tratamentos
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Before and After Gallery */}
      <div className="bg-white py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-aos="fade-down">
              Antes e Depois
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-down" data-aos-delay="100">
              Veja os resultados incríveis de nossos tratamentos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfterImages.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                data-aos="flip-left"
                data-aos-delay={index * 100}
              >
                <div className="relative">
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img
                        src={item.before}
                        alt="Antes"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        ANTES
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src={item.after}
                        alt="Depois"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                        DEPOIS
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800">{item.treatment}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Preview */}
      <div className="bg-gray-50 py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6" data-aos="fade-down">
                Sobre a TC Clinic
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Com mais de 10 anos de experiência, a TC Clinic é referência em
                tratamentos estéticos, combinando tecnologia de ponta com
                profissionais altamente qualificados.
              </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Nossa missão é realçar a beleza natural de cada cliente através
              de procedimentos seguros, eficazes e personalizados.
            </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8" data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-pink-600" />
                  <span className="text-gray-700">Equipe Especializada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-pink-600" />
                  <span className="text-gray-700">Procedimentos Seguros</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6 text-pink-600" />
                  <span className="text-gray-700">Atendimento Personalizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-pink-600" />
                  <span className="text-gray-700">Resultados Comprovados</span>
                </div>
              </div>

              <button
                onClick={() => setCurrentPage('about')}
                data-aos="fade-up"
                data-aos-delay="400"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Conheça Nossa História
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>

            <div className="relative" data-aos="fade-left">
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop"
                alt="Equipe TC Clinic"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-aos="fade-down">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-down" data-aos-delay="100">
              Depoimentos reais de quem confia em nosso trabalho
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto" data-aos="zoom-in" data-aos-delay="200">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].comment}"
                </blockquote>

                <div>
                  <div className="font-semibold text-gray-800">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-pink-600">
                    {testimonials[currentTestimonial].treatment}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-pink-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-aos="fade-down">
            Pronta para se Transformar?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto" data-aos="fade-down" data-aos-delay="100">
            Agende sua avaliação gratuita e descubra o melhor tratamento para você
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            data-aos="zoom-in"
            data-aos-delay="200"
            className="inline-flex items-center px-8 py-3 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Agendar Consulta Gratuita
          </button>
        </div>
      </div>
    </div>
  );
}