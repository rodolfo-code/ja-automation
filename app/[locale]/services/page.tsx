import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Serviços | JA Automation",
  description: "Soluções completas em automação industrial: programação de PLC, projetos elétricos, consultoria e mais.",
  openGraph: {
    title: "Serviços | JA Automation",
    description: "Soluções completas em automação industrial: programação de PLC, projetos elétricos, consultoria e mais.",
    url: "https://ja-automation.com/services",
  },
};

export default function ServicesPage() {
  
  const services = [
    {
      id: "plc-ihm",
      title: "Programação de PLC e IHM",
      description: "Especialistas em programação de controladores lógicos programáveis e interfaces homem-máquina",
      icon: "⚙️",
      features: [
        "Siemens S5, S7 e TIA Portal",
        "Rockwell: PLC-5, SLC-5000, Micrologix, Compact Logix e Logix",
        "Mitsubishi",
        "Omron",
        "Panasonic",
        "Unitronics"
      ]
    },
    {
      id: "vfd",
      title: "Programação de Drivers e Inversores",
      description: "Configuração e programação de inversores de frequência para controle de motores",
      icon: "🔄",
      features: [
        "Emerson",
        "Siemens",
        "Rockwell",
        "Mitsubishi",
        "Sew",
        "Danfoss"
      ]
    },
    {
      id: "projetos-eletricos",
      title: "Projeto Elétrico",
      description: "Projeto elétrico (Em Eplan e Cad) de máquinas e equipamentos",
      icon: "⚡",
      features: [
        "Projetos completos para máquinas e equipamentos",
        "Documentação técnica detalhada",
        "Conformidade com normas técnicas",
        "Otimização de custos e eficiência"
      ]
    },
    {
      id: "montagem-paineis",
      title: "Montagem de Painéis",
      description: "Montagem e instalação de painéis elétricos industriais",
      icon: "🔧",
      features: [
        "Painéis de comando e controle",
        "Painéis de distribuição",
        "Instalação e comissionamento",
        "Testes e certificação"
      ]
    },
    {
      id: "nr12",
      title: "Adequação de Máquinas a Norma NR-12",
      description: "Adequação de máquinas e equipamentos às normas de segurança do trabalho",
      icon: "🛡️",
      features: [
        "Análise de riscos",
        "Implementação de dispositivos de segurança",
        "Documentação técnica",
        "Treinamento de operadores"
      ]
    },
    {
      id: "suporte-tecnico",
      title: "Suporte Técnico",
      description: "Suporte técnico para manutenção de PLC (\"on demand\" ou contrato) e especificação de máquinas e equipamentos",
      icon: "🆘",
      features: [
        "Atendimento remoto e presencial",
        "Diagnóstico e solução de problemas",
        "Manutenção preventiva e corretiva",
        "Help Desk especializado"
      ]
    },
    {
      id: "consultoria",
      title: "Consultoria em Engenharia e Projetos",
      description: "Consultoria para usuário final, gerenciando todas as etapas do projeto da cotação até a entrega final",
      icon: "📋",
      features: [
        "Análise de requisitos",
        "Especificação técnica",
        "Gerenciamento de projetos",
        "Acompanhamento de implementação"
      ]
    },
    {
      id: "treinamentos",
      title: "Treinamentos",
      description: "Treinamento em lógica e dimensionamento de produtos, diagrama de trajeto passo, elaboração de lógica de trabalho e integração entre engenharias mecânica e elétrica",
      icon: "🎓",
      features: [
        "Programação de PLCs",
        "Configuração de IHMs",
        "Dimensionamento de sistemas",
        "Integração entre sistemas"
      ]
    },
    {
      id: "pneumaticos",
      title: "Projeto Pneumático, Hidráulico e Vácuo",
      description: "Projeto Pneumático, Hidráulico e Vácuo (Plano A e P)",
      icon: "💨",
      features: [
        "Dimensionamento de sistemas",
        "Seleção de componentes",
        "Documentação técnica",
        "Otimização de consumo"
      ]
    },
    {
      id: "mitsubishi",
      title: "Representação Mitsubishi",
      description: "Representação em PLC e VFD Mitsubishi e treinamento de programação em PLC e IHM",
      icon: "🏢",
      features: [
        "Fornecimento de equipamentos",
        "Suporte técnico especializado",
        "Treinamento dedicado",
        "Garantia estendida"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[url('/images/home/automation.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Soluções em Automação Industrial
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-200 max-w-3xl mx-auto">
              Tecnologia de ponta e expertise técnica para otimizar seus processos industriais e aumentar a produtividade
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100"
              >
                <div className="h-64 relative overflow-hidden bg-red-50">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-800/20 to-red-600/20"></div>
                  <Image
                    src={`/images/home/services/service_card.avif`}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-14 h-14 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center shadow-md">
                    <div className="text-red-600 text-2xl">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <span className="w-1.5 h-6 bg-red-600 rounded-sm mr-3"></span>
                      {service.features && service.features[0] && service.id === "plc-ihm" || service.id === "vfd" ? "Marcas" : "Diferenciais"}
                    </h3>
                    <ul className="space-y-3">
                      {service.features && service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={`/[locale]/services/${service.id}`} 
                    as={`/pt/services/${service.id}`}
                    className="inline-flex items-center text-red-600 font-medium hover:text-red-800 transition-colors"
                  >
                    Saiba mais
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white p-10 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Pronto para transformar seus processos industriais?</h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Entre em contato conosco e descubra como nossas soluções em automação podem otimizar sua operação.
              </p>
              <Link 
                href="/[locale]/contato" 
                as="/pt/contato"
                className="inline-flex items-center px-8 py-3 bg-white text-red-600 font-medium rounded-lg hover:bg-red-50 transition-colors shadow-md"
              >
                Solicitar Consultoria
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
}