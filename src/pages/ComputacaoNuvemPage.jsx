
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Cloud, Server, Zap, Shield } from 'lucide-react';

const ComputacaoNuvemPage = () => {
  return (
    <>
      <Helmet>
        <title>Computação em Nuvem - Semente Digital</title>
        <meta name="description" content="Descubra como a computação em nuvem contribui para práticas sustentáveis e eficiência energética." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                  <Cloud className="w-16 h-16 text-blue-600" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                  Computação em Nuvem
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Infraestrutura compartilhada para maior eficiência e menor impacto ambiental
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
                    <img alt="Infraestrutura de nuvem sustentável" className="w-full h-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1506676692178-f3bd560df2e5" />
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Server className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Otimização de Recursos</h3>
                        <p className="text-gray-600">Compartilhamento eficiente de infraestrutura reduz desperdício.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <Zap className="w-8 h-8 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Eficiência Energética</h3>
                        <p className="text-gray-600">Data centers otimizados consomem menos energia por usuário.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-cyan-100 rounded-lg">
                        <Shield className="w-8 h-8 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Escalabilidade Sustentável</h3>
                        <p className="text-gray-600">Ajuste recursos conforme demanda sem desperdício.</p>
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

export default ComputacaoNuvemPage;
