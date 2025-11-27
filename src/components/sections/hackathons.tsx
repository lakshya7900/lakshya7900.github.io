"use client";

import { useState, useEffect } from "react";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

interface Hackathons {
  id: string;
  hackathon: string;
  project: string;
  prize?: string;
  technologies: string[];
  achievements: string[];
  links: string;
}

const hackathons: Hackathons[] = [
  {
    id: "1",
    hackathon: "Startup Sprint 2024",
    project: "ModelVision",
    prize: "Top 5 Runner Up",
    technologies: ["Unity", "Vuforia SDK", "Blender", "Google Cloud AI"],
    achievements: [
        "Built an interactive AR education platform, converting textbook diagrams into immersive 3D models by utilising the AR functionality of Vuforia SDK.",
        "Enhanced student engagement by enabling real-time exploration of complex concepts, through integration of an AI assistant for contextual responses",
        "Improved platform scalability by designing a modular system architecture for easy addition of new features"
      ],
    links: "https://devpost.com/software/modelvision"
  },
  {
    id: "2",
    hackathon: "VT Hacks 13",
    project: "Terra Scope",
    technologies: ["Next.js", "React 19", "TypeScript", "Mapbox GL JS", "Tailwind CSS", "Radix UI", "Python"],
    achievements: [
        "Developed a geospatial platform to identify urban heat-island hotspots using interactive mapping dashboards and predictive visualizations.",
        "Reduced analysis time by 50%, enabling faster insights for urban planning decisions through efficient dashboard design.",
        "Prioritized interventions with predictive visualizations, simulating potential temperature reductions in targeted areas."
      ],
    links: "https://devpost.com/software/terra-scope"
  }
];

interface HackathonsSectionProps {
  theme?: "dark" | "light";
}

export function HackathonsSection({ theme = "dark" }: HackathonsSectionProps) {
  const [selectedHackathons, setSelectedHackathons] = useState<Hackathons | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (selectedHackathons) {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [selectedHackathons]);

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
            hackathons
          </h1>
          <div className={`h-1 w-16 sm:w-24 ${
            theme === "dark" ? "bg-green-400" : "bg-green-600"
          }`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Hackathons List */}
          <div className="lg:col-span-1">
            <Card className={`p-4 sm:p-6 ${
              theme === "dark" 
                ? "bg-gray-900/50 border-green-400/30" 
                : "bg-white border-green-600/30"
            }`}>
              <div className="space-y-2 sm:space-y-3">
                {hackathons.map((hack) => (
                  <Button
                    key={hack.id}
                    variant={selectedHackathons?.id === hack.id ? "default" : "ghost"}
                    className={`w-full justify-start text-left h-auto p-2 sm:p-3 ${
                      selectedHackathons?.id === hack.id
                        ? theme === "dark" 
                          ? "bg-green-400 text-black hover:bg-green-400"
                          : "bg-green-600 text-white hover:bg-green-600"
                        : theme === "dark"
                          ? "text-gray-300 hover:bg-green-400/10"
                          : "text-gray-600 hover:bg-green-100"
                    }`}
                    onClick={() => setSelectedHackathons(hack)}
                  >
                    <div>
                      <div className="font-semibold text-sm sm:text-base text-wrap">{hack.hackathon}</div>
                      <div className="text-xs sm:text-sm opacity-80 text-wrap">{hack.project}</div>
                      { hack.prize ? 
                        <Badge 
                          key={hack.prize}
                          variant="outline" 
                          className={`transition-colors mt-2 ml-0 text-xs ${
                        //     theme === "dark"
                        //       ? "border-green-400/50 text-green-300 hover:bg-green-400/10"
                        //       : "border-green-600/50 text-green-700 hover:bg-green-100"
                        //   }`}
                          selectedHackathons?.id === hack.id
                            ? theme === "dark" 
                              ? "border-black/50 text-black"
                              : "border-white/50 text-white"
                            : theme === "dark"
                              ? "border-green-400/50 text-green-300 hover:bg-green-400/10"
                              : "border-green-600/50 text-green-700 hover:bg-green-100"
                          }`}
                        >
                          {hack.prize}
                        </Badge> : null
                      }
                    </div>
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Hackathons Details */}
          <div className="lg:col-span-2">
            {selectedHackathons ? (
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
                      {selectedHackathons.project}
                    </h3>
                    <div className={`text-base sm:text-lg font-mono ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}>
                      {selectedHackathons.hackathon}
                    </div>
                    { selectedHackathons.prize ? 
                        <Badge 
                          key={selectedHackathons.prize}
                          variant="outline" 
                          className={`transition-colors mt-2 ml-0 text-xs ${
                            theme === "dark"
                              ? "border-green-400/50 text-green-300 hover:bg-green-400/10"
                              : "border-green-600/50 text-green-700 hover:bg-green-100"
                          }`}
                        >
                          {selectedHackathons.prize}
                        </Badge> : null
                      }
                  </div>

                  {/* Links */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    {selectedHackathons.links && (
                      <Button
                        variant="outline"
                        className={`border-green-400/50 ${ theme === "dark" ? "text-green-300" : "text-green-600" } hover:bg-green-400/10 font-mono text-xs sm:text-sm`}
                        onClick={() => window.open(selectedHackathons.links, "_blank")}
                      >
                        View Details
                      </Button>
                    )}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className={`text-base sm:text-lg font-semibold mb-2 font-mono ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {selectedHackathons.technologies.map((tech) => (
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
                      {selectedHackathons.achievements.map((achievement, index) => (
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
                  <div className="text-4xl sm:text-6xl mb-4">🏆</div>
                  <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>Select a Hackathon</h3>
                  <p className={`text-sm ${ theme === "dark" ? "text-gray-300" : "text-gray-500" }`}>Choose a hackathon from the list to view detailed information</p>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Terminal-style footer */}
        <div className="mt-8 text-center">
          <div className={`font-mono text-sm ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>
            <span className="animate-pulse">●</span> Hack, build, iterate — turning ideas into prototypes
          </div>
        </div>
      </div>
    </div>
  );
}
