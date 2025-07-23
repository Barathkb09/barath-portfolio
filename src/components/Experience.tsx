
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experience = {
    title: 'Full Stack Developer Intern',
    company: 'Mind Vision Technologies',
    duration: 'Jan 2025 - Jun 2025',
    location: 'Madurai, Tamilnadu, India',
    type: 'Internship',
    description: 'Working on developing responsive web applications using React.js and Node.js. Collaborating with senior developers to implement new features and optimize existing codebases.',
    responsibilities: [
      'Developed responsive web components using React.js and TypeScript',
      'Built RESTful APIs using Node.js and Express.js',
      'Implemented authentication systems with JWT tokens',
      'Collaborated with UI/UX designers to improve user experience',
      // 'Participated in code reviews and agile development processes',
      // 'Optimized application performance and reduced load times by 30%'
    ],
    technologies: ['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'Express.js', 'Git']
  };

  return (
    <section id="experience" className="py-20 px-6 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 animate-fade-in">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                {experience.title}
              </h3>
              <h4 className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
                {experience.company}
              </h4>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
              <Briefcase className="w-8 h-8" />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-slate-600 dark:text-slate-400 mb-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{experience.duration}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{experience.location}</span>
            </div>
            <div className="flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" />
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                {experience.type}
              </span>
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            {experience.description}
          </p>

          <div className="mb-6">
            <h5 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
              Key Responsibilities
            </h5>
            <ul className="space-y-2">
              {experience.responsibilities.map((responsibility, index) => (
                <li
                  key={index}
                  className="flex items-start text-slate-600 dark:text-slate-400"
                >
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
              Technologies Used
            </h5>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
