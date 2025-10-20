import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

export const Education = () => {
  const education = [
    {
      institution: "KIET Group of Institutions",
      degree: "B.Tech in Information Technology",
      period: "2020 – 2024",
      grade: "8.78/10 CGPA",
    },
    {
      institution: "Azamgarh Public School",
      degree: "CBSE (XII)",
      period: "2018 – 2019",
      grade: "82.6%",
    },
    {
      institution: "Mother Ayesha Children Academy",
      degree: "CBSE (X)",
      period: "2016 – 2017",
      grade: "8.6/10 CGPA",
    },
  ];

  const certifications = [
    "Virtual Salesforce Developer",
    "Web Development - Coursera",
    "Data Structures - Coursera",
    "CPA in C++ - Cisco",
    "OOP in Java - Coursera",
    "C for Everyone - Coursera",
  ];

  const achievements = [
    {
      title: "CodeKaze - Coding Contest",
      description: "Ranked 2481 All India, placed 22nd at KIET",
      date: "Jun 2023",
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Education & Certifications
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
          </div>

          {/* Education */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <GraduationCap className="text-primary" size={28} />
              Education
            </h3>
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">
                      {edu.institution}
                    </h4>
                    <p className="text-lg text-primary font-semibold mt-1">
                      {edu.degree}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                    <p className="text-lg font-bold text-primary">{edu.grade}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Award className="text-primary" size={28} />
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-4 hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/50"
                >
                  <p className="font-medium text-foreground">{cert}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold">Achievements</h3>
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h4 className="text-xl font-bold text-primary">
                      {achievement.title}
                    </h4>
                    <Badge variant="outline">{achievement.date}</Badge>
                  </div>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
