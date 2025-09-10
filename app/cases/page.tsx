import { Metadata } from "next";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cases de Sucesso",
  description: "Conheça nossos cases de sucesso e como ajudamos empresas a alcançar resultados extraordinários através de nossas soluções.",
  openGraph: {
    title: "Cases de Sucesso - Consulting Company",
    description: "Conheça nossos cases de sucesso e como ajudamos empresas a alcançar resultados extraordinários através de nossas soluções.",
    url: "https://consulting-website.com/cases",
  },
};

export default function CasesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cases de Sucesso</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como transformamos desafios em oportunidades e ajudamos empresas a alcançar resultados extraordinários.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="space-y-16">
          {caseStudies.map((caseStudy, index) => (
            <div key={caseStudy.id} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className="flex-1">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="mb-6">
                    <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {caseStudy.industry}
                    </span>
                    <h2 className="text-2xl font-bold mb-2">{caseStudy.title}</h2>
                    <p className="text-gray-600 font-medium">Cliente: {caseStudy.client}</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-red-600">Desafio</h3>
                      <p className="text-gray-700">{caseStudy.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-blue-600">Solução</h3>
                      <p className="text-gray-700">{caseStudy.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-green-600">Resultados</h3>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg">
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-medium">Imagem do Case</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-primary-600 text-white p-8 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Nossos Números</h2>
            <p className="text-primary-100">Resultados que comprovam nossa excelência</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Projetos Concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-primary-100">Taxa de Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3x</div>
              <div className="text-primary-100">Crescimento Médio</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-primary-100">Tempo de Resposta</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Seu Próximo Case de Sucesso</h2>
          <p className="text-xl text-gray-600 mb-8">Vamos conversar sobre como podemos transformar sua empresa também.</p>
          <a href="/contato" className="btn-primary">
            Iniciar Projeto
          </a>
        </div>
      </div>
    </div>
  );
}
