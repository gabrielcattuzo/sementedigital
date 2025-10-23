
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Leaf, Zap, Recycle, Cloud, Battery, TreePine, Droplets } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  const pillars = [
    // Left column
    {
      id: 1,
      title: 'Gestão de Energia',
      icon: Zap,
      path: '/gestao-energia',
      color: 'from-yellow-400 to-orange-500',
      position: { top: '15%', left: '5%' }
    },
    {
      id: 2,
      title: 'Lixo Eletrônico',
      icon: Recycle,
      path: '/lixo-eletronico',
      color: 'from-blue-400 to-cyan-600',
      position: { top: '35%', left: '5%' }
    },
    {
      id: 3,
      title: 'Redução de Carbono',
      icon: Cloud,
      path: '/reducao-carbono',
      color: 'from-teal-400 to-cyan-600',
      position: { top: '55%', left: '5%' }
    },
    {
      id: 8,
      title: 'Gasto de Água',
      icon: Droplets,
      path: '/reducao-agua',
      color: 'from-sky-400 to-blue-500',
      position: { top: '75%', left: '5%' }
    },
    // Right column
    {
      id: 4,
      title: 'Green IT Empresas',
      icon: TreePine,
      path: '/green-it-empresas',
      color: 'from-green-400 to-emerald-600',
      position: { top: '15%', right: '5%' }
    },
    {
      id: 5,
      title: 'Materiais Sustentáveis',
      icon: Leaf,
      path: '/materiais-sustentaveis',
      color: 'from-fuchsia-500 to-purple-700',
      position: { top: '35%', right: '5%' }
    },
    {
      id: 6,
      title: 'Vida Útil',
      icon: Battery,
      path: '/vida-util',
      color: 'from-purple-400 to-pink-600',
      position: { top: '55%', right: '5%' }
    },
    {
      id: 7,
      title: 'Computação em Nuvem',
      icon: Cloud,
      path: '/computacao-nuvem',
      color: 'from-indigo-400 to-blue-600',
      position: { top: '75%', right: '5%' }
    }
  ];

  return (
    <>
      <Helmet>
        <title>Semente Digital - Green IT e Tecnologia Sustentável</title>
        <meta name="description" content="Descubra práticas de Green IT e tecnologia sustentável. Aprenda sobre lixo eletrônico, economia de energia e sustentabilidade em TI." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h1 className="text-5xl md:text-6xl font-bold text-emerald-800 mb-6">
                  Bem-vindo à <span className="text-emerald-600">Semente Digital</span>
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Explore os pilares do Green IT e descubra como a tecnologia pode ser sustentável e responsável
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative max-w-6xl mx-auto"
              >
                <div className="relative bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl shadow-2xl p-8 md:p-16 min-h-[950px]">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyZDZhNGYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4UzAgOC4wNiAwIDE4czguMDYgMTggMTggMTggMTgtOC4wNiAxOC0xOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

                  <div className="relative text-center mb-12">
                    <h2 className="text-4xl font-bold text-emerald-800 mb-4">
                      Os Pilares do Green IT
                    </h2>
                    <p className="text-gray-700">Clique em cada pilar para explorar</p>
                  </div>

                  {pillars.map((pillar, index) => {
                    const Icon = pillar.icon;
                    return (
                      <motion.button
                        key={pillar.id}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.08, duration: 0.5 }}
                        whileHover={{ scale: 1.1, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate(pillar.path)}
                        className="absolute group"
                        style={pillar.position}
                      >
                        <div className={`relative bg-gradient-to-br ${pillar.color} rounded-2xl shadow-lg p-4 w-44 h-28 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:shadow-2xl`}>
                           <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <Icon className="w-8 h-8 text-white relative z-10" />
                          <span className="text-white font-semibold text-center text-sm relative z-10">
                            {pillar.title}
                          </span>
                        </div>
                      </motion.button>
                    );
                  })}

                  <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-48 h-48 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-xl"
                    >
                      <Leaf className="w-24 h-24 text-white" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center mt-16"
              >
                <h3 className="text-2xl font-bold text-emerald-800 mb-4">
                  O que é Green IT?
                </h3>
                <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Green IT (Tecnologia da Informação Verde) refere-se ao estudo e prática de projetar, fabricar, usar e descartar computadores, servidores e sistemas associados de forma eficiente e ecologicamente responsável. O objetivo é minimizar o impacto ambiental da tecnologia através da redução do consumo de energia, uso de materiais sustentáveis e gestão adequada de resíduos eletrônicos.
                </p>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
