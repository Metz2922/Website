import { ArrowDown, ArrowUp, ArrowRight, ExternalLink, Github, Menu, X, Moon, Sun, Briefcase, Code, Cpu, Mail, MapPin, Phone, Send, Linkedin, Star } from "lucide-react";
import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-900/20 dark:via-purple-900/10 dark:to-pink-900/20 transition-colors duration-500"></div>
      </div>

      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] transition-opacity duration-500">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#3B82F6" />
              <circle cx="150" cy="50" r="2" fill="#3B82F6" />
              <circle cx="50" cy="150" r="2" fill="#3B82F6" />
              <circle cx="150" cy="150" r="2" fill="#3B82F6" />
              <line x1="50" y1="50" x2="150" y2="50" stroke="#3B82F6" strokeWidth="1" />
              <line x1="50" y1="50" x2="50" y2="150" stroke="#3B82F6" strokeWidth="1" />
              <line x1="150" y1="50" x2="150" y2="150" stroke="#3B82F6" strokeWidth="1" />
              <line x1="50" y1="150" x2="150" y2="150" stroke="#3B82F6" strokeWidth="1" />
              <rect x="48" y="48" width="4" height="4" fill="#8B5CF6" />
              <rect x="148" y="148" width="4" height="4" fill="#8B5CF6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] transition-opacity duration-500">
        {[...Array(20)].map((_, i) => (
          <div
            key={`binary-${i}`}
            className="absolute text-xs font-mono text-blue-600 dark:text-blue-400 whitespace-nowrap animate-pulse"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 3)}s`
            }}
          >
            {Math.random() > 0.5 ? '1010' : '0101'}
          </div>
        ))}
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 dark:from-blue-400/30 dark:to-cyan-400/30 rounded-full animate-pulse blur-sm transition-colors duration-500"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-400/30 dark:to-pink-400/30 rounded-full animate-bounce blur-sm transition-colors duration-500" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-green-400/20 to-emerald-400/20 dark:from-green-400/30 dark:to-emerald-400/30 rounded-full animate-ping blur-sm transition-colors duration-500" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 dark:from-yellow-400/30 dark:to-orange-400/30 rounded-full animate-pulse blur-sm transition-colors duration-500" style={{animationDelay: '0.5s'}}></div>
      
      <div className="absolute top-1/3 right-1/4 opacity-[0.03] dark:opacity-[0.05] animate-spin transition-opacity duration-500" style={{animationDuration: '20s'}}>
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#3B82F6" strokeWidth="2"/>
          <path d="M19.4 15C19.1 15.6 19.2 16.3 19.8 16.8L19.9 16.9C20.3 17.3 20.5 17.8 20.5 18.3C20.5 18.8 20.3 19.3 19.9 19.7C19.5 20.1 19 20.3 18.5 20.3C18 20.3 17.5 20.1 17.1 19.7L17 19.6C16.5 19 15.8 18.9 15.2 19.2C14.6 19.5 14.2 20.1 14.2 20.8V21C14.2 22.1 13.3 23 12.2 23C11.1 23 10.2 22.1 10.2 21V20.9C10.2 20.2 9.7 19.6 9.1 19.3C8.5 19 7.8 19.1 7.3 19.7L7.2 19.8C6.8 20.2 6.3 20.4 5.8 20.4C5.3 20.4 4.8 20.2 4.4 19.8C4 19.4 3.8 18.9 3.8 18.4C3.8 17.9 4 17.4 4.4 17L4.5 16.9C5.1 16.4 5.2 15.7 4.9 15.1C4.6 14.5 4 14.1 3.3 14.1H3.1C2 14.1 1.1 13.2 1.1 12.1C1.1 11 2 10.1 3.1 10.1H3.2C3.9 10.1 4.5 9.6 4.8 9C5.1 8.4 5 7.7 4.4 7.2L4.3 7.1C3.9 6.7 3.7 6.2 3.7 5.7C3.7 5.2 3.9 4.7 4.3 4.3C4.7 3.9 5.2 3.7 5.7 3.7C6.2 3.7 6.7 3.9 7.1 4.3L7.2 4.4C7.7 5 8.4 5.1 9 4.8C9.6 4.5 10 3.9 10 3.2V3C10 1.9 10.9 1 12 1C13.1 1 14 1.9 14 3V3.1C14 3.8 14.5 4.4 15.1 4.7C15.7 5 16.4 4.9 16.9 4.3L17 4.2C17.4 3.8 17.9 3.6 18.4 3.6C18.9 3.6 19.4 3.8 19.8 4.2C20.2 4.6 20.4 5.1 20.4 5.6C20.4 6.1 20.2 6.6 19.8 7L19.7 7.1C19.1 7.6 19 8.3 19.3 8.9C19.6 9.5 20.2 9.9 20.9 9.9H21.1C22.2 9.9 23.1 10.8 23.1 11.9C23.1 13 22.2 13.9 21.1 13.9H21C20.3 13.9 19.7 14.4 19.4 15Z" stroke="#8B5CF6" strokeWidth="2"/>
        </svg>
      </div>

      <div className="absolute bottom-1/3 left-1/3 opacity-[0.03] dark:opacity-[0.05] animate-spin transition-opacity duration-500" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#10B981" strokeWidth="2"/>
          <path d="M19.4 15C19.1 15.6 19.2 16.3 19.8 16.8L19.9 16.9C20.3 17.3 20.5 17.8 20.5 18.3C20.5 18.8 20.3 19.3 19.9 19.7C19.5 20.1 19 20.3 18.5 20.3C18 20.3 17.5 20.1 17.1 19.7L17 19.6C16.5 19 15.8 18.9 15.2 19.2C14.6 19.5 14.2 20.1 14.2 20.8V21C14.2 22.1 13.3 23 12.2 23C11.1 23 10.2 22.1 10.2 21V20.9C10.2 20.2 9.7 19.6 9.1 19.3C8.5 19 7.8 19.1 7.3 19.7L7.2 19.8C6.8 20.2 6.3 20.4 5.8 20.4C5.3 20.4 4.8 20.2 4.4 19.8C4 19.4 3.8 18.9 3.8 18.4C3.8 17.9 4 17.4 4.4 17L4.5 16.9C5.1 16.4 5.2 15.7 4.9 15.1C4.6 14.5 4 14.1 3.3 14.1H3.1C2 14.1 1.1 13.2 1.1 12.1C1.1 11 2 10.1 3.1 10.1H3.2C3.9 10.1 4.5 9.6 4.8 9C5.1 8.4 5 7.7 4.4 7.2L4.3 7.1C3.9 6.7 3.7 6.2 3.7 5.7C3.7 5.2 3.9 4.7 4.3 4.3C4.7 3.9 5.2 3.7 5.7 3.7C6.2 3.7 6.7 3.9 7.1 4.3L7.2 4.4C7.7 5 8.4 5.1 9 4.8C9.6 4.5 10 3.9 10 3.2V3C10 1.9 10.9 1 12 1C13.1 1 14 1.9 14 3V3.1C14 3.8 14.5 4.4 15.1 4.7C15.7 5 16.4 4.9 16.9 4.3L17 4.2C17.4 3.8 17.9 3.6 18.4 3.6C18.9 3.6 19.4 3.8 19.8 4.2C20.2 4.6 20.4 5.1 20.4 5.6C20.4 6.1 20.2 6.6 19.8 7L19.7 7.1C19.1 7.6 19 8.3 19.3 8.9C19.6 9.5 20.2 9.9 20.9 9.9H21.1C22.2 9.9 23.1 10.8 23.1 11.9C23.1 13 22.2 13.9 21.1 13.9H21C20.3 13.9 19.7 14.4 19.4 15Z" stroke="#10B981" strokeWidth="2"/>
        </svg>
      </div>
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-300/10 via-purple-300/10 to-pink-300/10 dark:from-blue-400/20 dark:via-purple-400/20 dark:to-pink-400/20 rounded-full blur-3xl animate-pulse transition-colors duration-500"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-300/10 via-pink-300/10 to-red-300/10 dark:from-purple-400/20 dark:via-pink-400/20 dark:to-red-400/20 rounded-full blur-3xl animate-pulse transition-colors duration-500" style={{animationDelay: '1.5s'}}></div>
      
      <div className="absolute inset-0 opacity-20 dark:opacity-30 transition-opacity duration-500">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 dark:bg-blue-300/60 rounded-full animate-pulse transition-colors duration-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] transition-opacity duration-500" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    
    if (isDarkMode) {
      html.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      html.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-5 right-5 z-50 p-3 rounded-full transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-105"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-500" />
      ) : (
        <Moon className="h-6 w-6 text-gray-600" />
      )}
    </button>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = `fixed w-full z-40 transition-all duration-300 ${
    isScrolled ? "py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg" : "py-5 bg-transparent"
  }`;

  return (
    <nav className={navClasses}>
      <div className="container flex items-center justify-between px-4 mx-auto max-w-6xl">
        <a
          className="text-xl font-bold text-blue-600 dark:text-blue-400 flex items-center hover:scale-105 transition-transform"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-gray-900 dark:text-white">Joseph Metzen</span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </span>
        </a>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-gray-900 dark:text-white z-50 relative hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden">
            <div className="flex flex-col space-y-8 text-xl">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-transparent"
    >
      <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
              <span className="block">Hi, I'm</span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block mt-2">
                Joseph Metzen
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Computer Engineering student passionate about systems engineering, 
            embedded systems, and software development. Currently pursuing my 
            Bachelor's at Iowa State University.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a 
              href="#projects" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
        <ArrowDown className="h-5 w-5 text-blue-600 dark:text-blue-400" />
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900 dark:text-white">
          About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white leading-tight">
              Computer Engineering Student & Systems Engineering Intern
            </h3>

            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a Computer Engineering student at Iowa State University. I work as a 
                systems engineering intern at EnCompass, where I focus on network systems, 
                hardware programming, and full-stack development.
              </p>

              <p>
                I love building things that connect hardware and software - whether it's 
                autonomous vehicles or network infrastructure. Give me a tough problem 
                and I'm excited to figure it out.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800 dark:group-hover:to-purple-800 transition-all duration-300">
                  <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Software Development</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Full-stack development using Java, C/C++, and modern web technologies with focus on system integration.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800 dark:group-hover:to-purple-800 transition-all duration-300">
                  <Cpu className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Systems Engineering</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Network design, system hardening, virtualization, and cloud platform management for enterprise environments.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800 dark:group-hover:to-purple-800 transition-all duration-300">
                  <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Hardware Integration</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Embedded systems programming, sensor integration, and hardware control using VHDL and Verilog.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skills = [
    { name: "C/C++", level: 4, category: "programming" },
    { name: "Java", level: 5, category: "programming" },
    { name: "SQL", level: 4, category: "programming" },
    { name: "VHDL", level: 4, category: "programming" },
    { name: "Verilog", level: 4, category: "programming" },
    { name: "Spring Boot", level: 4, category: "frameworks" },
    { name: "Hibernate ORM", level: 4, category: "frameworks" },
    { name: "Android Development", level: 4, category: "frameworks" },
    { name: "Linux", level: 4, category: "frameworks" },
    { name: "Git/GitHub", level: 5, category: "tools" },
    { name: "Network Design", level: 4, category: "tools" },
    { name: "System Hardening", level: 4, category: "tools" },
    { name: "Virtualization", level: 4, category: "tools" },
    { name: "Cloud Platforms", level: 4, category: "tools" },
    { name: "POSTMAN", level: 4, category: "tools" },
  ];

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "programming", label: "Languages" },
    { id: "frameworks", label: "Frameworks" },
    { id: "tools", label: "Tools" }
  ];

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900 dark:text-white">
          My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                  : "bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200/50 dark:border-gray-600/50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="group bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50 hover:scale-105"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{skill.name}</h3>
              </div>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    className={`transition-colors duration-300 ${
                      star <= skill.level
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Android Application Development",
      description: "Full-stack Android app with Java, Spring Boot, SQL, and Hibernate ORM. Features complete user data management with CRUD operations and API integration.",
      image: "https://via.placeholder.com/600x400/3B82F6/ffffff?text=Android+App",
      tags: ["Java", "Spring Boot", "SQL", "Hibernate", "Android", "POSTMAN"],
      demoUrl: "#",
      year: "2025",
    },
    {
      id: 2,
      title: "Autonomous Vehicle Project (CyBot)",
      description: "Self-driving robot with obstacle detection and navigation. Programmed sensor integration including bump sensors, cliff sensors, IR distance sensors, and servo-controlled scanning. Built collision avoidance, boundary detection, and autonomous pathfinding algorithms in C for embedded hardware control.",
      image: "/projects/cybot.png",
      tags: ["C", "Embedded Systems", "Sensors", "Real-Time Control", "Obstacle Avoidance"],
      demoUrl: "https://github.com/Metz2922/CyBot-Autonomous-Vehicle",
      year: "2024",
    },
    {
      id: 3,
      title: "Network Systems Engineering",
      description: "Enterprise network infrastructure design and implementation with focus on security, virtualization, and system hardening.",
      image: "https://via.placeholder.com/600x400/10B981/ffffff?text=Network+Systems",
      tags: ["Network Design", "Virtualization", "System Hardening", "Cloud Platforms"],
      demoUrl: "#",
      year: "2024",
    }
  ];

  const seniorProject = {
    id: 4,
    title: "Semantic Segmentation Optimization - Iowa State University",
    description: "Engineering capstone project developing assistive wheelchair technology using eye tracking and semantic segmentation for individuals with cerebral palsy. Optimized U-Net algorithm performance by implementing pipelined multi-core processing on Xilinx Kria board, significantly increasing speed through parallel processing.",
    image: "https://via.placeholder.com/600x400/8B5CF6/ffffff?text=Senior+Design",
    tags: ["Machine Learning", "PyTorch", "Xilinx FPGA", "U-Net", "Embedded Systems", "C++", "ONNX"],
    demoUrl: "#",
    year: "2024-2025",
  };

  return (
    <section id="projects" className="py-24 px-4 relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto text-lg">
          Here are some of my key projects showcasing my skills in software development,
          systems engineering, and embedded systems programming.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project, key) => (
            <div
              key={key}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100/80 dark:bg-blue-900/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.year}
                  </span>
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium border border-gray-200/50 dark:border-gray-600/50 rounded-full bg-gray-50/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-300 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Senior Design Project</span>
          </h3>

          <div className="group bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-purple-200/50 dark:border-purple-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="h-80 lg:h-full overflow-hidden relative">
                <img
                  src={seniorProject.image}
                  alt={seniorProject.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-purple-900/30 to-transparent"></div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-100/80 dark:bg-purple-900/50 px-4 py-2 rounded-full backdrop-blur-sm">
                    {seniorProject.year}
                  </span>
                  <span className="text-sm font-medium text-pink-600 dark:text-pink-400 bg-pink-100/80 dark:bg-pink-900/50 px-4 py-2 rounded-full backdrop-blur-sm">
                    Capstone Project
                  </span>
                </div>

                <h4 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
                  {seniorProject.title}
                </h4>

                <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed">
                  {seniorProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {seniorProject.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium border border-purple-200/50 dark:border-purple-600/50 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={seniorProject.demoUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
            href="https://www.linkedin.com/in/joey-metzen/"
          >
            Connect on LinkedIn <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Message sent! Thank you for your message. I'll get back to you soon.");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto text-lg">
          Interested in collaborating on a project or discussing opportunities? 
          Feel free to reach out. I'm always open to new challenges and connections.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800 dark:group-hover:to-purple-800 transition-all duration-300">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                  <a
                    href="mailto:jjmetzen@iastate.edu"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    jjmetzen@iastate.edu
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800 dark:group-hover:to-purple-800 transition-all duration-300">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                  <a
                    href="tel:+13192707454"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    (319) 270-7454
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800 dark:group-hover:to-purple-800 transition-all duration-300">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                  <span className="text-gray-600 dark:text-gray-300">
                    Ames, Iowa
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-gray-900 dark:text-white">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/joey-metzen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800 dark:hover:to-purple-800 text-blue-600 dark:text-blue-400 transition-all duration-300 transform hover:scale-105"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Metz2922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800 dark:hover:to-purple-800 text-blue-600 dark:text-blue-400 transition-all duration-300 transform hover:scale-105"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-200/50 dark:border-gray-600/50">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Send a Message</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-none transition-all duration-300"
                  placeholder="Hello Joseph, I'd like to discuss..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm relative border-t border-gray-200/50 dark:border-gray-700/50">
      <div className="container mx-auto max-w-6xl flex flex-wrap justify-between items-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Joseph Metzen. All rights reserved.
        </p>
        <a
          href="#hero"
          className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800 dark:hover:to-purple-800 text-blue-600 dark:text-blue-400 transition-all duration-300 transform hover:scale-105"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 text-gray-900 dark:text-white overflow-x-hidden transition-all duration-500">
      <AnimatedBackground />
      <ThemeToggle />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};