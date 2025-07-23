
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Computer Applications',
      school: 'KLN College of Engineering',
      duration: '2023 - 2025',
      location: 'Madurai, Tamilnadu, India',
      description: 'Postgraduate program focused on advanced computer science concepts, software development, and practical IT skills for industry readiness.'
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'Madura College',
      duration: '2020 - 2023',
      location: 'Madurai, Tamilnadu, India',
      description: 'Undergraduate program covering fundamental concepts in programming, algorithms, databases, and computer systems to build a strong technical foundation.'
    },
    {
      degree: 'HSC in Computer Science',
      school: 'TMHSS',
      duration: '2019 - 2020',
      location: 'Madurai, Tamilnadu, India',
      description: 'Completed 12th grade with a focus on Physics, Chemistry, and Mathematics, building a foundational understanding for further studies in technology and science.'
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="relative flex items-start animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>

                {/* Content */}
                <div className="ml-16 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 w-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
                        {edu.school}
                      </h4>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-slate-600 dark:text-slate-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
