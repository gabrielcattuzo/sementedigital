
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Battery, Clock, Wrench, RefreshCw } from 'lucide-react';

const VidaUtilPage = () => {
  return (
    <>
      <Helmet>
        <title>Vida Útil de Equipamentos - Semente Digital</title>
        <meta name="description" content="Aprenda a prolongar a vida útil de equipamentos tecnológicos através de manutenção adequada e uso consciente." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <div className="inline-block p-4 bg-purple-100 rounded-full mb-6">
                  <Battery className="w-16 h-16 text-purple-600" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                  Vida Útil de Equipamentos
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Maximize a durabilidade dos seus dispositivos com cuidados adequados
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
                    <img alt="Manutenção de equipamentos tecnológicos" className="w-full h-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1654593114209-d915f46be333" />
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <Clock className="w-8 h-8 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Manutenção Preventiva</h3>
                        <p className="text-gray-600">Realize limpezas e verificações regulares para evitar problemas.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-pink-100 rounded-lg">
                        <Wrench className="w-8 h-8 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Reparos ao Invés de Substituição</h3>
                        <p className="text-gray-600">Priorize consertos antes de descartar equipamentos funcionais.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-fuchsia-100 rounded-lg">
                        <RefreshCw className="w-8 h-8 text-fuchsia-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Atualizações de Software</h3>
                        <p className="text-gray-600">Mantenha sistemas atualizados para melhor desempenho e segurança.</p>
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

export default VidaUtilPage;
