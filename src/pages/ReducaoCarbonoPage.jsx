
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Cloud, TrendingDown, Leaf, Target } from 'lucide-react';

const ReducaoCarbonoPage = () => {
  return (
    <>
      <Helmet>
        <title>Redução de Emissão de Carbono - Semente Digital</title>
        <meta name="description" content="Estratégias para reduzir a pegada de carbono em operações de TI e contribuir para o combate às mudanças climáticas." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <div className="inline-block p-4 bg-teal-100 rounded-full mb-6">
                  <Cloud className="w-16 h-16 text-teal-600" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                  Redução de Emissão de Carbono
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Minimize a pegada de carbono das operações tecnológicas
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
                    <img alt="Redução de emissões de carbono" className="w-full h-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1581182394437-2a9876866966" />
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-teal-100 rounded-lg">
                        <TrendingDown className="w-8 h-8 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Medição de Pegada</h3>
                        <p className="text-gray-600">Calcule e monitore as emissões de carbono das operações de TI.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-cyan-100 rounded-lg">
                        <Leaf className="w-8 h-8 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Energia Renovável</h3>
                        <p className="text-gray-600">Migre para fontes de energia limpa e renovável.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-emerald-100 rounded-lg">
                        <Target className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Neutralização de Carbono</h3>
                        <p className="text-gray-600">Compense emissões inevitáveis com projetos ambientais.</p>
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

export default ReducaoCarbonoPage;
