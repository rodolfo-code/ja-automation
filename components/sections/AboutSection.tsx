"use client";

import { useTranslations } from "@/lib/i18n";

export function AboutSection() {
  const { t } = useTranslations();
  const about = (t as any).aboutSection;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título Principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {about?.title || "About J&A Automation LLC"}
          </h2>
        </div>

        {/* Conteúdo em Duas Colunas */}
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Coluna Esquerda - Presentation */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-red-600">{about?.presentation?.title || "Presentation"}</h3>
            </div>
            
            <div className="space-y-6">
              {(about?.presentation?.paragraphs || [
                "J & A Automation LLC was founded in 2008 by a group of Engineers from Multinational Engineering companies, with strong project experience in industrial automation and maintenance projects.",
                "We started our work offering PLC programming, robots, electrical projects, line simulations, mechanical and pneumatic projects.",
              ]).map((p: string, idx: number) => (
                <p key={idx} className="text-lg text-gray-700 leading-relaxed">{p}</p>
              ))}
            </div>
          </div>

          {/* Coluna Direita - Our Projects */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-red-600">{about?.projects?.title || "Our Projects"}</h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {about?.projects?.intro || "Currently, we offer solutions and projects for industries in general and counts on sectors of specialized services, such as:"}
              </p>
              
              <div className="space-y-3">
                {(about?.projects?.items || [
                  "PLC programming, HMI and Supervision;",
                  "Line simulation and projects with robots;",
                  "Electrical, mechanical, hydraulic and pneumatic designs;",
                  "Technical assistance of electronic components;",
                  "Operational training.",
                ]).map((item: string, idx: number) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <span className="text-gray-700">-</span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {about?.helpdesk?.paragraph || "Thinking about minimizing response time in maintenance emergencies, we have a help desk sector, where it operates online on the customer's PC for rapid fault diagnosis."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

