
// import { ChevronDown, Download } from 'lucide-react';
// import { Button } from './ui/button';

// const Hero = () => {
//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     element?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
//       <div className="container mx-auto text-center">
//         <div className="animate-fade-in">
//           <div className="mb-8">
//             <div className="mb-6">
//               <span className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light">
//                 👋 Hi, I'm
//               </span>
//             </div>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//               Barath K B
//             </span>
//           </h1>

//           <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 mb-6 font-light">
//             Full Stack Developer
//           </h2>

//           <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
//             Passionate about creating beautiful, responsive web applications with modern technologies. 
//             Always eager to learn and take on new challenges in the world of web development.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               onClick={() => scrollToSection('#contact')}
//               className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
//             >
//               Get In Touch
//             </Button>
            
//             <Button
//               variant="outline"
//               className="border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
//             >
//               <Download className="w-5 h-5 mr-2" />
//               Download CV
//             </Button>
//           </div>
//         </div>

//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <button
//             onClick={() => scrollToSection('#about')}
//             className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
//           >
//             <ChevronDown className="w-6 h-6" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { ChevronDown, Download } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [title, setTitle] = useState('Full Stack Developer');
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  
  const titles = ['Full Stack Developer', 'Web Developer'];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const type = () => {
      const currentTitle = titles[index % titles.length];
      
      if (!isDeleting) {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        if (displayedText.length === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
          setTitle(titles[(index + 1) % titles.length]);
        }
      }
    };

    const timer = setTimeout(type, typeSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-24 pb-10 px-4 sm:px-6 text-center">
      <style>
        {`
          .typewriter {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            border-right: 2px solid;
            animation: blink 0.7s step-end infinite;
          }
          @keyframes blink {
            50% { border-color: transparent; }
          }
        `}
      </style>
      <div className="container mx-auto">
        <div className="animate-fade-in">
          <div className="mb-6 sm:mb-8">
            <div className="mb-4 sm:mb-6">
              <span className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light">
                👋 Hi, I'm
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Barath K B
            </span>
          </h1>

          <h2 className="text-lg sm:text-2xl md:text-3xl text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 font-light">
            <span className="typewriter">{displayedText}</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, responsive web applications with modern technologies. 
            Always eager to learn and take on new challenges in the world of web development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Button>
            <a href="/Barathkb_resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-full text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </a>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('#about')}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;