import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Aqui você adicionaria a lógica para enviar o formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 py-16" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" data-aos="fade-down">
            Entre em Contato
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-down" data-aos-delay="100">
            Estamos aqui para esclarecer suas dúvidas e agendar sua consulta
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Endereço</h3>
            <p className="text-gray-600">
              Rua das Flores, 123<br />
              Centro, Curitiba - PR<br />
              80010-000
            </p>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Telefone</h3>
            <p className="text-gray-600">
              (41) 3333-4444<br />
              (41) 99999-9999
            </p>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">E-mail</h3>
            <p className="text-gray-600">
              contato@tcclinic.com.br<br />
              agendamento@tcclinic.com.br
            </p>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Horário de Funcionamento
            </h3>
            <p className="text-gray-600">
              Segunda a Sexta, 8h às 18h<br />
              Sábado, 8h às 12h
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16" data-aos="fade-up">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4" data-aos="fade-down">
              Envie sua Mensagem
            </h2>
            <p className="text-gray-600" data-aos="fade-down" data-aos-delay="100">
              Preencha o formulário abaixo e retornaremos o contato em breve
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                  placeholder="Digite seu e-mail"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="servico" className="block text-sm font-medium text-gray-700 mb-2">
                  Serviço de Interesse
                </label>
                <select
                  id="servico"
                  name="servico"
                  value={formData.servico}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="harmonizacao-facial">Harmonização Facial</option>
                  <option value="toxina-botulinica">Toxina Botulínica</option>
                  <option value="preenchimento-labial">Preenchimento Labial</option>
                  <option value="criolipolise">Criolipólise</option>
                  <option value="limpeza-de-pele">Limpeza de Pele</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem *
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors resize-none"
                placeholder="Conte-nos como podemos ajudá-lo..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6" data-aos="fade-down">
            Nossa Localização
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8" data-aos="fade-down" data-aos-delay="100">
            Venha nos conhecer pessoalmente
          </p>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="zoom-in" data-aos-delay="200">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-semibold mb-2">Mapa Interativo</p>
                <p>Rua das Flores, 123 - Centro</p>
                <p>Curitiba - PR, 80010-000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}