"use client";

import { useState } from "react";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  status: "completed" | "in-progress" | "archived";
  githubUrl?: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: "1",
    name: "EduBank.AI",
    description: "AI-driven platform that converts teacher-uploaded lecture materials into interactive learning content.",
    longDescription: "A multi-format lecture processing platform where teachers can upload PDFs, videos, images, handwritten notes, and other materials. The system uses AI to extract content, generate questions, create example variations, and provide lecture-guided assistance—all strictly grounded in the instructor’s provided content. Designed for seamless integration into classrooms, it offers a structured, interactive, and personalized learning experience powered by locally hosted models and a web-based interface.",
    technologies: ["GoLang", "Next.js", "TailwindCSS", "T3 Stack", "ShadCN", "Gemini API", "UniPDF"],
    status: "in-progress",
    githubUrl: "https://github.com/EduBank-AI",
    features: [
      "Uploads and processes lectures in any format including PDFs, videos, images, and handwritten notes",
      "AI-generated questions and answer variants based strictly on provided materials",
      "Automatic extraction of LaTeX, text, and handwritten content using OCR and APIs",
      "Interactive learning tools such as guided explanations and example variations",
      "Local model hosting with a Go backend and web-based UI for cross-platform access",
      "Designed for classroom workflows with structured, instructor-controlled content"
    ]
  },
  {
    id: "2",
    name: "Retro TV India",
    description: "A platform where users explore curated classic Indian TV shows and cartoons with organized playlists and easy browsing.",
    longDescription: "RetroTVIndia is a web platform dedicated to preserving and showcasing classic Indian TV shows and cartoons. Users can browse curated playlists, watch nostalgic content directly from YouTube, and enjoy a responsive and user-friendly interface. The project emphasizes ease of navigation, organized content management, and a nostalgic viewing experience, combining modern frontend technologies with backend APIs for seamless video integration.",
    technologies: ["React", "TailwindCSS", "Node.js", "Go", "YouTube API", "JSON"],
    status: "in-progress",
    githubUrl: "https://github.com/RetroTVIndia",
    features: [
        "Curated playlists of classic Indian TV shows and cartoons",
        "Seamless video integration using YouTube APIs",
        "Responsive, modern, and user-friendly frontend",
        "Organized content management via JSON files",
        "Supports nostalgic browsing experience across devices"
    ]
  },
  {
    id: "3",
    name: "Personal Virtual Assistant",
    description: "Voice-controlled task automation using Python and SpeechRecognition API",
    longDescription: "A desktop-based voice-activated assistant built in Python that can execute everyday tasks such as opening applications, managing files, sending messages, and performing searches. I designed it with modular architecture and integrated APIs for speech recognition and task automation. The project focuses on enhancing productivity through natural language interaction and real-time command execution.",
    technologies: ["Python", "SpeechRecognition", "pyttsx3", "webbrowser", "subprocess", "threading"],
    status: "completed",
    githubUrl: "https://github.com/lakshya7900/Virtual-Assistant",
    features: [
      "Voice-controlled task automation using Python and SpeechRecognition API",
      "Executes desktop commands such as opening apps, sending messages, and searching online",
      "Modular command system for easy feature expansion",
      "Real-time speech-to-text and error handling for smooth interaction",
      "Designed for productivity and ease of use across operating systems"
    ]
  },
  {
    id: "4",
    name: "Dodge Till Infinity",
    description: "2D arcade survival gameplay with endless, dynamic obstacle spawning",
    longDescription: "A fast-paced 2D survival game built in Unity using C#. Players dodge endless waves of obstacles while the game dynamically adjusts difficulty. I developed core mechanics, physics-based collision handling, and smooth UI transitions to deliver an addictive gameplay experience with increasing challenges and replay value.",
    technologies: ["Unity", "C#", "2D Physics", "UI System", "Game Design"],
    status: "completed",
    githubUrl: "http://ladev.itch.io/dodge-till-infinity",
    features: [
      "2D arcade survival gameplay with endless, dynamic obstacle spawning",
      "Increasing difficulty for engaging long-term play",
      "Smooth player movement and collision physics built in Unity (C#)",
      "Responsive UI and real-time score tracking",
      "Optimized for mobile and desktop platforms"
    ]
  },
  {
    id: "5",
    name: "Wordle Clone",
    description: "Full-featured iOS Wordle game built with Swift and SwiftUI",
    longDescription: "An iOS adaptation of the viral game Wordle, developed using Swift and SwiftUI. It includes daily challenges, progress tracking, dark mode, and smooth animations. I focused on delivering an elegant, native iOS experience with responsive design and local data persistence for user stats.",
    technologies: ["Swift", "SwiftUI", "iOS", "Core Data", "UserDefaults"],
    status: "completed",
    githubUrl: "https://github.com/lakshya7900/Wordle-Clone",
    features: [
      "Full-featured iOS Wordle game built with Swift and SwiftUI",
      "Daily word challenges and streak-based progress tracking",
      "Real-time validation and interactive keyboard feedback",
      "Dark mode support for improved user experience",
      "Local data persistence for offline play"
    ]
  },
  {
    id: "6",
    name: "AI vs Human Flappy Bird",
    description: "Flappy Bird clone where AI agents compete against human players",
    longDescription: "A Python-based remake of the classic Flappy Bird game where human players compete against an AI trained using the NEAT algorithm. I implemented the machine learning logic to evolve AI agents over multiple generations, enabling them to adapt and outperform human players. The project highlights the fundamentals of neuroevolution and game-based reinforcement learning.",
    technologies: ["Python", "Pygame", "NEAT", "Machine Learning", "Neural Networks"],
    status: "completed",
    githubUrl: "https://github.com/lakshya7900/AI-vs-Human-Flappy-Bird",
    features: [
      "Flappy Bird clone where AI agents compete against human players",
      "AI trained using NEAT (NeuroEvolution of Augmenting Topologies)",
      "Real-time gameplay and adaptive difficulty balancing",
      "Visual indicators for AI evolution progress and fitness",
      "Demonstrates reinforcement learning in a fun, interactive way"
    ]
  },
  {
    id: "7",
    name: "Motion Detection",
    description: "Real-time motion tracking using OpenCV and Python",
    longDescription: "A Python-based security application that uses computer vision to detect movement through a webcam feed. When motion is detected, it triggers an alarm and records evidence. I used OpenCV to process frames in real-time and implemented efficient algorithms to minimize false positives, making it suitable for basic home or office security setups.",
    technologies: ["Python", "OpenCV", "numpy", "datetime", "threading", "cv2"],
    status: "completed",
    githubUrl: "https://github.com/lakshya7900/Motion-Detection",
    features: [
      "Real-time motion tracking using OpenCV and Python",
      "Triggers alarms and captures video upon motion detection",
      "Optimized frame analysis to minimize false positives",
      "Adjustable sensitivity levels for custom environments",
      "Lightweight design for continuous operation on standard hardware"
    ]
  },
  {
    id: "8",
    name: "Hand Gesture Recognition",
    description: "Detects and classifies hand gestures in real time using computer vision",
    longDescription: "An interactive computer vision project that identifies and interprets hand gestures like thumbs up, thumbs down, and the OK sign in real time. Using Python and OpenCV, I trained the system to recognize gestures and provide instant on-screen feedback. It demonstrates how human-computer interaction can be made intuitive without traditional input devices.",
    technologies: ["Python", "OpenCV", "MediaPipe", "numpy", "cv2", "machine learning"],
    status: "completed",
    githubUrl: "https://github.com/lakshya7900/Hand-Gesture-Recognition",
    features: [
      "Detects and classifies hand gestures (thumbs up, OK, etc.) in real time",
      "Uses OpenCV and Python for computer vision processing",
      "Provides visual and text-based feedback instantly",
      "Trained for high accuracy across varying lighting conditions",
      "Demonstrates gesture-based human-computer interaction"
    ]
  }
];

