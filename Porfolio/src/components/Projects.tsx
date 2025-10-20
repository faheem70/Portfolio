import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "AESL Work Force Model (Adani)",
      description:
        "Smart meter job platform with customizable workflows and real-time tracking",
      highlights: [
        "Contributed in 8-member team using NestJS, MSSQL, ReactJS",
        "Configured 10+ customizable job forms and workflows",
        "Integrated Mapples API for external check-in/check-out synchronization",
        "Developed inventory alert mechanism for smart meter tracking",
      ],
      tags: ["NestJS", "MSSQL", "ReactJS", "Mapples API", "Multi-tenant"],
    },
    {
      title: "Keysight Newsletter",
      description:
        "Efficient backend system with SSO login and Salesforce-Eloqua integration",
      highlights: [
        "Improved query speed by 20% using Node.js and MongoDB",
        "Implemented adaptive form builder syncing Eloqua and Salesforce fields",
        "Configured SMTP service for real-time notifications",
        "Enabled automated newsletter dispatch with dynamic templates",
      ],
      tags: ["Node.js", "MongoDB", "Salesforce", "Eloqua", "SMTP"],
    },
    {
      title: "Sirius DigiTech (Adani Lab)",
      description:
        "Backend architecture with real-time alerts and notification system",
      highlights: [
        "Cut API delay by 25% with Node.js, Strapi, PostgreSQL",
        "Secured form endpoints with role-based access",
        "Executed notification-based blog insights system",
        "Created automated demo form for access authorization",
      ],
      tags: ["Node.js", "Strapi", "PostgreSQL", "Email Automation"],
    },
    {
      title: "E-commerce API Backend",
      description: "RESTful API for e-commerce with authentication and payments",
      highlights: [
        "Structured product, cart, and checkout flows via NestJS, MongoDB, JWT",
        "Accelerated product queries by 30%",
        "Established role-based access control",
        "Included payment processing with clean code principles",
      ],
      tags: ["NestJS", "MongoDB", "JWT", "REST API", "Payments"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of the impactful projects I've worked on
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50 group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                      size={20}
                    />
                  </div>

                  <p className="text-muted-foreground">{project.description}</p>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
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
