"use client";

import { useState } from "react";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  relevantCourses: string[];
  technologies: string[];
}

const education: Education[] = [
  {
    id: "1",
    institution: "Virginia Polytechnic Institute and State University",
    degree: "Bachelor of Science",
    field: "General Engineering with Major in Computer Science",
    duration: "2024 - 2028",
    location: "Blacksburg, VA",
    description: "Comprehensive engineering education with a focus on computer science fundamentals, software development, and problem-solving. Gained strong foundation in programming, algorithms, and system design through rigorous coursework and hands-on projects.",
    achievements: [
      "Dean's List for multiple semesters",
      "Active member of Computer Science Society",
      "Completed multiple software development projects",
      "Participated in coding competitions and hackathons",
      "Strong foundation in both theoretical and practical computer science"
    ],
    relevantCourses: [
      "Data Structures and Algorithms",
      "Computer Organization and Architecture",
      "Software Design and Data Structures",
      "Computer Systems",
      "Database Systems",
      "Operating Systems",
      "Software Engineering",
      "Machine Learning",
      "Computer Networks"
    ],
    technologies: ["Python", "Java", "Git", "MATLAB"]
  },
  {
    id: "2",
    institution: "Delhi Public School",
    degree: "CBSE Senior Secondary Diploma",
    field: "Science",
    duration: "2022 - 2024",
    location: "Siliguri, West Bengal, India",
    description: "Completed senior secondary education with focus on science stream including Physics, Chemistry, Mathematics, and Computer Science. Developed strong analytical and problem-solving skills through rigorous academic curriculum.",
    achievements: [
      "High academic performance in science stream",
      "Active participation in science exhibitions",
      "Strong foundation in mathematics and sciences",
      "Developed interest in computer science and programming",
      "Participated in school-level competitions"
    ],
    relevantCourses: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Computer Science",
      "English",
      "Physical Education"
    ],
    technologies: ["python", "Basic Programming Concepts"]
  }
];


interface EducationSectionProps {
  theme?: "dark" | "light";
}

