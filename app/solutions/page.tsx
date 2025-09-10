import { Metadata } from "next";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Soluções",
  description: "Conheça nossas soluções empresariais inovadoras: consultoria estratégica, transformação digital e gestão de pessoas.",
  openGraph: {
    title: "Soluções - Consulting Company",
    description: "Conheça nossas soluções empresariais inovadoras: consultoria estratégica, transformação digital e gestão de pessoas.",
    url: "https://consulting-website.com/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nossas Soluções</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas e personalizadas para transformar sua empresa e impulsionar o crescimento sustentável.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-1 gap-12">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className="flex-1">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {service.icon === "chart-bar" && (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      )}
                      {service.icon === "lightning-bolt" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      )}
                      {service.icon === "users" && (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      )}
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <h3 className="text-lg font-semibold mb-4">O que oferecemos:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex-1">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-lg">
                  <div className="aspect-video bg-primary-200 rounded-lg flex items-center justify-center">
                    <span className="text-primary-600 font-medium">Imagem do Serviço</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary-600 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Pronto para Começar?</h2>
            <p className="text-xl mb-6 text-primary-100">Entre em contato conosco e descubra como nossas soluções podem transformar seu negócio.</p>
            <a href="/contato" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Solicitar Consultoria
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
