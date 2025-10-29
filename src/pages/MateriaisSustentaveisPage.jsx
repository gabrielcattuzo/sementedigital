
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Leaf, Package, Recycle, CheckCircle, Percent } from 'lucide-react';

const MateriaisSustentaveisPage = () => {
  const stats = [
    { value: '100%', label: 'De TPE (elastômero termoplástico) reciclado em novos produtos da Apple', source: 'Apple', icon: Recycle },
    { value: '98%', label: 'Redução do impacto climático usando alumínio reciclado', source: 'The International Aluminium Institute', icon: Percent },
    { value: '30%', label: 'De plástico reciclado usado em novos consoles PlayStation 5', source: 'Sony', icon: Leaf },
  ];

  return (
    <>
      <Helmet>
        <title>Materiais Sustentáveis - Semente Digital</title>
        <meta name="description" content="Conheça materiais ecológicos e práticas sustentáveis na fabricação de equipamentos tecnológicos." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-br from-green-50 to-lime-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
                  <Package className="w-16 h-16 text-green-600" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                  Materiais Sustentáveis
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  A escolha de materiais ecológicos é fundamental para reduzir o impacto ambiental da tecnologia
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2, duration: 0.6 }} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow flex flex-col">
                      <Icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img alt="Materiais recicláveis em tecnologia" className="w-full h-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1684326205170-ef868ae1f70f" />
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <Leaf className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Plásticos de base biológica</h3>
                        <p className="text-gray-600">Desenvolvimento de plásticos a partir de fontes renováveis como milho e cana-de-açúcar.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-emerald-100 rounded-lg">
                        <Recycle className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Metais Reciclados</h3>
                        <p className="text-gray-600">Uso de alumínio, cobre e outros metais reciclados na fabricação de chassis e componentes.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-lime-100 rounded-lg">
                        <CheckCircle className="w-8 h-8 text-lime-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Design para Desmontagem</h3>
                        <p className="text-gray-600">Projetar produtos que são fáceis de desmontar, facilitando o reparo e a reciclagem de componentes.</p>
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

export default MateriaisSustentaveisPage;
