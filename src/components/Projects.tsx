
import { useState } from 'react';
import { Github, ExternalLink, X, Calendar, Users, Code } from 'lucide-react';
import { Button } from './ui/button';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'Advanced Music Listening Platform',
      shortDescription: 'A full-stack Music Application with modern UI/UX',
      longDescription: 'Music With Chat App is a real-time web application that allows users to listen to music together, share their favorite tracks, and chat in real-time. Built using the powerful MERN stack and integrated with Socket.IO for real-time communication, this platform offers a collaborative social experience where users can create or join rooms, queue music, and engage with others through live messaging.',
      image: '/spotify.png',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Music API', 'Socket.io'],
      features: [
        'User authentication and authorization',
        'Enjoy seamless and high-fidelity audio playback.',
        'Listen to the album and playlist',
        'Allow users to Search for music from online',
        'Admin dashboard for Songs and users management',
        'Responsive design for all devices',
        'Real-time Status about the online users',
      ],
      duration: '3 months',
      teamSize: '1 developer',
      role: 'Full Stack Developer',
      github: 'https://github.com/Barathkb09',
      live: 'https://musify-barath.onrender.com/',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Fullstack Chat & Video Calling App',
      shortDescription: 'A real-time fullstack application enabling seamless text chat and high-quality video calling between users.',
      longDescription: 'The Real-Time Chat and Video Calling App is a full-stack web application developed using the MERN stack that allows users to send instant messages, initiate one-on-one video calls, and connect in real-time. Leveraging Socket.IO for real-time communication and WebRTC for peer-to-peer video calling, this platform provides a seamless and interactive user experience.',
      image: '/chat_video.png',
      technologies: ['React.js', 'Nodejs', 'Material-UI', 'Redux Toolkit', 'Socket.io', 'WebRTC'],
      features: [
        'Real-time one-on-one and group text chat with typing indicators',
        'High-quality peer-to-peer video calling using WebRTC',
        'User authentication with secure login and registration',
        'Online/offline presence and status indicators',
        'Responsive and intuitive user interface for all devices',
        'End-to-end encrypted communication for privacy and security',
      ],
      duration: '2 months',
      teamSize: '1 developer',
      role: 'Full stack Developer',
      github: 'https://github.com/Barathkb09/Video_chat_App',
      live: 'https://video-chat-app-j829.onrender.com/',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'AI-Powered Career & Job Search Platform',
      shortDescription: 'An AI-driven platform that intelligently matches users with jobs and career paths based on their skills, preferences, and goals.',
      longDescription: 'An AI-driven platform that helps users discover personalized job opportunities and career paths based on their skills, experience, and interests. It offers intelligent job matching, resume analysis, and real-time market insights. Designed to simplify the job search process and support career growth with smart recommendations and guidance.',
      image: '/Career_ai.jpeg',
      technologies: ['React.js', 'TypeScript', 'gemini API', 'Node.js', 'Tailwind CSS', 'NeonDB'],
      features: [
        'AI-powered system recommends jobs based on user skills, experience, and preferences.',
        'Provides personalized career path suggestions using AI insights.',
        'Analyzes and optimizes resumes for better job visibility and relevance.',
        'Offers a responsive and intuitive interface for smooth use across all devices.',
        'Generate cover letters and resumes with AI assistance.',
      ],
      duration: '3 months',
      teamSize: '1 developer',
      role: 'Full stack Developer',
      github: 'https://github.com/Barathkb09',
      live: 'https://github.com/Barathkb09',
      status: 'In progress'
    }
  ];

  const openProjectDialog = (project: any) => {
    setSelectedProject(project);
  };

  const closeProjectDialog = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-700 cursor-pointer animate-fade-in flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openProjectDialog(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2 sm:mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-2 sm:mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200 mt-auto">
                  Click to view details →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Dialog */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
              <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={closeProjectDialog}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center text-slate-600 dark:text-slate-400">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{selectedProject.duration}</span>
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-400">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{selectedProject.teamSize}</span>
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-400">
                    <Code className="w-5 h-5 mr-2" />
                    <span>{selectedProject.role}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                    Description
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start text-slate-600 dark:text-slate-400">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white flex-1"
                  >
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-slate-300 dark:border-slate-600 flex-1"
                  >
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
