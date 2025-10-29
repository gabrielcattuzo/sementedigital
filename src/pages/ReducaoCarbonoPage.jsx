
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Cloud, TrendingDown, Leaf, Target } from 'lucide-react';

const ReducaoCarbonoPage = () => {
  const stats = [
    { value: '3.7%', label: 'Das emissões globais de gases de efeito estufa vêm da indústria de TI', source: 'The Shift Project', icon: Cloud },
    { value: '50%', label: 'Redução de emissões ao migrar para a nuvem', source: 'Accenture', icon: TrendingDown },
    { value: '2050', label: 'Meta de neutralidade de carbono para muitas gigantes da tecnologia', source: 'Várias fontes', icon: Target },
  ];

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
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
                <div className="inline-block p-4 bg-teal-100 rounded-full mb-6">
                  <Cloud className="w-16 h-16 text-teal-600" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-6">Redução de Emissão de Carbono</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Minimize a pegada de carbono das operações tecnológicas.</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2, duration: 0.6 }} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow flex flex-col">
                      <Icon className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                      <div className="text-4xl font-bold text-teal-600 mb-2">{stat.value}</div>
                      <div className="text-gray-700 font-semibold mb-2">{stat.label}</div>
                      <div className="text-xs text-gray-500 mt-auto">Fonte: {stat.source}</div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Como Reduzir a Pegada de Carbono?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2"><Leaf className="text-emerald-500"/>Energias Renováveis</h3>
                    <p className="text-gray-600">Alimentar data centers e escritórios com energia solar, eólica ou outras fontes limpas é o passo mais impactante para descarbonizar a TI.</p>
                  </div>
                   <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2"><TrendingDown className="text-cyan-500"/>Otimização de Código</h3>
                    <p className="text-gray-600">Softwares mais eficientes exigem menos poder de processamento, o que se traduz diretamente em menor consumo de energia e, consequentemente, menores emissões de carbono.</p>
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
