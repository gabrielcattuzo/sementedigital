import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Zap, BarChart3, Settings, Target } from 'lucide-react';

const GestaoEnergiaPage = () => {
  return (
    <>
      <Helmet>
        <title>Gestão de Energia - Semente Digital</title>
        <meta name="description" content="Aprenda estratégias avançadas de gestão energética para otimizar o consumo e reduzir custos em ambientes de TI." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-br from-yellow-50 to-amber-50">
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
                  Gestão de Energia
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
              >
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
  Estratégias inteligentes para monitorar, controlar e otimizar o consumo energético
</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img alt="Dashboard de monitoramento energético" className="w-full h-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d" />
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-yellow-100 rounded-lg">
                        <BarChart3 className="w-8 h-8 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Monitoramento em Tempo Real</h3>
                        <p className="text-gray-600">Acompanhe o consumo energético instantaneamente e identifique padrões de uso.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-orange-100 rounded-lg">
                        <Settings className="w-8 h-8 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Automação Inteligente</h3>
                        <p className="text-gray-600">Configure políticas automáticas de economia baseadas em horários e demanda.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-amber-100 rounded-lg">
                        <Target className="w-8 h-8 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Metas e Relatórios</h3>
                        <p className="text-gray-600">Estabeleça objetivos de redução e acompanhe o progresso com relatórios detalhados.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>


        {/* Seção explicativa sobre Gestão Energética */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mt-12"
>
  <div className="text-center mb-8">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">
      O que é Gestão Energética?
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      É um processo essencial que envolve o controle e a otimização do uso de recursos energéticos,
      visando não apenas a economia, mas também a sustentabilidade ambiental. Ao implementar práticas
      de gestão eficazes, empresas e residências podem reduzir significativamente os custos de energia
      e minimizar o impacto no meio ambiente. Isso pode incluir a análise de dados de faturamento e o
      uso de tecnologia para medir o consumo em tempo real. Alguns aspectos importantes:
    </p>
  </div>

  <div className="space-y-12 text-gray-700 text-lg max-w-5xl mx-auto">
    {/* Controle de Consumo */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1">
        <h3 className="font-semibold text-gray-800 text-2xl mb-3">Controle de Consumo</h3>
        <p>
          É fundamental monitorar continuamente o consumo energético, identificando padrões e áreas
          onde é possível economizar. Isso pode incluir a análise de dados de faturamento e o uso de
          tecnologia para medir o consumo em tempo real.
        </p>
      </div>
      <div className="order-1 md:order-2">
        <img
          src="https://setfrio.com.br/wp-content/uploads/2019/12/electrical-appliance172.jpg"
          alt="Gráfico de monitoramento de consumo energético"
          className="w-full h-64 object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>

    {/* Eficiência Energética */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <img
          src="https://img.freepik.com/vetores-premium/icone-de-controle-de-consumo-de-energia_946691-2049.jpg"
          alt="Lâmpadas LED representando eficiência energética"
          className="w-full h-64 object-cover rounded-xl shadow-lg"
        />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 text-2xl mb-3">Eficiência Energética</h3>
        <p>
          A eficiência energética se traduz na utilização de tecnologias e práticas que demandam menos
          energia para a realização das mesmas tarefas. Exemplos incluem a troca de lâmpadas incandescentes
          por LEDs e a instalação de equipamentos com maior eficiência energética.
        </p>
      </div>
    </div>

    {/* Fontes Renováveis */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1">
        <h3 className="font-semibold text-gray-800 text-2xl mb-3">Fontes Renováveis</h3>
        <p>
          Incorporar fontes de energia renováveis, como solar ou eólica, é uma estratégia eficaz na gestão
          de energia. Isso não só contribui para a sustentabilidade, mas também pode resultar em economia
          com a conta de luz.
        </p>
      </div>
      <div className="order-1 md:order-2">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.uTgwN3qNPSQExOKftdVu1wHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Painéis solares representando energia renovável"
          className="w-full h-64 object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  </div>
</motion.div>


{/* Galeria de Imagens - Gestão de Energia */}
<section className="py-24 bg-gradient-to-br from-yellow-50 to-amber-100">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        Galeria Visual: Gestão de Energia
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        As imagens abaixo representam os pilares da gestão energética moderna — tecnologia, eficiência e sustentabilidade.
      </p>
    </motion.div>

    {/* Galeria centralizada */}
    <div className="flex flex-col items-center gap-12">
      <motion.img
        src="https://4.bp.blogspot.com/-CTfhlVA3Ez0/UO8F8-48ObI/AAAAAAAAAbM/8Nikb8DZjTU/s1600/infografico-energia.jpg"
        alt="Monitoramento de consumo energético"
        className="w-full max-w-5xl h-[500px] object-cover rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      />
    </div>
  </div>
</section>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default GestaoEnergiaPage;
