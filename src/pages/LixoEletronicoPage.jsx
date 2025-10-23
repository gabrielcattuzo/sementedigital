
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Recycle, AlertTriangle, TrendingUp, CheckCircle } from 'lucide-react';

const LixoEletronicoPage = () => {
  const stats = [
    { value: '53.6M', label: 'Toneladas de e-lixo em 2019', icon: TrendingUp },
    { value: '17.4%', label: 'Taxa de reciclagem global', icon: Recycle },
    { value: '2-5 anos', label: 'Vida útil média de dispositivos', icon: AlertTriangle },
  ];

  const tips = [
    'Doe equipamentos funcionais para instituições',
    'Procure pontos de coleta certificados',
    'Remova dados pessoais antes do descarte',
    'Prefira reparos ao invés de substituição',
    'Compre de fabricantes com programas de reciclagem',
  ];

  return (
    <>
      <Helmet>
        <title>Lixo Eletrônico - Semente Digital</title>
        <meta name="description" content="Entenda o impacto do lixo eletrônico e aprenda práticas corretas de descarte e reciclagem de equipamentos tecnológicos." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                  <Recycle className="w-16 h-16 text-blue-600" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                  Lixo Eletrônico
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  O descarte inadequado de equipamentos eletrônicos representa um dos maiores desafios ambientais da era digital
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                    >
                      <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">O Problema do E-Lixo</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img alt="Pilha de lixo eletrônico" className="w-full h-64 object-cover rounded-xl mb-4" src="https://images.unsplash.com/photo-1656065057773-27799ec2c265" />
                    <p className="text-gray-700 leading-relaxed">
                      O lixo eletrônico (e-lixo) inclui todos os dispositivos eletrônicos descartados, como computadores, smartphones, tablets e periféricos. Esses equipamentos contêm materiais tóxicos como chumbo, mercúrio e cádmio que podem contaminar o solo e a água.
                    </p>
                  </div>
                  <div>
                    <img alt="Reciclagem de componentes eletrônicos" className="w-full h-64 object-cover rounded-xl mb-4" src="https://images.unsplash.com/photo-1656065057773-27799ec2c265" />
                    <p className="text-gray-700 leading-relaxed">
                      A reciclagem adequada permite recuperar materiais valiosos como ouro, prata e cobre, além de evitar a contaminação ambiental. Apenas 17% do e-lixo global é reciclado corretamente, destacando a necessidade urgente de conscientização.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 md:p-12 text-white"
              >
                <h2 className="text-3xl font-bold mb-6">Boas Práticas de Descarte</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tips.map((tip, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                      <span className="text-lg">{tip}</span>
                    </motion.div>
                  ))}
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

export default LixoEletronicoPage;
