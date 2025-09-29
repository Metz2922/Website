import { Briefcase, Code, Cpu } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Computer Engineering Student & Systems Engineering Intern
            </h3>

            <p className="text-muted-foreground">
              I'm a Computer Engineering student at Iowa State University with hands-on 
              experience in systems engineering at EnCompass. I specialize in network 
              systems, hardware programming, and full-stack development.
            </p>

            <p className="text-muted-foreground">
              My passion lies in creating robust solutions that bridge hardware and 
              software, from autonomous vehicle systems to enterprise network 
              infrastructure. I enjoy tackling complex engineering challenges and 
              continuously expanding my technical expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Development</h4>
                  <p className="text-muted-foreground">
                    Full-stack development using Java, C/C++, and modern web technologies 
                    with focus on system integration.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Systems Engineering</h4>
                  <p className="text-muted-foreground">
                    Network design, system hardening, virtualization, and cloud platform 
                    management for enterprise environments.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Hardware Integration</h4>
                  <p className="text-muted-foreground">
                    Embedded systems programming, sensor integration, and hardware 
                    control using VHDL and Verilog.
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