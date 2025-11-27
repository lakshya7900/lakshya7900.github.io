import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  GraduationCap,
  Terminal,
  Cpu,
  Trophy
} from "lucide-react";

import { Button } from "~/components/ui/button";

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "~/components/ui/card";

import { Badge } from "~/components/ui/badge";

import { FadeIn } from "~/components/fade-in";
import { StaggerContainer, StaggerItem } from "~/components/stagger-container";

export default function Home() {
  const skills = [
    {
      name: "Programming Languages",
      items: ["Python", "Java", "C/C++", "C#", "Swift", "PHP", "HTML", "CSS"],
    },
    {
      name: "Frontend",
      items: ["React.js", "Next.js", "TailwindCSS", "ShadCN"],
    },
    {
      name: "Backend & APIs",
      items: ["Django", "REST API", "T3 Stack", "GoLang"],
    },
    {
      name: "Databases",
      items: ["MySQL", "PostgreSQL"],
    },
    {
      name: "3D & Game Dev",
      items: ["Blender", "Unity3D", "Unreal Engine", "PyGame"],
    },
    {
      name: "AI & Machine Learning",
      items: ["OpenCV", "OpenAI API", "GeminiAPI", "Neat-Python", "NumPy", "Pandas"],
    },
    {
      name: "Tools & Platforms",
      items: ["XCode", "SwiftUI", "Tkinter", "SpeechRecognition", "Selenium", "UniPdf", "Google Cloud Platform"],
    },
  ];

  const experiences = [
    {
      title: "Intern, Web Developer",
      company: "SBM Group, Siliguri",
      period: "May 2025 - August 2025",
      achievements: [
        "Redesigned the company website using React.js and pure CSS for a responsive, modern user experience",
        "Developed new features to enhance engagement and streamline navigation",
        "Conducted market research to align the platform with industry trends and user needs"
      ],
    },
  ];

  const hackathons = [
    {
      hackathon: "Startup Sprint 2024",
      project: "ModelVision",
      prize: "Top 5 Runner Up",
      link: "https://devpost.com/software/modelvision",
      techs: ["Unity", "Vuforia SDK", "Blender", "Google Cloud AI"],
      achievements: [
        "Built an interactive AR education platform, converting textbook diagrams into immersive 3D models by utilising the AR functionality of Vuforia SDK.",
        "Enhanced student engagement by enabling real-time exploration of complex concepts, through integration of an AI assistant for contextual responses",
        "Improved platform scalability by designing a modular system architecture for easy addition of new features"
      ],
    },
    {
      hackathon: "VT Hacks 13",
      project: "Terra Scope",
      prize: "",
      link: "https://devpost.com/software/terra-scope",
      techs: ["Next.js", "React 19", "TypeScript", "Mapbox GL JS", "Tailwind CSS", "Radix UI", "Python"],
      achievements: [
        "Developed a geospatial platform to identify urban heat-island hotspots ,using interactive mapping dashboards and predictive visualizations.",
        "Reduced analysis time by 50%, enabling faster insights for urban planning decisions through efficient dashboard design.",
        "Prioritized interventions with predictive visualizations, simulating potential temperature reductions in targeted areas."
      ],
    },
  ]

  const projects = [

    {
      title: "EduBank.AI",
      description: "A platform where teachers upload any lecture materials, and an AI turns them into interactive learning with questions, examples, and guided assistance.",
      tech: ["GoLang", "Next.js", "TailwindCSS", "T3 Stack", "ShadCN", "Gemini API"],
      link: "https://github.com/EduBank-AI",
    },
    {
      title: "AI vs Human Flappy Bird",
      description: "A Python-based Flappy Bird clone with AI training via neat -python, real-time Human vs AI gameplay, score tracking, and dynamic difficulty using pygame.",
      tech: ["Python", "Neat-Python", "Pygame"],
      link: "https://github.com/lakshya7900/AI-vs-Human-Flappy-Bird",
    },
    {
      title: "Wordle Clone",
      description: "A Swift and SwiftUI-based Wordle clone with daily challenges, real-time feedback, progress tracking, and dark mode support for iOS and iPadOS.",
      tech: ["Swift", "SwiftUI"],
      link: "https://github.com/lakshya7900/Wordle-Clone",
    },
    {
      title: "Personal Virtual Assistant",
      description: "A voice-activated assistant for desktop that can execute commands like opening applications, sending messages, and more",
      tech: ["Python", "Selenium", "SpeechRecognition"],
      link: "http://github.com/lakshya7900/Virtual-Assistant",
    },
    {
      title: "Dodge Till Infinity",
      description: "A 2D obstacle-dodging game with continuously spawning obstacles, challenging players to survive as long as possible.",
      tech: ["Unity3D"],
      link: "http://ladev.itch.io/dodge-till-infinity",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
          <FadeIn delay={0}>
            <div className="mb-6 inline-block">
              <Badge variant="secondary" className="px-4 py-1 text-sm bg-green-600 text-white">
                Available for opportunities
              </Badge>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Lakshya Agrawal
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mb-8 text-xl text-gray-300 sm:text-2xl">
              Full Stack Developer & Software Engineer
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mb-10 text-lg text-gray-300">
              Passionate about building elegant solutions to complex problems. 
              Specialized in modern web technologies and creating exceptional user experiences.
            </p>
          </FadeIn>
           <FadeIn delay={0.2}>
             <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" className="transition-transform hover:scale-105 text-white" onClick={() => { window.open("mailto:aglakshya06@gmail.com", "_blank"); }}>
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </Button>

               <Button asChild variant="outline" size="lg" className="transition-transform hover:scale-105 text-white border-white hover:bg-white hover:text-gray-900" onClick={() => { window.open("/renders", "_blank"); }}>
                  View 3D Renders
               </Button>
             </div>
           </FadeIn>
           <FadeIn delay={0.25}>
             <div className="mt-8 flex items-center justify-center gap-4">
               <Button asChild variant="ghost" size="icon" className="transition-transform hover:scale-110 text-white hover:bg-gray-800 hover:text-white" onClick={() => { window.open("https://github.com/lakshya7900", "_blank"); }}>
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
               </Button>
               <Button asChild variant="ghost" size="icon" className="transition-transform hover:scale-110 text-white hover:bg-gray-800 hover:text-white" onClick={() => { window.open("http://www.linkedin.com/in/lakshya7900", "_blank"); }}>
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
               </Button>
               <Button asChild variant="ghost" size="icon" className="transition-transform hover:scale-110 text-white hover:bg-gray-800 hover:text-white" onClick={() => { window.open("https://leetcode.com/u/lakshya7900", "_blank"); }}>
                  <Code2 className="h-5 w-5" />
                  <span className="sr-only">LeetCode</span>
               </Button>
             </div>
           </FadeIn>
          </div>
      </section>

      {/* Experience Section */}
      <section className="relative z-10 border-t border-gray-800 bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="mb-12 text-center">
                <Briefcase className="mx-auto mb-4 h-12 w-12 text-blue-400" />
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Work Experience</h2>
              </div>
            </FadeIn>
            <StaggerContainer className="space-y-6">
              {experiences.map((exp, index) => (
                <StaggerItem key={index}>
                  <Card className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-gray-700">
                    <CardHeader>
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                        <div>
                          <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                          <CardDescription className="mt-1 text-base text-gray-300">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="w-fit text-white border-white">
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                            <span className="text-sm text-white">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Hackathon Section */}
      <section className="relative z-10 border-t border-gray-800 bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="mb-12 text-center">
                <Trophy className="mx-auto mb-4 h-12 w-12 text-blue-400" />
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Hackathons</h2>
              </div>
            </FadeIn>
            <StaggerContainer className="space-y-6">
              {hackathons.map((hack, index) => (
                <StaggerItem key={index}>
                  <Card className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-gray-700">
                    <CardHeader>
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                        <div>
                          <CardTitle className="text-xl text-white">
                            <a className="flex items-center gap-2" href={hack.link} target="_blank" rel="noopener noreferrer">
                              <span className="align-middle">{hack.hackathon}</span>
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </CardTitle>
                          <CardDescription className="mt-1 text-base text-gray-300">
                            {hack.project}
                          </CardDescription>
                        </div>
                        {hack.prize ? (
                          <Badge variant="outline" className="w-fit text-white border-green-600 bg-green-600">
                            {hack.prize}
                          </Badge>
                        ) : null}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {hack.techs.map((tech) => (
                          <Badge key={tech} variant="secondary" className="transition-colors hover:bg-blue-600 hover:text-white text-white bg-gray-800">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <ul className="space-y-2 mt-4">
                        {hack.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                            <span className="text-sm text-white">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative z-10 py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <Cpu className="mx-auto mb-4 h-12 w-12 text-blue-400" />
              <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">Skills & Technologies</h2>
            </FadeIn>
            <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((category) => (
                <StaggerItem key={category.name}>
                  <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((skill) => (
                          <Badge key={skill} variant="secondary" className="transition-colors hover:bg-blue-600 hover:text-white text-white bg-gray-900">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 border-t border-gray-800 bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="mb-12 text-center">
                <Code2 className="mx-auto mb-4 h-12 w-12 text-blue-400" />
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Projects</h2>
              </div>
            </FadeIn>
            <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <StaggerItem key={index}>
                  <Card className="flex h-full flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col">
                      <p className="mb-4 flex-1 text-sm text-gray-300">
                        {project.description}
                      </p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs transition-colors hover:bg-blue-600 hover:text-white text-white bg-gray-800">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild variant="outline" size="sm" className="w-full transition-transform hover:scale-105 text-white border-white hover:bg-white hover:text-gray-900" onClick={() => {
                        window.open(project.link, "_blank");
                      }}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Project
                      </Button>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Terminal View Section */}
      <section className="relative z-10 border-t border-gray-800 bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="mb-12 text-center">
                <Terminal className="mx-auto mb-4 h-12 w-12 text-green-400" />
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Terminal View</h2>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                  Experience my portfolio through an interactive terminal interface. Navigate through my work using command-line style interactions.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="text-center">
                <div className="inline-block bg-black rounded-lg p-8 font-mono text-left max-w-2xl">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2 mr-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-green-400 text-sm">portfolio@terminal:~$</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="text-green-400">$ ls</div>
                    <div className="text-blue-400 ml-4">about/ experience/ projects/ skills/ education/ contact/</div>
                    <div className="text-green-400">$ cat about</div>
                    <div className="text-gray-300 ml-4">Full Stack Developer passionate about building elegant solutions...</div>
                    <div className="text-green-400">$ help</div>
                    <div className="text-blue-400 ml-4">Available commands: ls, about, experience, projects, skills...</div>
                    <div className="text-green-400 animate-pulse">$ _</div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild size="lg" className="transition-transform hover:scale-105 text-white bg-green-600 hover:bg-green-700" onClick={() => { window.open("/terminal", "_blank"); }}>
                    <Terminal className="mr-2 h-5 w-5" />
                    Launch Terminal View
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative z-10 py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="mb-12 text-center">
                <GraduationCap className="mx-auto mb-4 h-12 w-12 text-blue-400" />
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Education</h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Card className="mx-auto max-w-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Bachelor&apos;s in General Engineering with Major in Computer Science</CardTitle>
                  <CardDescription className="text-base text-gray-300">
                    Computer Science & Engineering
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Virginia Polytechnic Institute and State University
                  </p>
                  <a 
                    href="https://www.vt.edu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-sm text-blue-400 transition-all hover:translate-x-1 hover:underline"
                  >
                    Visit Website
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 border-t border-gray-800 bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Let&apos;s Work Together</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mb-8 text-lg text-gray-300">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" className=" transition-transform hover:scale-105 text-white" onClick={() => { window.open("mailto:aglakshya06@gmail.com", "_blank"); }}>
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </Button>

                <Button asChild variant="outline" size="lg" className="transition-transform hover:scale-105 text-white border-white hover:bg-white hover:text-gray-900" onClick={() => { window.open("https://linkedin.com/in/lakshya7900", "_blank"); }}>
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