interface ProjectsSectionProps {
  theme?: "dark" | "light";
}

export function ProjectsSection({ theme = "dark" }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<"all" | "completed" | "in-progress" | "archived">("all");

  const filteredProjects = projects.filter(project => 
    filter === "all" || project.status === filter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return theme === "dark" ? "bg-green-500/20 text-green-400 border-green-500/30" : "bg-green-500/20 text-green-600 border-green-500/30";
      case "in-progress":
        return theme === "dark" ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" : "bg-yellow-500/20 text-yellow-600 border-yellow-500/30";
      case "archived":
        return theme === "dark" ? "bg-gray-500/20 text-gray-400 border-gray-500/30" : "bg-gray-500/20 text-gray-600 border-gray-500/30";
      default:
        return theme === "dark" ? "bg-gray-500/20 text-gray-400 border-gray-500/30" : "bg-gray-500/20 text-gray-600 border-gray-500/30";
    }
  };

  return (
    <div className={`p-4 sm:p-6 lg:p-8 h-full overflow-y-auto scrollbar-terminal ${
      theme === "dark" 
        ? "bg-gradient-to-br from-gray-900 to-black" 
        : "bg-gradient-to-br from-gray-50 to-gray-100"
    }`}>
      <div className="max-w-7xl mx-auto section-content">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 font-mono ${
            theme === "dark" ? "text-green-400" : "text-green-600"
          }`}>
            projects
          </h1>
          <div className={`h-1 w-16 sm:w-24 ${
            theme === "dark" ? "bg-green-400" : "bg-green-600"
          }`}></div>
        </div>

        {/* Filter Buttons */}
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {[
              { key: "all", label: "All" },
              { key: "completed", label: "Completed" },
              { key: "in-progress", label: "In Progress" },
              { key: "archived", label: "Archived" }
            ].map(({ key, label }) => (
              <Button
                key={key}
                variant={filter === key ? "default" : "outline"}
                className={`font-mono text-xs sm:text-sm transition-all duration-200 ${
                  filter === key
                    ? theme === "dark"
                      ? "bg-green-400 text-black border-green-400 shadow-lg shadow-green-400/25 hover:bg-green-400 hover:text-black"
                      : "bg-green-600 text-white border-green-600 shadow-lg shadow-green-600/25 hover:bg-green-600 hover:text-white"
                    : theme === "dark"
                      ? "border-green-400/50 text-green-300 hover:bg-green-400/10 hover:border-green-400/70"
                      : "border-green-600/50 text-green-600 hover:bg-green-600/10 hover:border-green-600/70"
                }`}
                onClick={() => setFilter(key as "all" | "completed" | "in-progress" | "archived")}
              >
                {filter === key && (
                  <span className="mr-1 text-xs">●</span>
                )}
                {label}
                {filter === key && (
                  <span className="ml-1 text-xs opacity-70">({filteredProjects.length})</span>
                )}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Project List */}
          <Card className={`p-4 sm:p-6 ${
              theme === "dark" 
                ? "bg-gray-900/50 border-green-400/30" 
                : "bg-white border-green-600/30"
            }`}>
            <div className={`space-y-2 sm:space-y-3 h-[700px] overflow-y-scroll ${theme === "dark" ? "scrollbar-dark" : "scrollbar-light"}`}>
              {filteredProjects.length === 0 ? (
                <div className={`text-center py-10 font-mono text-sm ${
                  theme === "dark" ? "text-green-400" : "text-green-600"
                }`}>
                  No projects to show
                </div>
              ) : (
                filteredProjects.map((project) => (
                <Button
                  key={project.id}
                  variant={selectedProject?.id === project.id ? "default" : "ghost"}
                  className={`w-full justify-start text-left flex flex-col h-auto p-2 sm:p-3 ${
                    selectedProject?.id === project.id
                          ? theme === "dark" 
                            ? "border border-green-400"
                            : "border border-green-600"
                          : theme === "dark"
                            ? "text-gray-300 text-green-400 hover:bg-green-400/10"
                            : "text-gray-600 text-green-600 hover:bg-green-100"
                      }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="w-full flex justify-between items-center mb-2 text-wrap gap-2">
                    <h3 className={`text-base sm:text-lg font-semibold font-mono`}>
                      {project.name}
                    </h3>
                    <Badge
                      variant="outline"
                      className={`text-xs whitespace-nowrap flex-shrink-0 ${getStatusColor(project.status)}`}
                    >
                      {project.status.replace("-", " ")}
                    </Badge>
                  </div>

                  <p className={`text-xs sm:text-sm w-full text-left font-mono mb-2 sm:mb-3 break-words text-wrap ${ theme === "dark" ? "text-gray-300" : "text-gray-500" }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 text-wrap w-full">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className={`text-xs border-green-400/30 ${ theme === "dark" ? "text-green-300" : "text-green-600" }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="outline"
                        className={`text-xs border-green-400/30 ${ theme === "dark" ? "text-green-300" : "text-green-600" }`}
                      >
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </Button>
                ))
              )}
            </div>
          </Card>

          {/* Project Details */}
          <div>
            {selectedProject ? (
              <Card className={`p-4 sm:p-6 ${
                theme === "dark" 
                  ? "bg-gray-900/50 border-green-400/30" 
                  : "bg-white border-green-600/30"
              }`}>
                <div className="space-y-4 sm:space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h2 className={`text-xl sm:text-2xl font-bold font-mono ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>
                        {selectedProject.name}
                      </h2>
                      <Badge
                        variant="outline"
                        className={`text-xs ${getStatusColor(selectedProject.status)}`}
                      >
                        {selectedProject.status.replace("-", " ")}
                      </Badge>
                    </div>
                    <p className={`text-xs sm:text-sm font-mono break-words ${ theme === "dark" ? "text-gray-300" : "text-gray-500" }`}>
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    {selectedProject.githubUrl && (
                      <Button
                        variant="outline"
                        className={`border-green-400/50 ${ theme === "dark" ? "text-green-300" : "text-green-600" } hover:bg-green-400/10 font-mono text-xs sm:text-sm`}
                        onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                      >
                        {selectedProject.id === "4" ? "Download" : "View Code"}
                      </Button>
                    )}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className={`text-base sm:text-lg font-semibold mb-2 font-mono ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={`border-green-400/50 ${ theme === "dark" ? "text-green-300" : "text-green-600" } text-xs`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className={`text-base sm:text-lg font-semibold mb-2 font-mono ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>
                      Key Features
                    </h3>
                    <ul className="space-y-1">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className={`flex items-start space-x-2 font-mono text-xs sm:text-sm break-words ${ theme === "dark" ? "text-gray-300" : "text-gray-500" }`}>
                          <span className={`mt-1 flex-shrink-0 ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>▶</span>
                          <span className="break-words">{feature}</span>
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
                  <div className="text-4xl sm:text-6xl mb-4">🚀</div>
                  <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>Select a Project</h3>
                  <p className={`text-sm ${ theme === "dark" ? "text-gray-300" : "text-gray-500" }`}>Choose a project from the list to view detailed information</p>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Terminal-style footer */}
        <div className="mt-8 text-center">
          <div className={`font-mono text-sm ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>
            <span className="animate-pulse">●</span> Code is poetry written in logic
          </div>
        </div>
      </div>
    </div>
  );
}
