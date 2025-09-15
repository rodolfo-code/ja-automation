import { Metadata } from "next";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { LogosCarousel } from "@/components/ui/LogosCarousel";
import { ProjectsCarousel } from "@/components/sections/ProjectsCarousel";
import { CareerBanner } from "@/components/sections/CareerBanner";

export const metadata: Metadata = {
  title: "Home",
  description: "Bem-vindo à JA Automation. Oferecemos soluções empresariais inovadoras para impulsionar o crescimento do seu negócio.",
  openGraph: {
    title: "JA Automation - Soluções Empresariais Inovadoras",
    description: "Bem-vindo à JA Automation. Oferecemos soluções empresariais inovadoras para impulsionar o crescimento do seu negócio.",
    url: "https://ja-automation.com",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* About Section */}
      <AboutSection />

      {/* Services Grid Section */}
      <ServicesGrid />

      {/* Logos Carousel Section */}
      <LogosCarousel />

      {/* Projects Carousel Section */}
      <ProjectsCarousel />

      {/* Career Banner Section */}
      <CareerBanner />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Oferecemos soluções completas para transformar sua empresa</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Consultoria Estratégica</h3>
              <p className="text-gray-600">Desenvolvemos estratégias personalizadas para acelerar o crescimento do seu negócio.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Transformação Digital</h3>
              <p className="text-gray-600">Modernizamos processos e implementamos tecnologias para otimizar sua operação.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Gestão de Pessoas</h3>
              <p className="text-gray-600">Desenvolvemos talentos e otimizamos a performance das equipes.</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
