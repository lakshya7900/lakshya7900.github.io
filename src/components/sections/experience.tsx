"use client";

import { useState, useEffect } from "react";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

const experiences: Experience[] = [
  {
    id: "1",
    company: "SBM Group SIliguri",
    position: "Web Developer Intern",
    duration: "May 2025 - August 2025",
    location: "West Bengal, India",
    description: "Redesigned and developed the company's website using modern web technologies to enhance performance and user experience. Collaborated on building new features, improving site responsiveness, and aligning the platform with business goals. Contributed to front-end architecture decisions and maintained high standards for clean, efficient, and scalable code.",
    technologies: ["React", "Node.js", "TaiwindCSS"],
    achievements: [
      "Redesigned the company website using React.js and pure CSS for a responsive, modern user experience",
      "Developed new features to enhance engagement and streamline navigation",
      "Conducted market research to align the platform with industry trends and user needs"
    ]
  },
  {
    id: "2",
    company: "EduBank.AI",
    position: "Founder",
    duration: "February 2025 - Present",
    location: "Blacksburg, VA",
    description: "Traditional study materials often limit AI-driven assistance, making it challenging for educators to maximize their resources. That's where EduBank.AI comes in!",
    technologies: ["T3 Stak", "Next.js", "TailwindCSS", "GoLang"],
    achievements: [
      "Developing a platform where teachers can upload lecture notes in any format —PDFs, videos, images, and more.",
      "Creating an AI system that processes the content and enables interactive learning.",
      "Implementing features like question generation, unique example variations, and lecture assistance—all strictly based on the teacher's provided materials."
    ]
  },
  {
    id: "3",
    company: "ModelVision",
    position: "Co-founder",
    duration: "September 2024 - October 2024",
    location: "Blacksburg, VA",
    description: "The absence of three-dimensional visual representations in educational books limits student engagement and hinders learning. That's where we come into play! ModelVision brings a new and innovative approach to learning. We bring textbooks to life.",
    technologies: ["Unity3D", "C#"],
    achievements: [
      "Engineered an app enabling image capture and 3D AR model displays",
      "Collaborated with team members to bring augmented reality applications to classrooms.",
    ]
  }
];

interface ExperienceSectionProps {
  theme?: "dark" | "light";
}

export function ExperienceSection({ theme = "dark" }: ExperienceSectionProps) {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (selectedExperience) {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [selectedExperience]);

  return (
    <div className={`p-4 sm:p-6 lg:p-8 h-full overflow-y-auto scrollbar-terminal ${
      theme === "dark" 
        ? "bg-gradient-to-br from-gray-900 to-black" 
        : "bg-gradient-to-br from-gray-50 to-gray-100"
    }`}>
      <div className="max-w-6xl mx-auto section-content">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 font-mono ${
            theme === "dark" ? "text-green-400" : "text-green-600"
          }`}>
            experience
          </h1>
          <div className={`h-1 w-16 sm:w-24 ${
            theme === "dark" ? "bg-green-400" : "bg-green-600"
          }`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Experience List */}
          <div className="lg:col-span-1">
            <Card className={`p-4 sm:p-6 ${
              theme === "dark" 
                ? "bg-gray-900/50 border-green-400/30" 
                : "bg-white border-green-600/30"
            }`}>
              <div className="space-y-2 sm:space-y-3">
                {experiences.map((exp) => (
                  <Button
                    key={exp.id}
                    variant={selectedExperience?.id === exp.id ? "default" : "ghost"}
                    className={`w-full justify-start text-left h-auto p-2 sm:p-3 ${
                      selectedExperience?.id === exp.id
                        ? theme === "dark" 
                          ? "bg-green-400 text-black hover:bg-green-400"
                          : "bg-green-600 text-white hover:bg-green-600"
                        : theme === "dark"
                          ? "text-gray-300 hover:bg-green-400/10"
                          : "text-gray-600 hover:bg-green-100"
                    }`}
                    onClick={() => setSelectedExperience(exp)}
                  >
                    <div>
                      <div className="font-semibold text-sm sm:text-base text-wrap">{exp.position}</div>
                      <div className="text-xs sm:text-sm opacity-80 text-wrap">{exp.company}</div>
                      <div className="text-xs opacity-60 text-wrap">{exp.duration}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Experience Details */}
          <div className="lg:col-span-2">
            {selectedExperience ? (
              <Card className={`p-4 sm:p-6 ${
                theme === "dark" 
                  ? "bg-gray-900/50 border-green-400/30" 
                  : "bg-white border-green-600/30"
              }`}>
                <div className="space-y-4 sm:space-y-6">
                  {/* Header */}
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-bold font-mono ${
                      theme === "dark" ? "text-green-400" : "text-green-600"
                    }`}>
                      {selectedExperience.position}
                    </h3>
                    <div className={`text-base sm:text-lg font-mono ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}>
                      {selectedExperience.company}
                    </div>
                    <div className={`text-xs sm:text-sm font-mono ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}>
                      {selectedExperience.duration} • {selectedExperience.location}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className={`text-base sm:text-lg font-semibold mb-2 font-mono ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>
                      Description
                    </h4>
                    <p className={`leading-relaxed font-mono text-xs sm:text-sm break-words ${ theme === "dark" ? "text-gray-300" : "text-gray-600" }`}>
                      {isTyping ? (
                        <span className="animate-pulse">Loading details...</span>
                      ) : (
                        selectedExperience.description
                      )}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className={`text-base sm:text-lg font-semibold mb-2 font-mono ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {selectedExperience.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={`text-xs ${ theme === "dark" ? "border-green-400/50 text-green-300" : "border-green-600/50 text-green-600" }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className={`text-base sm:text-lg font-semibold mb-2 font-mono ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>
                      Key Achievements
                    </h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {selectedExperience.achievements.map((achievement, index) => (
                        <li key={index} className={`flex items-start space-x-2 font-mono text-xs sm:text-sm break-words ${ theme === "dark" ? "text-gray-300" : "text-gray-500" }`}>
                          <span className={`mt-1 flex-shrink-0 ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>▶</span>
                          <span className="break-words">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className={`p-4 sm:p-6 ${
                theme === "dark" 
                  ? "bg-gray-900/50 border-green-400/30" 
                  : "bg-white border-green-600/30"
              }`}>
                <div className="text-center text-gray-400 font-mono">
                  <div className="text-4xl sm:text-6xl mb-4">👨‍💻</div>
                  <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>Select an Experience</h3>
                  <p className={`text-sm ${ theme === "dark" ? "text-gray-300" : "text-gray-500" }`}>Choose a position from the list to view detailed information</p>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Terminal-style footer */}
        <div className="mt-8 text-center">
          <div className={`font-mono text-sm ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>
            <span className="animate-pulse">●</span> Building the future, one commit at a time
          </div>
        </div>
      </div>
    </div>
  );
}
