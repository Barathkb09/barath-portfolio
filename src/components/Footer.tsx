
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-4 h-4" />,
      url: 'https://github.com/Barathkb09',
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-4 h-4" />,
      url: 'https://www.linkedin.com/in/barathkb/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: <Mail className="w-4 h-4" />,
      url: 'mailto:barathkb2002@gmail.com',
      color: 'hover:text-green-600'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      
      <div className="relative container mx-auto px-6 py-6">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3">
              Barath K B
            </h3>
            <p className="text-slate-300 mb-3">Full Stack Developer</p>
            
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-slate-800 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-slate-700 ${link.color}`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">Navigation</h4>
            <div className="grid grid-cols-2 gap-1">
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform text-left text-sm py-1"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center text-slate-400 mb-3 md:mb-0 text-sm">
              <span>© {currentYear} Barath </span>
              {/* <Heart className="w-3 h-3 mx-2 text-red-500 animate-pulse" /> */}
              {/* <span>and lots of coffee ☕</span> */}
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-105 text-sm"
              aria-label="Scroll to top"
            >
              <span className="mr-2">Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
