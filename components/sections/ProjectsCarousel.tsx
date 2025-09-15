"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import projects data
import projectsData from '@/lib/projects.json';

export function ProjectsCarousel() {
  const [randomProjects, setRandomProjects] = useState(projectsData.slice(0, 6));

  // Shuffle projects on component mount
  useEffect(() => {
    const shuffled = [...projectsData].sort(() => Math.random() - 0.5);
    setRandomProjects(shuffled.slice(0, 6));
  }, []);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-8 ml-4">
          J&A Automation projects
        </h2>
        
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={3.2}
            navigation={{
              nextEl: '.swiper-button-next-projects',
              prevEl: '.swiper-button-prev-projects',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={800}
            className="projects-swiper w-full"
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              1280: {
                slidesPerView: 2.5,
                spaceBetween: 12,
              }
            }}
          >
            {/* Primeiro slide com o conteúdo de texto */}
            <SwiperSlide>
              <div className="bg-white rounded-lg shadow-sm  overflow-hidden w-full h-full flex flex-col  p-6">
                <div className="max-w-md mx-auto">
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Manufacturers and bottlers of beverages and food rely on J&A Automation and report on their experiences with our automation lines. Find out first-hand when there are new machine and plant solutions for the beverage and food industry.
                  </p>
                  
                  <Link
                    href="/cases"
                    className="inline-block bg-red-600 text-white px-8 py-3 font-medium hover:bg-red-700 transition-colors duration-200"
                  >
                    To the J&A Magazine
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            
            {/* Project cards */}
            {randomProjects.map((project) => (
              <SwiperSlide key={project.id} >
                  <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-2 gap-4">
            <button className="swiper-button-prev-projects w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="swiper-button-next-projects w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}



