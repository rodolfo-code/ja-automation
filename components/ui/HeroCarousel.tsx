"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: '/images/home/carrossel_1.jpg',
    title: 'Transformamos Desafios em Oportunidades',
    subtitle: 'Soluções empresariais inovadoras para impulsionar o crescimento do seu negócio',
    cta: {
      primary: { text: 'Fale Conosco', href: '/contato' },
      secondary: { text: 'Nossas Soluções', href: '/solutions' }
    }
  },
  {
    id: 2,
    image: '/images/home/carrossel_2.jpg',
    title: 'Automação Industrial Avançada',
    subtitle: 'Tecnologia de ponta para otimizar processos e aumentar a produtividade',
    cta: {
      primary: { text: 'Conheça Nossos Cases', href: '/cases' },
      secondary: { text: 'Solicitar Orçamento', href: '/contato' }
    }
  },
  {
    id: 3,
    image: '/images/home/carrossel_3.jpg',
    title: 'Inovação e Excelência',
    subtitle: 'Parceria estratégica para o sucesso do seu projeto industrial',
    cta: {
      primary: { text: 'Saiba Mais', href: '/solutions' },
      secondary: { text: 'Entre em Contato', href: '/contato' }
    }
  }
];

export function HeroCarousel() {
  return (
    <section className="relative h-[95vh] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        allowTouchMove={false}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={800}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Imagem de fundo */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={slide.id === 1}
                />
                {/* Overlay escuro para melhorar legibilidade do texto */}
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Conteúdo do slide */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-slide-up">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
                      <Link
                        href={slide.cta.primary.href}
                        className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                      >
                        {slide.cta.primary.text}
                      </Link>
                      <Link
                        href={slide.cta.secondary.href}
                        className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
                      >
                        {slide.cta.secondary.text}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navegação customizada */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="swiper-pagination-custom flex space-x-2"></div>
      </div>

      {/* Botões de navegação */}
      <button className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
