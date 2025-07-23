
import { Github, Linkedin, MapPin, Calendar } from 'lucide-react';
import { Button } from './ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in">
            <div className="relative mx-auto max-w-xs w-full">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    src="/barath.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover shadow-lg border-4 border-white dark:border-slate-800 rounded-2xl"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200">
              Hello! I'm Barath K B
            </h3>
            <div className="flex flex-wrap items-center text-slate-600 dark:text-slate-400 mb-2 sm:mb-4 gap-x-4 gap-y-2">
              <span className="flex items-center"><MapPin className="w-5 h-5 mr-2" />Madurai, Tamilnadu, India</span>
              <span className="flex items-center"><Calendar className="w-5 h-5 mr-2" />Available for work</span>
            </div>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. My journey began during my computer science studies, where I was captivated by the process of bringing ideas to life through code—from beautiful user interfaces to robust backend systems.
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I specialize in React.js, TypeScript, Node.js, and RESTful APIs, and I’m comfortable working across the entire development stack. I enjoy building scalable web applications that not only deliver great performance but also prioritize clean architecture and a smooth user experience.
            </p>
            <div className="flex flex-wrap gap-3 pt-4 sm:pt-6">
              <Button
                asChild
                className="bg-[#0077b5] hover:bg-[#005885] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <a href="https://www.linkedin.com/in/barathkb/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                asChild
                className="bg-[#333] hover:bg-[#1a1a1a] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <a href="https://github.com/Barathkb09" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
