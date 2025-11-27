"use client";

import { useState } from "react";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Badge } from "~/components/ui/badge";
import { toast } from "sonner";

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  website: string;
}

const contactInfo: ContactInfo = {
  email: "aglakshya06@gmail.com",
  phone: "+1 (540) 934-8436",
  location: "Blacksburg, VA",
  github: "github.com/lakshya7900",
  linkedin: "linkedin.com/in/lakshya7900",
  website: "lakshya7900.vercel.app"
};

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/lakshya7900",
    icon: "🐙",
    description: "Check out my code and projects"
  },
  {
    name: "LinkedIn",
    url: "http://www.linkedin.com/in/lakshya7900",
    icon: "💼",
    description: "Connect with me professionally"
  },
  {
    name: "Email",
    url: "mailto:aglakshya06@gmail.com",
    icon: "📧",
    description: "Send me a message directly"
  }
];

interface ContactSectionProps {
  theme?: "dark" | "light";
}

export function ContactSection({ theme = "dark" }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit to Google Sheets via Apps Script
      await fetch('https://script.google.com/macros/s/AKfycbwkDAWIJfiFu5sMTRcHX0FEqOm-0y6U1UA_7jAeHZ23b01uCKl4-K-qY8E_XfjQ5D6ZPw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Show success toast
      toast.success("Message sent successfully!", {
        description: "Your message has been recorded. I'll get back to you soon!",
        duration: 3000,
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      
      // Show error toast
      toast.error("Failed to send message", {
        description: "Please try again or contact me directly via email",
        duration: 4000,
      });
    }
  };

  const copyToClipboard = (text: string) => {
    void navigator.clipboard.writeText(text);
    toast.success("Message copied!", {
      description: "The text has been copied to your clipboard",
      duration: 2000,
    });
  };

  return (
    <div className={`p-8 h-full overflow-y-auto ${
      theme === "dark" 
        ? "bg-gradient-to-br from-gray-900 to-black" 
        : "bg-gradient-to-br from-gray-50 to-gray-100"
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-4xl font-bold mb-2 font-mono ${
            theme === "dark" ? "text-green-400" : "text-green-600"
          }`}>
            contact
          </h1>
          <div className={`h-1 w-24 ${
            theme === "dark" ? "bg-green-400" : "bg-green-600"
          }`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className={`p-6 ${
              theme === "dark" 
                ? "bg-gray-900/50 border-green-400/30" 
                : "bg-white border-green-600/30"
            }`}>
              <h2 className={`text-2xl font-bold mb-4 font-mono ${
                theme === "dark" ? "text-green-400" : "text-green-600"
              }`}>
                Get In Touch
              </h2>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <span className={`font-mono ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}>Email:</span>
                  <div className="flex items-center space-x-2">
                    <span className={`font-mono text-xs sm:text-[0.89rem] ${
                      theme === "dark" ? "text-green-400" : "text-green-600"
                    }`}>{contactInfo.email}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className={`${
                        theme === "dark"
                          ? "border-green-400/50 text-green-300 hover:bg-green-400/10"
                          : "border-green-600/50 text-green-700 hover:bg-green-100"
                      }`}
                      onClick={() => copyToClipboard(contactInfo.email)}
                    >
                      Copy
                    </Button>
                  </div>
                </div>
                <div className="flex items-center flex-col sm:flex-row  justify-between">
                  <span className={`font-mono ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}>Phone:</span>
                  <div className="flex text-xs sm:text-[0.89rem] items-center space-x-2">
                    <span className={`font-mono ${
                      theme === "dark" ? "text-green-400" : "text-green-600"
                    }`}>{contactInfo.phone}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className={`${
                        theme === "dark"
                          ? "border-green-400/50 text-green-300 hover:bg-green-400/10"
                          : "border-green-600/50 text-green-700 hover:bg-green-100"
                      }`}
                      onClick={() => copyToClipboard(contactInfo.phone)}
                    >
                      Copy
                    </Button>
                  </div>
                </div>
                <div className="flex items-center flex-col sm:flex-row justify-between">
                  <span className={`font-mono ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}>Location:</span>
                  <div className="flex text-xs sm:text-[0.89rem] items-center space-x-2">
                    <span className={`font-mono ${
                      theme === "dark" ? "text-green-400" : "text-green-600"
                    }`}>{contactInfo.location}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className={`${
                        theme === "dark"
                          ? "border-green-400/50 text-green-300 hover:bg-green-400/10"
                          : "border-green-600/50 text-green-700 hover:bg-green-100"
                      }`}
                      onClick={() => copyToClipboard(contactInfo.location)}
                    >
                      Copy
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
             <Card className={`p-6 ${
               theme === "dark" 
                 ? "bg-gray-900/50 border-green-400/30" 
                 : "bg-white border-green-600/30"
             }`}>
              <h2 className={`text-2xl font-bold mb-4 font-mono ${
                theme === "dark" ? "text-green-400" : "text-green-600"
              }`}>
                Social Links
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="outline"
                    className={`h-auto p-4 justify-start ${
                      theme === "dark"
                      ? "border-green-400/50 text-green-300 hover:bg-green-400/10"
                      : "border-green-700/50 text-green-600 hover:bg-green-700/10"
                    }`}
                    onClick={() => window.open(link.url, "_blank")}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl text-wrap">{link.icon}</span>
                      <div className="text-left">
                        <div className="font-semibold font-mono text-wrap">{link.name}</div>
                        <div className="text-xs opacity-80 font-mono text-wrap">{link.description}</div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </Card>

            {/* Availability Status */}
             <Card className={`p-6 ${
               theme === "dark" 
                 ? "bg-gray-900/50 border-green-400/30" 
                 : "bg-white border-green-600/30"
             }`}>
              <h2 className={`text-2xl font-bold mb-4 font-mono ${
                theme === "dark" ? "text-green-400" : "text-green-600"
              }`}>
                Availability
              </h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full animate-pulse ${ theme === "dark" ? "bg-green-500" : "bg-green-700" }`}></div>
                  <span className={`font-mono ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}>Available for new opportunities</span>
                </div>
                <div className={`font-mono text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}>
                  Open to freelance projects, internship positions, and collaboration opportunities.
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge 
                    variant="outline" 
                    className={`${
                      theme === "dark"
                      ? "border-green-400/50 text-green-300 hover:bg-green-400/10"
                      : "border-green-700/50 text-green-600 hover:bg-green-700/10"
                    }`}>
                    Internship
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className={`${
                      theme === "dark"
                      ? "border-green-400/50 text-green-300 hover:bg-green-400/10"
                      : "border-green-700/50 text-green-600 hover:bg-green-700/10"
                    }`}>
                    Freelance
                  </Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
             <Card className={`p-6 ${
               theme === "dark" 
                 ? "bg-gray-900/50 border-green-400/30" 
                 : "bg-white border-green-600/30"
             }`}>
              <h2 className={`text-2xl font-bold mb-4 font-mono ${
                theme === "dark" ? "text-green-400" : "text-green-600"
              }`}>
                Send Message
              </h2>
              

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={`block font-mono text-sm mb-2 ${
                    theme === "dark"
                    ? "text-gray-300"
                    : "text-gray-700"
                  }`}>
                    Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`font-mono ${ theme === "dark"
                      ? "bg-gray-800 border-green-400/30 text-green-300 focus:border-green-400"
                      : "bg-gray-50 border-green-700/50 text-green-800 focus:border-green-800"
                     }`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className={`block font-mono text-sm mb-2 ${
                    theme === "dark"
                    ? "text-gray-300"
                    : "text-gray-700"
                  }`}>
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`font-mono ${ theme === "dark"
                      ? "bg-gray-800 border-green-400/30 text-green-300 focus:border-green-400"
                      : "bg-gray-50 border-green-700/50 text-green-800 focus:border-green-800"
                     }`}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className={`block font-mono text-sm mb-2 ${
                    theme === "dark"
                    ? "text-gray-300"
                    : "text-gray-700"
                  }`}>
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`font-mono ${ theme === "dark"
                      ? "bg-gray-800 border-green-400/30 text-green-300 focus:border-green-400"
                      : "bg-gray-50 border-green-700/50 text-green-800 focus:border-green-800"
                     }`}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className={`block font-mono text-sm mb-2 ${
                    theme === "dark"
                    ? "text-gray-300"
                    : "text-gray-700"
                  }`}>
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`font-mono resize-none ${ theme === "dark"
                      ? "bg-gray-800 border-green-400/30 text-green-300 focus:border-green-400"
                      : "bg-gray-50 border-green-700/50 text-green-800 focus:border-green-800"
                     }`}
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-400 text-black hover:bg-green-300 font-mono font-semibold"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <span className="animate-spin">⟳</span>
                      <span>Sending...</span>
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Terminal-style footer */}
        <div className="mt-8 text-center">
          <div className={`font-mono text-sm ${ theme === "dark" ? "text-green-500" : "text-green-700" }`}>
            <span className="animate-pulse">●</span> Let&apos;s build something amazing together
          </div>
        </div>
      </div>
    </div>
  );
}
