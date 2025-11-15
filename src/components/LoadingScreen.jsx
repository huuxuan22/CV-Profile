import React from "react";
import { Code } from "lucide-react";

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop với blur effect */}
            <div className="fixed inset-0 bg-black/60 backdrop-blur-md"></div>

            {/* Loading Content ở giữa */}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
                {/* Developer Icon */}
                <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-gradient-to-br from-[#2A7CB0] to-[#5DC9E4] rounded-full shadow-2xl shadow-[#5DC9E4]/50">
                        <Code className="w-12 h-12 md:w-16 md:h-16 text-white" />
                    </div>
                    {/* Pulse effect xung quanh icon */}
                    <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 bg-[#5DC9E4] rounded-full opacity-20 animate-ping"></div>
                    <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 bg-[#5DC9E4] rounded-full opacity-10 animate-pulse"></div>
                </div>

                {/* Loading Text */}
                <p
                    className="text-white text-lg font-medium"
                    style={{
                        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
                    }}
                >
                    Loading...
                </p>
            </div>

            <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        @keyframes dot1 {
          0%, 33% {
            opacity: 0.3;
            transform: translateX(0);
          }
          16%, 33% {
            opacity: 1;
            transform: translateX(4px);
          }
          34%, 100% {
            opacity: 0.3;
            transform: translateX(0);
          }
        }
        @keyframes dot2 {
          0%, 33% {
            opacity: 0.3;
            transform: translateX(0);
          }
          33%, 50% {
            opacity: 1;
            transform: translateX(4px);
          }
          51%, 100% {
            opacity: 0.3;
            transform: translateX(0);
          }
        }
        @keyframes dot3 {
          0%, 50% {
            opacity: 0.3;
            transform: translateX(0);
          }
          50%, 66% {
            opacity: 1;
            transform: translateX(4px);
          }
          67%, 100% {
            opacity: 0.3;
            transform: translateX(0);
          }
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
        </div>
    );
};

export default LoadingScreen;
