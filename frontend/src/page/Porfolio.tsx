import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Code, Briefcase, GraduationCap, Award, ChevronDown, Menu, X, Sparkles, Rocket, Zap, Terminal, Database, Server } from 'lucide-react';
import prof from '../assets/prof.jpg';


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const experiences = [
    {
      company: "Binmile Technologies",
      role: "Associate Software Engineer",
      period: "Jul 2024 – Present",
      location: "Noida, India",
      icon: <Server className="w-6 h-6" />,
      highlights: [
        "Engineered 2+ production-grade backend services using Node.js, Strapi, and NestJS serving 10K+ daily API requests",
        "Integrated Salesforce REST APIs and SSO authentication, increasing onboarding speed by 30%",
        "Utilized Redis caching, Bitbucket, and Postman for code management and deployment testing",
        "Collaborated in Agile environment with sprint planning and CI/CD pipeline enhancements"
      ]
    },
    {
      company: "GeeksforGeeks",
      role: "Technical Content Engineer",
      period: "Jan 2024 – Jun 2024",
      location: "Noida, India",
      icon: <Terminal className="w-6 h-6" />,
      highlights: [
        "Authored 40+ technical articles on MERN stack reaching 200K+ developers",
        "Reviewed and refined 15+ peer submissions for precision and accuracy",
        "Created 4+ full-stack MERN projects to boost community engagement"
      ]
    }
  ];

  const projects = [
    {
      name: "AESL Work Force Model",
      client: "Adani",
      tech: ["NestJS", "MSSQL", "ReactJS"],
      highlights: [
        "Smart meter workforce platform with 8-member team collaboration",
        "Optimized job assignment from 1 minute to 2 seconds for 10K+ operations",
        "Multi-tenant access and role-based authentication"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Keysight Newsletter System",
      client: "Keysight",
      tech: ["Node.js", "MongoDB", "Salesforce"],
      highlights: [
        "Improved data query performance by 20%",
        "Real-time synchronization with Salesforce and Eloqua APIs",
        "Streamlined processes for 5K+ active subscribers"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Sirius DigiTech",
      client: "Adani Lab",
      tech: ["Node.js", "Strapi", "PostgreSQL"],
      highlights: [
        "Reduced API latency by 25%",
        "Secure access control and real-time alerts",
        "Automated blog insight and PDF delivery system"
      ],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const skills = {
    "Languages": { items: ["Go", "JavaScript", "TypeScript", "C++"], icon: <Code className="w-5 h-5" /> },
    "Backend": { items: ["Node.js", "Express.js", "NestJS", "Strapi", "REST APIs"], icon: <Server className="w-5 h-5" /> },
    "Frontend": { items: ["React.js", "Next.js", "React Native", "TailwindCSS", "HTML/CSS"], icon: <Sparkles className="w-5 h-5" /> },
    "Databases": { items: ["MySQL", "PostgreSQL", "MongoDB"], icon: <Database className="w-5 h-5" /> },
    "Tools": { items: ["Git", "Bitbucket", "Postman", "Redis", "Docker", "AWS"], icon: <Zap className="w-5 h-5" /> }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '700ms'}}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
      </div>

      {/* Cursor Glow Effect */}
      <div 
        className="fixed pointer-events-none z-50 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl transition-all duration-300"
        style={{
          left: `${mousePosition.x - 128}px`,
          top: `${mousePosition.y - 128}px`,
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-purple-500/10 border-b border-purple-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 rounded-xl font-bold text-xl">
                FA
              </div>
            </div>
            <span className="hidden md:block font-semibold text-slate-300 group-hover:text-white transition-colors">Faheem Akhtar</span>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-slate-950/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none p-6 md:p-0 gap-1 md:gap-1 border-b md:border-0 border-purple-500/20`}>
            {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all ${
                  activeSection === item.toLowerCase() 
                    ? 'text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeSection === item.toLowerCase() && (
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg"></span>
                )}
                <span className="relative">{item}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
  <section
  id="home"
  className="relative min-h-screen flex items-center justify-center px-6 pt-20"
>
  <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">

    {/* Profile Image */}
    <div className="relative inline-block group">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity animate-pulse"></div>

      {/* Gradient Border */}
      <div className="relative w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 p-1">
        <img
          src={prof}
          alt="Profile"
          className="w-full h-full rounded-full object-cover bg-slate-950"
        />
      </div>
    </div>

    {/* Intro Text */}
    <div className="space-y-4">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-300 backdrop-blur-xl">
        <Sparkles className="w-4 h-4" />
        <span>Available for opportunities</span>
      </div>

      <h1 className="text-6xl md:text-8xl font-black tracking-tight">
        <span className="block text-slate-300 text-3xl md:text-4xl font-semibold mb-2">
          Hi, I'm
        </span>
        <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Faheem Akhtar
        </span>
      </h1>

      <p className="text-2xl md:text-3xl font-bold text-slate-300">
        Associate Software Engineer
        <span className="inline-block ml-3 text-4xl">🚀</span>
      </p>

      <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
        Architecting{" "}
        <span className="text-cyan-400 font-semibold">
          scalable backend systems
        </span>{" "}
        and crafting{" "}
        <span className="text-purple-400 font-semibold">
          seamless full-stack experiences
        </span>{" "}
        with cutting-edge technologies
      </p>
    </div>

    {/* Social Icons */}
    <div className="flex gap-4 justify-center flex-wrap pt-4">
      {[
        { icon: <Github size={20} />, url: "https://github.com/faheem70" },
        { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/faheem-akhtar-190851185" },
        { icon: <Mail size={20} />, url: "mailto:faheemakhtar19730@gmail.com" },
        { icon: <Phone size={20} />, url: "tel:+919670715944" },
      ].map((social, idx) => (
        <a
          key={idx}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-4 bg-slate-900/50 backdrop-blur-xl border border-slate-800 hover:border-purple-500 rounded-2xl transition-all hover:scale-110 hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
          <div className="relative text-slate-400 group-hover:text-white transition-colors">
            {social.icon}
          </div>
        </a>
      ))}
    </div>

    {/* Scroll Indicator */}
    <div className="pt-12 flex flex-col items-center gap-3">
      <span className="text-sm text-slate-500">Scroll to explore</span>
      <button
        onClick={() => scrollToSection("about")}
        className="animate-bounce p-3 bg-purple-500/10 rounded-full border border-purple-500/30 hover:bg-purple-500/20 transition-colors"
      >
        <ChevronDown size={24} className="text-purple-400" />
      </button>
    </div>

  </div>
</section>


      {/* About Section */}
      <section id="about" className="relative min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 backdrop-blur-xl mb-4">
              <GraduationCap className="w-5 h-5" />
              <span className="font-semibold">About Me</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              My Journey
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 group-hover:border-purple-500 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                    <h4 className="font-bold text-lg text-white">KIET Group of Institutions</h4>
                    <p className="text-slate-400">B.Tech in Information Technology</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30">
                        <span className="text-cyan-400 font-bold">CGPA: 8.78/10</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">Aug 2020 – Jun 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 group-hover:border-purple-500 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Achievements</h3>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                      <Award className="text-yellow-400 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">CodeKaze Coding Contest</h4>
                      <p className="text-slate-400 text-sm mt-1">All India Rank <span className="text-cyan-400 font-bold">2481</span> among 100K+ participants</p>
                      <p className="text-slate-400 text-sm">Institute Rank <span className="text-purple-400 font-bold">22nd</span> at KIET</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
            <div className="relative bg-slate-900/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-slate-800 group-hover:border-purple-500 transition-all">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                I'm a <span className="text-cyan-400 font-semibold">passionate software engineer</span> specializing in backend development with expertise in 
                <span className="text-purple-400 font-semibold"> Node.js, NestJS, and modern full-stack technologies</span>. 
                With hands-on experience at <span className="text-cyan-400 font-semibold">Binmile Technologies</span> and 
                <span className="text-purple-400 font-semibold"> GeeksforGeeks</span>, I've engineered production-grade systems serving 
                <span className="text-pink-400 font-semibold"> thousands of users daily</span>. I'm committed to writing clean, efficient code 
                and continuously learning new technologies to solve complex problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 backdrop-blur-xl mb-4">
              <Briefcase className="w-5 h-5" />
              <span className="font-semibold">Career</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 group-hover:border-purple-500 transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex-shrink-0">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">{exp.role}</h3>
                        <p className="text-xl text-white font-semibold mt-1">{exp.company}</p>
                        <p className="text-slate-400 mt-1">{exp.location}</p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/30 text-purple-300 text-sm font-medium flex-shrink-0">
                      {exp.period}
                    </div>
                  </div>
                  <div className="space-y-3 pl-0 md:pl-16">
                    {exp.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                        <span className="text-slate-300 group-hover/item:text-white transition-colors">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 backdrop-blur-xl mb-4">
              <Rocket className="w-5 h-5" />
              <span className="font-semibold">Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity`}></div>
                <div className="relative h-full bg-slate-900/50 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 group-hover:border-purple-500 transition-all hover:scale-105">
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-xs font-bold mb-3`}>
                    {project.client}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-800/80 border border-slate-700 rounded-lg text-xs text-slate-300 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                        <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} flex-shrink-0`}></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 backdrop-blur-xl mb-4">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">Expertise</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tech Stack
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, data]) => (
              <div key={category} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
                <div className="relative h-full bg-slate-900/50 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 group-hover:border-purple-500 transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
                      {data.icon}
                    </div>
                    <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data.items.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-2 bg-slate-800/80 border border-slate-700 hover:border-purple-500 rounded-xl text-sm text-slate-300 hover:text-white font-medium transition-all hover:scale-105 hover:bg-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  <section id="contact" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-slate-300 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="mailto:faheemakhtar19730@gmail.com" className="flex items-center gap-3 bg-slate-900/50 backdrop-blur px-8 py-4 rounded-xl border border-slate-800 hover:border-cyan-500 transition-all hover:scale-105">
              <Mail className="text-cyan-400" />
              <span>faheemakhtar19730@gmail.com</span>
            </a>
            <a href="tel:+919670715944" className="flex items-center gap-3 bg-slate-900/50 backdrop-blur px-8 py-4 rounded-xl border border-slate-800 hover:border-cyan-500 transition-all hover:scale-105">
              <Phone className="text-cyan-400" />
              <span>+91-9670715944</span>
            </a>
          </div>
          <div className="mt-12 flex gap-6 justify-center">
            <a href="https://github.com/faheem70" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github size={32} />
            </a>
            <a href="https://linkedin.com/in/faheem-akhtar-190851185" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 text-center text-slate-500">
        <p>&copy; 2025 Faheem Akhtar. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}