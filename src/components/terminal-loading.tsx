"use client";

import { useState, useEffect } from "react";

interface TerminalLoadingProps {
  theme?: "dark" | "light";
}

export function TerminalLoading({ theme = "dark" }: TerminalLoadingProps) {
  const [loadingStep, setLoadingStep] = useState(0);
  const [loadingText, setLoadingText] = useState("");

  const loadingSteps = [
    "Initializing terminal...",
    "Loading dependencies...",
    "Mounting file system...",
    "Connecting to server...",
    "Loading user profile...",
    "Preparing command interface...",
    "Starting shell session...",
    "Loading complete!"
  ];

  const loadingElements = [
    "Loading core modules...",
    "Initializing display driver...",
    "Mounting /dev/tty...",
    "Loading bash configuration...",
    "Setting up environment variables...",
    "Loading command history...",
    "Preparing autocomplete...",
    "Starting background processes...",
    "Loading theme configuration...",
    "Initializing cursor tracking...",
    "Setting up event listeners...",
    "Loading terminal fonts...",
    "Preparing output buffer...",
    "Starting input handler...",
    "Loading command registry...",
    "Initializing help system...",
    "Setting up progress indicators...",
    "Loading user preferences...",
    "Preparing quick commands...",
    "Starting animation engine...",
    "Loading 3D renderer...",
    "Initializing media player...",
    "Setting up lightbox...",
    "Loading contact form...",
    "Preparing toast notifications...",
    "Starting mouse follower...",
    "Loading terminal cursor...",
    "Initializing theme toggle...",
    "Setting up responsive layout...",
    "Loading complete! Welcome to the terminal."
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setLoadingStep(prev => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 800);

    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        const randomElement = loadingElements[Math.floor(Math.random() * loadingElements.length)];
        return prev + randomElement + "\n";
      });
    }, 200);

    return () => {
      clearInterval(stepInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${
      theme === "dark" 
        ? "bg-black" 
        : "bg-white"
    }`}>
      <div className={`w-full max-w-4xl mx-4 ${
        theme === "dark" 
          ? "bg-gray-900 border border-green-500" 
          : "bg-gray-100 border border-green-600"
      } rounded-lg shadow-2xl`}>
        {/* Terminal Header */}
        <div className={`flex items-center justify-between px-4 py-2 ${
          theme === "dark" 
            ? "bg-gray-800 border-b border-green-500" 
            : "bg-gray-200 border-b border-green-600"
        } rounded-t-lg`}>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className={`ml-4 font-mono text-sm ${
              theme === "dark" ? "text-green-400" : "text-green-800"
            }`}>
              portfolio@terminal:~$ loading
            </span>
          </div>
        </div>

        {/* Loading Content */}
        <div className={`p-6 font-mono text-sm ${
          theme === "dark" ? "text-green-400" : "text-green-600"
        }`}>
          {/* Main Loading Steps */}
          <div className="mb-4">
            {loadingSteps.map((step, index) => (
              <div key={index} className="flex items-center mb-2">
                <span className={`mr-2 ${
                  index <= loadingStep 
                  ? theme === "dark" 
                    ? "text-green-400" 
                    : "text-green-600"
                  : theme === "dark" 
                    ? "text-gray-500" 
                    : "text-gray-700"
                }`}>
                  {index <= loadingStep ? "✓" : "○"}
                </span>
                <span className={index <= loadingStep 
                  ? theme === "dark" 
                    ? "text-green-400" 
                    : "text-green-600"
                  : theme === "dark" 
                    ? "text-gray-500" 
                    : "text-gray-700"}>
                  {step}
                </span>
                {index === loadingStep && (
                  <span className="ml-2 animate-pulse">...</span>
                )}
              </div>
            ))}
          </div>

          {/* Loading Elements */}
          <div className="border-t pt-4">
            <div className={`text-xs opacity-70 mb-2 ${
              theme === "dark" ? "text-green-500" : "text-green-700"
            }`}>Loading elements:</div>
            <div className="max-h-40 overflow-y-auto">
              <pre className={`whitespace-pre-wrap text-xs ${
                theme === "dark" ? "text-green-500" : "text-green-800"
              }`}>
                {loadingText}
              </pre>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className={`w-full h-2 rounded ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-300"
            }`}>
              <div 
                className={`h-full rounded transition-all duration-500 ${
                  theme === "dark" ? "bg-green-500" : "bg-green-600"
                }`}
                style={{ width: `${((loadingStep + 1) / loadingSteps.length) * 100}%` }}
              ></div>
            </div>
            <div className={`text-xs mt-1 opacity-70 ${
              theme === "dark" ? "text-green-500" : "text-green-700"
            }`}>
              {Math.round(((loadingStep + 1) / loadingSteps.length) * 100)}% complete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
