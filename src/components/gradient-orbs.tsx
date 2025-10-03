"use client";

export function GradientOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-30">
      {/* Orb 1 */}
      <div
        className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl"
        style={{
          animation: "float1 20s ease-in-out infinite",
        }}
      />
      
      {/* Orb 2 */}
      <div
        className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl"
        style={{
          animation: "float2 25s ease-in-out infinite",
        }}
      />
      
      {/* Orb 3 */}
      <div
        className="absolute bottom-20 left-1/4 h-96 w-96 rounded-full bg-pink-500/30 blur-3xl"
        style={{
          animation: "float3 22s ease-in-out infinite",
        }}
      />

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(100px, 50px) scale(1.2); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 100px) scale(1.3); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-100px, -50px) scale(1.1); }
        }
      `}</style>
    </div>
  );
}

