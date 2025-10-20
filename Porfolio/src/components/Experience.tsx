import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "Binmile Technology",
      position: "Associate Software Engineer",
      period: "Jul 2024 – Present",
      type: "In Office",
      achievements: [
        "Engineered 5+ backend services using Node.js, Strapi, NestJS with MongoDB/PostgreSQL",
        "Integrated REST APIs with Salesforce, applied SSO, and enabled email-based communication",
        "Utilized BitBucket, Git, Postman, and Redis for source control and deployment operations",
      ],
      tags: ["Node.js", "NestJS", "Strapi", "MongoDB", "PostgreSQL", "Salesforce"],
    },
    {
      company: "GeeksforGeeks",
      position: "Technical Content Engineer",
      period: "Jan 2024 – Jun 2024",
      type: "In Office",
      achievements: [
        "Authored 20+ MERN stack articles, enhancing platform's educational content",
        "Validated and edited 15+ articles to ensure technical accuracy",
        "Released 1 full-stack MERN project for public learners",
      ],
      tags: ["MERN", "Technical Writing", "Content Creation"],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Work Experience</h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50"
              >
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Briefcase className="text-primary" size={24} />
                        {exp.company}
                      </h3>
                      <p className="text-lg text-primary font-semibold mt-1">
                        {exp.position}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={18} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