export function EducationSection({ theme = "dark" }: EducationSectionProps) {
  const [selectedEducation, setSelectedEducation] = useState<Education | null>(null);

  return (
    <div className={`p-8 h-full overflow-y-auto ${
      theme === "dark" 
        ? "bg-gradient-to-br from-gray-900 to-black" 
        : "bg-gradient-to-br from-gray-50 to-gray-100"
    }`}>
      <div className="max-w-6xl mx-auto section-content">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-4xl font-bold mb-2 font-mono ${
            theme === "dark" ? "text-green-400" : "text-green-600"
          }`}>
            education
          </h1>
          <div className={`h-1 w-24 ${
            theme === "dark" ? "bg-green-400" : "bg-green-600"
          }`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education List */}
          <div className="lg:col-span-1">
            <Card className={`p-6 ${
              theme === "dark" 
                ? "bg-gray-900/50 border-green-400/30" 
                : "bg-white border-green-600/30"
            }`}>
              <h2 className={`text-xl font-bold mb-4 font-mono ${
                theme === "dark" ? "text-green-400" : "text-green-600"
              }`}>
                Academic Background
              </h2>
              <div className="space-y-3">
                {education.map((edu) => (
                  <Button
                    key={edu.id}
                    variant={selectedEducation?.id === edu.id ? "default" : "ghost"}
                    className={`w-full justify-start text-left h-auto p-3 break-words text-wrap ${
                      selectedEducation?.id === edu.id
                        ? theme === "dark"
                          ? "bg-green-400 text-black hover:bg-green-400 hover:text-black"
                          : "bg-green-600 text-white hover:bg-green-600 hover:text-white"
                        : theme === "dark"
                          ? "text-gray-300 hover:bg-green-400/10"
                          : "text-gray-600 hover:bg-green-100"
                    }`}
                    onClick={() => setSelectedEducation(edu)}
                  >
                    <div className="w-full break-words">
                      <div className="font-semibold break-words text-wrap">{edu.degree}</div>
                      <div className="text-sm opacity-80 break-words text-wrap">{edu.field}</div>
                      <div className="text-xs opacity-60 break-words text-wrap">{edu.institution}</div>
                      <div className="text-xs opacity-60 break-words text-wrap">{edu.duration}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Education Details */}
          <div className="lg:col-span-2">
            {selectedEducation ? (
              <Card className={`p-6 ${
              theme === "dark" 
                ? "bg-gray-900/50 border-green-400/30" 
                : "bg-white border-green-600/30"
            }`}>
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <h2 className={`text-2xl font-bold font-mono ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>
                      {selectedEducation.degree} in {selectedEducation.field}
                    </h2>
                    <div className={`text-lg font-mono ${ theme === "dark" ? "text-gray-300" : "text-gray-500" }`}>
                      {selectedEducation.institution}
                    </div>
                    <div className={`text-sm font-mono ${ theme === "dark" ? "text-gray-400" : "text-gray-500" }`}>
                      {selectedEducation.duration} • {selectedEducation.location}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 font-mono ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>
                      Description
                    </h3>
                    <p className={`leading-relaxed font-mono text-sm break-words ${ theme === "dark" ? "text-gray-300" : "text-gray-500" }`}>
                      {selectedEducation.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 font-mono ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>
                      Key Achievements
                    </h3>
                    <ul className="space-y-1">
                      {selectedEducation.achievements.map((achievement, index) => (
                        <li key={index} className={`flex items-start space-x-2 font-mono text-sm break-words ${ theme === "dark" ? "text-gray-300" : "text-gray-500" }`}>
                          <span className={`mt-1 flex-shrink-0 ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>▶</span>
                          <span className="break-words">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Relevant Courses */}
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 font-mono ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>
                      Relevant Coursework
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedEducation.relevantCourses.map((course) => (
                        <Badge
                          key={course}
                          variant="outline"
                          className={`border-green-400/50 ${ theme === "dark" ? "text-green-300" : "text-green-600" }`}
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 font-mono ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedEducation.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={`border-green-400/50 ${ theme === "dark" ? "text-green-300" : "text-green-600" }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className={`p-6 ${
              theme === "dark" 
                ? "bg-gray-900/50 border-green-400/30" 
                : "bg-white border-green-600/30"
            }`}>
                <div className={`text-center font-mono ${ theme === "dark" ? "text-gray-400" : "text-gray-500" }`}>
                  <div className="text-6xl mb-4">🎓</div>
                  <h3 className={`text-xl font-semibold mb-2 ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>Select Education</h3>
                  <p>Choose an education entry to view detailed information</p>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Learning Philosophy */}
        <Card className={`mt-8 p-6 ${
          theme === "dark" 
            ? "bg-gray-900/50 border-green-400/30" 
            : "bg-white border-green-600/30"
        }`}>
          <h2 className={`text-2xl font-bold mb-4 font-mono ${
            theme === "dark" ? "text-green-400" : "text-green-600"
          }`}>
            Learning Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className={`text-lg font-semibold mb-2 font-mono ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>
                Continuous Learning
              </h3>
              <p className={`font-mono text-sm ${ theme === "dark" ? "text-gray-300" : "text-gray-500" }`}>
                Technology evolves rapidly, and I believe in staying current with the latest 
                trends and best practices through continuous learning and hands-on experimentation.
              </p>
            </div>
            <div>
              <h3 className={`text-lg font-semibold mb-2 font-mono ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>
                Practical Application
              </h3>
              <p className={`font-mono text-sm ${ theme === "dark" ? "text-gray-300" : "text-gray-500" }`}>
                I focus on applying theoretical knowledge to real-world problems, building 
                projects that demonstrate understanding and provide value to users.
              </p>
            </div>
          </div>
        </Card>

        {/* Terminal-style footer */}
        <div className="mt-8 text-center">
          <div className={`font-mono text-sm ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>
            <span className="animate-pulse">●</span> Knowledge is the foundation of innovation
          </div>
        </div>
      </div>
    </div>
  );
}
