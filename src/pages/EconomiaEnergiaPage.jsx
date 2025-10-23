
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Zap, TrendingDown, Lightbulb, Monitor } from 'lucide-react';

const EconomiaEnergiaPage = () => {
  const tips = [
    {
      title: 'Modo de Economia de Energia',
      description: 'Ative o modo de economia em todos os dispositivos',
      icon: Lightbulb,
    },
    {
      title: 'Desligar Equipamentos',
      description: 'Desligue completamente quando não estiver em uso',
      icon: Monitor,
    },
    {
      title: 'Virtualização',
      description: 'Use servidores virtuais para otimizar recursos',
      icon: Zap,
    },
    {
      title: 'Monitoramento',
      description: 'Monitore o consumo energético regularmente',
      icon: TrendingDown,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Economia de Energia - Semente Digital</title>
        <meta name="description" content="Descubra estratégias eficazes para reduzir o consumo de energia em ambientes de TI e contribuir para um futuro sustentável." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
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
                  Economia de Energia
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Reduza custos e impacto ambiental através de práticas inteligentes de gestão energética
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Por que Economizar Energia?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img alt="Data center eficiente" className="w-full h-64 object-cover rounded-xl mb-4" src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee" />
                    <p className="text-gray-700 leading-relaxed">
                      Data centers consomem cerca de 1% da energia elétrica mundial. A implementação de práticas de economia energética pode reduzir custos operacionais em até 40% e diminuir significativamente a pegada de carbono.
                    </p>
                  </div>
                  <div>
                    <img alt="Equipamentos com selo de eficiência energética" className="w-full h-64 object-cover rounded-xl mb-4" src="https://images.unsplash.com/photo-1531763257716-48f51fbaa404" />
                    <p className="text-gray-700 leading-relaxed">
                      Equipamentos certificados com selos de eficiência energética (como Energy Star) consomem até 30% menos energia que modelos convencionais, mantendo o mesmo desempenho.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tips.map((tip, index) => {
                  const Icon = tip.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                      className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg p-8 text-white hover:shadow-xl transition-shadow"
                    >
                      <Icon className="w-12 h-12 mb-4" />
                      <h3 className="text-2xl font-bold mb-3">{tip.title}</h3>
                      <p className="text-yellow-50">{tip.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default EconomiaEnergiaPage;
