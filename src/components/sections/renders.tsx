"use client";

import { useState } from "react";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";

type MediaItem = {
  type: "image" | "video";
  src: string;
};

const media: MediaItem[] = [
  {
    type: "video",
    src: "https://i.imgur.com/S41A0kG.mp4", 
  },
  {
    type: "image",
    src: "https://i.imgur.com/A4hyqXe.jpg", 
  },
  {
    type: "image",
    src: "https://i.imgur.com/8ok1TCD.jpg", 
  },
  {
    type: "image",
    src: "https://i.imgur.com/WDQxiLr.png", 
  },
  {
    type: "image",
    src: "https://i.imgur.com/tWnVa9y.jpeg",
  },
  {
    type: "video",
    src: "https://i.imgur.com/NBVK1DE.mp4", 
  },
  {
    type: "image",
    src: "https://i.imgur.com/q0wuFiV.jpg", 
  },
  {
    type: "video",
    src: "https://i.imgur.com/xB50pwT.mp4", 
  },
  {
    type: "image",
    src: "https://i.imgur.com/GSbZ4uz.png", 
  },
  {
    type: "image",
    src: "https://i.imgur.com/UrqlIfv.jpg", 
  },
  {
    type: "image",
    src: "https://i.imgur.com/XhZdXAB.jpg", 
  },
  {
    type: "image",
    src: "https://i.imgur.com/c6x1P6q.jpg", 
  },
  {
    type: "video",
    src: "https://i.imgur.com/pnvPXlX.mp4", 
  },
  {
    type: "image",
    src: "https://i.imgur.com/po7fMBL.jpg", 
  },
  {
    type: "image",
    src: "https://i.imgur.com/P1tJWdA.jpg", 
  },
  {
    type: "image",
    src: "https://i.imgur.com/ckmnhX0.png", 
  },
  {
    type: "image",
    src: "https://i.imgur.com/XE3JpIU.jpg", 
  },
  {
    type: "image",
    src: "https://i.imgur.com/kFxZ1ou.png", 
  },
];

interface RendersSectionProps {
  theme?: "dark" | "light";
}

export function RendersSection({ theme = "dark" }: RendersSectionProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedMedia, setLoadedMedia] = useState<Record<number, boolean>>({});

  const handleMediaLoad = (index: number) => {
    setLoadedMedia((prev) => {
      if (prev[index]) return prev;
      return { ...prev, [index]: true };
    });
  };

  const handleMediaError = (index: number) => {
    setLoadedMedia((prev) => {
      if (prev[index]) return prev;
      return { ...prev, [index]: true };
    });
  };

  const handleImageRef = (img: HTMLImageElement | null, index: number) => {
    if (img && img.complete && !loadedMedia[index]) {
      handleMediaLoad(index);
    }
  };

  const handleVideoRef = (video: HTMLVideoElement | null, index: number) => {
    if (video && video.readyState >= 1 && !loadedMedia[index]) {
      handleMediaLoad(index);
    }
  };

  const lightboxSlides = media.map((item) => {
    if (item.type === "video") {
      return {
        type: "video" as const,
        sources: [
          {
            src: item.src,
            type: "video/mp4",
          },
        ],
      };
    }
    return {
      src: item.src,
    };
  });

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
            renders
          </h1>
          <div className={`h-1 w-16 sm:w-24 ${
            theme === "dark" ? "bg-green-400" : "bg-green-600"
          }`}></div>
        </div>

        {/* Description */}
        <div className="mb-6 sm:mb-8">
          <p className={`text-sm sm:text-base font-mono ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
            A collection of 3D renders and visual experiments created using Blender, 
            showcasing various techniques in modeling, lighting, and rendering.
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {media.map((item, index) => (
            <Card
              key={index}
              data-media-item
              className={`group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 ${
                theme === "dark" 
                  ? "bg-gray-900/50 border-green-400/30 hover:border-green-400/50" 
                  : "bg-white border-green-600/30 hover:border-green-600/50"
              }`}
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            >
              <div className="aspect-square relative overflow-hidden">
                {!loadedMedia[index] && (
                  <Skeleton className="w-full h-full" />
                )}
                
                {item.type === "image" ? (
                  <img
                    ref={(img) => handleImageRef(img, index)}
                    src={item.src}
                    alt={`Render ${index + 1}`}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      loadedMedia[index] ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => handleMediaLoad(index)}
                    onError={() => handleMediaError(index)}
                  />
                ) : (
                  <video
                    ref={(video) => handleVideoRef(video, index)}
                    src={item.src}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      loadedMedia[index] ? "opacity-100" : "opacity-0"
                    }`}
                    onLoadedData={() => handleMediaLoad(index)}
                    onError={() => handleMediaError(index)}
                    muted
                    loop
                    playsInline
                  />
                )}
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ${
                  theme === "dark" ? "text-green-400" : "text-green-600"
                }`}>
                  <div className="text-center">
                    <div className="text-2xl mb-2">
                      {item.type === "video" ? "▶" : ""}
                    </div>
                    <div className="text-sm font-mono">
                      {item.type === "video" ? "Play Video" : "View Image"}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Terminal-style footer */}
        <div className="mt-8 text-center">
          <div className={`font-mono text-sm ${ theme === "dark" ? "text-green-400" : "text-green-600" }`}>
            <span className="animate-pulse">●</span> Art meets technology in 3D space
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={lightboxSlides}
        plugins={[Video]}
        index={currentIndex}
        on={{
          view: ({ index }) => setCurrentIndex(index),
        }}
      />
    </div>
  );
}
