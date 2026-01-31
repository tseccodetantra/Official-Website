import React from 'react';

const AboutUs = () => {
  const stats = [
    { label: 'Members', value: '30+' },
    { label: 'Events', value: '10+' },
    { label: 'Years Active', value: '4+' },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technologies and creative problem-solving.',
    },
    {
      title: 'Collaboration',
      description: 'Building a community where knowledge sharing and teamwork drive success.',
    },
    {
      title: 'Excellence',
      description: 'Committed to delivering quality in every project and initiative we undertake.',
    },
    {
      title: 'Learning',
      description: 'Fostering continuous growth through workshops, hackathons, and hands-on experience.',
    },
  ];

  return (
    <section className="relative text-white py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-yellow-400 text-sm font-medium tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
              {'<'} About Us {'/>'}
            </span>
          </div>
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
            style={{ fontFamily: "'Zalando Sans Expanded', sans-serif" }}
          >
            TSEC CodeTantra
          </h1>
          <p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            TSEC CodeTantra is a technical committee of the Artificial Intelligence and Data Science Department of Thadomal Shahani Engineering College. Our vision is to inculcate programming skills in the minds of students with the help of workshops, hackathons and other competitive events.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-linear-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-500/20"
            >
              <div 
                className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2"
                style={{ fontFamily: "'Zalando Sans Expanded', sans-serif" }}
              >
                {stat.value}
              </div>
              <div 
                className="text-sm text-gray-400 uppercase tracking-wide"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <div className="bg-yellow-500/5 border-l-4 border-yellow-400 p-8 rounded-r-lg backdrop-blur-sm">
            <h2 
              className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4"
              style={{ fontFamily: "'Zalando Sans Expanded', sans-serif" }}
            >
              Our Mission
            </h2>
            <p 
              className="text-lg text-gray-300 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              To create a thriving ecosystem where aspiring developers can transform their ideas into reality. 
              We bridge the gap between theoretical knowledge and practical application, preparing students 
              for the tech industry through hands-on experience, mentorship, and real-world projects.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "'Zalando Sans Expanded', sans-serif" }}
          >
            What We <span className="text-yellow-400">Stand For</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-linear-to-b from-yellow-500/5 to-transparent border border-yellow-500/20 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:border-yellow-400/50 hover:shadow-xl hover:shadow-yellow-500/10"
              >
                <h3 
                  className="text-xl font-bold text-yellow-400 mb-3"
                  style={{ fontFamily: "'Zalando Sans Expanded', sans-serif" }}
                >
                  {value.title}
                </h3>
                <p 
                  className="text-gray-400 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;