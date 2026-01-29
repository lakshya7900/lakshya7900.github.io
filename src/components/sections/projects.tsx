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
    description:
      "AI-driven platform that converts teacher-uploaded lecture materials into interactive learning content.",
    longDescription:
      "A multi-format lecture processing platform where teachers can upload PDFs, videos, images, handwritten notes, and other materials. The system uses AI to extract content, generate questions, create example variations, and provide lecture-guided assistance—all strictly grounded in the instructor’s provided content. Designed for seamless integration into classrooms, it offers a structured, interactive, and personalized learning experience powered by locally hosted models and a web-based interface.",
    technologies: [
      "GoLang",
      "Next.js",
      "TailwindCSS",
      "T3 Stack",
      "ShadCN",
      "Gemini API",
      "UniPDF",
    ],
    status: "in-progress",
    githubUrl: "https://github.com/EduBank-AI",
    features: [
      "Uploads and processes lectures in any format including PDFs, videos, images, and handwritten notes",
      "AI-generated questions and answer variants based strictly on provided materials",
      "Automatic extraction of LaTeX, text, and handwritten content using OCR and APIs",
      "Interactive learning tools such as guided explanations and example variations",
      "Local model hosting with a Go backend and web-based UI for cross-platform access",
      "Designed for classroom workflows with structured, instructor-controlled content",
    ],
  },
  {
    id: "2",
    name: "Forge",
    description:
      "An AI powered macOS app that helps developers plan projects, break down tasks, and choose the right tools using intelligent project analysis.",
    longDescription:
      "Forge is a macOS application built for developers who want clarity from idea to execution. It helps users structure projects, generate actionable tasks, and intelligently recommend tools, technologies, and workflows based on the project's goals and the user's existing knowledge on specific tools and frameworks. Using on-device AI through Apple's developer frameworks, Forge acts as a project companion that reduces decision fatigue while keeping developers focused on building.",
    technologies: [
      "Swift",
      "SwiftUI",
      "GoLang",
      "Apple Foundation Model",
      "PostgreSQL",
    ],
    status: "in-progress",
    githubUrl: "https://github.com/lakshya7900/Forge",
    features: [
      "AI-powered project breakdown and task generation",
      "Intelligent tool and technology recommendations per project",
      "Structured project, task, and ownership management",
      "Native macOS experience with SwiftUI",
      "On-device AI using Apple's machine learning frameworks",
    ],
  },
  {
    id: "3",
    name: "Retro TV India",
    description:
      "A platform where users explore curated classic Indian TV shows and cartoons with organized playlists and easy browsing.",
    longDescription:
      "RetroTVIndia is a web platform dedicated to preserving and showcasing classic Indian TV shows and cartoons. Users can browse curated playlists, watch nostalgic content directly from YouTube, and enjoy a responsive and user-friendly interface. The project emphasizes ease of navigation, organized content management, and a nostalgic viewing experience, combining modern frontend technologies with backend APIs for seamless video integration.",
    technologies: [
      "React",
      "TailwindCSS",
      "Node.js",
      "Go",
      "YouTube API",
      "JSON",
    ],
    status: "in-progress",
    githubUrl: "https://github.com/RetroTVIndia",
    features: [
      "Curated playlists of classic Indian TV shows and cartoons",
      "Seamless video integration using YouTube APIs",
      "Responsive, modern, and user-friendly frontend",
      "Organized content management via JSON files",
      "Supports nostalgic browsing experience across devices",
    ],
  },
  {
    id: "4",
    name: "Personal Virtual Assistant",
    description:
      "Voice-controlled task automation using Python and SpeechRecognition API",
    longDescription:
      "A desktop-based voice-activated assistant built in Python that can execute everyday tasks such as opening applications, managing files, sending messages, and performing searches. I designed it with modular architecture and integrated APIs for speech recognition and task automation. The project focuses on enhancing productivity through natural language interaction and real-time command execution.",
    technologies: [
      "Python",
      "SpeechRecognition",
      "pyttsx3",
      "webbrowser",
      "subprocess",
      "threading",
    ],
    status: "completed",
    githubUrl: "https://github.com/lakshya7900/Virtual-Assistant",
    features: [
      "Voice-controlled task automation using Python and SpeechRecognition API",
      "Executes desktop commands such as opening apps, sending messages, and searching online",
      "Modular command system for easy feature expansion",
      "Real-time speech-to-text and error handling for smooth interaction",
      "Designed for productivity and ease of use across operating systems",
    ],
  },
  {
    id: "5",
    name: "Dodge Till Infinity",
    description:
      "2D arcade survival gameplay with endless, dynamic obstacle spawning",
    longDescription:
      "A fast-paced 2D survival game built in Unity using C#. Players dodge endless waves of obstacles while the game dynamically adjusts difficulty. I developed core mechanics, physics-based collision handling, and smooth UI transitions to deliver an addictive gameplay experience with increasing challenges and replay value.",
    technologies: ["Unity", "C#", "2D Physics", "UI System", "Game Design"],
    status: "completed",
    githubUrl: "http://ladev.itch.io/dodge-till-infinity",
    features: [
      "2D arcade survival gameplay with endless, dynamic obstacle spawning",
      "Increasing difficulty for engaging long-term play",
      "Smooth player movement and collision physics built in Unity (C#)",
      "Responsive UI and real-time score tracking",
      "Optimized for mobile and desktop platforms",
    ],
  },
  {
    id: "6",
    name: "Wordle Clone",
    description: "Full-featured iOS Wordle game built with Swift and SwiftUI",
    longDescription:
      "An iOS adaptation of the viral game Wordle, developed using Swift and SwiftUI. It includes daily challenges, progress tracking, dark mode, and smooth animations. I focused on delivering an elegant, native iOS experience with responsive design and local data persistence for user stats.",
    technologies: ["Swift", "SwiftUI", "iOS", "Core Data", "UserDefaults"],
    status: "completed",
    githubUrl: "https://github.com/lakshya7900/Wordle-Clone",
    features: [
      "Full-featured iOS Wordle game built with Swift and SwiftUI",
      "Daily word challenges and streak-based progress tracking",
      "Real-time validation and interactive keyboard feedback",
      "Dark mode support for improved user experience",
      "Local data persistence for offline play",
    ],
  },
  {
    id: "7",
    name: "AI vs Human Flappy Bird",
    description:
      "Flappy Bird clone where AI agents compete against human players",
    longDescription:
      "A Python-based remake of the classic Flappy Bird game where human players compete against an AI trained using the NEAT algorithm. I implemented the machine learning logic to evolve AI agents over multiple generations, enabling them to adapt and outperform human players. The project highlights the fundamentals of neuroevolution and game-based reinforcement learning.",
    technologies: [
      "Python",
      "Pygame",
      "NEAT",
      "Machine Learning",
      "Neural Networks",
    ],
    status: "completed",
    githubUrl: "https://github.com/lakshya7900/AI-vs-Human-Flappy-Bird",
    features: [
      "Flappy Bird clone where AI agents compete against human players",
      "AI trained using NEAT (NeuroEvolution of Augmenting Topologies)",
      "Real-time gameplay and adaptive difficulty balancing",
      "Visual indicators for AI evolution progress and fitness",
      "Demonstrates reinforcement learning in a fun, interactive way",
    ],
  },
];

