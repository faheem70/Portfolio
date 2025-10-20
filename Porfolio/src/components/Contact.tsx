import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Code2 } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "faheemakhtar19730@gmail.com",
      href: "mailto:faheemakhtar19730@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9670715944",
      href: "tel:+919670715944",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/faheemakhtar",
      username: "@faheemakhtar",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/faheem-akhtar",
      username: "faheem-akhtar",
    },
    {
      icon: Code2,
      label: "LeetCode",
      href: "https://leetcode.com/faheemakhtar",
      username: "@faheemakhtar",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50"
              >
                <a
                  href={contact.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <contact.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {contact.label}
                    </p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">
              Connect With Me
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50 group"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 text-center"
                  >
                    <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <social.icon className="text-white" size={28} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {social.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {social.username}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="gradient-primary text-white border-0 shadow-glow hover:shadow-elegant transition-all duration-300"
            >
              <a href="mailto:faheemakhtar19730@gmail.com">Send Me an Email</a>
            </Button>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border/50 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Faheem Akhtar. Built with React & Tailwind
          CSS.
        </p>
      </footer>
    </section>
  );
};
