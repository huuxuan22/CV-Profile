import React from 'react';

const SimpleSkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ['ReactJS', 'Redux', 'Vue.js', 'Tailwind CSS', 'Bootstrap', 'MUI'],
      icon: "💻"
    },
    {
      title: "Backend Development",
      skills: ['Spring Boot', 'Spring Security', 'Java', 'MySQL', 'SQL Server', 'PhpAdmin'],
      icon: "⚙️"
    },
    {
      title: "DevOps & Tools",
      skills: ['Git', 'GitLab', 'Postman', 'Firebase'],
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Kỹ Năng Chuyên Môn</h2>
          <p className="text-gray-600">Các công nghệ và công cụ tôi thành thạo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="text-3xl mr-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 text-center">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="px-4 py-3 bg-blue-50 rounded-lg border border-blue-100 flex items-center transform transition-all duration-300 hover:bg-white hover:shadow-md hover:border-blue-300 group"
                  >
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-3 group-hover:animate-pulse"></div>
                    <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All skills in a minimal grid at the bottom */}
        {/* <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            {skillCategories.flatMap(category => category.skills).map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SimpleSkillsSection;