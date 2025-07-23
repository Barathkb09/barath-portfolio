
import { Code, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'HTML', icon: '🌐', color: 'from-orange-500 to-red-500' },
        { name: 'CSS', icon: '🎨', color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', icon: '⚡', color: 'from-yellow-500 to-orange-500' },
        { name: 'React JS', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
        { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-indigo-600' },
        { name: 'Tailwind CSS', icon: '🎭', color: 'from-teal-500 to-cyan-500' },
        { name: 'Bootstrap', icon: '🅱️', color: 'from-purple-500 to-pink-500' }
      ]
    },
    {
      title: 'Backend',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'Node JS', icon: '🟢', color: 'from-green-600 to-emerald-600' },
        { name: 'Express JS', icon: '🚀', color: 'from-gray-600 to-slate-600' },
        { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-teal-500' },
        { name: 'MySQL', icon: '🐬', color: 'from-blue-600 to-cyan-600' }
      ]
    },
    {
      title: 'Languages',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'JavaScript', icon: '⚡', color: 'from-yellow-500 to-orange-500' },
        { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-indigo-600' },
        { name: 'Python', icon: '🐍', color: 'from-blue-500 to-green-500' }
      ]
    },
    {
      title: 'Others',
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: 'Git', icon: '📝', color: 'from-orange-600 to-red-600' },
        { name: 'Github', icon: '🐙', color: 'from-gray-700 to-slate-700' },
        { name: 'VS Code', icon: '💻', color: 'from-blue-600 to-cyan-600' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-slate-50/50 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-1/4 right-20 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-cyan-400/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-green-400/30 rounded-full animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3.5s'}}></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-pink-400/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white mr-3 sm:mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`flex items-center px-2 py-2 sm:px-4 sm:py-3 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 min-w-0`}
                    style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                  >
                    <span className="text-base sm:text-lg mr-2 sm:mr-3">{skill.icon}</span>
                    <span className="font-medium text-xs sm:text-sm break-words whitespace-pre-line">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
