"use client";

import { useState, useEffect } from "react";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Progress } from "~/components/ui/progress";
import { Button } from "~/components/ui/button";

interface Skill {
  name: string;
  level: number;
  category: string;
  description: string;
}

const skills: Skill[] = [
  // Programming Languages
  { name: "Python", level: 90, category: "Languages", description: "Data analysis, web development, automation, and AI/ML applications" },
  { name: "Java", level: 95, category: "Languages", description: "Object-oriented programming, enterprise applications, and Android development" },
  { name: "C/C++", level: 70, category: "Languages", description: "System programming, performance-critical applications, and embedded systems" },
  { name: "C#", level: 92, category: "Languages", description: "Game development with Unity, desktop applications, and .NET framework" },
  { name: "HTML", level: 91, category: "Languages", description: "Semantic markup, accessibility, and web structure" },
  { name: "CSS", level: 85, category: "Languages", description: "Styling, responsive design, and modern layout techniques" },
  { name: "Swift", level: 30, category: "Languages", description: "iOS development, mobile applications, and Apple ecosystem" },
  { name: "GoLang", level: 87, category: "Languages", description: "Concurrent programming, microservices, and system programming" },
  { name: "PHP", level: 25, category: "Languages", description: "Web development, server-side scripting, and dynamic content" },

  // Frontend Technologies
  { name: "React.js", level: 93, category: "Frontend", description: "Component-based UI, hooks, state management, and modern web applications" },
  { name: "Next.js", level: 97, category: "Frontend", description: "Full-stack React framework, SSR, SSG, and performance optimization" },
  { name: "TailwindCSS", level: 94, category: "Frontend", description: "Utility-first CSS framework, rapid UI development, and responsive design" },
  { name: "ShadCN", level: 96, category: "Frontend", description: "Modern UI component library, accessibility, and design system" },

  // Backend Technologies
  { name: "Django", level: 32, category: "Backend", description: "Python web framework, rapid development, and scalable applications" },
  { name: "REST API", level: 72, category: "Backend", description: "API design, HTTP methods, and web service architecture" },
  { name: "T3 Stack", level: 89, category: "Backend", description: "TypeScript, tRPC, Prisma, and Next.js full-stack development" },

  // Databases
  { name: "MySQL", level: 78, category: "Database", description: "Relational database management, SQL queries, and data integrity" },
  { name: "PostgreSQL", level: 81, category: "Database", description: "Advanced SQL features, JSON support, and performance optimization" },

  // Game Development
  { name: "Unity3D", level: 73, category: "Game Dev", description: "3D game development, C# scripting, and cross-platform deployment" },
  { name: "Unreal Engine", level: 32, category: "Game Dev", description: "AAA game development, Blueprint visual scripting, and advanced graphics" },
  { name: "Blender", level: 88, category: "Game Dev", description: "3D modeling, animation, and asset creation for games" },
  { name: "PyGame", level: 25, category: "Game Dev", description: "2D game development, graphics programming, and game mechanics" },

  // AI/ML & Computer Vision
  { name: "OpenCV", level: 51, category: "AI/ML", description: "Computer vision, image processing, and real-time video analysis" },
  { name: "OpenAI API", level: 84, category: "AI/ML", description: "GPT integration, natural language processing, and AI-powered applications" },
  { name: "GeminiAPI", level: 94, category: "AI/ML", description: "Google's AI API, multimodal AI, and advanced language models" },
  { name: "Neat-Python", level: 21, category: "AI/ML", description: "NeuroEvolution of Augmenting Topologies, genetic algorithms, and AI evolution" },
  { name: "NumPy", level: 23, category: "AI/ML", description: "Numerical computing, array operations, and scientific computing" },
  { name: "Pandas", level: 33, category: "AI/ML", description: "Data manipulation, analysis, and structured data processing" },

  // Mobile Development
  { name: "XCode", level: 21, category: "Mobile", description: "iOS development environment, debugging, and app deployment" },
  { name: "SwiftUI", level: 23, category: "Mobile", description: "Declarative UI framework, modern iOS development, and responsive interfaces" },

  // Cloud & APIs
  { name: "Google Cloud Platform", level: 58, category: "Cloud", description: "Cloud computing, storage, and scalable infrastructure" },

  // Desktop Applications
  { name: "Tkinter", level: 67, category: "Desktop", description: "Python GUI development, desktop applications, and user interfaces" },

  // Web Automation
  { name: "Selenium", level: 81, category: "Automation", description: "Web browser automation, testing, and data scraping" },

  // Speech & Audio
  { name: "SpeechRecognition", level: 75, category: "Audio", description: "Voice input processing, speech-to-text, and voice commands" },

  // Document Processing
  { name: "UniPdf", level: 71, category: "Documents", description: "PDF manipulation, document processing, and file conversion" }
];

