import { Card } from "@/components/ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Golang", "C++", "JavaScript", "TypeScript"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Nest.js", "Strapi"],
    },
    {
      category: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "React Native",
        "TailwindCSS",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "MSSQL"],
    },
    {
      category: "Tools & Technologies",
      skills: [
        "Git",
        "Postman",
        "Redis",
        "BitBucket",
        "VS Code",
        "Socket.IO",
        "Salesforce",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Technical Skills</h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
