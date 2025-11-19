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
                className="text-center mt-16 bg-blue-200 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-white-800 mb-4">
                  Por Que Isso Importa?
                </h3>
                <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Em um mundo onde a escassez de água é uma realidade crescente, a indústria de tecnologia tem a responsabilidade de inovar e operar de forma sustentável. Reduzir a pegada hídrica não é apenas bom para o planeta, mas também para a resiliência e a viabilidade dos negócios a longo prazo.
                </p>
              </motion.div>

       {/* Seção explicativa sobre Redução do Gasto de Água */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
  className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mt-20"
>
  {/* Título e introdução */}
  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold text-emerald-800 mb-4">
      O que é a Redução do Gasto de Água?
    </h2>
    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
      A redução do consumo de água no setor de tecnologia é essencial para minimizar o impacto ambiental,
      especialmente em data centers, onde grandes volumes de água são utilizados para resfriamento.
      Estratégias modernas buscam eficiência hídrica, reaproveitamento e novas tecnologias que diminuem
      drasticamente a dependência de água potável.
    </p>
  </div>

  <div className="space-y-16 text-gray-700 text-lg max-w-5xl mx-auto">
    {/* Uso de Água em Data Centers */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="order-2 md:order-1">
        <h3 className="font-semibold text-2xl text-emerald-800 mb-3">
          Uso de Água em Data Centers
        </h3>
        <p>
          Data centers convencionais consomem grandes quantidades de água para processos de resfriamento.
          Valores comuns chegam a 1,8 litros de água por kWh consumido, tornando a gestão hídrica uma
          preocupação crescente na indústria tecnológica.
        </p>
      </div>
      <div className="order-1 md:order-2">
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.Hq7AC1Ed-8480dGpDJjLJgHaD4?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Data center e uso intensivo de água"
          className="w-full h-64 object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>

    {/* Tecnologias de Resfriamento Eficientes */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.W72mPDDqyVOkU3ixKmApIQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Tecnologias de resfriamento avançado sem água"
          className="w-full h-64 object-cover rounded-xl shadow-lg"
        />
      </div>
      <div>
        <h3 className="font-semibold text-2xl text-emerald-800 mb-3">
          Tecnologias de Resfriamento Eficientes
        </h3>
        <p>
          Soluções como resfriamento a ar, resfriamento líquido direto e sistemas fechados podem reduzir
          o consumo de água em até 95%. Essas tecnologias diminuem drasticamente a dependência de água
          potável e aumentam a eficiência térmica.
        </p>
      </div>
    </div>

    {/* Sustentabilidade e Reaproveitamento */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="order-2 md:order-1">
        <h3 className="font-semibold text-2xl text-emerald-800 mb-3">
          Sustentabilidade e Reaproveitamento
        </h3>
        <p>
          Muitas empresas têm adotado sistemas que utilizam água reciclada, reuso de águas cinzas e até
          captação de água da chuva em seus processos. Essas estratégias reduzem custos, aumentam a
          sustentabilidade e diminuem a pressão sobre recursos hídricos.
        </p>
      </div>
      <div className="order-1 md:order-2">
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.BhcCPhzZFs7Ez2ka1_TklgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Sistemas de reuso de água"
          className="w-full h-64 object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  </div>
</motion.div>

{/* Galeria de Imagens - Gestão de Energia */}
            <section className="py-24 bg-gradient-to-br from-blue-200">
              <div className="container mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    Galeria Visual: Gasto de água
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Os gráficos abaixo informam a distribuição e uso da água em território brasileiro.
                  </p>
                </motion.div>
            
                {/* Galeria centralizada */}
                <div className="flex flex-col items-center gap-12">
                  <motion.img
                    src="https://cdnb.artstation.com/p/assets/images/images/007/009/249/large/lucas-goulart-agua-rgb.jpg?1502985103"
                    alt="Gasto de água"
                    className="w-full max-w-5xl h-[500px] object-cover rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </section>
            </div>
          </motion.section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ReducaoAguaPage;