const categories = ["All", "Languages", "Frontend", "Backend", "Database", "Game Dev", "AI/ML", "Mobile", "Cloud", "Desktop", "Automation", "Audio", "Documents"];

interface SkillsSectionProps {
  theme?: "dark" | "light";
}

export function SkillsSection({ theme = "dark" }: SkillsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({});
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  useEffect(() => {
    // Only animate when category changes, not on every render
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Reset all filtered skills to 0 first
    const resetSkills: Record<string, number> = {};
    filteredSkills.forEach(skill => {
      resetSkills[skill.name] = 0;
    });
    setAnimatedSkills(resetSkills);

    // Then animate each skill to its target level
    const timer = setTimeout(() => {
      filteredSkills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => ({
            ...prev,
            [skill.name]: skill.level
          }));
        }, index * 100);
      });
      
      // Mark animation as complete
      setTimeout(() => setIsAnimating(false), filteredSkills.length * 100 + 500);
    }, 50);

    return () => {
      clearTimeout(timer);
      setIsAnimating(false);
    };
  }, [selectedCategory]); // Only depend on selectedCategory

  const getLevelColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getLevelText = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <div className={`p-4 sm:p-6 lg:p-8 h-full overflow-y-auto scrollbar-terminal ${
      theme === "dark" 
        ? "bg-gradient-to-br from-gray-900 to-black" 
        : "bg-gradient-to-br from-gray-50 to-gray-100"
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 font-mono ${
            theme === "dark" ? "text-green-400" : "text-green-600"
          }`}>
            skills
          </h1>
          <div className={`h-1 w-16 sm:w-24 ${
            theme === "dark" ? "bg-green-400" : "bg-green-600"
          }`}></div>
        </div>

        {/* Category Filter */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer font-mono text-xs sm:text-sm 
                  ${
                    selectedCategory === category
                      ? theme === "dark"
                        ? "bg-green-400 text-black hover:bg-green-400 hover:text-black"
                        : "bg-green-700 text-white hover:bg-green-700 hover:text-white"
                      :  theme === "dark"
                          ? "border-green-400/50 text-green-300 hover:bg-green-400/10"
                          : "text-green-700 border-green-700/50 hover:bg-green-700/10"
                  }`
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill) => (
            <Card key={skill.name} className={`p-4 sm:p-6 ${
              theme === "dark" 
                ? "bg-gray-900/50 border-green-400/30" 
                : "bg-white border-green-600/30"
            }`}>
              <div className="space-y-3 sm:space-y-4">
                {/* Skill Header */}
                <div className="flex justify-between items-start gap-2">
                  <h3 className={`text-base sm:text-lg font-semibold font-mono break-words flex-1 min-w-0 ${ theme === "dark" ? "text-green-400" : "text-green-700" }`}>
                    {skill.name}
                  </h3>
                  <Badge
                    variant="outline"
                    className={`text-xs flex-shrink-0 ${
                      (animatedSkills[skill.name] ?? 0) >= 90
                        ? theme === "dark"
                          ? "border-green-500/50 text-green-400"
                          : "border-green-800/50 text-green-700"

                        : (animatedSkills[skill.name] ?? 0) >= 80
                          ? theme === "dark"
                            ? "border-blue-500/50 text-blue-400"
                            : "border-blue-800/50 text-blue-700"
                            
                        : (animatedSkills[skill.name] ?? 0) >= 70
                          ? theme === "dark"
                            ? "border-yellow-500/50 text-yellow-400"
                            : "border-yellow-600/50 text-yellow-600"

                        : theme === "dark"
                          ? "border-red-500/50 text-red-400"
                          : "border-red-600/50 text-red-600"
                    }`}
                  >
                    {getLevelText(animatedSkills[skill.name] ?? 0)}
                  </Badge>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className={`font-mono ${ theme === "dark" ? "text-gray-300" : "text-gray-500" }`}>Proficiency</span>
                    <span className={`font-mono ${ theme === "dark" ? "text-gray-400" : "text-gray-800" }`}>
                      {animatedSkills[skill.name] ?? 0}%
                    </span>
                  </div>
                  <Progress
                    value={animatedSkills[skill.name] ?? 0}
                    theme={theme}
                    className="h-2"
                  />
                </div>

                {/* Description */}
                <p className={`text-xs sm:text-sm font-mono leading-relaxed ${ theme === "dark" ? "text-gray-300" : "text-gray-500" }`}>
                  {skill.description}
                </p>

                {/* Category */}
                <div className="flex justify-between items-center">
                  <span className={`font-mono text-xs ${ theme === "dark" ? "text-gray-300" : "text-gray-500" }`}>
                    {skill.category}
                  </span>
                  <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${getLevelColor(animatedSkills[skill.name] ?? 0)}`}></div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <Card className={`mt-6 sm:mt-8 p-4 sm:p-6 ${
          theme === "dark" 
            ? "bg-gray-900/50 border-green-400/30" 
            : "bg-white border-green-600/30"
        }`}>
          <h2 className={`ext-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-mono ${ theme === "dark" ? "text-green-400" : "text-green-700" }`}>
            Skills Summary
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className={`text-2xl sm:text-3xl font-bold font-mono ${ theme === "dark" ? "text-green-400" : "text-green-700" }`}>
                {skills.length}
              </div>
              <div className={`font-mono text-sm ${ theme === "dark" ? "text-gray-400" : "text-gray-500" }`}>Technologies</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl sm:text-3xl font-bold font-mono ${ theme === "dark" ? "text-green-400" : "text-green-700" }`}>
                {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
              </div>
              <div className={`font-mono text-sm ${ theme === "dark" ? "text-gray-400" : "text-gray-500" }`}>Average Proficiency</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl sm:text-3xl font-bold font-mono ${ theme === "dark" ? "text-green-400" : "text-green-700" }`}>
                {categories.length - 1}
              </div>
              <div className={`font-mono text-sm ${ theme === "dark" ? "text-gray-400" : "text-gray-500" }`}>Categories</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl sm:text-3xl font-bold font-mono ${ theme === "dark" ? "text-green-400" : "text-green-700" }`}>
                {skills.filter(skill => skill.level >= 80).length}
              </div>
              <div className={`font-mono text-sm ${ theme === "dark" ? "text-gray-400" : "text-gray-500" }`}>Expert Level</div>
            </div>
          </div>
          
          {/* Proficiency Distribution */}
          <div className={`mt-6 pt-6 border-t ${ theme === "dark" ? "border-green-400/20" : "border-green-800/20" }`}>
            <h3 className={`text-lg font-semibold mb-4 font-mono text-center ${ theme === "dark" ? "text-green-400" : "text-green-700" }`}>
              Proficiency Distribution
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className={`text-xl font-bold font-mono ${ theme === "dark" ? "text-green-400" : "text-green-700" }`}>
                  {skills.filter(skill => skill.level >= 90).length}
                </div>
                <div className={`font-mono text-xs ${ theme === "dark" ? "text-gray-300" : "text-gray-500" }`}>Expert (90%+)</div>
              </div>
              <div className="text-center">
                <div className={`text-xl font-bold font-mono ${ theme === "dark" ? "text-blue-400" : "text-blue-700" }`}>
                  {skills.filter(skill => skill.level >= 80 && skill.level < 90).length}
                </div>
                <div className={`font-mono text-xs ${ theme === "dark" ? "text-gray-300" : "text-gray-500" }`}>Advanced (80-89%)</div>
              </div>
              <div className="text-center">
                <div className={`text-xl font-bold font-mono ${ theme === "dark" ? "text-yellow-400" : "text-yellow-700" }`}>
                  {skills.filter(skill => skill.level >= 70 && skill.level < 80).length}
                </div>
                <div className={`font-mono text-xs ${ theme === "dark" ? "text-gray-300" : "text-gray-500" }`}>Intermediate (70-79%)</div>
              </div>
              <div className="text-center">
                <div className={`text-xl font-bold font-mono ${ theme === "dark" ? "text-orange-400" : "text-orange-700" }`}>
                  {skills.filter(skill => skill.level < 70).length}
                </div>
                <div className={`font-mono text-xs ${ theme === "dark" ? "text-gray-300" : "text-gray-500" }`}>Learning (&lt;70%)</div>
              </div>
            </div>
          </div>

          {/* Top Skills */}
          <div className="mt-6 pt-6 border-t border-green-400/20">
            <h3 className={`text-lg font-semibold mb-4 font-mono text-center ${ theme === "dark" ? "text-green-400" : "text-green-700" }`}>
              Top Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills
                .sort((a, b) => b.level - a.level)
                .slice(0, 8)
                .map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className={`text-xs font-mono ${
                      skill.level >= 90
                        ? theme === "dark"
                          ? "border-green-500/50 text-green-400"
                          : "border-green-800/50 text-green-700"
                        : skill.level >= 80
                        ? theme === "dark"
                          ? "border-blue-500/50 text-blue-400"
                          : "border-blue-800/50 text-blue-700"
                        : skill.level >= 70
                        ? theme === "dark"
                          ? "border-yellow-500/50 text-yellow-400"
                          : "border-yellow-800/50 text-yellow-700"
                        : theme === "dark"
                          ? "border-orange-500/50 text-orange-400"
                          : "border-orange-800/50 text-orange-700"
                    }`}
                  >
                    {skill.name} ({skill.level}%)
                  </Badge>
                ))}
            </div>
          </div>
        </Card>

        {/* Terminal-style footer */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className={`font-mono text-xs sm:text-sm ${ theme === "dark" ? "text-green-400" : "text-green-700" }`}>
            <span className="animate-pulse">●</span> Always learning, always growing
          </div>
        </div>
      </div>
    </div>
  );
}
