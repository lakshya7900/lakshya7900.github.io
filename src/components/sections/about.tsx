"use client";

import { useState, useEffect } from "react";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

interface AboutSectionProps {
  theme?: "dark" | "light";
}

export function AboutSection({ theme = "dark" }: AboutSectionProps) {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = `Hello! I'm a passionate developer who loves crafting meaningful digital experiences. I specialize in full-stack development, focusing on building clean, scalable, and intuitive applications using modern web technologies. I enjoy exploring new tools, learning emerging technologies, and finding creative solutions to challenging problems. Beyond coding, I'm driven by curiosity, collaboration, and the desire to create software that truly impacts people's lives while maintaining strong attention to detail and user experience.`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className={`p-4 sm:p-6 lg:p-8 h-full overflow-y-auto scrollbar-terminal ${
      theme === "dark" 
        ? "bg-gradient-to-br from-gray-900 to-black" 
        : "bg-gradient-to-br from-gray-50 to-gray-100"
    }`}>
      <div className="max-w-4xl mx-auto section-content">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 font-mono ${
            theme === "dark" ? "text-green-400" : "text-green-600"
          }`}>
            whoami
          </h1>
          <div className={`h-1 w-16 sm:w-24 ${
            theme === "dark" ? "bg-green-400" : "bg-green-600"
          }`}></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Text Content */}
          <Card className={`p-4 sm:p-6 ${
            theme === "dark" 
              ? "bg-gray-900/50 border-green-400/30" 
              : "bg-white border-green-600/30"
          }`}>
            <h2 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-mono ${
              theme === "dark" ? "text-green-400" : "text-green-600"
            }`}>
              About Me
            </h2>
            <div className={`leading-relaxed font-mono text-xs sm:text-sm break-words ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>
              {displayedText}
              <span className={`animate-pulse ${
                theme === "dark" ? "text-green-400" : "text-green-600"
              }`}>|</span>
            </div>
          </Card>

          {/* Quick Stats */}
          <Card className={`p-4 sm:p-6 ${
            theme === "dark" 
              ? "bg-gray-900/50 border-green-400/30" 
              : "bg-white border-green-600/30"
          }`}>
            <h2 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-mono ${
              theme === "dark" ? "text-green-400" : "text-green-600"
            }`}>
              Quick Stats
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center">
                <span className={`font-mono text-xs sm:text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}>Years Coding:</span>
                <Badge variant="outline" className={`text-xs ${
                  theme === "dark" 
                    ? "border-green-400 text-green-400" 
                    : "border-green-600 text-green-600"
                }`}>
                  5+
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className={`font-mono text-xs sm:text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}>Projects Completed:</span>
                <Badge variant="outline" className={`text-xs ${
                  theme === "dark" 
                    ? "border-green-400 text-green-400" 
                    : "border-green-600 text-green-600"
                }`}>
                  5+
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className={`font-mono text-xs sm:text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}>Languages:</span>
                <Badge variant="outline" className={`text-xs ${
                  theme === "dark" 
                    ? "border-green-400 text-green-400" 
                    : "border-green-600 text-green-600"
                }`}>
                  10+
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className={`font-mono text-xs sm:text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}>Coffee Consumed:</span>
                <Badge variant="outline" className={`text-md ${
                  theme === "dark" 
                    ? "border-green-400 text-green-400" 
                    : "border-green-600 text-green-600"
                }`}>
                  ∞
                </Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Interests */}
        <Card className={`mt-6 sm:mt-8 p-4 sm:p-6 ${
          theme === "dark" 
            ? "bg-gray-900/50 border-green-400/30" 
            : "bg-white border-green-600/30"
        }`}>
          <h2 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-mono ${
            theme === "dark" ? "text-green-400" : "text-green-600"
          }`}>
            Interests & Hobbies
          </h2>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {[
              "Web Development",
              "Mobile Apps",
              "Machine Learning",
              "Open Source",
              "Photography",
              "Gaming",
              "Movies"
            ].map((interest) => (
              <Badge 
                key={interest}
                variant="outline" 
                className={`transition-colors text-xs ${
                  theme === "dark"
                    ? "border-green-400/50 text-green-300 hover:bg-green-400/10"
                    : "border-green-600/50 text-green-700 hover:bg-green-100"
                }`}
              >
                {interest}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Terminal-style footer */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className={`font-mono text-xs sm:text-sm ${
            theme === "dark" ? "text-green-400" : "text-green-600"
          }`}>
            <span className="animate-pulse">●</span> Ready for the next adventure
          </div>
        </div>
      </div>
    </div>
  );
}
