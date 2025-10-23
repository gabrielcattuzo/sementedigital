
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Zap, BarChart3, Settings, Target } from 'lucide-react';

const GestaoEnergiaPage = () => {
  return (
    <>
      <Helmet>
        <title>Gestão de Energia - Semente Digital</title>
        <meta name="description" content="Aprenda estratégias avançadas de gestão energética para otimizar o consumo e reduzir custos em ambientes de TI." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-br from-yellow-50 to-amber-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <div className="inline-block p-4 bg-yellow-100 rounded-full mb-6">
                  <Zap className="w-16 h-16 text-yellow-600" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                  Gestão de Energia
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Estratégias inteligentes para monitorar, controlar e otimizar o consumo energético
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img alt="Dashboard de monitoramento energético" className="w-full h-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d" />
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-yellow-100 rounded-lg">
                        <BarChart3 className="w-8 h-8 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Monitoramento em Tempo Real</h3>
                        <p className="text-gray-600">Acompanhe o consumo energético instantaneamente e identifique padrões de uso.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-orange-100 rounded-lg">
                        <Settings className="w-8 h-8 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Automação Inteligente</h3>
                        <p className="text-gray-600">Configure políticas automáticas de economia baseadas em horários e demanda.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-amber-100 rounded-lg">
                        <Target className="w-8 h-8 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Metas e Relatórios</h3>
                        <p className="text-gray-600">Estabeleça objetivos de redução e acompanhe o progresso com relatórios detalhados.</p>
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

export default GestaoEnergiaPage;
