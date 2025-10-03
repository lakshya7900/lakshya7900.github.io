"use client";

import { useState } from "react";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";
import { Skeleton } from "~/components/ui/skeleton";

import { Button } from "~/components/ui/button";

import { FadeIn } from "~/components/fade-in";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Video from "yet-another-react-lightbox/plugins/video";

type MediaItem = {
  type: "image" | "video";
  src: string;
};

export default function Renders() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedMedia, setLoadedMedia] = useState<Record<number, boolean>>({});

  // Add your media here - can be images or videos from external URLs
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

  const handleMediaLoad = (index: number) => {
    console.log(`Media loaded at index ${index}`);
    setLoadedMedia((prev) => {
      // Only update if not already loaded to prevent infinite loops
      if (prev[index]) return prev;
      return { ...prev, [index]: true };
    });
  };

  const handleMediaError = (index: number) => {
    console.error(`Failed to load media at index ${index}`);
    setLoadedMedia((prev) => {
      // Only update if not already loaded
      if (prev[index]) return prev;
      return { ...prev, [index]: true };
    });
  };

  const handleImageRef = (img: HTMLImageElement | null, index: number) => {
    if (img && img.complete && !loadedMedia[index]) {
      // Image already loaded (from cache)
      handleMediaLoad(index);
    }
  };

  const handleVideoRef = (video: HTMLVideoElement | null, index: number) => {
    if (video && video.readyState >= 1 && !loadedMedia[index]) {
      // Video metadata already loaded
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

  const handleMediaClick = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      {/* Header */}
      <section className="relative z-10 container mx-auto px-4 py-12">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <Button asChild variant="ghost" size="sm">
                <Link href="/" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                3D Renders & Videos
              </h1>
            </div>
          </FadeIn>
      </section>

      {/* Gallery Grid */}
      <section className="relative z-10 pb-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {media.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleMediaClick(index)}
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-[hsl(var(--color-muted))] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  {/* Skeleton Loader */}
                  {!loadedMedia[index] && (
                    <Skeleton className="absolute inset-0 h-full w-full" />
                  )}
                  
                  {/* Media Content */}
                  {item.type === "image" ? (
                    <img
                      ref={(img) => handleImageRef(img, index)}
                      src={item.src}
                      alt={`Render ${index + 1}`}
                      className={`h-full w-full object-cover transition-all duration-300 ${
                        loadedMedia[index] ? "opacity-100 group-hover:scale-110" : "opacity-0"
                      }`}
                      onLoad={() => handleMediaLoad(index)}
                      onError={() => handleMediaError(index)}
                      crossOrigin="anonymous"
                    />
                  ) : (
                    <div className="relative h-full w-full">
                      <video
                        ref={(video) => {
                          handleVideoRef(video, index);
                          // Seek to 0.1 seconds to show first frame as thumbnail
                          if (video && video.readyState >= 1) {
                            video.currentTime = 0.1;
                          }
                        }}
                        src={item.src}
                        className={`h-full w-full object-cover transition-all duration-300 ${
                          loadedMedia[index] ? "opacity-100 group-hover:scale-110" : "opacity-0"
                        }`}
                        onLoadedMetadata={(e) => {
                          handleMediaLoad(index);
                          // Seek to show first frame as thumbnail
                          const video = e.currentTarget;
                          video.currentTime = 0.1;
                        }}
                        onLoadedData={() => handleMediaLoad(index)}
                        onError={() => handleMediaError(index)}
                        preload="metadata"
                        muted
                        playsInline
                        crossOrigin="anonymous"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
                        <svg
                          className={`h-16 w-16 text-white transition-all duration-300 group-hover:scale-110 ${
                            loadedMedia[index] ? "opacity-100" : "opacity-0"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  {loadedMedia[index] && (
                    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
                  )}
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={lightboxSlides}
        plugins={[Video]}
      />
    </>
  );
}

