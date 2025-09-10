import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Process Technology",
    description: "The suitable component for each process step of beverage production",
    icon: "E"
  },
  {
    id: 2,
    title: "Filling and Packaging Technology",
    description: "Tailor-made filling lines for glass and PET containers as well as cans",
    icon: "A"
  },
  {
    id: 3,
    title: "Intralogistics",
    description: "Slim processes and flexible material flows which optimally adapt to suit production and shipping",
    icon: "E"
  },
  {
    id: 4,
    title: "Plastics Recycling",
    description: "Individual modules via complete turnkey factory solutions",
    icon: "♻"
  },
  {
    id: 5,
    title: "Lifecycle Service",
    description: "Significantly reduce operating costs and produce efficiency gains",
    icon: "♻"
  },
  {
    id: 6,
    title: "Digital Services",
    description: "Identify optimisation potential and achieve better performance",
    icon: "Q"
  }
];

export function ServicesGrid() {
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
              Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete solutions for industrial automation and process optimization
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <div key={service.id} className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
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
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            Ready to transform your industrial processes?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/solutions"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
            >
              View All Solutions
            </a>
            <a
              href="/contato"
              className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