interface ProjectsSectionProps {
  theme?: "dark" | "light";
}

export function ProjectsSection({ theme = "dark" }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<
    "all" | "completed" | "in-progress" | "archived"
  >("all");

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.status === filter,
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return theme === "dark"
          ? "bg-green-500/20 text-green-400 border-green-500/30"
          : "bg-green-500/20 text-green-600 border-green-500/30";
      case "in-progress":
        return theme === "dark"
          ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
          : "bg-yellow-500/20 text-yellow-600 border-yellow-500/30";
      case "archived":
        return theme === "dark"
          ? "bg-gray-500/20 text-gray-400 border-gray-500/30"
          : "bg-gray-500/20 text-gray-600 border-gray-500/30";
      default:
        return theme === "dark"
          ? "bg-gray-500/20 text-gray-400 border-gray-500/30"
          : "bg-gray-500/20 text-gray-600 border-gray-500/30";
    }
  };

  return (
    <div
      className={`scrollbar-terminal h-full overflow-y-auto p-4 sm:p-6 lg:p-8 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 to-black"
          : "bg-gradient-to-br from-gray-50 to-gray-100"
      }`}
    >
      <div className="section-content mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1
            className={`mb-2 font-mono text-2xl font-bold sm:text-3xl lg:text-4xl ${
              theme === "dark" ? "text-green-400" : "text-green-600"
            }`}
          >
            projects
          </h1>
          <div
            className={`h-1 w-16 sm:w-24 ${
              theme === "dark" ? "bg-green-400" : "bg-green-600"
            }`}
          ></div>
        </div>

        {/* Filter Buttons */}
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {[
              { key: "all", label: "All" },
              { key: "completed", label: "Completed" },
              { key: "in-progress", label: "In Progress" },
              { key: "archived", label: "Archived" },
            ].map(({ key, label }) => (
              <Button
                key={key}
                variant={filter === key ? "default" : "outline"}
                className={`font-mono text-xs transition-all duration-200 sm:text-sm ${
                  filter === key
                    ? theme === "dark"
                      ? "border-green-400 bg-green-400 text-black shadow-lg shadow-green-400/25 hover:bg-green-400 hover:text-black"
                      : "border-green-600 bg-green-600 text-white shadow-lg shadow-green-600/25 hover:bg-green-600 hover:text-white"
                    : theme === "dark"
                      ? "border-green-400/50 text-green-300 hover:border-green-400/70 hover:bg-green-400/10"
                      : "border-green-600/50 text-green-600 hover:border-green-600/70 hover:bg-green-600/10"
                }`}
                onClick={() =>
                  setFilter(
                    key as "all" | "completed" | "in-progress" | "archived",
                  )
                }
              >
                {filter === key && <span className="mr-1 text-xs">●</span>}
                {label}
                {filter === key && (
                  <span className="ml-1 text-xs opacity-70">
                    ({filteredProjects.length})
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Project List */}
          <Card
            className={`p-4 sm:p-6 ${
              theme === "dark"
                ? "border-green-400/30 bg-gray-900/50"
                : "border-green-600/30 bg-white"
            }`}
          >
            <div
              className={`h-[700px] space-y-2 overflow-y-scroll sm:space-y-3 ${theme === "dark" ? "scrollbar-dark" : "scrollbar-light"}`}
            >
              {filteredProjects.length === 0 ? (
                <div
                  className={`py-10 text-center font-mono text-sm ${
                    theme === "dark" ? "text-green-400" : "text-green-600"
                  }`}
                >
                  No projects to show
                </div>
              ) : (
                filteredProjects.map((project) => (
                  <Button
                    key={project.id}
                    variant={
                      selectedProject?.id === project.id ? "default" : "ghost"
                    }
                    className={`flex h-auto w-full flex-col justify-start p-2 text-left sm:p-3 ${
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
                    <div className="mb-2 flex w-full items-center justify-between gap-2 text-wrap">
                      <h3
                        className={`font-mono text-base font-semibold sm:text-lg`}
                      >
                        {project.name}
                      </h3>
                      <Badge
                        variant="outline"
                        className={`flex-shrink-0 text-xs whitespace-nowrap ${getStatusColor(project.status)}`}
                      >
                        {project.status.replace("-", " ")}
                      </Badge>
                    </div>

                    <p
                      className={`mb-2 w-full text-left font-mono text-xs text-wrap break-words sm:mb-3 sm:text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-500"}`}
                    >
                      {project.description}
                    </p>

                    <div className="flex w-full flex-wrap gap-1 text-wrap">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={`border-green-400/30 text-xs ${theme === "dark" ? "text-green-300" : "text-green-600"}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          variant="outline"
                          className={`border-green-400/30 text-xs ${theme === "dark" ? "text-green-300" : "text-green-600"}`}
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
              <Card
                className={`p-4 sm:p-6 ${
                  theme === "dark"
                    ? "border-green-400/30 bg-gray-900/50"
                    : "border-green-600/30 bg-white"
                }`}
              >
                <div className="space-y-4 sm:space-y-6">
                  {/* Header */}
                  <div>
                    <div className="mb-2 flex items-start justify-between">
                      <h2
                        className={`font-mono text-xl font-bold sm:text-2xl ${theme === "dark" ? "text-green-400" : "text-green-600"}`}
                      >
                        {selectedProject.name}
                      </h2>
                      <Badge
                        variant="outline"
                        className={`text-xs ${getStatusColor(selectedProject.status)}`}
                      >
                        {selectedProject.status.replace("-", " ")}
                      </Badge>
                    </div>
                    <p
                      className={`font-mono text-xs break-words sm:text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-500"}`}
                    >
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                    {selectedProject.githubUrl && (
                      <Button
                        variant="outline"
                        className={`border-green-400/50 ${theme === "dark" ? "text-green-300" : "text-green-600"} font-mono text-xs hover:bg-green-400/10 sm:text-sm`}
                        onClick={() =>
                          window.open(selectedProject.githubUrl, "_blank")
                        }
                      >
                        {selectedProject.id === "4" ? "Download" : "View Code"}
                      </Button>
                    )}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3
                      className={`mb-2 font-mono text-base font-semibold sm:text-lg ${theme === "dark" ? "text-green-400" : "text-green-600"}`}
                    >
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={`border-green-400/50 ${theme === "dark" ? "text-green-300" : "text-green-600"} text-xs`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3
                      className={`mb-2 font-mono text-base font-semibold sm:text-lg ${theme === "dark" ? "text-green-400" : "text-green-600"}`}
                    >
                      Key Features
                    </h3>
                    <ul className="space-y-1">
                      {selectedProject.features.map((feature, index) => (
                        <li
                          key={index}
                          className={`flex items-start space-x-2 font-mono text-xs break-words sm:text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-500"}`}
                        >
                          <span
                            className={`mt-1 flex-shrink-0 ${theme === "dark" ? "text-green-400" : "text-green-600"}`}
                          >
                            ▶
                          </span>
                          <span className="break-words">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ) : (
              <Card
                className={`p-4 sm:p-6 ${
                  theme === "dark"
                    ? "border-green-400/30 bg-gray-900/50"
                    : "border-green-600/30 bg-white"
                }`}
              >
                <div className="text-center font-mono text-gray-400">
                  <div className="mb-4 text-4xl sm:text-6xl">🚀</div>
                  <h3
                    className={`mb-2 text-lg font-semibold sm:text-xl ${theme === "dark" ? "text-green-400" : "text-green-600"}`}
                  >
                    Select a Project
                  </h3>
                  <p
                    className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-500"}`}
                  >
                    Choose a project from the list to view detailed information
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Terminal-style footer */}
        <div className="mt-8 text-center">
          <div
            className={`font-mono text-sm ${theme === "dark" ? "text-green-400" : "text-green-600"}`}
          >
            <span className="animate-pulse">●</span> Code is poetry written in
            logic
          </div>
        </div>
      </div>
    </div>
  );
}
