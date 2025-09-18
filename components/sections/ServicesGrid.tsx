"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/lib/i18n";
import { useState } from "react";

// Serviços agora vêm das traduções

export function ServicesGrid() {
  const { t, locale } = useTranslations();
  const [showAllServices, setShowAllServices] = useState(false);
  
  const services = (t as any).servicesGrid?.services || [];
  const visibleServices = services;

  const serviceSlugById: Record<number, string> = {
    1: "plc-ihm",
    2: "vfd",
    3: "projetos-eletricos",
    4: "montagem-paineis",
    5: "nr12",
    6: "suporte-tecnico",
    7: "consultoria",
    8: "treinamentos",
    9: "pneumaticos",
    10: "mitsubishi",
  };
  
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {(t as any).servicesGrid?.title || "Our Services"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {(t as any).servicesGrid?.subtitle || "Complete solutions for industrial automation and process optimization"}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.slice(0, 6).map((service: any) => (
            <Link
              key={service.id}
              href={`/${locale}/services/${serviceSlugById[service.id as number] || ""}`}
              className="max-w-sm block h-full"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col">
                {/* Service Image */}
                <div className="w-full h-48 relative">
                  <Image
                    src="/images/home/services/service_card.avif"
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
          
          {/* Cards adicionais com transição suave */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 col-span-full transition-all duration-700 ease-in-out overflow-hidden ${showAllServices ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'} pb-10`}>
            {services.slice(6).map((service: any) => (
              <Link
                key={service.id}
                href={`/${locale}/services/${serviceSlugById[service.id as number] || ""}`}
                className="max-w-sm block h-full"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col">
                  {/* Service Image */}
                  <div className="w-full h-48 relative">
                    <Image
                      src="/images/home/services/service_card.avif"
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Toggle Button */}
        {services.length > 6 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-red-600 text-red-600 hover:bg-red-50 transition-all duration-300"
              aria-label={showAllServices ? "Mostrar menos serviços" : "Mostrar mais serviços"}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${showAllServices ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            {(t as any).servicesGrid?.ctaText || "Ready to transform your industrial processes?"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              // className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg hover:shadow-red-500/25"
              className="inline-block border-2 border-red-600  text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-200 bg-red-600 text-white"
            >
              {(t as any).servicesGrid?.viewAllServices || "View All Services"}
            </a>
            <a
              href="/contato"
              className="inline-block border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-200"
            >
              {(t as any).servicesGrid?.getInTouch || "Get in Touch"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
