import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const InteractiveHoverButton = React.forwardRef(
  ({ text = "Read More", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative w-48 cursor-pointer overflow-hidden rounded-full border border-gray-300 bg-background p-2 text-center font-mono font-medium",
          className
        )}
        {...props}
      >
        {/* Initial text */}
        <span className="inline-block translate-x-1 transition-transform duration-700 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>

        {/* Hover text */}
        <div
          className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-700 group-hover:-translate-x-1 group-hover:opacity-100"
          style={{ color: "#FFFFFF" }} // White hover text
        >
          <span>{text}</span>
          <ArrowRight />
        </div>

        {/* Hover background */}
        <div
          className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg transition-all duration-700 group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:scale-[1.8]"
          style={{ backgroundColor: "#143963" }} // Blue hover background
        ></div>
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;
