"use client";

import React, { useState, useRef, useEffect } from "react";

interface TerminalProps {
  history: string[];
  onCommand: (command: string) => void;
  isTyping: boolean;
  theme?: "dark" | "light";
  isWaitingForConfirmation?: boolean;
  isMobileMode?: boolean;
}

export function Terminal({ history, onCommand, isTyping, theme = "dark", isWaitingForConfirmation = false, isMobileMode = false }: TerminalProps) {
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const availableCommands = React.useMemo(() => [
    "help", "ls", "about", "experience", "projects", "skills", 
    "education", "contact", "renders", "clear", "whoami", 
    "date", "time", "version", "status", "info",
    "coffee", "motivation", "fortune", "matrix", 
    "hack", "sudo", "rm -rf /", "ping", "uptime", "resume",
    "theme"
  ], []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (inputRef.current && !isTyping) {
      inputRef.current.focus();
    }
  }, [isTyping]);

  // Update suggestions when input changes
  useEffect(() => {
    if (input.trim()) {
      const filtered = availableCommands.filter(cmd => 
        cmd.toLowerCase().startsWith(input.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
      setSelectedSuggestion(0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [input, availableCommands]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onCommand(input);
      setCommandHistory(prev => [...prev, input]);
      setHistoryIndex(-1);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      e.preventDefault();
      if (showSuggestions && suggestions.length > 0) {
        setInput(suggestions[selectedSuggestion] ?? "");
        setShowSuggestions(false);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (showSuggestions && suggestions.length > 0) {
        // Navigate through suggestions
        setSelectedSuggestion(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
      } else if (historyIndex < commandHistory.length - 1) {
        // Navigate through command history
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] ?? "");
        setShowSuggestions(false);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (showSuggestions && suggestions.length > 0) {
        // Navigate through suggestions
        setSelectedSuggestion(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
      } else if (historyIndex > 0) {
        // Navigate through command history
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] ?? "");
        setShowSuggestions(false);
      } else {
        setHistoryIndex(-1);
        setInput("");
        setShowSuggestions(false);
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  return (
    <div className={`h-full flex flex-col ${
      theme === "dark" ? "bg-black" : "bg-white"
    }`}>
      {/* Terminal Header */}
      <div className={`flex items-center justify-between p-2 sm:p-3 border-b ${
        theme === "dark" 
          ? "border-green-400/30 bg-green-400/10" 
          : "border-gray-300 bg-gray-50"
      }`}>
        {!isMobileMode && (
          <div className="hidden sm:flex items-center space-x-1 sm:space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
          </div>
        )}
        <div className={`text-xs sm:text-sm font-mono text-center flex-1 ${
          theme === "dark" ? "text-green-400" : "text-gray-800"
        }`}>
          portfolio@terminal:~$
        </div>
        <div className="hidden sm:block w-8 sm:w-16"></div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="flex-1 p-2 sm:p-4 overflow-y-auto space-y-1 scrollbar-terminal"
      >
        {history.filter(line => line != null).map((line, index) => {
          // Check if this is a fake progress command
          const isFakeProgress = line && (
            line.includes("Loading dependencies") ||
            line.includes("Compiling coffee") ||
            line.includes("Initializing quantum") ||
            line.includes("Booting up the matrix") ||
            line.includes("Calibrating flux") ||
            line.includes("Syncing with the cloud") ||
            line.includes("Optimizing for") ||
            line.includes("Running unit tests") ||
            line.includes("Deploying to production") ||
            line.includes("Checking if the server") ||
            line.includes("Loading more RAM") ||
            line.includes("Defragmenting") ||
            line.includes("Rebuilding the entire") ||
            line.includes("Updating dependencies") ||
            line.includes("Running linter") ||
            line.includes("Compiling TypeScript") ||
            line.includes("Bundling assets") ||
            line.includes("Minifying code") ||
            line.includes("Generating documentation") ||
            line.includes("Running code coverage") ||
            line.includes("// TODO:") ||
            line.includes("// FIXME:") ||
            line.includes("// HACK:") ||
            line.includes("// This works on my machine") ||
            line.includes("// Don't touch this") ||
            line.includes("// Legacy code") ||
            line.includes("// Optimized for performance") ||
            line.includes("// This is definitely not a bug") ||
            line.includes("// Commented out for debugging") ||
            line.includes("// This code is self-documenting") ||
            line.includes("// This is production code") ||
            line.includes("// TODO: Add proper error handling") ||
            line.includes("// FIXME: Remove hardcoded") ||
            line.includes("// HACK: Using console.log") ||
            line.includes("// TODO: Refactor this mess") ||
            line.includes("// FIXME: Memory leak") ||
            line.includes("// HACK: Using magic numbers") ||
            line.includes("// TODO: Write tests") ||
            line.includes("// FIXME: Race condition") ||
            line.includes("// HACK: Using setTimeout")
          );

          return (
            <div key={index} className="text-xs sm:text-sm break-words">
              {line?.startsWith("> ") ? (
                <span className={theme === "dark" ? "text-green-400" : "text-green-600"}>{line}</span>
              ) : line?.startsWith("Command not found") || line?.startsWith("Type 'help'") ? (
                <span className="text-red-400">{line}</span>
              ) : line?.startsWith("Switching to") ? (
                <span className={theme === "dark" ? "text-yellow-400" : "text-yellow-600"}>{line}</span>
              ) : line && (line.startsWith("Available") || line.startsWith("  ") || line.startsWith("Fun commands:") || line.startsWith("Utility commands:") || line.startsWith("Tips:")) ? (
                <span className={`${theme === "dark" ? "text-blue-400" : "text-blue-600"} ${line.endsWith(":") ? "font-bold" : ""}`}>{line}</span>
              ) : line?.startsWith("//") ? (
                <span className={`italic ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>{line}</span>
              ) : isFakeProgress ? (
                <span className={`italic opacity-60 ${theme === "dark" ? "text-green-500" : "text-zinc-800"}`}>{line}</span>
              ) : line?.startsWith("Executing") ? (
                <span className={theme === "dark" ? "text-green-300" : "text-gray-700"}>{line || ""}</span>
              ) : line && !line.startsWith("$ ") && !line.startsWith("Command not found") && !line.startsWith("Switching to") && !line.startsWith("Available") && !line.startsWith("  ") && !line.startsWith("Fun commands:") && !line.startsWith("Utility commands:") && !line.startsWith("Tips:") && !line.startsWith("//") && !isFakeProgress && !line.startsWith("Welcome") && !line.startsWith("Type") && !line.startsWith("Use") && !line.startsWith("Warning") ? (
                <span className={`font-bold ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>{line || ""}</span>
              ) : (
                <span className={theme === "dark" ? "text-green-300" : "text-gray-700"}>{line || ""}</span>
              )}
            </div>
          );
        })}
        
        {isTyping && (
          <div className="text-green-400 animate-pulse">
            <span className="inline-block w-2 h-4 bg-green-400"></span>
          </div>
        )}
      </div>

      {/* Mobile Quick Commands */}
      <div className={`lg:hidden p-2 border-t ${
        theme === "dark" 
          ? "border-green-400/30 bg-gray-900/50" 
          : "border-gray-300 bg-gray-50"
      }`}>
        <div className={`text-xs font-mono mb-2 ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}>
          {isWaitingForConfirmation ? "Confirmation:" : "Quick commands:"}
        </div>
        <div className="flex flex-wrap gap-1">
          {isWaitingForConfirmation ? (
            // Show y/n buttons when waiting for confirmation
            ["y", "n"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => {
                  setInput(cmd);
                  onCommand(cmd);
                  setInput("");
                }}
                className={`px-2 py-1 text-xs font-mono rounded border ${
                  theme === "dark"
                    ? "bg-green-400/10 hover:bg-green-400/20 border-green-400/30 text-green-300"
                    : "bg-gray-200 hover:bg-gray-300 border-gray-300 text-gray-700"
                }`}
              >
                {cmd}
              </button>
            ))
          ) : (
            // Show normal quick commands
            ["help", "ls", "about", "experience", "projects", "skills", "renders", "coffee", "fortune", "resume"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => {
                  setInput(cmd);
                  onCommand(cmd);
                  setInput("");
                }}
                className={`px-2 py-1 text-xs font-mono rounded border ${
                  theme === "dark"
                    ? "bg-green-400/10 hover:bg-green-400/20 border-green-400/30 text-green-300"
                    : "bg-gray-200 hover:bg-gray-300 border-gray-300 text-gray-700"
                }`}
              >
                {cmd}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Terminal Input */}
      {!isTyping && (
        <div className="relative">
          {/* Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className={`absolute bottom-full left-0 right-0 border rounded-t-lg max-h-32 overflow-y-auto z-10 ${
              theme === "dark" 
                ? "bg-gray-900 border-green-400/30" 
                : "bg-white border-gray-300"
            }`}>
              {suggestions.map((suggestion, index) => (
                <div
                  key={suggestion}
                  className={`px-3 py-1 text-xs font-mono cursor-pointer ${
                    index === selectedSuggestion
                      ? theme === "dark" 
                        ? "bg-green-400/20 text-green-300"
                        : "bg-green-100 text-green-700"
                      : theme === "dark"
                        ? "text-gray-300 hover:bg-green-400/10"
                        : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    setInput(suggestion);
                    setShowSuggestions(false);
                  }}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className={`p-2 sm:p-4 border-t ${
            theme === "dark" ? "border-green-400/30" : "border-gray-300"
          }`}>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className={`font-mono text-sm sm:text-base ${
                theme === "dark" ? "text-green-400" : "text-green-600"
              }`}>$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className={`flex-1 bg-transparent font-mono outline-none text-sm sm:text-base ${
                  theme === "dark" ? "text-green-400" : "text-gray-800"
                }`}
                placeholder="Enter command..."
                autoFocus
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
