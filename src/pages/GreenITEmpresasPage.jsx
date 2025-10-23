
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, TrendingUp, Award, Users } from 'lucide-react';

const GreenITEmpresasPage = () => {
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
                  Transforme sua organização com práticas sustentáveis de tecnologia
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
                    <img alt="Escritório sustentável com tecnologia verde" className="w-full h-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1643267514395-b36b3f7e8281" />
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-emerald-100 rounded-lg">
                        <TrendingUp className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Redução de Custos</h3>
                        <p className="text-gray-600">Economize até 40% em custos operacionais com práticas eficientes.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <Award className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Certificações Verdes</h3>
                        <p className="text-gray-600">Obtenha reconhecimento com certificações ambientais internacionais.</p>
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
