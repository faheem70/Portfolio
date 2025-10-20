import { Card } from "@/components/ui/card";
import { Code2, Database, Server } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Server,
      title: "Backend Development",
      description: "Expert in Node.js, NestJS, and building scalable APIs",
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Proficient in ReactJS and modern web technologies",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Experienced with PostgreSQL, MongoDB, and MSSQL",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              I'm a passionate Software Developer with 1 year of professional
              experience, specializing in building robust backend services and
              full-stack web applications. Currently working at Binmile Technology,
              I've contributed to multiple enterprise-level projects for clients
              like Adani and Keysight, focusing on creating scalable solutions with
              modern technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
