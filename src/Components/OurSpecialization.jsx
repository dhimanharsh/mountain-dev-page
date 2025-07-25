import React from 'react';

const OurSpecializations = () => {
  const specializations = [
    {
      title: 'Web Development',
      description: 'Creating responsive and dynamic websites tailored to your business needs.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18v4H3V4zm0 6h18v10H3V10zm7 4h4" />
        </svg>
      ),
      bg: 'bg-violet-600'
    },
    {
      title: 'App Development',
      description: 'Building mobile applications that provide seamless user experiences across platforms.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 4h10a1 1 0 011 1v14a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1z" />
        </svg>
      ),
      bg: 'bg-emerald-600'
    },
    {
      title: 'Digital Marketing',
      description: 'Enhancing your online presence and driving traffic through strategic marketing efforts.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      bg: 'bg-pink-600'
    },
    {
      title: 'Portfolio Creation',
      description: 'Designing personal portfolios that showcase your skills and projects beautifully.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      ),
      bg: 'bg-orange-500'
    },
    {
      title: 'UI/UX Design (Figma)',
      description: 'Crafting intuitive and modern interfaces with pixel-perfect precision using Figma.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx="12" cy="6" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="18" r="2" />
        </svg>
      ),
      bg: 'bg-cyan-500'
    },
  ];

  return (
    <section className="bg-black text-white py-16" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 tracking-tight">
         🚀 Our Specializations — Where Innovation Meets Execution
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-xl shadow-xl flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-2xl"
            >
              <div className={`w-16 h-16 flex items-center justify-center ${item.bg} rounded-full mb-4`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSpecializations;
