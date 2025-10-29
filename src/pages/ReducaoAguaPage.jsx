
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Droplets, Server, Wind } from 'lucide-react';

const ReducaoAguaPage = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Redução de Gasto de Água em TI - Semente Digital</title>
        <meta name="description" content="Aprenda como a indústria de TI está trabalhando para reduzir o consumo de água, especialmente em data centers." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="py-20 bg-gradient-to-br from-sky-50 to-blue-50"
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block bg-gradient-to-r from-sky-400 to-blue-500 p-4 rounded-full mb-4"
                >
                  <Droplets className="w-12 h-12 text-white" />
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-bold text-emerald-800 mb-4">
                  Redução do Gasto de Água
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  A pegada hídrica da tecnologia: um desafio invisível, mas crucial.
                </p>
              </div>

              <motion.div
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <motion.div variants={cardVariants} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center">
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">1,8L</h3>
                  <p className="font-semibold text-gray-700 mb-2">de água por kWh consumido em data centers tradicionais.</p>
                  <p className="text-xs text-gray-500">Fonte: U.S. Department of Energy</p>
                </motion.div>
                
                <motion.div variants={cardVariants} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center">
                   <h3 className="text-4xl font-bold text-blue-600 mb-2">95%</h3>
                  <p className="font-semibold text-gray-700 mb-2">de redução no uso de água com resfriamento líquido direto.</p>
                  <p className="text-xs text-gray-500">Fonte: Green Grid</p>
                </motion.div>

                <motion.div variants={cardVariants} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center md:col-span-2 lg:col-span-1">
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">20%</h3>
                  <p className="font-semibold text-gray-700 mb-2">dos data centers do mundo estarão em áreas de estresse hídrico até 2025.</p>
                  <p className="text-xs text-gray-500">Fonte: Uptime Institute</p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center mt-16 bg-emerald-100 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-emerald-800 mb-4">
                  Por Que Isso Importa?
                </h3>
                <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Em um mundo onde a escassez de água é uma realidade crescente, a indústria de tecnologia tem a responsabilidade de inovar e operar de forma sustentável. Reduzir a pegada hídrica não é apenas bom para o planeta, mas também para a resiliência e a viabilidade dos negócios a longo prazo.
                </p>
              </motion.div>
            </div>
          </motion.section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ReducaoAguaPage;
