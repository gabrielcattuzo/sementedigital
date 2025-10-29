
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, TrendingUp, Award, Users, DollarSign } from 'lucide-react';

const GreenITEmpresasPage = () => {
  const stats = [
    { value: '40%', label: 'Redução potencial em custos de energia com data centers verdes', source: 'Gartner', icon: DollarSign },
    { value: '70%', label: 'Dos consumidores preferem marcas sustentáveis', source: 'Capgemini Research Institute', icon: Users },
    { value: '5-20%', label: 'Aumento na receita pode vir de fortes credenciais de sustentabilidade', source: 'McKinsey', icon: TrendingUp },
  ];

  return (
    <>
      <Helmet>
        <title>Green IT para Empresas - Semente Digital</title>
        <meta name="description" content="Descubra como implementar práticas de Green IT em ambientes corporativos e obter benefícios ambientais e econômicos." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <div className="inline-block p-4 bg-emerald-100 rounded-full mb-6">
                  <Building2 className="w-16 h-16 text-emerald-600" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                  Green IT para Empresas
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Transforme sua organização com práticas sustentáveis que geram valor
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2, duration: 0.6 }} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow flex flex-col">
                      <Icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                      <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.value}</div>
                      <div className="text-gray-700 font-semibold mb-2">{stat.label}</div>
                      <div className="text-xs text-gray-500 mt-auto">Fonte: {stat.source}</div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Benefícios Estratégicos do Green IT</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img alt="Escritório sustentável com tecnologia verde" className="w-full h-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1643267514395-b36b3f7e8281" />
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-emerald-100 rounded-lg">
                        <TrendingUp className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Vantagem Competitiva</h3>
                        <p className="text-gray-600">Diferencie sua marca no mercado e atraia talentos e clientes conscientes.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <Award className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Melhora da Reputação</h3>
                        <p className="text-gray-600">Construa uma imagem corporativa positiva e alinhada com valores modernos.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-teal-100 rounded-lg">
                        <Users className="w-8 h-8 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Engajamento de Equipe</h3>
                        <p className="text-gray-600">Motive colaboradores com uma cultura sustentável e responsável.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GreenITEmpresasPage;
