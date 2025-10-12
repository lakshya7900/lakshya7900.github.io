"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import { Terminal } from "~/components/terminal";
import { AboutSection } from "~/components/sections/about";
import { ExperienceSection } from "~/components/sections/experience";
import { ProjectsSection } from "~/components/sections/projects";
import { SkillsSection } from "~/components/sections/skills";
import { EducationSection } from "~/components/sections/education";
import { ContactSection } from "~/components/sections/contact";
import { RendersSection } from "~/components/sections/renders";
import { Button } from "~/components/ui/button";
import { TerminalThemeProvider, useTerminalTheme } from "~/components/terminal-theme-provider";
import { TerminalCursorFollower } from "~/components/terminal-cursor-follower";
import { TerminalLoading } from "~/components/terminal-loading";

function TerminalPageContent() {
  const [currentSection, setCurrentSection] = useState("about");
  const [isTyping, setIsTyping] = useState(true);
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isWaitingForConfirmation, setIsWaitingForConfirmation] = useState(false);
  const [confirmationStep, setConfirmationStep] = useState(0);
  const { theme, toggleTheme, setTheme } = useTerminalTheme();

  useEffect(() => {
    // Show loading screen for 6 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      
      // Start welcome message after loading
      const welcomeMessage = [
        "Welcome to my terminal portfolio! 🚀",
        "Type 'help' to see available commands (including some fun ones!).",
        "Use 'ls' to see all sections, or try 'coffee' for a status check! ☕",
        "Warning: This terminal may contain traces of humor and bad puns.",
        "",
        "> "
      ];
    
      let index = 0;
      const interval = setInterval(() => {
        if (index < welcomeMessage.length) {
          setTerminalHistory(prev => [...prev, welcomeMessage[index]!]);
          index++;
        } else {
          setIsTyping(false);
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }, 6000);

    return () => clearTimeout(loadingTimer);
  }, []);

  const addFakeProgress = (command: string, callback: () => void) => {
    const progressComments = [
      "// TODO: Fix this later",
      "// FIXME: This is a known issue", 
      "// HACK: Temporary solution",
      "// This works on my machine",
      "// Don't touch this, it's magic",
      "// Legacy code, handle with care",
      "// Optimized for performance (not)",
      "// This is definitely not a bug",
      "// Commented out for debugging",
      "// TODO: Add proper error handling",
      "// FIXME: Remove hardcoded values",
      "// HACK: Using console.log for debugging",
      "// This code is self-documenting (it's not)",
      "// TODO: Refactor this mess",
      "// FIXME: Memory leak detected",
      "// HACK: Using magic numbers",
      "// This is production code (trust me)",
      "// TODO: Write tests for this",
      "// FIXME: Race condition here",
      "// HACK: Using setTimeout to fix async issues"
    ];
    
    const progressActions = [
      "Initializing quantum entanglement...",
      "Loading dependencies...",
      "Compiling coffee to code...",
      "Booting up the matrix...",
      "Calibrating flux capacitor...",
      "Syncing with the cloud...",
      "Optimizing for 0.0001% performance gain...",
      "Running unit tests (they all pass, somehow)...",
      "Deploying to production (what could go wrong?)...",
      "Checking if the server is on fire...",
      "Loading more RAM...",
      "Defragmenting the codebase...",
      "Rebuilding the entire project...",
      "Updating dependencies (breaking changes incoming)...",
      "Running linter (ignoring all warnings)...",
      "Compiling TypeScript (it's just JavaScript anyway)...",
      "Bundling assets (making them bigger)...",
      "Minifying code (making it unreadable)...",
      "Generating documentation (from comments)...",
      "Running code coverage (100% coverage, 0% confidence)..."
    ];
    
    const selectedComments = progressComments.sort(() => 0.5 - Math.random()).slice(0, 3);
    const selectedActions = progressActions.sort(() => 0.5 - Math.random()).slice(0, 4);
    
    const progressLines = [
      ...selectedActions,
      ...selectedComments,
      "Executing command...",
      ""
    ];
    
    // Show each line progressively
    let lineIndex = 0;
    const showNextLine = () => {
      if (lineIndex < progressLines.length) {
        const line = progressLines[lineIndex];
        if (line !== undefined) {
          setTerminalHistory(prev => [...prev, line]);
        }
        lineIndex++;
        setTimeout(showNextLine, Math.random() * 200 + 100); // Random delay between 100-300ms
      } else {
        // After all progress lines are shown, execute the actual command
        setTimeout(callback, 200);
      }
    };
    
    showNextLine();
  };

  const resetConfirmationState = () => {
    setIsWaitingForConfirmation(false);
    setConfirmationStep(0);
  };

  const showNextConfirmationStep = () => {
    const messages = [
      [
        "Wait... you want to switch to LIGHT mode? 🤔",
        "Are you sure about this? (y/n)"
      ],
      [
        "Bro, you don't want to do this... 😰",
        "Light mode? Really? (y/n)"
      ],
      [
        "Last chance... are you absolutely sure? 😱",
        "This goes against everything we stand for! (y/n)"
      ]
    ];

    const currentMessages = messages[confirmationStep];
    if (currentMessages) {
      setTerminalHistory(prev => [...prev, ...currentMessages, ""]);
    }
  };

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    
    // Add user input to terminal history
    setTerminalHistory(prev => [...prev, `$ ${command}`]);
    
    // Handle confirmation responses
    if (isWaitingForConfirmation) {
      if (cmd === "y" || cmd === "yes") {
        if (confirmationStep < 2) {
          // Continue to next confirmation step
          const nextStep = confirmationStep + 1;
          setConfirmationStep(nextStep);
          
          const messages = [
            [
              "Bro, you don't want to do this... 😰",
              "Light mode? Really? (y/n)"
            ],
            [
              "Last chance... are you absolutely sure? 😱",
              "This goes against everything we stand for! (y/n)"
            ]
          ];

          const currentMessages = messages[confirmationStep];
          if (currentMessages) {
            setTerminalHistory(prev => [...prev, ...currentMessages, ""]);
          }
        } else {
          // Final confirmation - switch to light mode
          setTheme("light");
          setTerminalHistory(prev => [
            ...prev,
            "Fine, fine... switching to light mode.",
            "But remember, real programmers use dark mode! 😤",
            ""
          ]);
          resetConfirmationState();
        }
      } else if (cmd === "n" || cmd === "no") {
        setTerminalHistory(prev => [
          ...prev,
          "Good choice! Dark mode is the way to go. 🌙",
          ""
        ]);
        resetConfirmationState();
      } else {
        setTerminalHistory(prev => [
          ...prev,
          "Please answer with 'y' or 'n'",
          ""
        ]);
      }
      return;
    }
    
    // List of valid commands
    const validCommands = [
      "help", "ls", "about", "experience", "projects", "skills", 
      "education", "contact", "renders", "clear", "whoami", 
      "date", "time", "version", "status", "info",
      "coffee", "motivation", "fortune", "matrix", 
      "hack", "sudo", "rm -rf /", "ping", "uptime", "resume",
      "theme"
    ];
    
    // Add fake progress for valid commands (except clear, help, theme, and ls)
    if (validCommands.includes(cmd) && !["clear", "help", "theme", "ls"].includes(cmd)) {
      addFakeProgress(command, () => executeCommand(cmd));
    } else {
      executeCommand(cmd);
    }
  };

  const executeCommand = (cmd: string) => {
    switch (cmd) {
      case "help":
        setTerminalHistory(prev => [
          ...prev,
          "Available commands:",
          "  ls          - List all sections",
          "  about       - Show about me",
          "  experience  - Show work experience",
          "  projects    - Show my projects",
          "  skills      - Show skills & technologies",
          "  education   - Show education",
          "  contact     - Show contact information",
          "  renders     - Show 3D renders gallery",
          "  clear       - Clear terminal",
          "  whoami      - Show current user",
          "  date        - Show current date",
          "  time        - Show current time",
          "  version     - Show terminal version",
          "  status      - Show system status",
          "  info        - Show terminal information",
          "  help        - Show this help",
          "",
          "Fun commands:",
          "  coffee      - Get coffee status",
          "  motivation  - Get some motivation",
          "  fortune     - Get a random fortune",
          "  matrix      - Enter the matrix",
          "  hack        - Try to hack (spoiler: you can't)",
          "  sudo        - Try to get admin access",
          "  rm -rf /    - Delete everything (just kidding!)",
          "  ping        - Ping the internet",
          "  uptime      - Show how long I've been coding",
          "",
          "Utility commands:",
          "  resume      - Download my resume",
          "  theme       - Toggle terminal theme (dark/light)",
          "",
          "Tips:",
          "  - Use Tab for autocomplete",
          "  - Use Shift + ↑/↓ arrows for command history",
          "  - Use Escape to close suggestions",
          "  - Try the fun commands for a laugh!",
          ""
        ]);
        break;
      case "ls":
        setTerminalHistory(prev => [
          ...prev,
          "Available sections:",
          "  about/",
          "  experience/",
          "  projects/",
          "  skills/",
          "  education/",
          "  contact/",
          "  renders/",
          ""
        ]);
        break;
      case "about":
        setCurrentSection("about");
        setTerminalHistory(prev => [...prev, "Switching to about section..."]);
        break;
      case "experience":
        setCurrentSection("experience");
        setTerminalHistory(prev => [...prev, "Switching to experience section..."]);
        break;
      case "projects":
        setCurrentSection("projects");
        setTerminalHistory(prev => [...prev, "Switching to projects section..."]);
        break;
      case "skills":
        setCurrentSection("skills");
        setTerminalHistory(prev => [...prev, "Switching to skills section..."]);
        break;
      case "education":
        setCurrentSection("education");
        setTerminalHistory(prev => [...prev, "Switching to education section..."]);
        break;
      case "contact":
        setCurrentSection("contact");
        setTerminalHistory(prev => [...prev, "Switching to contact section..."]);
        break;
      case "renders":
        setCurrentSection("renders");
        setTerminalHistory(prev => [...prev, "Switching to renders section..."]);
        break;
      case "clear":
        setTerminalHistory([]);
        break;
      case "whoami":
        setTerminalHistory(prev => [
          ...prev,
          "portfolio@terminal",
          ""
        ]);
        break;
      case "date":
        setTerminalHistory(prev => [
          ...prev,
          new Date().toLocaleDateString(),
          ""
        ]);
        break;
      case "time":
        setTerminalHistory(prev => [
          ...prev,
          new Date().toLocaleTimeString(),
          ""
        ]);
        break;
      case "version":
        setTerminalHistory(prev => [
          ...prev,
          "Portfolio Terminal v1.0.0",
          "Built with Next.js, TypeScript, and Tailwind CSS",
          ""
        ]);
        break;
      case "status":
        setTerminalHistory(prev => [
          ...prev,
          "System Status: Online",
          `Current Section: ${currentSection}`,
          "Terminal: Active",
          "Autocomplete: Enabled",
          ""
        ]);
        break;
      case "info":
        setTerminalHistory(prev => [
          ...prev,
          "Portfolio Terminal Information:",
          "  Developer: Portfolio Owner",
          "  Framework: Next.js 14",
          "  Language: TypeScript",
          "  Styling: Tailwind CSS",
          "  Features: Autocomplete, History, Sections",
          ""
        ]);
        break;
      case "coffee":
        setTerminalHistory(prev => [
          ...prev,
          "☕ Coffee Status:",
          "  Current Level: 99% (Emergency Reserve)",
          "  Last Brew: 2 minutes ago",
          "  Caffeine Intake: Dangerous levels",
          "  Productivity: Directly proportional to coffee consumption",
          "  Warning: Do not approach without coffee",
          ""
        ]);
        break;
      case "motivation":
        const motivations = [
          "You're not debugging, you're conducting experiments!",
          "Every bug is just a feature in disguise.",
          "Code is poetry written in logic.",
          "The best error message is the one that prevents the error.",
          "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
          "First, solve the problem. Then, write the code.",
          "Code never lies, comments sometimes do.",
          "The only way to learn a new programming language is by writing programs in it."
        ];
        const randomMotivation = motivations[Math.floor(Math.random() * motivations.length)];
        setTerminalHistory(prev => [
          ...prev,
          "💪 Daily Motivation:",
          `  ${randomMotivation}`,
          "  Keep coding, you're doing great! 🚀",
          ""
        ]);
        break;
      case "fortune":
        const fortunes = [
          "You will write a bug-free program today. (Just kidding, that's impossible)",
          "A mysterious pull request will appear in your repository.",
          "Your code will compile on the first try. (This is a lie)",
          "You will discover a new programming language that changes everything.",
          "A senior developer will compliment your code. (Pinch yourself, you're dreaming)",
          "You will finally understand recursion. (Or will you?)",
          "Your next commit will be perfect. (Spoiler: it won't be)",
          "You will write documentation. (This fortune is clearly broken)"
        ];
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        setTerminalHistory(prev => [
          ...prev,
          "🔮 Fortune Cookie:",
          `  ${randomFortune}`,
          ""
        ]);
        break;
      case "matrix":
        setTerminalHistory(prev => [
          ...prev,
          "🌊 Welcome to the Matrix...",
          "  Wake up, Neo...",
          "  The Matrix has you...",
          "  Follow the white rabbit...",
          "  Knock, knock, Neo...",
          "",
          "  Unfortunately, this is just a terminal simulation.",
          "  No red pills available. Try 'coffee' instead.",
          ""
        ]);
        break;
      case "hack":
        setTerminalHistory(prev => [
          ...prev,
          "🚫 Hacking Attempt Detected!",
          "  Initiating security protocols...",
          "  Scanning for vulnerabilities...",
          "  Access denied!",
          "",
          "  Nice try! This is just a portfolio website.",
          "  The only thing you can 'hack' here is your own curiosity.",
          "  Try 'ls' to see what's actually available.",
          ""
        ]);
        break;
      case "sudo":
        setTerminalHistory(prev => [
          ...prev,
          "🔐 Sudo Access Request:",
          "  Password: [hidden]",
          "  Verifying credentials...",
          "  Access denied!",
          "",
          "  Sorry, you don't have admin privileges here.",
          "  This is a read-only portfolio terminal.",
          "  Try 'whoami' to see your current permissions.",
          ""
        ]);
        break;
      case "rm -rf /":
        setTerminalHistory(prev => [
          ...prev,
          "⚠️  DANGER! DANGER! DANGER!",
          "  Command blocked: rm -rf /",
          "  Reason: You're trying to delete everything!",
          "",
          "  This is a safety feature to prevent disasters.",
          "  Even if this worked, it would only delete this website.",
          "  Please don't try to break the internet! 😅",
          ""
        ]);
        break;
      case "ping":
        setTerminalHistory(prev => [
          ...prev,
          "🌐 Pinging the internet...",
          "  PING google.com (142.250.191.14): 56 data bytes",
          "  64 bytes from 142.250.191.14: icmp_seq=0 ttl=54 time=12.3 ms",
          "  64 bytes from 142.250.191.14: icmp_seq=1 ttl=54 time=11.8 ms",
          "  64 bytes from 142.250.191.14: icmp_seq=2 ttl=54 time=13.1 ms",
          "",
          "  --- google.com ping statistics ---",
          "  3 packets transmitted, 3 received, 0% packet loss",
          "  The internet is working! (Or at least Google is)",
          ""
        ]);
        break;
      case "uptime":
        const uptime = Math.floor(Date.now() / 1000) - Math.floor(Date.now() / 1000) % 86400;
        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        setTerminalHistory(prev => [
          ...prev,
          "⏰ System Uptime:",
          `  ${hours} hours, ${minutes} minutes`,
          "  (Since this page was loaded)",
          "",
          "  Developer Status:",
          "  - Coffee consumed: ∞ cups",
          "  - Bugs fixed: 42",
          "  - New bugs created: 1337",
          "  - Lines of code: Too many to count",
          "  - Sanity level: Questionable",
          ""
        ]);
        break;
      case "resume":
        setTerminalHistory(prev => [
          ...prev,
          "📄 Resume Download:",
          "  Initiating download...",
          "  File: resume.pdf",
          "  Size: ~2.3 MB",
          "  Format: PDF",
          "",
          "  Download started! Check your downloads folder.",
          ""
        ]);
        // Trigger the actual download
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Lakshya_Agrawal_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
      case "theme":
        if (theme === "dark") {
          // Switching from dark to light - start confirmation process
          setConfirmationStep(0);
          setIsWaitingForConfirmation(true);
          showNextConfirmationStep();
        } else {
          // Switching from light to dark - immediate switch with funny message
          setTheme("dark");
          setTerminalHistory(prev => [
            ...prev,
            "Told you so! Phew, that feels better, ain't it? 😌",
            "Welcome back to the dark side! 🌙",
            ""
          ]);
        }
        break;
      default:
        setTerminalHistory(prev => [
          ...prev,
          `Command not found: ${cmd}`,
          "Type 'help' for available commands.",
          ""
        ]);
        break;
    }
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case "about":
        return <AboutSection theme={theme} />;
      case "experience":
        return <ExperienceSection theme={theme} />;
      case "projects":
        return <ProjectsSection theme={theme} />;
      case "skills":
        return <SkillsSection theme={theme} />;
      case "education":
        return <EducationSection theme={theme} />;
      case "contact":
        return <ContactSection theme={theme} />;
      case "renders":
        return <RendersSection theme={theme} />;
      default:
        return <AboutSection theme={theme} />;
    }
  };

  // Show loading screen
  if (isLoading) {
    return <TerminalLoading theme={theme} />;
  }

  return (
    <>
      <Head>
        <title>Lakshya Agrawal - Terminal Portfolio</title>
        <meta name="description" content="Terminal Portfolio - Full Stack Developer & Software Engineer" />
        <link rel="icon" type="image/x-icon" href="/Logo.ico?v=2" />
        <link rel="shortcut icon" type="image/x-icon" href="/Logo.ico?v=2" />
        <link rel="apple-touch-icon" href="/Logo.ico?v=2" />
        <meta name="msapplication-TileImage" content="/Logo.ico?v=2" />
      </Head>
      <div className={`overflow-x-hidden min-h-screen font-mono ${
        theme === "dark" 
          ? "code-editor-bg text-green-400" 
          : "bg-gray-100 text-gray-800"
      }`}>
        <TerminalCursorFollower theme={theme} />

        <div className="flex flex-col lg:flex-row h-screen">
        {/* Mobile Navigation Bar */}
        <div className={`lg:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b overflow-x-hidden ${
          theme === "dark" 
            ? "code-block border-green-400/30" 
            : "bg-white border-gray-300"
        }`}>
          <div className="justify-between p-3">
            <div className="min-w-0">
              <Button
                onClick={() => setIsTerminalOpen(!isTerminalOpen)}
                className={`font-mono text-xs py-1 rounded-none truncate w-full min-w-0 ${
                  theme === "dark"
                    ? "code-block hover:bg-green-400/30 text-green-400 border-green-400/50"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800 border-gray-400"
                }`}
              >
                <span className="syntax-keyword">function</span> 
                <span className="syntax-function">toggleTerminal</span>
                <span className="code-bracket">()</span> 
                <span className="code-bracket">{`{`}</span>
                <span className="syntax-keyword">return</span> 
                <span className="syntax-string">&quot;{isTerminalOpen ? "Hide" : "Show"}&quot;</span>
                <span className="syntax-operator">;</span>
                <span className="code-bracket">{`}`}</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Terminal Sidebar */}
        <div className={`w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r transition-all duration-300 ${
          theme === "dark" ? "border-green-400/30" : "border-gray-300"
        } ${
          isTerminalOpen ? 'h-1/2' : 'h-0 lg:h-full'
        } ${isTerminalOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'} overflow-hidden`}>
          <div className={`p-2 ${
            theme === "dark" ? "code-block" : "bg-white border border-gray-200"
          }`}>
            <div className="text-xs font-mono mb-2">
              <span className="syntax-comment">{`//`}</span> <span className="syntax-variable">Terminal Interface</span>
            </div>
            <div className="text-xs font-mono">
              <span className="syntax-keyword">import</span> <span className="syntax-variable">{`{ Terminal }`}</span> <span className="syntax-keyword">from</span> <span className="syntax-string">&quot;./components/terminal&quot;</span><span className="syntax-operator">;</span>
            </div>
          </div>
          <Terminal
            history={terminalHistory}
            onCommand={handleCommand}
            isTyping={isTyping}
            theme={theme}
            isWaitingForConfirmation={isWaitingForConfirmation}
            isMobileMode={isTerminalOpen}
          />
        </div>

        {/* Main Content Area */}
        <div className={`flex-1 overflow-auto transition-all duration-300 ${
          isTerminalOpen ? 'h-1/2' : 'h-full'
        } pt-16 lg:pt-0`}>
          <div className={`m-2 ${
            theme === "dark" ? "code-block" : "bg-white border border-gray-200"
          }`}>
            <div className="p-4">
              {renderCurrentSection()}
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default function TerminalPage() {
  return (
    <TerminalThemeProvider>
      <TerminalPageContent />
    </TerminalThemeProvider>
  );
}
